import React from 'react';
import PropTypes from 'prop-types';

class SortSelect extends React.Component {
   static propTypes = {
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired
   }

   // shouldComponentUpdate(nextProps) {
   //    if(this.props.value !== nextProps.value) {
   //       return true;
   //    }
   //    return false;
   // }

   render() {
      const {value, onChange, options, name, label} = this.props;
      return (
         <>
            <label htmlFor={name}>
               {label}
            </label>
            <select 
               className="filter__year form-control mb-3" 
               name={name}
               id={name}
               value={value} 
               onChange={onChange}
            >
               {
                  options.map((option, index) => {
                     return (
                        <option value={option.value} key={index}>
                           {option.label}
                        </option>
                     )
                  })
               }
            </select>
         </>
      );
   }
}

export default SortSelect;