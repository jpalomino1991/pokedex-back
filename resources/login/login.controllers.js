const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    try {
        const email = req.body.email
        const user = { name: email}

        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN)
        res.json({accessToken: accessToken})
    } catch(e) {
        console.error(e)
        res.send(400).end()
    }
}

const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

module.exports = {
    login,
    authenticateToken
}