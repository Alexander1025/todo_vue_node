import * as configfile from './../config/config.js'
import mysql from 'mysql'

const config = configfile.config;

const findname = function (){

}

//=================

const havethisname = function (){
    var connection = mysql.createConnection({
        host     : config.host,
        user     : config.user,
        password : config.password,
        port: config.port,
        database: config.database,
    });
    connection.connect();
    var sql = 'SELECT * FROM user';

    connection.query(sql,function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }
        console.log("test end");
        return "test havethisname";

        connection.end();
    });


}



export {havethisname}
