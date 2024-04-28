const books = [
	{
			author: "J.K. Rowling",
			title: "Harry Potter and the Sorcerer's Stone",
			reviews: [
					{ name: "John", email: "john@example.com", stars: 5 },
					{ name: "Emily", email: "emily@example.com", stars: 4 },
					{ name: "Michael", email: "michael@example.com", stars: 5 }
			]
	},
	{
			author: "George Orwell",
			title: "1984",
			reviews: [
					{ name: "Sarah", email: "sarah@example.com", stars: 5 },
					{ name: "David", email: "david@example.com", stars: 4 },
					{ name: "Jessica", email: "jessica@example.com", stars: 3 }
			]
	},
	{
			author: "Harper Lee",
			title: "To Kill a Mockingbird",
			reviews: [
					{ name: "Matthew", email: "matthew@example.com", stars: 5 },
					{ name: "Sophia", email: "sophia@example.com", stars: 4 },
					{ name: "Ethan", email: "ethan@example.com", stars: 5 }
			]
	},
	{
			author: "J.R.R. Tolkien",
			title: "The Lord of the Rings",
			reviews: [
					{ name: "Olivia", email: "olivia@example.com", stars: 5 },
					{ name: "Daniel", email: "daniel@example.com", stars: 5 },
					{ name: "Ava", email: "ava@example.com", stars: 4 }
			]
	},
	{
			author: "F. Scott Fitzgerald",
			title: "The Great Gatsby",
			reviews: [
					{ name: "William", email: "william@example.com", stars: 4 },
					{ name: "Sophia", email: "sophia@example.com", stars: 3 },
					{ name: "Ethan", email: "ethan@example.com", stars: 5 }
			]
	},
	{
			author: "Jane Austen",
			title: "Pride and Prejudice",
			reviews: [
					{ name: "Emma", email: "emma@example.com", stars: 5 },
					{ name: "Liam", email: "liam@example.com", stars: 4 },
					{ name: "Ava", email: "ava@example.com", stars: 4 }
			]
	},
	{
			author: "Mark Twain",
			title: "The Adventures of Huckleberry Finn",
			reviews: [
					{ name: "James", email: "james@example.com", stars: 5 },
					{ name: "Charlotte", email: "charlotte@example.com", stars: 3 },
					{ name: "Benjamin", email: "benjamin@example.com", stars: 4 }
			]
	},
	{
			author: "Leo Tolstoy",
			title: "War and Peace",
			reviews: [
					{ name: "Oliver", email: "oliver@example.com", stars: 5 },
					{ name: "Sophie", email: "sophie@example.com", stars: 4 },
					{ name: "William", email: "william@example.com", stars: 5 }
			]
	},
	{
			author: "Emily Bronte",
			title: "Wuthering Heights",
			reviews: [
					{ name: "Evelyn", email: "evelyn@example.com", stars: 5 },
					{ name: "Lucas", email: "lucas@example.com", stars: 3 },
					{ name: "Avery", email: "avery@example.com", stars: 4 }
			]
	},
	{
			author: "Charles Dickens",
			title: "Great Expectations",
			reviews: [
					{ name: "Sophia", email: "sophia@example.com", stars: 4 },
					{ name: "Alexander", email: "alexander@example.com", stars: 5 },
					{ name: "Emma", email: "emma@example.com", stars: 3 }
			]
	},
	{
			author: "Herman Melville",
			title: "Moby-Dick",
			reviews: [
					{ name: "Daniel", email: "daniel@example.com", stars: 4 },
					{ name: "Charlotte", email: "charlotte@example.com", stars: 5 },
					{ name: "William", email: "william@example.com", stars: 4 }
			]
	},
	{
			author: "Mary Shelley",
			title: "Frankenstein",
			reviews: [
					{ name: "Ethan", email: "ethan@example.com", stars: 5 },
					{ name: "Isabella", email: "isabella@example.com", stars: 4 },
					{ name: "James", email: "james@example.com", stars: 4 }
			]
	},
	{
			author: "Lewis Carroll",
			title: "Alice's Adventures in Wonderland",
			reviews: [
					{ name: "Ava", email: "ava@example.com", stars: 5 },
					{ name: "Charlotte", email: "charlotte@example.com", stars: 4 },
					{ name: "Benjamin", email: "benjamin@example.com", stars: 5 }
			]
	},
	{
			author: "Charlotte Bronte",
			title: "Jane Eyre",
			reviews: [
					{ name: "William", email: "william@example.com", stars: 5 },
					{ name: "Sophia", email: "sophia@example.com", stars: 4 },
					{ name: "Ethan", email: "ethan@example.com", stars: 5 }
			]
	},
	{
			author: "Agatha Christie",
			title: "Murder on the Orient Express",
			reviews: [
					{ name: "Evelyn", email: "evelyn@example.com", stars: 5 },
					{ name: "Lucas", email: "lucas@example.com", stars: 4 },
					{ name: "Avery", email: "avery@example.com", stars: 3 }
			]
	},
	{
			author: "Ernest Hemingway",
			title: "The Old Man and the Sea",
			reviews: [
					{ name: "Sophia", email: "sophia@example.com", stars: 5 },
					{ name: "Alexander", email: "alexander@example.com", stars: 4 },
					{ name: "Emma", email: "emma@example.com", stars: 5 }
			]
	},
	{
			author: "Fyodor Dostoevsky",
			title: "Crime and Punishment",
			reviews: [
					{ name: "Daniel", email: "daniel@example.com", stars: 4 },
					{ name: "Charlotte", email: "charlotte@example.com", stars: 5 },
					{ name: "William", email: "william@example.com", stars: 4 }
			]
	},
	{
			author: "John Steinbeck",
			title: "The Grapes of Wrath",
			reviews: [
					{ name: "Ethan", email: "ethan@example.com", stars: 5 },
					{ name: "Isabella", email: "isabella@example.com", stars: 4 },
					{ name: "James", email: "james@example.com", stars: 4 }
			]
	},
	{
			author: "Toni Morrison",
			title: "Beloved",
			reviews: [
					{ name: "Ava", email: "ava@example.com", stars: 5 },
					{ name: "Charlotte", email: "charlotte@example.com", stars: 4 },
					{ name: "Benjamin", email: "benjamin@example.com", stars: 5 }
			]
	},
	{
			author: "Margaret Atwood",
			title: "The Handmaid's Tale",
			reviews: [
					{ name: "William", email: "william@example.com", stars: 5 },
					{ name: "Sophia", email: "sophia@example.com", stars: 4 },
					{ name: "Ethan", email: "ethan@example.com", stars: 5 }
			]
	}
];

module.exports = books;
