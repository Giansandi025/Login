const {response} = require("./../middlewares/common");
const {create, findEmail} = require("./../model/authPerekrut");
const bcrypt = require("bcryptjs");
const {v4:uuidv4} = require('uuid');
const {generateToken} = require("./../helper/auth")


const UsersControllerPerekrut = {
    insert:async(req,res,next)=>{
       let {rows:[user]} = await findEmail(req.body.email)
       console.log('role', req.params.role)
       let role = req.params.role

       if(user){
        return response(res, 404,false, "email sudah ada" ,"register gagal")
       }

       

       let salt = bcrypt.genSaltSync(10);
       let password = bcrypt.hashSync(req.body.password);
       let data = {
                id:uuidv4(),
                name: req.body.name,
                password ,
                email: req.body.email,
                role
        }
        try{
        const result = await create(data)
        if(result){
        console.log(result)
        response(res, 200,true,true,"register berhasil")
        }
     } catch(err){
        console.log(err)
        response(res, 404,false, err, "register gagal")
     }
    },
    login: async (req,res,next)=>{
        console.log('email',req.body.email)
        console.log('password',req.body.password)
        let {rows:[user],
        } = await findEmail(req.body.email)
        if(!user){
         return response(res, 404,false, null, "login gagal email salah")
         }  
        const password = req.body.password
        const validation = bcrypt.compareSync(password,user.password)

        if (!validation) {
         return response(res, 404, false, null, 'login gagal password salah');
       }
   
        delete user.password
        let payload = {
         email: user.email,
         role: user.role
        };
        user.token = generateToken(payload)
        response(res, 200,true, user, "login berhasil")


    },
  
}

exports.UsersControllerPerekrut = UsersControllerPerekrut