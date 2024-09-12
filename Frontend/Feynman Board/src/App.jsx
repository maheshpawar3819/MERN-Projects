import React from 'react'
import { Outlet } from 'react-router-dom';
import AddTopic from './Component/AddTopic';

const App = () => {
  return (
    <div>
      <AddTopic/>
      <Outlet/>
    </div>
  )
}

export default App;