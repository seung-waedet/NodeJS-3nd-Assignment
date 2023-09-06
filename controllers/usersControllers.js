const { readDataFile, writeDataFile } = require('../services/user.service')


const CreateUser = async (req, res) => {
    const users = await readDataFile();

    const foundUser = users.filter(user => user.username == req.body.username)

    if (foundUser.length) {

        return res.status(404).json({ message: "Username is already taken" })
    }

    users.push(req.body);
    await writeDataFile(users);

    return res.status(201).json({
        message: 'User created successfully',
    })

}


const apiKeyAuth = async (req, res, next) => {
    const authHeader = req.headers;

    const users = await readDataFile();

    console.log(authHeader.api_key)

    if (!authHeader.api_key) {
        return res.status(401).json({ message: 'You are not authenticated!' });
    }

    const existingUser = users.find(user => user.api_key == authHeader.api_key)

    console.log(existingUser)

    if (existingUser) {
        req.user = existingUser
    } else {
        return res.status(401).json({ message: 'You are not authenticated!' });
    }
    next();
}

const checkAdmin = (req, res, next) => {
    console.log(req.user)
    if (req.user.user_type !== 'admin') {
        return res.status(403).json({ message: 'You are not authorized!' });
    }

    next()
}


module.exports = {
    CreateUser,
    apiKeyAuth,
    checkAdmin
}