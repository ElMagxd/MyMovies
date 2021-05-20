import React, { Component } from 'react';
import SortSelect from './SortSelect';
import {Card} from 'react-bootstrap';

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
      const {filters: {year, sort}, onChangeFilters} = this.props;

      return (
         <>
            <Card style={{width: "100%"}}>
            <Card.Body>
                  <Card.Title>
                     Фильтры
                  </Card.Title>
                  <div className="form-group">
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
                  </div>
                  
               </Card.Body>
            </Card>
         </>
      );
   }
}

export default filter;