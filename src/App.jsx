import React, { Component } from 'react';
import MovieList from './components/Movies/MovieList';
import Filter from './components/Filter';
import {Container, Row, Col} from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filters: {
        year: '2020'
      }
    }
  }

  onChangeFilters = (event) => {
    const newFilters = {
      ...this.state.filters,
      [event.target.name]: event.target.value
    };

    this.setState(prevState => ({
      filters: newFilters
    }))
  }

  render() {
    const {filters} = this.state;
    return (
      <div className="App">
        <Container className="mt-4">
          <Row>
            <Col>
              <Filter filters={filters} onChangeFilters={this.onChangeFilters}/>
            </Col>
            <Col xs={9}>
              <MovieList filters={filters} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
