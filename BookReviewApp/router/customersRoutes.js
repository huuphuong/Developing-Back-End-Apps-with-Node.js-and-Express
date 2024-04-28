const axios = require("axios")
const express = require('express');
const Books = require("../database/BooksDB.js");
const Users = require('../database/UsersDB.js');
const jwt = require('jsonwebtoken');

const customersRoutes = express.Router();


// Add a new review for a book (logged in users only)
customersRoutes.post('/customers/books/reviews', async (req, res) => {
	console.log(req.session.username);
});


module.exports.customersRoutes = customersRoutes;