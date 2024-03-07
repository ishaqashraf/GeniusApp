import Workshops from './Workshops';
import {WorkshopContextProvider} from '../../../context/workshop';

const WorkshopsScreen = () => (
  <WorkshopContextProvider>
    <Workshops />
  </WorkshopContextProvider>
);

export default WorkshopsScreen;
