import React from 'react'
import './IllustrationBox.scss'
import Svg from '../../Assets/Images/svg2.svg'

const IllustrationBox = () => {
   return (
      <div className="illustration-box">
         <img src={Svg} alt="svg" />
      </div>
   )
}

export default IllustrationBox
