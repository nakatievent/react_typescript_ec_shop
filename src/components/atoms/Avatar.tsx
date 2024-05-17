import React from 'react';
import Avatar from '@mui/material/Avatar';
import { SxProps } from '@mui/system';

type Props = {
  alt?      : string
  variant?  : 'circular'
  | 'rounded'
  | 'square'
  src?      : string
  sx?       : SxProps
  children  : React.ReactNode;
}

export const CustomAvatar: React.FC<Props> = React.memo(props => {
  const { alt, variant, src, sx, children } = props
  
  return (
    <Avatar
      alt={alt}
      variant={variant}
      src={src}
      sx={sx}
    >
      {children}
    </Avatar>
  );
});
