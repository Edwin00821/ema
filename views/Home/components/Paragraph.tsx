interface Props {
  title: string;
}
const Paragraph = ({ title }: Props) => {
  return (
    <p className='w-full font-normal text-gray-700 dark:text-gray-400'>
      {title}
    </p>
  );
};

export default Paragraph;
