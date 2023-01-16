import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";



import { BrowserRouter, Routes, createBrowserRouter, RouterProvider, Route } from "react-router-dom";


import Login from "./routes/Login";
import AddCustomer from "./routes/AddCustomer"
import Customer from "./routes/Cadastrar";
import EditCustomer from "./routes/EditCustomer";
import Dog from "./routes/DogPage/Dog";
import RandomUser from "./routes/RandomUser";
import Cat from "./routes/CatHttp"



const router = createBrowserRouter([
  {
    
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/cadastrar",
        element: <Customer />
      },
      {
        path: "/add",
        element: <AddCustomer />
      },
      {
        path: "/cadastrar/edit/:id",
        element: <EditCustomer/>
      },
      {
        path: "/Dog",
        element: <Dog/>
      },
      {
        path: "/RandomUser",
        element: <RandomUser/>
      },
      {
        path: "/CatHttp",
        element: <Cat/>
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
