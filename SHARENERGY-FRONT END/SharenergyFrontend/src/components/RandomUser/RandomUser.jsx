import React, { useState, useEffect } from "react";
import axios from "axios";
import UserRow from "./RandomUserRow";
import "./RandomUser.css";
import axiosConfig from "../../axios/config";
import { useNavigate } from "react-router-dom";

const UserRandom = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [usersPerPage, setUsersPerPage] = useState(5);
  const [CurrentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(users.length / usersPerPage);
  const startIndex = CurrentPage * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const CurrentUsers = users.slice(startIndex, endIndex);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/RandomUser",
        axiosConfig
      );

      const data = response.data;
      console.log(data);
      setUsers(data);
      console.log();
    } catch (error) {
      console.log(error);
      alert("Sua sessão foi expirada ! ")
      navigate("/");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Foto</th>
            <th scope="col">Nome</th>
            <th scope="col">Usuário</th>
            <th scope="col">Email</th>
            <th scope="col">Idade</th>
          </tr>
        </thead>
        <tbody>
          <UserRow users={CurrentUsers} />
        </tbody>
      </table>
      <div className="inverter">
        {Array.from(Array(pages), (user, index) => {
          return (
            <button
              className="pagination"
              value={index}
              onClick={(e) => setCurrentPage(Number(e.target.value))}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default UserRandom;
