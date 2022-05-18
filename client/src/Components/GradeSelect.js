import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'v0', label: 'V0' },
  { value: 'v1', label: 'V1' },
  { value: 'v2', label: 'V2' }
]

const GradeSelectComponent = () => (
  <Select options={options} />
);

export default GradeSelectComponent;