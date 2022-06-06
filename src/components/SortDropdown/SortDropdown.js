import React from 'react';
import PropTypes from 'prop-types';

const SortDropdown = ({dropdownOptions, id, name, selectionChanged}) => {
  return (
    <select name={name} id={id} onChange={selectionChanged}>
      {dropdownOptions.map(dropdownOption => (
        <option key={`sort-dropdown-option-${dropdownOption}`} value={dropdownOption}>{dropdownOption}</option>))}
    </select>);
};

SortDropdown.propTypes = {
  dropdownOptions: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string,
  name: PropTypes.string
};

export default SortDropdown;
