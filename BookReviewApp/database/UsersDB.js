const listUsers = [];

const users = {
	isExistsUser(username = '', password = '') {
		return listUsers.filter(user => {
			let expression = (user.username == username);

			if (password.length > 0) {
				return expression && user.password == password;
			}

			return expression;
		}).length > 0;
	},

	createUser(username, password) {
		return listUsers.push({
			username: username,
			password: password
		});
	},

	getListUser() {
		return listUsers;
	},

	findUser(username, password) {
		return listUsers.find(user => {
			return user.username == username && user.password == password;
		})
	}
} // End users

module.exports = users;