import { Chips } from './';
interface Props {
  chips: string[];
}
const ListOfChips = ({ chips }: Props) => {
  return (
    <>
      <div className='mb-20 flex flex-wrap items-center gap-4'>
        {chips.map((title) => (
          <Chips title={title} key={title} />
        ))}
        <button className='ml-4 text-gray-500'>Clear All</button>
      </div>
    </>
  );
};

export default ListOfChips;
