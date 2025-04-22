const jwt = require('jsonwebtoken')
require('dotenv').config()

const encrypt = (payload) => {
  const token = jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:'1h'})
  return token
}

const decrypt = (token) => {
  try{
    const decoded = jwt.verify(token,process.env.SECRET_KEY)
    return decoded
  }
  catch(e){
    console.error("Invalid token",e.message)
    return null
  }
}

module.exports = {
  encrypt,
  decrypt
}
