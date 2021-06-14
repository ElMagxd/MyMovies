import React from 'react';
import PropTypes from 'prop-types';

SortSelect.propTypes = {
   value: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   options: PropTypes.arrayOf(PropTypes.object).isRequired,
   name: PropTypes.string.isRequired,
};

function SortSelect({value, onChange, options, name, label}) {
   return (
      <>
         {label && 
            <label htmlFor={name}>
               {label}
            </label>
         }
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

export default SortSelect;