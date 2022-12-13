import { Hours, Monday, Tuesday, Wednesday, Thursday, Friday } from './';
import { FC } from 'react'


const ScheduleBody: FC = () => {
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <>
      <div
        className='
      col-start-2 col-start-3 col-start-4 col-start-5 col-start-6 
      row-start-[1] row-start-[2] row-start-[3] row-start-[4] row-start-[5] 
      row-start-[6] row-start-[7] row-start-[8] row-start-[9] row-start-[10]
      row-start-[11] row-start-[12] row-start-[13] row-start-[14] row-start-[15]
      row-start-[16] '
      ></div>

      <Hours hour='07' row={1} />
      <Hours hour='08' row={2} />
      <Hours hour='09' row={3} />
      <Hours hour='10' row={4} />
      <Hours hour='11' row={5} />
      <Hours hour='12' row={6} />
      <Hours hour='13' row={7} />
      <Hours hour='14' row={8} />
      <Hours hour='15' row={9} />
      <Hours hour='16' row={10} />
      <Hours hour='17' row={11} />
      <Hours hour='18' row={12} />
      <Hours hour='19' row={13} />
      <Hours hour='20' row={14} />
      <Hours hour='21' row={15} />
      <Hours hour='22' row={16} />

      {days.map((hour, index) => (
        <Monday key={index} row={hour}>
          <p className='text-lg font-bold'>Matemáticas</p>
        </Monday>
      ))}
      {days.map((hour) => (
        <Tuesday key={hour} row={hour}>
          <p className='text-lg font-bold'></p>
        </Tuesday>
      ))}
      {days.map((hour, index) => (
        <Wednesday key={index} row={hour}>
          <p className='text-lg font-bold'></p>
        </Wednesday>
      ))}
      {days.map((hour, index) => (
        <Thursday key={index} row={hour}>
          <p className='text-lg font-bold'></p>
        </Thursday>
      ))}
      {days.map((hour, index) => (
        <Friday key={index} row={hour}>
          <p className='text-lg font-bold'></p>
        </Friday>
      ))}
    </>
  );
};

export default ScheduleBody;
