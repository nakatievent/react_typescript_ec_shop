import React from 'react'
import TextField from '@mui/material/TextField'

type Props = {
  margin?      : 'dense' 
  | 'normal'
  | 'none'
  required?    : boolean
  fullWidth?   : boolean
  id?          : string
  label?       : string
  name?        : string
  autoComplete?: string
  value?       : any
  type?        : string
  autoFocus?   : boolean
  onChange?    : React.ChangeEventHandler<HTMLInputElement>
}

// export const MemoList: FC<Props> = props => {
export const CustomTextField: React.FC<Props> = props => {
  const { margin, required, fullWidth, id, label, name, autoComplete, value, type, autoFocus, onChange } = props
  
  return (
    <TextField
      margin={margin}
      required={required}
      fullWidth={fullWidth}
      id={id}
      label={label}
      name={name}
      autoComplete={autoComplete}
      value={value}
      type={type}
      autoFocus={autoFocus}
      onChange={onChange}
    />
  )
}
