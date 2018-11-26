if(process.env.NODE_ENV ==  'production'){
    var host = '127.0.0.1';
    var user = 'root';
    var password = 'zjz8161773612';
    var port = '3306';
    var database = 'mytodo';
}else{
    var host = '127.0.0.1';
    var user = 'root';
    var password = 'PASSroot1234';
    var port = '3306';
    var database = 'mytodo';
}


const config = {
    host     : host,
    user     : user,
    password : password,
    port: port,
    database: database,
}

exports.config = config;
// export {
//     config
// }
