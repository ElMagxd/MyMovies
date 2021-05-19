import React, { Component } from 'react';
import MovieItem from './MovieItem';
import {Row, Col} from 'react-bootstrap';

class MovieList extends Component {
   constructor() {
      super();

      this.state = {
         movies: [],
         genres: []
      }
   }

   fetchMovies = filters => {
      const {year} = filters;
      const requestLink = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_3_API_KEY}&year=${year}`; 
      fetch(requestLink)
         .then(response => {
            return response.json();
         })
         .then(data => {
            this.setState({
               movies: data.results,
            });
         });
   }

   componentDidMount() {
      this.fetchMovies(this.props.filters)

      // TODO: Genres have to be in global state
      const genresLink = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_3_API_KEY}`
      fetch(genresLink)
         .then(response => {
            return response.json();
         })
         .then(data => {
            this.setState({ 
               ...this.state,
               genres: data.genres
            });
         });
   }

   componentDidUpdate(prevProps) {
      if (this.props.filters.year !== prevProps.filters.year) {
         this.fetchMovies(this.props.filters);
      }
   }

   render() {
      const {movies, genres} = this.state;
      return (
         <div>
            <Row>
               {
                  movies.map(movie => {
                     return (
                        <Col xs={6} key={movie.id}>
                           <MovieItem movie={movie} genres={genres}/>
                        </Col>
                     )
                  })
               }
            </Row>
            {/* TODO: Pagingation */}
            <ButtonGroup aria-label="Basic example">
               <Button variant="secondary">Previous</Button>
               <Button variant="secondary">Next</Button>
            </ButtonGroup>
         </div>
      );
   }
}

export default MovieList;