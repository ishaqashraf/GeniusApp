import WorkshopDetail from './WorkshopDetail';
import {WorkshopContextProvider} from '../../../context/workshop';

const WorkshopDetailScreen = () => (
  <WorkshopContextProvider>
    <WorkshopDetail />
  </WorkshopContextProvider>
);

export default WorkshopDetailScreen;
