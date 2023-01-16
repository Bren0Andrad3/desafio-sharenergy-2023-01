import React from 'react'
import './ButtonSocialMedia.scss'
import { Icon } from '@iconify/react';

const ButtonSocialMedia = ({ button_name, icon }) => {
   return (
      <button className="button-social-media">
        <Icon icon={icon} width="20" height="20" />
         {button_name}
      </button>
   )
}

export default ButtonSocialMedia
