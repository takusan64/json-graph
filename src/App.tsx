import React from 'react'
import TopBar from './components/TopBar'
import Graph from './components/Graph'
import { DataProvider } from './utils/data'

const App: React.FC = () => {
  return(
    <>
      <DataProvider>
        <TopBar />
        <Graph />
      </DataProvider>
    </>
  )
}

export default App