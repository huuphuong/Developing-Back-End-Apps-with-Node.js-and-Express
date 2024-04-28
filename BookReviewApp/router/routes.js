const axios = require("axios")
const express = require('express');
let Books = require("../database/BooksDB.js");

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
		console.log(author);
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

// Retrive comments for special book (input bookId)
publicRoute.get('/books/:code', async (req, res) => {
	let bookCode = req.params.code.trim().toUpperCase();
	let currentBook = await Books.find(book => book.ISBNCode == bookCode);
	return res.json(currentBook).status(200);
})



module.exports.publicRoute = publicRoute;