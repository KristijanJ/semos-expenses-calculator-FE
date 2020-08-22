import React from 'react'

export default function FormFieldInput(props) {
  return (
    <div className="form-field">
      <label for={props.id}>{props.title}</label>
      <select name={props.id} id={props.id}>
        <option>Macedonia</option>
      </select>
    </div>
  )
}
