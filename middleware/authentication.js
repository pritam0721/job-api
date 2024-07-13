const User = require('../models/User')
const jwt = require('jsonwebtoken')
const {UnauthenticatedError} = require('../errors')

const auth = async (req,res,next) => {
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthenticatedError('Authetication is invalid ')
    }
    const token = authHeader.split(' ')[1]
    
    try {
        const palyload = jwt.verify(token,process.env.JWT_SECRET)
        req.user = {userId:palyload.userId,name:palyload.name}
        next()
    } catch (error) {
         throw new UnauthenticatedError('Authetication is invalid')        
    } 

}

module.exports = auth 