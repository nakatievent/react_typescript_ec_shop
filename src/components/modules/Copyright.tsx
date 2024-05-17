import { FC, memo } from 'react';
import { SxProps } from '@mui/system';
import { CustomTypography } from '../atoms/Typography';
import { CustomLink } from '../atoms/Link';

type Props = {
  color?  : any;
  src?    : string
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
  align?  : 'center'
  | 'inherit'
  | 'justify'
  | 'left'
  | 'right'
  sx?     : SxProps
  // children: React.RectNode;
}

export const Copyright: FC<Props> = memo(props => {
  const { color, variant, align, sx } = props
  
  return (
    <CustomTypography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <CustomLink color="inherit" href="https://mui.com/">
        Your Website
      </CustomLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </CustomTypography>
  );
});
