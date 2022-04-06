import HomePage from './components/Pages/HomePage';
import MoviePage from './components/Pages/MoviePage'
import E404 from './components/Pages/E404'
import Header from './components/Header'
import Footer from './components/Footer'
import {Route, Switch, Redirect} from 'react-router-dom'
import SearchResult from './components/Pages/SearchResult';
import {Container} from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Header/>

      <main className="main py-4">
        <Container>
          <Switch>
            <Route
              path="/MyMovies/"
              component={HomePage}
              exact
            />
            <Route
              path="/MyMovies/search"
              component={SearchResult}
            />
            <Route
              path="/MyMovies/movies/:id"
              component={MoviePage}
            />
            <Redirect from="/MyMovies/movies" to="/MyMovies/" />
            <Route
              path="*"
              component={E404}
            />
          </Switch>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default App;
