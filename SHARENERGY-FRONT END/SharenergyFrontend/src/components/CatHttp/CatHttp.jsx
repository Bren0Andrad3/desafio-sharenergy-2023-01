import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../components/CatHttp/CatHttp.css"
import { useNavigate } from "react-router-dom";

const CatsHttp = () => {
  
  const axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        // outras configurações de cabeçalho
    },
    responseType: 'blob'
}

const getAuthHeader = () => {
    const token = localStorage.getItem('token');
    return { 'Authorization': `${token}` };
    
}

axiosConfig.headers = {
    ...axiosConfig.headers,
    ...getAuthHeader()
}

  
  const [Cats, setCats] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const statusCodes = [
    100, 101, 102,
    200, 201, 202, 203, 204, 205, 206, 207, 208, 226,
    300, 301, 302, 303, 304, 305, 306, 307, 308,
    400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424, 426, 428, 429, 431, 451,
    500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511
  ];
  
  const validateStatusCode = (inputValue) => {
    inputValue = parseInt(inputValue);
    if(!statusCodes.includes(inputValue)) {
        return false;
    }
    return true;
}

  const getCats = async () => {
    const isValid = validateStatusCode(inputValue);
    if(!isValid) {
        setCats("https://www.polemicaparaiba.com.br/wp-content/uploads/2021/11/azul-caneta.jpg");
        alert("Invalid status code!");
        
        return;
    }
    try {
      const response = await axios.get(`http://localhost:5000/Cat/${inputValue}`, axiosConfig);

      const data = response.data;
      const imgUrl = URL.createObjectURL(data);
      setCats(imgUrl);
    } catch (error) {
      console.log(error);
      alert("Sua sessão foi expirada ! ")
      navigate("/");
      
      
    }
  };


  

  return (
    <div>
      <div className="Dog">
        <h2>DIGITE UM HTTP STATUS CODE !</h2>
      </div>

      <img
        className="imgDog"
        src={Cats}
      />
      <br /><br />
      <div className="div2">
      <input className="input2" type="text" id="input" placeholder="Digite Aqui" onChange={e => setInputValue(e.target.value)}/>
  <button className="button2" type="submit" onClick={getCats}>Enviar</button>
</div>
    </div>
  );
};

export default CatsHttp;
