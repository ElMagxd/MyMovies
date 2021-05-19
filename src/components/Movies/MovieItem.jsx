import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

class MovieItem extends Component {
   render() {
      const {movie, genres} = this.props;
      const genreId = movie.genre_ids[0];
      let currentGenre;
      for (const type of genres) {
         if(type.id === genreId) {
            currentGenre = type.name;
         }
      }
      return (
         <div>
            <Card className="mb-4">
               <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} />
               <Card.Body>
                  <Card.Title>
                     {movie.title}
                  </Card.Title>
                  <Card.Text>
                     Rate: {movie.vote_average}
                  </Card.Text>
               </Card.Body>
               <Card.Footer>
                  {movie.release_date.substring(0,4)}, {currentGenre}
               </Card.Footer>
            </Card>
         </div>
      );
   }
}

export default MovieItem;