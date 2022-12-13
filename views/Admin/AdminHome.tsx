import {
  LayoutAdmin,
  FilterTable,
  SearchResultsAdmin,
  ResultCardsAdmin,
} from './components';

const AdminHome = () => {
  return (
    <LayoutAdmin title='Dashboard' description='EMA Dashboard'>
      {/* <FilterTable />
      <SearchResultsAdmin /> */}
      <ResultCardsAdmin />
    </LayoutAdmin>
  );
};

export default AdminHome;
