import React from 'react'

export default function FormFieldInput(props) {
  return (
    <div className="form-field">
      { props.type !== 'button' ? 
        <label for={props.id}>{props.title}</label>
        : ''
      }
      <input type={props.type} name={props.id} id={props.id} value={props.value} />
    </div>
  )
}
