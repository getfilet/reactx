import React from 'react'
import { FieldRenderProps } from 'react-final-form'
import { TextField as MuiTextField } from '@material-ui/core'
import { TextFieldProps } from '@material-ui/core/TextField'

interface Props<FieldValue> extends FieldRenderProps<FieldValue, HTMLElement> {
    children?: React.ReactNode | React.ReactNode[]
    TextFieldProps?: TextFieldProps
}

export const TextField = <FieldValue,>({ meta, input, children, TextFieldProps }: Props<FieldValue>) => {
    const hasError = !!(meta.touched && meta.error)
    const helperText = TextFieldProps != null && TextFieldProps.helperText

    return (
        <MuiTextField
            error={hasError}
            name={input.name}
            type={input.type}
            onBlur={input.onBlur}
            onChange={input.onChange}
            onFocus={input.onFocus}
            value={input.value}
            {...TextFieldProps}
            helperText={hasError ? (`${meta.error} ${helperText}`) : helperText}
        >
            {children}
        </MuiTextField>
    )
}
