const express = require('express');
const session = require('express-session')
const routes = require('./router/routes.js').publicRoute;
const customersRoutes = require('./router/customersRoutes.js').customersRoutes;
const requiredLogin = require('./middleware/AuthMiddleware.js');

const app = express();

app.use(express.json());

// using session
app.use(session({
	secret: 'fingerprint_customer', // Change this to a long, random string
	resave: false,
	saveUninitialized: true
}));

// All routes with prefix "customers" then make sure that person had login
app.use("/customers", requiredLogin);

app.use("/", routes);
app.use("/", customersRoutes);

app.listen(3000, () => console.log("Server is running") );