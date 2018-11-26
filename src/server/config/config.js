var config;
if(process.env.NODE_ENV ==  'production'){
    config = {
        host     : '127.0.0.1',
        user     : 'root',
        password : 'zjz8161773612.',   //记得最后有点！！！
        port     : '3306',
        database : 'mytodo',
    }
}else{
    config = {
        host     : '127.0.0.1',
        user     : 'root',
        password : 'PASSroot1234',
        port     : '3306',
        database : 'mytodo',
    }
}


// const config = {
//     host     : host,
//     user     : user,
//     password : password,
//     port: port,
//     database: database,
// }

exports.config = config;
// export {
//     config
// }
