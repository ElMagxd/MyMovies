import HomePage from './components/Pages/HomePage';
import MoviePage from './components/Pages/MoviePage'
import E404 from './components/Pages/E404'
import Header from './components/Header'
import Footer from './components/Footer'
import {Route, Switch, Redirect} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header/>

      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact
        />
        <Route
          path="/movies/:id"
          component={MoviePage}
        />
        <Redirect from="/movies" to="/" />
        <Route
          path="*"
          component={E404}
        />
      </Switch>

      <Footer />
    </>
  );
};

export default App;