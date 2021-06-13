import React, { useState, createContext } from 'react'
import { Context as IContext } from './interface'
import data from './data'

export const DataContext = createContext({
  context: data,
  setContext: (newData:IContext[]) => {},
});

export const DataProvider = ({ children }: any) => {
  const [context, setContext] = useState(data)
  return (
    <DataContext.Provider value={{context, setContext}}>
      {children}
    </DataContext.Provider>
  );
};