import React from 'react'
import TopBar from './components/TopBar'
import Graph from './components/Graph'
import Copyright from './components/Copyright'
import { DataProvider } from './utils/context'

const App: React.FC = () => {
  return(
    <>
      <DataProvider>
        <TopBar />
        <Graph />
        <Copyright />
      </DataProvider>
    </>
  )
}

export default App