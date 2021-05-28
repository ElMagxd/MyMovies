import React, { Component } from 'react';
import SortSelect from './SortSelect';
import {Card, Form, Button} from 'react-bootstrap';

const sortByOptions = [
   {
      value: 'popularity.desc',
      label: 'Popularity: descending'
   },
   {
      label: 'Popularity: ascending',
      value: 'popularity.asc'
   },
   {
      label: 'Rate: descending',
      value: 'vote_average.desc'
   },
   {
      label: 'Rate: ascending',
      value: 'vote_average.asc'
   },
];

const yearOptions = [];
for(let i = 2021; i > 1900; i-- ) {
   yearOptions.push({
      label: i,
      value: i
   })
}

class filter extends Component {
   render() {
      const {filters: {year, sort}, onChangeFilters, resetFilter} = this.props;

      return (
         <>
            <Card style={{width: "100%"}}>
               <Card.Header>
                  Fiters
               </Card.Header>
               <Card.Body>
                  <Form.Group>
                     <SortSelect 
                        value={year} 
                        onChange={onChangeFilters}
                        options={yearOptions}
                        name={'year'}
                        label={'Year:'}
                     />
                     <SortSelect 
                        value={sort} 
                        onChange={onChangeFilters}
                        options={sortByOptions}
                        name={'sort'}
                        label={'Sort by:'}
                     />
                  </Form.Group>
               </Card.Body>
               <Card.Footer>
                  <Button 
                     variant="secondary" 
                     block
                     onClick={resetFilter}
                  >
                     Reset filter
                  </Button>
               </Card.Footer>
            </Card>
         </>
      );
   }
}

export default filter;