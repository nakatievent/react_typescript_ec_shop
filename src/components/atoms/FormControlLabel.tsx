import React, { memo, ReactNode, ReactElement, FC } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';

type Props = {
  control: ReactElement
  label? : ReactNode
}

export const CustomFormControlLabel: FC<Props> = memo((props) => {
  const { control, label } = props
  
  console.log(5678678)
  
  return (
    <FormControlLabel
      control={control}
      label={label}
    />
  );
});
