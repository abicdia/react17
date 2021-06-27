import React, { useState } from 'react';

interface AppStateValue {
  usename: string;
  shoppingCar: { item: { id: number; name: string }[] };
}

const defaultname = {
  usename: 'aaa',
  shoppingCar: { item: [] },
};

export const appContext = React.createContext(defaultname);

export const appSetStateContex =
  React.createContext<
    | React.Dispatch<
        React.SetStateAction<{
          usename: string;
          shoppingCar: {
            item: never[];
          };
        }>
      >
    | undefined
  >(undefined);

export const AppStateProvider: React.FC = (props) => {
  const [state, setState] = useState(defaultname);

  return (
    <appContext.Provider value={state}>
      <appSetStateContex.Provider value={setState}>{props.children}</appSetStateContex.Provider>
    </appContext.Provider>
  );
};
