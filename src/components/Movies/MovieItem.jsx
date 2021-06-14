import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

MovieItem.propTypes = {
   movie: PropTypes.object.isRequired,
   genres: PropTypes.arrayOf(PropTypes.object).isRequired
}

function MovieItem({movie, genres})  {
   const genreId = movie.genre_ids[0];
   let currentGenre;
   for (const genre of genres) {
      if(genre.id === genreId) {
         currentGenre = genre.name;
      }
   }
   const imagePath = movie.backdrop_path || movie.poster_path;

   return (
      <>
         <Card className="mb-4 movie-card">
            <div className="card__image">
            <Card.Img 
               variant="top" 
               src={
                  imagePath ? `https://image.tmdb.org/t/p/w500${imagePath}` : 'https://www.sion-consulting.com/wp-content/themes/consultix/images/no-image-found-360x250.png'
               } 
            />
            </div>
            <Card.Body>
               <Card.Title>
                  {movie.title}
               </Card.Title>
               <Card.Text>
                  Rate: {movie.vote_average}
               </Card.Text>
            </Card.Body>
            <Card.Footer>
               {movie.release_date?.substring(0,4)}, {currentGenre}
            </Card.Footer>
            <Link to={`/movies/${movie.id}`} className="movie-card__link"></Link>
         </Card>
      </>
   );
};

export default MovieItem;