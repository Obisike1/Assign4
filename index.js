

//Setting up Server use Express to intall server
const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
app.listen (PORT,()=>{
    console.log('Server is Running ...')
})

//End point 1
app.get("/string", (request, response) =>{
    response.send("My name is Obisike Nwankwo and I am a Backend Dev")
}) 

//End point 2
app.get('/object', (request, response) => {
    response.send({ message: 'Hello, world!' });
  });

  app.get('/array', (request, response) => {
    response.send([ 'My favourite Food is:', 'Rice', 'Yam', 'Plantain']);
  });