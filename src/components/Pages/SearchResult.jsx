import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Row, Col} from 'react-bootstrap';
import Pagination from "../Movies/Pagination"
import MovieItem from "../Movies/MovieItem"

const SearchResult = () => {
   const [searchResult, setSearchResult] = useState([]);
   const [genres, setGenres] = useState([]);
   const [page, setPage] = useState(1);
   const [totalPages, setTotalPages] = useState(1);
   const url = new URL(window.location.href).searchParams.get('q')

   async function fetchSearchRequest(request, page) {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_3_API_KEY}&query=${request}&page=${page}`;

      try {
        const response = await axios.get(url);
        setSearchResult(response.data.results);
        setTotalPages(response.data.total_pages)
      } catch (error) {
        console.error(error);
      }
   }

   useEffect(() => {
      if (url) {
         fetchSearchRequest(url, page)
      }

      const fetchGenres = async () => {
         const genresLink = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_3_API_KEY}`
         const response = await fetch(genresLink);
         const data = await response.json();
         setGenres(data.genres);
      }
      fetchGenres()
   }, [url, page]);

   const onPageChange = page => event => {
      setPage(page)
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      });
   }

   return (
      <>
         <Row>
            {searchResult && searchResult.map(movie => (
               <Col xs={6} key={movie.id}>
                  <MovieItem 
                     movie={movie} 
                     genres={genres}
                  />
               </Col>
            ))}
         </Row>

         <Pagination 
            page={page}
            onPageChange={onPageChange}
            totalPages={totalPages}
         />
      </>
   );
};

export default SearchResult;