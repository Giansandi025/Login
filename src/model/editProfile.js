const Pool = require('./../config/db');

const updateData = (id,data) => {
    const {name,jobs,domisili,company_name,deskripsi} = data;
    return Pool.query(`UPDATE users SET name='${name}', jobs='${jobs}', domisili='${domisili}', company_name='${company_name}', deskripsi='${deskripsi}' WHERE id='${id}'`);
 }
/* 
 const insertData = (data) => {
    const {id,name,jobs,domisili,company_name,deskripsi} = data;
    return Pool.query(`INSERT INTO users(id,name,jobs,domisili,company_name,deskripsi) VALUES(${id},'${name}','${jobs}','${domisili}','${company_name}','${deskripsi}')`);
 }
 */
 module.exports = {updateData}