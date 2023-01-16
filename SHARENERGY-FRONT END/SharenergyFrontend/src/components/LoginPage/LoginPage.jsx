import React from 'react'
import './LoginPage.scss'

const LoginPage = ({children}) => {
   return (
      <section className="login-page">
         {children}
      </section>
   )
}

export default LoginPage
