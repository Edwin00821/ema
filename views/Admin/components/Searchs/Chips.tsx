import { RiCloseLine } from 'react-icons/ri';
interface Props {
  title: string;
}
const Chips = ({ title }: Props) => {
  return (
    <span className='flex items-center gap-4 rounded-full bg-white py-2 pl-4 pr-6'>
      <button className='rounded-full bg-secondary-light p-1 text-xs text-primary'>
        <RiCloseLine />
      </button>{' '}
      <span className='text-gray-500'>{title}</span>
    </span>
  );
};

export default Chips;
