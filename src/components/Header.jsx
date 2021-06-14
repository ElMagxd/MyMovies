import React, {useState} from 'react';
import {Navbar, Container, Form, FormControl, Button} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';

const Header = () => {
   const [searchInput, setSearchInput] = useState('');
   const [redirect, setRedirect] = useState(false);
   
   const searchFormHandler = event => {
      event.preventDefault();
      setRedirect(true);
   }

   const searchInputHandler = event => {
      setRedirect(false);
      setSearchInput(event.target.value);
   }

   return (
      <header className="header">
         {redirect && 
            <Redirect
               to={{
                  pathname: "/search",
                  search: `?q=${searchInput}`,
               }}
            />
         }
         <Navbar bg="dark" variant="dark">
            <Container style={{padding: "0 15px"}}>
               <Link to="/" className="navbar-brand">
                  MyMovies
               </Link>

               {/* <Nav className="mr-auto">
                  <NavLink exact to="/" className="nav-link">
                     Home
                  </NavLink>
               </Nav> */}

               <Form inline onSubmit={searchFormHandler}>
                  <FormControl 
                     type="text" 
                     placeholder="Search" 
                     className="mr-sm-2" 
                     value={searchInput}
                     onChange={searchInputHandler}
                  />
                  <Button type="submit" variant="secondary">Search</Button>
               </Form>

               {/* TODO: Authorization
               <Button variant="light">
                  Login
               </Button> */}
            </Container>
         </Navbar>
      </header>
   );
}

export default Header;

