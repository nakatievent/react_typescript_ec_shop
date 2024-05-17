import React from 'react';
import Link from '@mui/material/Link';

type Props = {
  color?  : any;
  href?   : string;
  variant?: 'body1'
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
  children: React.ReactNode;
}

const CustomLink: React.FC<Props> = React.memo(({ color = 'primary', href, variant, children }) => {
  return (
    <Link color={color} href={href} variant={variant}>
      {children}
    </Link>
  );
});

export { CustomLink }
