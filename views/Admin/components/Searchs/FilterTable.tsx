import { SearchTable, SelectChips, FilterChips, ListOfChips } from '.';

const FilterTable = () => {
  return (
    <>
      <div className='mb-6 grid grid-cols-1 items-center gap-4 md:grid-cols-4'>
        <SearchTable />
        <FilterChips />
        <SelectChips />
      </div>
      <ListOfChips chips={['All', 'Active', 'Inactive']} />
    </>
  );
};

export default FilterTable;
