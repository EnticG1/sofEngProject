const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers
  
  // Verify token exists
  if (!authorization){
    return res.status(401).json({error: 'Authorization token required'})
  }

  // Grab the token
  const token = authorization.split(' ')[1]

  // Verify token
  try{
    const {_id} = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.findOne({ _id }).select('_id')
    next()

  } catch(error){
    console.log(error)
    res.status(401).json({error: 'Authorization token required'})
  }
}

module.exports = requireAuth