import React from 'react'
import ReactDOM from 'react-dom'
import { Field, Form } from 'react-final-form'
import { Button, MenuItem } from '@material-ui/core'
import { TextField } from '@typeghost/material-ui-final-form'

interface FormData {
  firstName?: string
  middleName?: string
  lastName?: string
}

const Demo = () => {
  const validate = (values: FormData) => {
    const errors: { [key in keyof FormData]: string } = {}
    if (values.firstName == null) errors.firstName = 'first name is required.'
    if (values.middleName == null) errors.middleName = 'middle name is required.'
    if (values.lastName == null) errors.lastName = 'last name is required.'
    return errors
  }

  const options = [
    { value: "value-1", label: "label-1" },
    { value: "value-2", label: "label-2" }
  ]

  return (
    <Form validate={validate} onSubmit={(values) => alert(JSON.stringify(values, null, 2))} render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field name="firstName" component={TextField} TextFieldProps={
          {
            label: 'first name',
            InputLabelProps: {
              shrink: true,
            },
          }
        } />

        <Field name="middleName" component={TextField} TextFieldProps={
          {
            label: 'middle name',
            placeholder: 'placeholder',
          }
        } />

        <Field name="lastName" component={TextField} TextFieldProps={
          {
            label: 'last name',
            placeholder: 'placeholder',
            helperText: 'helper text.',
          }
        } />

        <Field name="opt" component={TextField} TextFieldProps={
          {
            select: true,
            label: 'opt',
            fullWidth: true
          }
        }>
          {options.map((o, i) => (
            <MenuItem key={i} value={o.value}>
              {o.label}
            </MenuItem>
          ))}
        </Field>

        <Button type="submit" size="medium" variant="contained" color="primary">
          Submit
        </Button>
      </form >
    )} />
  )
}

ReactDOM.render(
  <Demo />,
  window.document.getElementById('root'),
)
