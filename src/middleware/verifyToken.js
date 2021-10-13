const jwt = require("jsonwebtoken");

const config = process.env;

module.exports = function(req, res, next) {
    const token = req.header('auth-token')
    if (!token) return res.status(401).send('Access Denied. Please log in.')

    try {
        const verified = jwt.verify(token, config.TOKEN_SECRET)
        req.emailCheck = verified
    } catch (err) {
        return res.status(401).send('Invalid Token')
    }
    return next()
}