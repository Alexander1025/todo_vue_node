import * as configfile from './../config/config.js'
import mysql from 'mysql'

const config = configfile.config;

//=================

const getuser = function (userid){
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });
        connection.connect();

        var sql = `SELECT * FROM user WHERE userid='${userid}'`;

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



const gettheme = function (userid){
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });
        connection.connect();

        var sql = `SELECT * FROM themedetails WHERE (themeuser='${userid}' OR themeuser=0) AND status!=0`;

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


const settheme = function (theme,userid){
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });
        connection.connect();

        var modSql = 'UPDATE user SET theme = ? WHERE userid = ?';
        var modSqlParams = [`${theme.themeid},${theme.thisheadstyle},${theme.thisstyle}` ,userid];

        connection.query(modSql,modSqlParams,function (err, result) {
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

export {getuser, gettheme, settheme}
