import React from 'react';
import MovieItem from './MovieItem';
import Pagintaion from './Pagination';
import {Row, Col} from 'react-bootstrap';

class MovieList extends React.Component {
   constructor() {
      super();

      this.state = {
         movies: [],
         genres: [],
         page: 1,
         totalPages: 1
      }
   }

   scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
   }

   async fetchMovies(filters, page)  {
      const {year, sort} = filters;
      const requestLink = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_3_API_KEY}&sort_by=${sort}&page=${page}&year=${year}`; 
      const response = await fetch(requestLink);
      const data = await response.json();
      this.setState({
         movies: data.results,
         totalPages: data.total_pages,
      });
   }

   onPageChange = page => event => {
      this.setState(prevState => {
         return {
            ...prevState,
            page
         }
      });
      this.scrollToTop();
   }

   async componentDidMount() {
      this.fetchMovies(this.props.filters)

      const genresLink = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_3_API_KEY}`
      const response = await fetch(genresLink);
      const data = await response.json();
      this.setState(prevState => { 
         return {
            ...prevState,
            genres: data.genres
         }
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
               {movies && movies.map(movie => (
                  <Col xs={6} key={movie.id}>
                     <MovieItem 
                        movie={movie} 
                        genres={genres}
                     />
                  </Col>
               ))}
            </Row>

            <Pagintaion 
               page={page}
               onPageChange={this.onPageChange}
               totalPages={this.state.totalPages}
            />
         </>
      );
   }
}

export default MovieList;
