import React, { useMemo, useState } from 'react';

import WorkshopContext, { initialState } from './WorkshopContext';

const WorkshopContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const context = useMemo(() => ({ ...state, setState }), [state, setState]);
  return <WorkshopContext.Provider value={context}>{children}</WorkshopContext.Provider>;
};

export default WorkshopContextProvider;
