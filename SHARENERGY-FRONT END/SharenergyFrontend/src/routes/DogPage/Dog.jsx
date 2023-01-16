import React from 'react'
import DogComponent from "../../components/DogPage/DogPage"
import Navbar from '../../components/Navbar/Navbar'
import "./DogPage.css"
const Dog = () => {
  return (
    <div  >
    <div className='container' ><Navbar /></div>
    <div> <DogComponent /></div>
   
    </div>
    
  )
}

export default Dog
