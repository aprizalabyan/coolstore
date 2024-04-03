import React from 'react'
import Navbar from '../components/navigation/Navbar'

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>
        { children }
      </div>
    </div>
  )
}

export default HomeLayout