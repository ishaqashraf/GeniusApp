import {useContext, useMemo} from 'react';
import {WorkshopContext} from '../context/workshop';
import DATA from '../dataSource/getAllWorkshops.json';

const useWorkshop = () => {
  const context = useContext(WorkshopContext);

  const setState = context.setState;

  const methods = useMemo(
    () => ({
      getAllWorkshops: async () => {
        setState(ctx => ({...ctx, loading: true}));
        setState(ctx => ({
          ...ctx,
          workshops: DATA,
          loading: false,
        }));
      },

      clearState() {
        setState({
          workshops: [],
          loading: false,
        });
      },
    }),
    [setState],
  );

  return useMemo(
    () => ({
      ...context,
      ...methods,
    }),
    [context, methods],
  );
};

export default useWorkshop;
