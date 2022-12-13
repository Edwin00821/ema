import { FC, useEffect, useState } from 'react';

import { RiArrowDownSLine } from 'react-icons/ri';
import { ShowTablesService } from 'services';

const SearchResultsAdmin: FC = () => {
  const [tables, setTables] = useState(0);
  useEffect(() => {
    ShowTablesService.getAll().then((response) => {
      if (response.data) setTables(response.data.length);
    });
  }, []);
  return (
    <div className='mb-8 flex items-center justify-between'>
      <p className='text-gray-500'>
        We've found{' '}
        <span className='font-bold text-secondary-light'>{tables}</span> tables!
      </p>
      <p className='flex items-center gap-2'>
        Sort by:{' '}
        <span className='font-bold text-secondary-light hover:cursor-pointer'>
          Date
        </span>{' '}
        <RiArrowDownSLine />
      </p>
    </div>
  );
};

export default SearchResultsAdmin;
