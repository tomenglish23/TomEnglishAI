import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

const customStyles = {
    container: (provided) => ({
      ...provided,
      width: '300px', // Set your desired width here
    }),
};

const DDLReactSelect = () => (
    <Select options={options} styles={customStyles} />
);

export default DDLReactSelect;
