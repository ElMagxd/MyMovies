import React, { Component } from 'react';
import {Row, Col, ButtonGroup, Button} from 'react-bootstrap';

class Pagination extends Component {
   scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
   }
   render() {
      const {page, onPageChange} = this.props;
      return (
         <>
            <Row className="mb-4">
               <Col className="d-flex justify-content-center">
                  <ButtonGroup aria-label="Pagination" className="mx-0">
                     {page !== 1 &&
                        <Button 
                           variant="light" 
                           onClick={() => {
                              onPageChange(1);
                              this.scrollToTop();
                           }}
                        >
                           To first
                        </Button>
                     }
                     

                     <Button 
                        variant="light" 
                        disabled={page === 1}
                        onClick={() => {
                           onPageChange(page - 1);
                           this.scrollToTop();
                        }}
                     >
                        Previous
                     </Button>

                     {page - 2 > 0 && 
                        <Button 
                           variant="light" 
                           onClick={() => {
                              onPageChange(page - 2);
                              this.scrollToTop();
                           }}
                        >
                           {page - 2}
                        </Button>
                     } 

                     {page - 1 > 0 &&
                        <Button 
                           variant="light" 
                           onClick={() => {
                              onPageChange(page - 1);
                              this.scrollToTop();
                           }}
                        >
                           {page - 1}
                        </Button>
                     }
                     
                     <Button 
                        variant="light" 
                        disabled={true}
                     >
                        {page}
                     </Button>

                     <Button 
                        variant="light" 
                        onClick={() => {
                           onPageChange(page + 1);
                           this.scrollToTop();
                        }}
                     >
                        {page + 1}
                     </Button>

                     <Button 
                        variant="light" 
                        onClick={() => {
                           onPageChange(page + 2);
                           this.scrollToTop();
                        }}
                     >
                        {page + 2}
                     </Button>

                     <Button 
                        variant="light" 
                        onClick={() => {
                           onPageChange(page + 1);
                           this.scrollToTop();
                        }}
                     >
                        Next
                     </Button>
                  </ButtonGroup>
               </Col>
            </Row>
         </>
      );
   }
}

export default Pagination;