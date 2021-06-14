import React, { useEffect, useState } from 'react';
import {Row, Col} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const MoviePage = props => {
   const [movie, setMovie] = useState();
   const {id} = useParams();
   const imagePath = movie?.poster_path || movie?.backdrop_path;

   const fetchMovies = async (id) => {
      const requestLink = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_3_API_KEY}`; 
      const response = await fetch(requestLink);
      const data = await response.json();
      setMovie(data);
   }

   useEffect(() => {
      fetchMovies(id);
   }, [id]);

   // console.log(movie)

   return (
      <> 
         <h1 className='title mb-3'>
            {movie?.title}
         </h1>
         <Row>
            <Col xs={4}>
               <div>
                  <img 
                     src={
                        imagePath ? `https://image.tmdb.org/t/p/w500${imagePath}` : 'https://www.sion-consulting.com/wp-content/themes/consultix/images/no-image-found-360x250.png'
                     }  
                     alt={movie?.title + ' poster'} 
                  />
               </div>
            </Col>

            <Col xs={8}>
               <ul className="movie-data">
                  <li className="movie-data__item">
                     <span className="movie-data__item-title">
                        Rate
                     </span>
                     <span className="movie-data__item-info">
                        {movie?.vote_average} ({movie?.vote_count} votes)
                     </span>
                  </li>
                  {movie?.tagline && <li className="movie-data__item">
                     <span className="movie-data__item-title">
                        Tagline
                     </span>
                     <span className="movie-data__item-info">
                        {`"${movie?.tagline}"`}
                     </span>
                  </li>}
                  <li className="movie-data__item">
                     <span className="movie-data__item-title">
                        Release
                     </span>
                     <span className="movie-data__item-info">
                        {movie?.release_date}
                     </span>
                  </li>
                  <li className="movie-data__item">
                     <span className="movie-data__item-title">
                        Country
                     </span>
                     <span className="movie-data__item-info">
                        {movie?.production_countries.map((country, index) => index !== movie?.production_countries.length - 1 ? `${country.name}, ` : `${country.name}`)}
                     </span>
                  </li>
                  <li className="movie-data__item">
                     <span className="movie-data__item-title">
                        Genres
                     </span>
                     <span className="movie-data__item-info">
                        {movie?.genres.map((genre, index) => index !== movie?.genres.length - 1 ? `${genre.name}, ` : `${genre.name}`)}
                     </span>
                  </li>
               </ul>
               <h3>Overview</h3>
               <p>
                  {movie?.overview}
               </p>
            </Col>
         </Row>
      </>
   );
};

export default MoviePage;