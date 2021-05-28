import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';


export default function Header(props) {
   return (
      <header className="header">
         <Navbar bg="dark" variant="dark">
            <Container style={{padding: "0 15px"}}>
               <Link to="/" className="navbar-brand">
                  MyMovies
               </Link>

               <Nav className="mr-auto">
                  <NavLink exact to="/" className="nav-link">
                     Home
                  </NavLink>
               </Nav>

               {/* TODO: Search
               <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-info">Search</Button>
               </Form>*/}

               {/* TODO: Authorization
               <Button variant="light">
                  Login
               </Button> */}
            </Container>
         </Navbar>
      </header>
   );
}

