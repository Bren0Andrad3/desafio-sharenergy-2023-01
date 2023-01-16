import React from 'react'
import Cat from "../components/CatHttp/CatHttp"
import Navbar from '../components/Navbar/Navbar'

 const CatHttp = () => {
  return (
    <div>
    <div className='container' ><Navbar /></div>
    <div> <Cat /></div>
    </div>
  )
}

export default CatHttp
