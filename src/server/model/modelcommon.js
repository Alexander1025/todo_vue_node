import * as configfile from './../config/config.js'
import mysql from 'mysql'

const config = configfile.config;

const findname = function (thisname,allname){

}

//=================

const havethisname = function (username){
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });
        connection.connect();

        var sql = `SELECT * FROM user WHERE username='${username}'`;

        connection.query(sql,function (err, result) {
            if(err){
                console.log('[SELECT ERROR] - ',err.message);
                reject(err.message);
            }
            resolve(result);
        });
        connection.end();
    });

    return promise;
}



export {havethisname,findname}
