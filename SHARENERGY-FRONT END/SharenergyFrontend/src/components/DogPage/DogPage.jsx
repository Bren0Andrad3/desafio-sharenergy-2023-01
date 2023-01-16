import React, { useState, useEffect } from "react";
import "./DogPage.css";
import axios from "axios";
import axiosConfig from "../../axios/config"
import { useNavigate } from "react-router-dom";




const Dogs = () => {
  

  
  const navigate = useNavigate();
  const [stateDogs, setDogsState] = useState([]);
  
  const getDogsLocal = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/RandomDog`,axiosConfig
      );
      //console.log(response.data.length);
      
      setDogsState(response.data)
    } catch (error) {
      console.log(error);
      alert("Sua sessão foi expirada ! ")
      navigate("/");
    }
  };

  
  
  return (
    <div>
      <div className="Dog">
        <h2>PRESSIONE REFRESH E VISUALIZE UM DOG!</h2>
      {(console.log(stateDogs))}
      </div>

      <img
        className="imgDog"
        src={stateDogs}
      />
      <br /><br />
      <div className="alinhar">
      
      <button className="button" onClick={getDogsLocal}>REFRESH</button>
      
      </div>
    </div>
  );
};

export default Dogs;
