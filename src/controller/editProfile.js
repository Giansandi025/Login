const ModelPekerja = require("./../model/editProfile");


const ProfileController = {
    update:(req,res,next)=>{
        ModelPekerja.updateData(req.params.id, req.body)
        .then((result) => res.send({ status: 200, message: `berhasil edit data`}))
        .catch((err) => res.send({ message: "error", err }));
    },
/*     insert:(req,res,next)=>{
        ModelPekerja.insertData(req.body)
        .then((result) => res.send({ status: 200, message: `berhasil memasukan data`, data: result.rows}))
        .catch((err) => res.send({ message: "error", err }));  
    } */
}

exports.ProfileController = ProfileController