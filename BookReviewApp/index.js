const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session')
const routes = require('./router/routes.js').publicRoute;

const app = express();

app.use(express.json());


// app.use("/customer/auth/*", function auth(req,res,next) {

// if(req.session.authorization) {
//     let token = req.session.authorization['accessToken']; // Access Token
//     jwt.verify(token, "access",(err,user)=>{
//         if(!err){
//             req.user = user;
//             next();
//         }
//         else{
//             return res.status(403).json({message: "User not authenticated"})
//         }
//      });
//  } else {
//      return res.status(403).json({message: "User not logged in"})
//  }
// });
 

app.use("/", routes);
app.listen(3000, ()=>console.log("Server is running") );