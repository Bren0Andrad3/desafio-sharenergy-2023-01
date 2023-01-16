import React from "react";
import ButtonSignUp from "../ButtonSignUp/ButtonSignUp";
import ButtonSocialMedia from "../ButtonSocialMedia/ButtonSocialMedia";
import "./Form.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./input.scss";
import axios from "axios";

const Form = () => {
  const navigate = useNavigate();

  const [username, setusername] = useState();
  const [password, setPassword] = useState();

  const auth = async (e) => {
    e.preventDefault();

    const post = { username, password };
    await axios
      .post("http://localhost:5000/customers/authenticate", post)
      .then((res) => {
        localStorage.setItem("token", "Bearer " + res.data.token);
        console.log("token", res.data.token);
        navigate("/RandomUser");
      })
      .catch((err) => {
        alert("login invalido !");
        console.log(err);
      });

    //console.log(Username, Senha);
  };
  return (
    <form className="form" onSubmit={(e) => auth(e)}>
      <h2>Olá, somos a SHARENERGY!</h2>

      <p className="welcome-text">Economize com a Energia Solar!</p>

      <div className="input">
        <label>Username</label>
        <input type="text" onChange={(e) => setusername(e.target.value)} />
      </div>
      <div className="input">
        <label>Senha</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>

      <ButtonSignUp />

      <p className="sign-up-text">ou faça login com outra conta</p>

      <div className="buttons-social-media">
        <ButtonSocialMedia
          icon={"logos:facebook"}
          button_name={"ENTRAR COM FACEBOOK"}
        />
        <ButtonSocialMedia
          icon={"flat-color-icons:google"}
          button_name={"ENTRAR COM GOOGLE"}
        />
      </div>

      <p className="sign-in-text">
        Não possui uma conta? <span>Cadastre-se</span>
      </p>
    </form>
  );
};

export default Form;
