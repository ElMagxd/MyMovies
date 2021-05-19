import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

class filter extends Component {
   render() {
      const years = [];
      for(let i = 2021; i > 1914; i-- ) {
         years.push(i);
      }

      const {filters: {year}, onChangeFilters} = this.props;

      return (
         <div>
            <Card style={{width: "100%"}}>
            <Card.Body>
                  <Card.Title>
                     Фильтры
                  </Card.Title>
                  <div className="form-group">
                     <label htmlFor="year">Year:</label>
                     <select 
                        className="filter__year form-control" 
                        name="year"
                        id="year" 
                        value={year} 
                        onChange={onChangeFilters}
                     >
                        {
                           years.map((year, index) => {
                              return (
                                 <option value={year} key={index}>{year}</option>
                              )
                           })
                        }
                     </select>
                  </div>
                  
               </Card.Body>
            </Card>
         </div>
      );
   }
}

export default filter;