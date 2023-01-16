import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomerRow from "./CustomerRow";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axiosConfig from "../../axios/config"

function Customer() {
  const navigate = useNavigate();
  const [stateCustomer, setCustomerState] = useState([]);

  

  useEffect(() => {
    getCustomer();
  }, []);

  const getCustomer = () => {
    console.log(axiosConfig);
    axios
      .get("http://localhost:5000/customers", axiosConfig)
      .then((data) => {
        console.log(axiosConfig);
        let customer = data.data;
        setCustomerState(
          customer.map((d) => {
            return {
              select: false,
              id: d._id,
              name: d.name,
              email: d.email,
              telefone: d.telefone,
              endereco: d.endereco,
              cpf: d.cpf,
            };
          })
        );
      })
      .catch((err) => [navigate("/"), alert("Sua sessão foi expirada ! ")]);
  };

  const deleteCustomerByIds = () => {
    let arrayids = [];
    stateCustomer.forEach((d) => {
      if (d.select) {
        arrayids.push(d.id);
      }
    });
    for (var i = 0; i < arrayids.length; i++) {
      axios.delete(
        `http://localhost:5000/customers/${arrayids[i]}`,
        axiosConfig
      );
      window.location.reload(true);
    }
  };

  return (
    <div>
      <Link to="/add">
        <button className="btn btn-primary btn-sm m-2">Add Customer</button>
      </Link>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => {
          deleteCustomerByIds();
        }}
      >
        Delete Customer
      </button>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={(e) => {
                  let value = e.target.checked;
                  setCustomerState(
                    stateCustomer.map((d) => {
                      d.select = value;
                      return d;
                    })
                  );
                }}
              />
            </th>
            <th scope="col">Id</th>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Cpf</th>
            <th scope="col">Telefone</th>
            <th scope="col">Endereço</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          <CustomerRow
            stateCustomer={stateCustomer}
            setCustomerState={setCustomerState}
          />
        </tbody>
      </table>
    </div>
  );
}

export default Customer;
