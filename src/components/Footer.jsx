import {Navbar, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Footer() {
   return (
      <footer className="footer">
         <Navbar bg="dark" variant="dark">
            <Container style={{padding: "0 15px"}}>
               <Link to="/MyMovies/" className="navbar-brand">
                  MyMovies
               </Link>
               <Navbar.Text>
                  No rights reserved
               </Navbar.Text>
            </Container>
         </Navbar>
      </footer>
   );
}

export default Footer;
