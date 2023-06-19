import React from 'react'
import { Navbar } from '../navbar'
import Allusers from './AllUsers/Allusers'

export const getusers = () => {
  return (
    <div>
        <Navbar/>
         <Allusers/>
    </div>
  )
}
