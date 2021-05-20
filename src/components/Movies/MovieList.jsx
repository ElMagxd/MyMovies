import React, { Component } from 'react';
import MovieItem from './MovieItem';
import Pagintaion from './Pagination';
import {Row, Col} from 'react-bootstrap';

class MovieList extends Component {
   constructor() {
      super();

      this.state = {
         movies: [],
         genres: [],
         page: 1
      }
   }

   fetchMovies = (filters, page) => {
      const {year, sort} = filters;
      const requestLink = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_3_API_KEY}&sort_by=${sort}&page=${page}&year=${year}`; 
      fetch(requestLink)
         .then(response => response.json())
         .then(data => {
            this.setState({
               movies: data.results,
            });
         });
   }

   onPageChange = page => {
      this.setState({
        page: page
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

   componentDidUpdate(prevProps, prevState) {
      if (
         this.props.filters.year !== prevProps.filters.year ||
         this.props.filters.sort !== prevProps.filters.sort
      ) {
         this.onPageChange(1);
         this.fetchMovies(this.props.filters, 1);
      }

      if (this.state.page !== prevState.page) {
         this.fetchMovies(this.props.filters, this.state.page);
      }
   }

   render() {
      const {movies, genres, page} = this.state;

      return (
         <>
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
            <Pagintaion 
               page={page}
               onPageChange={this.onPageChange}
            />
         </>
      );
   }
}

export default MovieList;