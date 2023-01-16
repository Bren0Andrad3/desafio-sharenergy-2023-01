global.SALT_KEY = 'U0hBUkVFTkVSR1lPRklDSUFMVEVTVEU=';
const mongoose = require("mongoose");
const Customer = require("./src/models/customer")
const md5 = require('md5');

mongoose.connect("mongodb+srv://Breno:75887@cluster0.uv4jicl.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });


const customer = [
  {
    name: "SHARENERGY",
    username: "desafiosharenergy",
    telefone: "7988456432",
    endereco: "MINAS GERAIS",
    cpf: "3545349583",
    email: "SHARENERGY@example.com",
    password: md5("sh@r3n3rgy" + global.SALT_KEY)
  }
];

Customer.insertMany(customer, function(error, docs) {
  if (error) {
    console.log(error);
  } else {
    console.log("customer seeded successfully.");
  }
 
})