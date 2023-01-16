import React from 'react'
import RUser from '../components/RandomUser/RandomUser'
import Navbar from '../components/Navbar/Navbar'

 const RandomUser = () => {
  return (
    <div>
    <div className='container' ><Navbar /></div>
    <div> <RUser/> </div>
    </div>
  )
}
export default RandomUser
