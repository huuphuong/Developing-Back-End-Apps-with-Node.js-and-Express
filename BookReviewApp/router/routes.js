const axios = require("axios")
const express = require('express');
const Books = require("../database/BooksDB.js");
const Users = require('../database/UsersDB.js');
const jwt = require('jsonwebtoken');

const publicRoute = express.Router();


// API Get All Book
publicRoute.get('/books', async (req, res) => {
	const listBook = await Books;
	return res.json(listBook).status(200);
});

// API search books by query params (code, author and title)
publicRoute.get('/books/query', async (req, res) => {
	let code = req.query.code || '';
	let author = req.query.author || '';
	let title = req.query.title || '';

	let listBook = await Books;

	if (code.trim().length > 0) {
		listBook = listBook.filter(book => {
			return code.trim() == book.ISBNCode;
		})
	}

	if (author.trim().length > 0) {
		listBook = listBook.filter(book => {
			let auhtorFilter = author.trim().toLocaleLowerCase();
			return book.author.toLocaleLowerCase().includes(auhtorFilter);
		})
	}

	if (title.trim().length > 0) {
		listBook = listBook.filter(book => {
			let titleFilter = title.trim().toLocaleLowerCase();
			return book.author.toLocaleLowerCase().includes(titleFilter);
		})
	}

	return res.json(listBook).status(200);
});

// API Retrive comments for special book (input bookId)
publicRoute.get('/books/:code', async (req, res) => {
	let bookCode = req.params.code.trim().toUpperCase();
	let currentBook = await Books.find(book => book.ISBNCode == bookCode);
	return res.json(currentBook).status(200);
})

// API Register as a new user of the application
publicRoute.post('/auth/register', async (req, res) => {
	let username = req.body.username || '';
	let password = req.body.password || '';

	if (!username || !password) {
		return res.json({
			error: 422,
			message: 'Username and password must be not empty'
		}).status(422);
	}

	if (Users.isExistsUser(username)) {
		return res.json({
			error: 422,
			message: 'User is already exist'
		}).status(422);
	}

	let userCreate = Users.createUser(username, password);

	return res.json({
		username: username
	}).status(200);
})

// API Login to the application
publicRoute.post('/auth/login', async (req, res) => {
	let username = req.body.username || '';
	let password = req.body.password || '';

	if (!username || !password) {
		return res.json({
			error: 422,
			message: 'Username and password must be not empty'
		}).status(422);
	}

	if (!Users.isExistsUser(username)) {
		return res.json({
			error: 409,
			message: 'User not found'
		}).status(409);
	}

	let user = Users.findUser(username, password);

	// set access token into session
	let accessToken = jwt.sign({
		data: user
	}, 'access', { expiresIn: 60 * 60 })


	req.session.authorization = {
		accessToken,
		username
	}

	res.send("User logged in Successfully")
});

module.exports.publicRoute = publicRoute;