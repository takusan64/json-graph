import React, { useState, createContext } from 'react'
import { data as IData } from './interface'

const items = [
  {
    "name":"Machine0001",
    "status": false
  },
  {
    "name":"Machine0002",
    "status": false
  },
  {
    "name":"Machine0003",
    "status": false
  }
]

export const DataContext = createContext({
  data: items,
  setData: (newData:IData[]) => {},
});

export const DataProvider = ({ children }: any) => {
  const [data, setData] = useState(items);
  return (
    <DataContext.Provider value={{data, setData}}>
      {children}
    </DataContext.Provider>
  );
};
