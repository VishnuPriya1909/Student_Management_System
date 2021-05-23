const mysql=require('mysql');
const connection=mysql.createConnection({
     host: 'localhost',
    user: 'root',
    password: 'Vishnu',
     database:'admin',
});
module.exports=connection;
// con.connect(function(err)
// {
//     if(err) 
//     console.log(err);
//     else
//     console.log("Connected");
// })
// mongo "mongodb+srv://cluster0.znvyc.mongodb.net/<dbname>" --username <username>
