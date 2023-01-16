import React from 'react'
import loginPage from "../components/LoginPage/LoginPage";
var Lg = loginPage
import Form from "../components/Form/Form";
import Ilustration from "../components/IllustrationBox/IllustrationBox";

const Login = () => {
  return (
    <div>
       <Lg>
        <Form />
        <Ilustration />
      </Lg>
    </div>
  )
}
export default Login
