import {Row, Col, ButtonGroup, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Pagination = ({page, onPageChange, totalPages}) => {
   return (
      <>
         <Row className="mb-4">
            <Col className="d-flex justify-content-center">
               <ButtonGroup aria-label="Pagination" className="mx-0">
                  {page !== 1 &&
                     <Button 
                        variant="light" 
                        onClick={onPageChange(1)}
                     >
                        {"<<"}
                     </Button>
                  }
                  
                  <Button 
                     variant="light" 
                     disabled={page === 1}
                     onClick={onPageChange(page - 1)}
                  >
                     Previous
                  </Button>

                  {page - 2 > 0 && 
                     <Button 
                        variant="light" 
                        onClick={onPageChange(page - 2)}
                     >
                        {page - 2}
                     </Button>
                  } 

                  {page - 1 > 0 &&
                     <Button 
                        variant="light" 
                        onClick={onPageChange(page - 1)}
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

                  { page !== totalPages && 
                     <Button 
                        variant="light" 
                        onClick={onPageChange(page + 1)}
                     >
                        {page + 1}
                     </Button>
                  }

                  { page !== totalPages && page !== totalPages - 1 &&
                     <Button 
                        variant="light" 
                        onClick={onPageChange(page + 2)}
                     >
                        {page + 2}
                     </Button>
                  }

                  { page !== totalPages &&
                     <Button 
                        variant="light" 
                        onClick={onPageChange(page + 1)}
                     >
                        Next
                     </Button>
                  }

                  {  page !== totalPages &&
                     <Button 
                        variant="light" 
                        onClick={onPageChange(totalPages)}
                     >
                        {'>>'}
                     </Button>
                  }

               </ButtonGroup>
            </Col>
         </Row>
      </>
   );
};

Pagination.propTypes = {
   page: PropTypes.number.isRequired,
   totalPages: PropTypes.number.isRequired,
   onPageChange: PropTypes.func.isRequired
};

export default Pagination;

