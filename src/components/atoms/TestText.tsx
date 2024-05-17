import React, { memo, ReactNode, ReactElement, FC } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';

export const CustomTestText = memo(() => {
  
  console.log('コンポネントテスト')
  
  return (
    <>
      <p>テスト</p>
    </>
  );
});
