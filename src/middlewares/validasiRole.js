/* const {response} = require('./../middleware/common')
const jwt = require('jsonwebtoken')
let key = process.env.JWT_KEY
const rolePekerja = (req,res,next) =>{
    console.log(role)
    if(req.params.role == 'pekerja'){
        return next()
    }
    return response(res, 404, false, null,"users role salah")
}

const rolePerekrut = (req,res,next) =>{
    console.log(role)
    if(req.params.role == 'perekrut'){
        return next()
    }
    return response(res, 404, false, null,"users role salah")
}

const protect = (req,res,next) => {
    try{
        let token
        if(req.headers.authorization){
            let auth = req.headers.authorization
            token = auth.split(" ")[1]
            let decode = jwt.verify(token,key)
            req.payload = decode
            next()
        } else {
            return response(res, 404, false, null,"server need token")
        }
    } catch(err) {
        console.log(err)
        if(err && err.name == 'JsonWebTokenError'){
            return response(res, 404, false, null,"invalid token")
        } else if (err && err.name == 'TokenExpriredError'){
            return response(res, 404, false, null,"expired token")
        } else {
            return response(res, 404, false, null,"token not active")
        }
    }
}
module.exports = {rolePerekrut,rolePekerja,protect} */