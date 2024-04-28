const axios = require("axios")
const express = require('express');
const Books = require("../database/BooksDB.js");
const Users = require('../database/UsersDB.js');
const jwt = require('jsonwebtoken');

const customersRoutes = express.Router();


// Add a new review for a book (logged in users only)
customersRoutes.put('/customers/books/:bookCode/reviews', async (req, res) => {
	let bookCode = req.params.bookCode || '';
	let currentBook = await Books.find(book => book.ISBNCode == bookCode);
	
	if (!currentBook) {
		return res.status(422).json({
			message: 'Book not found'
		});
	}

	let stars = req.body.stars || '';
	let message = req.body.message || '';

	if (!stars || !message) {
		return res.status(422).json({
			message: 'stars and message are required'
		});
	}

	let d = new Date();
	let review = {
		name: req.session.authorization['username'], 
		stars: stars,
		message: message,
		created_at: d.toISOString()
	};

	await Books.map( (book) => {
		if (book.ISBNCode == bookCode) {
			book.reviews.push(review)
		}

		return book;
	});

	return res.status(200).json({
		message: 'Add review successfully',
		data: review
	})
});

// Modify a book review (logged in users can modify only their own reviews)
customersRoutes.put('/customers/books/:bookCode/reviews-modify', async (req, res) => {
	let bookCode = req.params.bookCode || '';
	let currentBook = await Books.find(book => book.ISBNCode == bookCode);
	
	if (!currentBook) {
		return res.status(422).json({
			message: 'Book not found'
		});
	}

	let stars = req.body.stars || '';
	let message = req.body.message || '';

	if (!stars || !message) {
		return res.status(422).json({
			message: 'stars and message are required'
		});
	}

	let d = new Date();
	let review = {
		name: req.session.authorization['username'], 
		stars: stars,
		message: message,
		created_at: d.toISOString()
	};


	// find current review
	let currentReviewIndex = currentBook.reviews.findIndex(rv => rv.name == req.session.authorization['username']);
	currentBook.reviews[currentReviewIndex] = review;

	return res.status(200).json({
		data: review,
		message: 'Modify review successfully'
	})
});

// Delete a book review (logged in users can delete only their own reviews)
customersRoutes.delete('/customers/books/:bookCode/reviews', async (req, res) => {
	let bookCode = req.params.bookCode || '';
	let username = req.session.authorization['username'];

	let currentBook = await Books.find(book => book.ISBNCode == bookCode);
	
	if (!currentBook) {
		return res.status(422).json({
			message: 'Book not found'
		});
	}

	// find review by customer
	let reviewOfCustomer = currentBook.reviews.find(rv => rv.name == username);
	
	if (!reviewOfCustomer) {
		return res.status(422).json({
			message: 'You never write review for this book yet'
		});
	}

	let reviewIndex = currentBook.reviews.findIndex(rv => rv.name == username);

	delete currentBook.reviews[reviewIndex];
	
	return res.status(200).json({
		data: currentBook,
		message: 'Delete review success fully'
	})
});

// (Multiple users) Access the application at the same time to view and manage different book reviews simultaneously
customersRoutes.delete('/customers/books/:bookCode/reviews', async (req, res) => {
	let bookCode = req.params.bookCode || '';
	let username = req.session.authorization['username'];

	let currentBook = await Books.find(book => book.ISBNCode == bookCode);
	
	if (!currentBook) {
		return res.status(422).json({
			message: 'Book not found'
		});
	}

	return res.status(200).json({
		data: currentBook,
		message: 'Delete review success fully'
	})
});

module.exports.customersRoutes = customersRoutes;