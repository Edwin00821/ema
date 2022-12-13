import { SideBarInformation, ContentInformation } from './Body';
import { FC } from 'react';

const InformationHome: FC = () => {
  return (
    <div className='grid-col-1 grid h-[89vh] lg:grid-cols-[18%_minmax(18%,_1fr)]'>
      <SideBarInformation />
      <ContentInformation />
    </div>
  );
};
export default InformationHome;
