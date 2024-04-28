const jwt = require('jsonwebtoken');

function requiredLogin(req, res, next) {
	if (req.session.authorization) {
		let token = req.session.authorization['accessToken']; 

		console.log(token);
		jwt.verify(token, "access", (err, user) => {
			if (!err) {
				req.user = user;
				next();
			}
			else {
				return res.status(403).json({ message: "User not authenticated" })
			}
		});
	}else {
		return res.status(403).json({ message: "User doesnt login. Please login before" });
	} 
}

module.exports = requiredLogin;