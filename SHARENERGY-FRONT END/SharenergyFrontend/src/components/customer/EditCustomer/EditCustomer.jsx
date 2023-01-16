import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axiosConfig from "../../../axios/config";

function EditCustomer(props) {
  const navigate = useNavigate();
  const idParams = useParams();
  console.log(idParams.id);
  const [stateCust, setstateCust] = useState({});
  useEffect(() => {
    getCustomerById(idParams.id);
  }, []);
  const getCustomerById = (id) => {
    axios
      .get(`http://localhost:5000/customers/${id}`, axiosConfig)
      .then((d) => {
        let customer = d.data;
        setstateCust({
          id: customer._id,
          name: customer.name,
          email: customer.email,
          cpf: customer.cpf,
          telefone: customer.telefone,
          endereco: customer.endereco,
        });
      })
      .catch((err) => [navigate("/"), alert("Sua sessão foi expirada ! ")]);
  };
  const putCustomer = (e) => {
    console.log(stateCust);
    axios
      .put(
        `http://localhost:5000/customers/${stateCust.id}`,
        stateCust,
        axiosConfig
      )
      .then((res) => {
        navigate("/cadastrar");
      })
      .catch((err) => {
        [navigate("/"), alert("Sua sessão foi expirada ! ")]
      });
  };

  return (
    <div className="container my-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          putCustomer(e);
        }}
      >
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={stateCust.name}
            onChange={(e) => {
              let value = e.target.value;
              setstateCust({
                name: value,
                email: stateCust.email,
                id: stateCust.id,
                cpf: stateCust.cpf,
                telefone: stateCust.telefone,
                endereco: stateCust.endereco,
              });
            }}
            className="form-control form-control-sm"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            value={stateCust.email}
            onChange={(e) => {
              let value = e.target.value;
              setstateCust({
                email: value,
                name: stateCust.name,
                id: stateCust.id,
                cpf: stateCust.cpf,
                telefone: stateCust.telefone,
                endereco: stateCust.endereco,
              });
            }}
            type="text"
            className="form-control form-control-sm"
          />
        </div>
        <div className="form-group">
          <label>Cpf</label>
          <input
            onChange={(e) => {
              let value = e.target.value;
              setstateCust({
                email: stateCust.email,
                name: stateCust.name,
                id: stateCust.id,
                cpf: value,
                telefone: stateCust.telefone,
                endereco: stateCust.endereco,
              });
            }}
            value={stateCust.cpf}
            type="text"
            className="form-control form-control-sm"
          />
        </div>
        <div className="form-group">
          <label>Telefone</label>
          <input
            onChange={(e) => {
              let value = e.target.value;
              setstateCust({
                email: stateCust.email,
                name: stateCust.name,
                id: stateCust.id,
                cpf: stateCust.cpf,
                telefone: value,
                endereco: stateCust.endereco,
              });
            }}
            value={stateCust.telefone}
            type="text"
            className="form-control form-control-sm"
          />
        </div>
        <div className="form-group">
          <label>Endereço</label>
          <input
            onChange={(e) => {
              let value = e.target.value;
              setstateCust({
                email: stateCust.email,
                name: stateCust.name,
                id: stateCust.id,
                cpf: stateCust.cpf,
                telefone: stateCust.telefone,
                endereco: value,
              });
            }}
            value={stateCust.endereco}
            type="text"
            className="form-control form-control-sm"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditCustomer;
