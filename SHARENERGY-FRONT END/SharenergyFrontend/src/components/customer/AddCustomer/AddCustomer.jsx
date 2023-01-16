import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosConfig from "../../../axios/config";

function AddCustomer(props) {
  const navigate = useNavigate();
  const submit = (e) => {
    let name = e.target[0].value;
    let username = e.target[1].value;
    let email = e.target[2].value;
    let cpf = e.target[3].value;
    let telefone = e.target[4].value;
    let endereco = e.target[5].value;
    let password = e.target[6].value;
    let data = {
      name,
      username,
      email,
      cpf,
      endereco,
      telefone,
      password,
    };
    postCustomer(data);
  };

  const postCustomer = (data) => {
    console.log(axiosConfig);
    axios
      .post("http://localhost:5000/customers", data, axiosConfig)
      .then((d) => {
        navigate("/cadastrar");
      })
      .catch((err) => [navigate("/"), alert("Sua sessão foi expirada ! ")]);
  };

  return (
    <div className="container my-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(e);
        }}
      >
        <div className="form-group">
          <label>Nome</label>
          <input type="text" className="form-control form-control-sm" />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control form-control-sm" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" className="form-control form-control-sm" />
        </div>
        <div className="form-group">
          <label>Cpf</label>
          <input type="text" className="form-control form-control-sm" />
        </div>
        <div className="form-group">
          <label>Telefone</label>
          <input type="text" className="form-control form-control-sm" />
        </div>
        <div className="form-group">
          <label>Endereço</label>
          <input type="text" className="form-control form-control-sm" />
        </div>
        <div className="form-group">
          <label>Senha</label>
          <input type="text" className="form-control form-control-sm" />
        </div>

        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddCustomer;
