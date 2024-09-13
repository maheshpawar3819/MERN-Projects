import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      Home 
    </div>
  )
}

export default Home
