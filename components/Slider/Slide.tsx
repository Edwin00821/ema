import { Box } from '@mui/material';
import React, {FC} from 'react';

interface Props {
  children: React.ReactNode;
}
const Slide: FC<Props> = ({ children }) => {
  return (
    <Box className='flex min-h-full min-w-full items-center justify-center duration-150 ease-out '>
      {children}
    </Box>
  );
};

export default Slide;
