// import * as configfile from './../config/config.js'
// import mysql from 'mysql'
var configfile = require("./../config/config.js");
var mysql = require("mysql");

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



const addtheme = function (option,userid){
    console.log(option);
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });

        connection.connect();

        var addSql = 'INSERT INTO themedetails(themeuser,themehead,thememain,themename,status,themetype) VALUES(?,?,?,?,?,?)';
        var addSqlParams = [userid, option.themehead, option.thememain, option.themename, 1 , 1];
        //增

        connection.query(addSql,addSqlParams,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                reject(err.message);
            }
            resolve(result);

        });

        connection.end();
    });

    return promise;

}


const addtask = function (option){
    console.log(option);
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });

        connection.connect();

        var addSql = 'INSERT INTO task(userid,taskname,taskcolor,status) VALUES(?,?,?,?)';
        var addSqlParams = [option.userid, option.taskname, option.taskcolor, 1];
        //增

        connection.query(addSql,addSqlParams,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                reject(err.message);
            }
            resolve(result);

        });

        connection.end();
    });

    return promise;

}





const gettask = function (userid){
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });
        connection.connect();

        var sql = `SELECT * FROM task WHERE userid='${userid}' AND status!=0`;

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


const deletetask = function (taskid){
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });
        connection.connect();

        // var delSql = `DELETE FROM task where taskid=${taskid}`;
        // //删
        // connection.query(delSql,function (err, result) {
        //     if(err){
        //         reject(err.message);
        //     }
        //     resolve(result);
        // });
        var modSql = `UPDATE task SET status = 0 WHERE taskid = ${taskid}`;

        connection.query(modSql,function (err, result) {
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




const changecomplete = function (option){
    console.log(option);
    const promise = new Promise(function(resolve, reject){
        var connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.password,
            port: config.port,
            database: config.database,
        });

        connection.connect();

        var sql = "UPDATE task SET iscomplete = ? WHERE taskid = ?";
        var modSqlParams = [option.tostatus, option.taskid];
        //改

        connection.query(sql,modSqlParams ,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                reject(err.message);
            }
            resolve(result);

        });

        connection.end();
    });

    return promise;
}







exports.getuser = getuser;
exports.gettheme = gettheme;
exports.settheme = settheme;
exports.addtheme = addtheme;
exports.addtask = addtask;
exports.gettask = gettask;
exports.changecomplete = changecomplete;
exports.deletetask = deletetask;

// export {getuser, gettheme, settheme}
