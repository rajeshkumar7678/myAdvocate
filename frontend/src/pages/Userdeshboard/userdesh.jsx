import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import "./userdesh.css"

function userdesh(props) {
console.log(props.data)
  return (
    <div>
      <Navbar/>
      <div className='deshmain'>
        <div className='userdetails'>
          <h1>hello</h1>

        </div>
        <div className='userappointment'>
        <h1>hello</h1>
        </div>
      </div>
    </div>
  )
}

export default userdesh

