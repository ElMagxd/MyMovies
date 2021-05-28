import React, { useState } from 'react';
import MovieList from '../Movies/MovieList';
import Filter from '../Filters/Filter';
import {Container, Row, Col} from 'react-bootstrap';

const initialFilters = {
  year: '2021',
  sort: 'popularity.desc'
}

const HomePage = () => {
  const [filters, setFilters] = useState({...initialFilters});

  const onChangeFilters = event => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value
    })
  }  

  const resetFilter = () => setFilters({...initialFilters});

  return (
    <>
      <main className="main">
        <Container className="mt-4">
          <Row>

            <Col>
              <Filter 
                filters={filters} 
                onChangeFilters={onChangeFilters}
                resetFilter={resetFilter}
              />
            </Col>

            <Col xs={9}>
              <MovieList 
                filters={filters} 
              />
            </Col>

          </Row>
        </Container>
      </main>
    </>
  );
};

export default HomePage;