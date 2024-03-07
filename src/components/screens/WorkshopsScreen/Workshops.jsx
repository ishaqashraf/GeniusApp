import React, {useEffect} from 'react';
import useWorkshop from '../../../hooks/useWorkshop';
import Header from '../../atoms/Header/Header';
import WorkshopList from '../../molecules/WorkshopList/WorkshopList';
import LayoutTemplate from '../../templates/LayoutTemplate/LayoutTemplate';

const Workshops = () => {
  const {workshops, getAllWorkshops} = useWorkshop();

  useEffect(() => {
    getAllWorkshops();
  }, []);

  return (
    <LayoutTemplate>
      <Header title={'Workshops'} onRightAction={() => {}} />
      <WorkshopList workshops={workshops} />
    </LayoutTemplate>
  );
};

export default Workshops;
