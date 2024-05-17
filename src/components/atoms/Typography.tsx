import React from 'react'
import Typography from '@mui/material/Typography';
import { SxProps } from '@mui/system';

type Props = {
  variant?   : 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'inherit'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2'
  color?    : string
  noWrap?   : boolean
  align?    : 'center'
  | 'inherit'
  | 'justify'
  | 'left'
  | 'right'
  component?: React.ElementType
  sx?       : SxProps
  // mt?      : SxProps
  children  : React.ReactNode
}

export const CustomTypography: React.FC<Props> = React.memo(({ variant, color, align, noWrap, component = 'div', sx, children }) => {
  return (
    <Typography
      variant={variant}
      color={color}
      align={align}
      noWrap={noWrap}
      component={component}
      sx={sx}
    >
      {children}
    </Typography>
  );
});
