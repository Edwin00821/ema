import React, { FC } from 'react';
import { SchuduleHeader, ScheduleBody } from './components';

const StudentSchedulePage: FC = () => {
  return (
    <div className='flex h-screen flex-col'>
      <div className='grid grid-cols-6 items-center justify-center px-5 '>
        <SchuduleHeader />
      </div>
      <div className='grid h-full grid-cols-6 items-center justify-center overflow-y-scroll px-5'>
        <ScheduleBody />
      </div>
    </div>
  );
};

export default StudentSchedulePage;
