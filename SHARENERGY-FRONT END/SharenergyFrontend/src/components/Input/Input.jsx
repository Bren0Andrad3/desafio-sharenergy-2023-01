import React from 'react'
import './Input.scss'
import { Icon } from '@iconify/react';

const Input = ({type, label, icon}) => {
   
   return (
      <div className="input">
         <label>{label}</label>
         <input type={type} required/>
         <Icon icon={icon} color="#aaa" width="25" height="25" />
         
      </div>
   )
}

export default Input
