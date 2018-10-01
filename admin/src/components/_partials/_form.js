import React from 'react';

const Field = ({id, name, label, type }) => {
  return (
    <div className='field'>
      <label htmlFor={name}>{label}</label>
      <input id={id} name={name} type={type} />
    </div>
  )
}
export default Field;