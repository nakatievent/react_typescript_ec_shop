import React from 'react';
import Button from '@mui/material/Button';
import { SxProps } from '@mui/system';

type Props = {
  type?     : "submit" | "button" | "reset";
  variant?  : "text" | "outlined" | "contained";
  fullWidth?: boolean
  sx?       : SxProps
  children  : React.ReactNode;
  onClick?  : () => void;
}

export const CustomButton: React.FC<Props> = React.memo(props => {
  const { type, variant, sx, children } = props
  
  return (
    <Button
      type={type}
      fullWidth
      variant={variant}
      sx={sx}
    >
      {children}
    </Button>
  );
});
