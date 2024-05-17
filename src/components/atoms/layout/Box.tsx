import * as React from 'react';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';


type Props = {
  sx?        : SxProps
  children   : React.ReactNode
  onSubmit?  : (event: React.FormEvent<HTMLFormElement>) => void
  component? : React.ElementType
  noValidate?: boolean
}

export const CustomBox: React.FC<Props> = React.memo(props => {
  const { sx, children, onSubmit, component, noValidate  } = props
  
  if (component === "form") {
    return (
      <Box
        sx={sx}
        onSubmit={onSubmit}
        component={component}
        noValidate={noValidate}
      >
        {children}
      </Box>
    )
  }

  return (
    <Box
      sx={sx}
      component={component}
    >
      {children}
    </Box>
  )
})
