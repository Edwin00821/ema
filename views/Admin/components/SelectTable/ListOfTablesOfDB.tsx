import { TablesOfDataBase } from './';

interface Props {
  tables: Array<{
    icon?: JSX.Element;
    title: string;
    description: string;
    quantityOfRegisters: string;
    lastModification: string;
  }>;
}
const ListOfTablesOfDB = ({ tables }: Props) => {
  return (
    <div className='h-[89vh] w-full overflow-y-scroll pr-5 pb-5 dark:bg-tertiary'>
      {tables.map(
        ({ title, description, quantityOfRegisters, lastModification }) => (
          <TablesOfDataBase
            key={title}
            title={title}
            description={description}
            quantityOfRegisters={quantityOfRegisters}
            lastModification={lastModification}
          />
        )
      )}
    </div>
  );
};

export default ListOfTablesOfDB;
