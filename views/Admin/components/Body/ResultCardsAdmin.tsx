import { useEffect, useState } from 'react';
import { ListOfTablesOfDB } from '../';
import { ShowTablesService } from 'services';
import { Error404 } from 'components/Error';
import Loader from 'components/Loader';

function ResultCardsAdmin() {
  const [tables, setTables] = useState(undefined);
  useEffect(() => {
    ShowTablesService.getAll().then(({ data }) => {
      console.log({ data });

      if (data) {
        const tables = data?.map(({ Tables_in_ema, Count }: any) => {
          return {
            title: Tables_in_ema,
            description: 'Description of table 1',
            quantityOfRegisters: Count,
            lastModification: '2021-08-01',
          };
        });
        setTables(tables);
      }
      if (!data) setTables(null);
    });
  }, []);

  return (
    <>
      {tables === undefined ? (
        <Loader />
      ) : tables === null ? (
        <Error404 error='' />
      ) : (
        <ListOfTablesOfDB tables={tables} />
      )}
    </>
  );
}

export default ResultCardsAdmin;
