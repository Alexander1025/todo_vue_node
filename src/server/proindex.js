// import express from 'express'
// import path from 'path'
// import favicon from 'serve-favicon'
// import logger from 'morgan'
// import bodyParser from 'body-parser'
// import cookieParser from 'cookie-parser'
// import webpack from 'webpack'
// import querystring from 'querystring'
// import url from 'url'
// // 引入history模块
// import history from 'connect-history-api-fallback'
// // 正式环境时，下面两个模块不需要引入
// import webpackDevMiddleware from 'webpack-dev-middleware'
// import webpackHotMiddleware from 'webpack-hot-middleware'
// import config from '../../build/webpack.dev.conf'
// import {havethisname,savename,login} from './model/loginmodel.js'
// import {getuser,gettheme,settheme} from './model/indexmodel.js'

var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var webpack = require("webpack");
var querystring = require("querystring");
var url = require("url");
var history = require("connect-history-api-fallback");
// // 正式环境时，下面两个模块不需要引入
// var webpackDevMiddleware = require("webpack-dev-middleware");
// var webpackHotMiddleware = require("webpack-hot-middleware");
var config = require("../../build/webpack.dev.conf");
var loginmodel = require("./model/loginmodel.js");
var havethisname = loginmodel.havethisname;
var savename = loginmodel.savename;
var login = loginmodel.login;
var indexmodel = require("./model/indexmodel.js");
var getuser = indexmodel.getuser;
var gettheme = indexmodel.gettheme;
var settheme = indexmodel.settheme;
var addtheme = indexmodel.addtheme;
var addtask = indexmodel.addtask;
var gettask = indexmodel.gettask;
var changecomplete = indexmodel.changecomplete;
var deletetask = indexmodel.deletetask;


const app = express()

// 引入history模式让浏览器进行前端路由页面跳转
app.use(history())

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

const compiler = webpack(config)
// webpack 中间件

// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath,
//   stats: { colors: true }
// }))
// app.use(webpackHotMiddleware(compiler))

app.use(express.static(path.join(__dirname, 'views')))































































// 业务
// ===========================================================


/**
 *
 用于查找user表是否含有特定username
 *
 @method haveUserName
 *
 @param { } 参数名 参数说明
 *
 *      {
            status:0=>'失败',1=>'成功',
            data:查询的username信息,
        }
*/

app.post('/node/haveUserName', function (req, res) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        console.log("chunk:",chunk);
    });
    req.on('end', function () {
        // 生成返回格式对象
        let resdata = {};
        // 解析参数
        body = querystring.parse(body);  //将一个字符串反序列化为一个对象
        console.log("body:",body);
        Object.keys(body).forEach((element, index, array) => {
            console.log(element);
            console.log(body.username);
            // 循环传过来的参数，有username执行开始执行havethisname
            if(element == "username"){

                // 业务开始
                havethisname(body.username).then(function (data){
                    resdata['data'] = data;
                    resdata['status'] = 1;
                    res.send(resdata);
                    res.end();
                },function (res){
                    resdata['data'] = res;
                    resdata['status'] = 0;
                    res.send(resdata);
                    res.end();
                });
            }
        });


    });



    // var connection = mysql.createConnection({
    //     host     : '127.0.0.1',
    //     user     : 'root',
    //     password : 'PASSroot1234',
    //     port: '3306',
    //     database: 'mytodo',
    // });
    // connection.connect();
    // var sql = 'SELECT * FROM user';

    // connection.query(sql,function (err, result) {
    //     if(err){
    //         console.log('[SELECT ERROR] - ',err.message);
    //         return;
    //     }
    //     res.send(user_name);
    // });
    // connection.end();






    // var data = {};
    // data.data = req.path;
    // data.originalUrl = req.originzalUrl;
    // data.url = url.parse(req.url, true);
    // data.query = data.url.query;

});





/**
 *
 用于注册用户信息，保存账号密码
 *
 @method savename
 *
 @param { } 参数名 参数说明
 *
 *      {
            status:0=>'失败',1=>'成功',
            data:查询的username信息,
        }
*/

app.post('/node/savename', function (req, res) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        console.log("chunk:",chunk);
    });
    req.on('end', function () {
        // 生成返回格式对象
        let resdata = {};
        // 解析参数
        body = querystring.parse(body);  //将一个字符串反序列化为一个对象
        console.log("body:",body);

        // 业务开始
        savename(body).then(function (data){
            resdata['data'] = data;
            resdata['status'] = 1;
            res.send(resdata);
            res.end();
        },function (res){
            resdata['data'] = res;
            resdata['status'] = 0;
            res.send(resdata);
            res.end();
        });
    });
});





/**
 *
 用于登录，记录cookie信息等
 *
 @method login
 *
 @param { } 参数名 参数说明
 *
 *      {
            status:0=>'失败',1=>'成功',
            data:查询的username信息,
        }
*/

app.post('/node/login', function (req, res) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        console.log("chunk:",chunk);
    });
    req.on('end', function () {
        // 生成返回格式对象
        let resdata = {};
        // 解析参数
        body = querystring.parse(body);  //将一个字符串反序列化为一个对象
        console.log("body:",body);

        // 业务开始
        login(body).then(function (data){
            console.log(data);
            if(data.length > 0){
                resdata['data'] = data;
                resdata['status'] = 1;
                res.cookie('userid', data[0]['userid'], { expires: new Date(Date.now() + 2592000000), httpOnly: true });
                res.send(resdata);
                res.end();
            }else{
                resdata['data'] = data;
                resdata['status'] = 0;
                res.send(resdata);
                res.end();
            }
        },function (res){
            resdata['data'] = res;
            resdata['status'] = 0;
            res.send(resdata);
            res.end();
        });
    });
});


/**
 *
 用于登出，清除记录cookie信息等
 *
 @method logout
 *
 @param { } 参数名 参数说明
 *
 *      {
            status:0=>'失败',1=>'成功',
        }
*/
app.post('/node/logout', function (req, res) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        console.log("chunk:",chunk);
    });
    req.on('end', function () {
        // 生成返回格式对象
        let resdata = {};
        // 解析参数
        body = querystring.parse(body);  //将一个字符串反序列化为一个对象
        console.log("body:",body);


        res.clearCookie('userid');
        resdata['status'] = 1;
        res.send(resdata);
        res.end();
    });
});



/**
 *
 用于获取用户信息
 *
 @method getuser
 *
 @param { } 参数名 参数说明
 *
 *      {

        }
*/

app.post('/node/getuser', function (req, res) {

    // console.log(req);
    // for(var key in  req.cookies){
    //     console.log("cookie名:"+key);
    //     console.log(",cookie值:"+req.cookies[key]+"<br />");
    // }

    var body = "";
    req.on('data', function (chunk) {
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        // console.log("chunk:",chunk);
    });
    req.on('end', function () {
        // 生成返回格式对象
        let resdata = {};
        // 解析参数
        body = querystring.parse(body);  //将一个字符串反序列化为一个对象
        // console.log("body:",body);

        // 业务开始
        getuser(req.cookies['userid']).then(function (data){
            // console.log(data);
            if(data.length > 0){
                resdata['data'] = data;
                resdata['status'] = 1;
                res.send(resdata);
                res.end();
            }else{
                resdata['data'] = data;
                resdata['status'] = 0;
                res.send(resdata);
                res.end();
            }
        },function (res){
            resdata['data'] = res;
            resdata['status'] = 0;
            res.send(resdata);
            res.end();
        });
    });
});




/**
 *
 用于获取用户主题
 *
 @method gettheme
 *
 @param { } 参数名 参数说明
 *
 *      {

        }
*/

app.post('/node/gettheme', function (req, res) {

    // console.log(req);
    // for(var key in  req.cookies){
    //     console.log("cookie名:"+key);
    //     console.log(",cookie值:"+req.cookies[key]+"<br />");
    // }

    var body = "";
    req.on('data', function (chunk) {
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        console.log("chunk:",chunk);
    });
    req.on('end', function () {
        // 生成返回格式对象
        let resdata = {};
        // 解析参数
        body = querystring.parse(body);  //将一个字符串反序列化为一个对象
        console.log("body:",body);

        // 业务开始
        gettheme(req.cookies['userid']).then(function (data){
            // console.log(data);
            data = data.sort(function(a, b){
                // 按记录某字段排序
                return a.themeid - b.themeid;
            });
            if(data.length > 0){
                resdata['data'] = data;
                resdata['status'] = 1;
                res.send(resdata);
                res.end();
            }else{
                resdata['data'] = data;
                resdata['status'] = 0;
                res.send(resdata);
                res.end();
            }
        },function (res){
            resdata['data'] = res;
            resdata['status'] = 0;
            res.send(resdata);
            res.end();
        });
    });
});










/**
 *
 用于获取用户主题
 *
 @method settheme
 *
 @param { } 参数名 参数说明
 *
 *      {

        }
*/

app.post('/node/settheme', function (req, res) {

    // console.log(req);
    // for(var key in  req.cookies){
    //     console.log("cookie名:"+key);
    //     console.log(",cookie值:"+req.cookies[key]+"<br />");
    // }

    var body = "";
    req.on('data', function (chunk) {
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        console.log("chunk:",chunk);
    });
    req.on('end', function () {
        // 生成返回格式对象
        let resdata = {};
        // 解析参数
        body = querystring.parse(body);  //将一个字符串反序列化为一个对象
        console.log("body:",body);

        // 业务开始
        settheme(body,req.cookies['userid']).then(function (data){
            console.log(data);
            if(data.affectedRows == 1){
                resdata['data'] = data;
                resdata['status'] = 1;
                res.send(resdata);
                res.end();
            }else{
                resdata['data'] = data;
                resdata['status'] = 0;
                res.send(resdata);
                res.end();
            }
        },function (res){
            resdata['data'] = res;
            resdata['status'] = 0;
            res.send(resdata);
            res.end();
        });
    });
});



/**
 *
 用于新增用户自定义主题
 *
 @method addtheme
 *
 @param { } 参数名 参数说明
 *
 *      {

        }
*/

app.post('/node/addtheme', function (req, res) {

    // console.log(req);
    // for(var key in  req.cookies){
    //     console.log("cookie名:"+key);
    //     console.log(",cookie值:"+req.cookies[key]+"<br />");
    // }

    var body = "";
    req.on('data', function (chunk) {
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        console.log("chunk:",chunk);
    });
    req.on('end', function () {
        // 生成返回格式对象
        let resdata = {};
        // 解析参数
        body = querystring.parse(body);  //将一个字符串反序列化为一个对象
        console.log("body:",body);

        // 业务开始
        addtheme(body,req.cookies['userid']).then(function (data){
            console.log(data);
            if(data.affectedRows == 1){
                resdata['data'] = data;
                resdata['status'] = 1;
                res.send(resdata);
                res.end();
            }else{
                resdata['data'] = data;
                resdata['status'] = 0;
                res.send(resdata);
                res.end();
            }
        },function (res){
            resdata['data'] = res;
            resdata['status'] = 0;
            res.send(resdata);
            res.end();
        });
    });
});



/**
 *
 用于调教新加的任务
 *
 @method addtask
 *
 @param { } 参数名 参数说明
 *
 *      {

        }
*/

app.post('/node/addtask', function (req, res) {

    for(var key in  req.cookies){
        console.log("cookie名:"+key);
        console.log(",cookie值:"+req.cookies[key]+"<br />");
    }

    var body = "";
    req.on('data', function (chunk) {
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        console.log("chunk:",chunk);
    });
    req.on('end', function () {
        // 生成返回格式对象
        let resdata = {};
        // 解析参数
        body = querystring.parse(body);  //将一个字符串反序列化为一个对象
        console.log("body:",body);

        // 业务开始
        addtask(body).then(function (data){
            console.log(data);
            resdata['data'] = data;
            resdata['status'] = 1;
            res.send(resdata);
            res.end();
        },function (res){
            resdata['data'] = res;
            resdata['status'] = 0;
            res.send(resdata);
            res.end();
        });
    });
});




/**
 *
 用于获取任务
 *
 @method gettask
 *
 @param { } 参数名 参数说明
 *
 *      {

        }
*/

app.post('/node/gettask', function (req, res) {

    for(var key in  req.cookies){
        console.log("cookie名:"+key);
        console.log(",cookie值:"+req.cookies[key]+"<br />");
    }

    var body = "";
    req.on('data', function (chunk) {
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        console.log("chunk:",chunk);
    });
    req.on('end', function () {
        // 生成返回格式对象
        let resdata = {};
        // 解析参数
        body = querystring.parse(body);  //将一个字符串反序列化为一个对象
        console.log("body:",body);
        console.log('body.userid: ', body.userid);
        if(body.userid == 0){
            resdata['data'] = "没有登录";
            resdata['status'] = 0;
            res.send(resdata);
            res.end();
        }else{
            // 业务开始
            gettask(body.userid).then(function (data){
                console.log(data);
                if(data.length > 0){
                    resdata['data'] = data;
                    resdata['status'] = 1;
                    res.send(resdata);
                    res.end();
                }else{
                    resdata['data'] = data;
                    resdata['status'] = 0;
                    res.send(resdata);
                    res.end();
                }
            },function (res){
                resdata['data'] = res;
                resdata['status'] = -1;
                res.send(resdata);
                res.end();
            });
        }
    });
});







/**
 *
 用于修改任务
 *
 @method changecomplete
 *
 @param { } 参数名 参数说明
 *
 *      {

        }
*/

app.post('/node/changecomplete', function (req, res) {

    for(var key in  req.cookies){
        console.log("cookie名:"+key);
        console.log(",cookie值:"+req.cookies[key]+"<br />");
    }

    var body = "";
    req.on('data', function (chunk) {
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        console.log("chunk:",chunk);
    });
    req.on('end', function () {
        // 生成返回格式对象
        let resdata = {};
        // 解析参数
        body = querystring.parse(body);  //将一个字符串反序列化为一个对象
        console.log("body:",body);
        console.log('body.userid: ', body.userid);

        // 业务开始
        changecomplete(body).then(function (data){
            console.log(data);
            resdata['data'] = "修改成功";
            resdata['status'] = 1;
            res.send(resdata);
            res.end();
        },function (res){
            resdata['data'] = res;
            resdata['status'] = -1;
            res.send(resdata);
            res.end();
        });
    });
});





/**
 *
 用于删除任务
 *
 @method deletetask
 *
 @param { } 参数名 参数说明
 *
 *      {

        }
*/

app.post('/node/deletetask', function (req, res) {

    for(var key in  req.cookies){
        console.log("cookie名:"+key);
        console.log(",cookie值:"+req.cookies[key]+"<br />");
    }

    var body = "";
    req.on('data', function (chunk) {
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        console.log("chunk:",chunk);
    });
    req.on('end', function () {
        // 生成返回格式对象
        let resdata = {};
        // 解析参数
        body = querystring.parse(body);  //将一个字符串反序列化为一个对象
        console.log("body:",body);
        console.log('body.userid: ', body.userid);

        // 业务开始
        deletetask(body.taskid).then(function (data){
            console.log(data);
            resdata['data'] = "修改成功";
            resdata['status'] = 1;
            res.send(resdata);
            res.end();
        },function (res){
            resdata['data'] = res;
            resdata['status'] = -1;
            res.send(resdata);
            res.end();
        });
    });
});






/**
 *
 用于测试
 *
 @method text
 *
 @param { } 参数名 参数说明
 *
 *      {

        }
*/

app.post('/node/text', function (req, res) {

    for(var key in  req.cookies){
        console.log("cookie名:"+key);
        console.log(",cookie值:"+req.cookies[key]+"<br />");
    }

    var body = "";
    req.on('data', function (chunk) {
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        console.log("chunk:",chunk);
    });
    req.on('end', function () {
        // 生成返回格式对象
        let resdata = {};
        // 解析参数
        body = querystring.parse(body);  //将一个字符串反序列化为一个对象
        console.log("body:",body);

        // 业务开始
        login(body).then(function (data){
            console.log(data);
            if(data.length > 0){
                resdata['data'] = data;
                resdata['status'] = 1;
                res.cookie('userid', data[0]['userid'], { expires: new Date(Date.now() + 2592000000), httpOnly: true });
                res.send(resdata);
                res.end();
            }else{
                resdata['data'] = data;
                resdata['status'] = 0;
                res.send(resdata);
                res.end();
            }
        },function (res){
            resdata['data'] = res;
            resdata['status'] = 0;
            res.send(resdata);
            res.end();
        });
    });
});








































































































// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  console.log(err)
  res.send(err.message)
})

// 设置监听端口
const SERVER_PORT = 4000
app.listen(SERVER_PORT, () => {
  console.info(`服务已经启动，监听端口${SERVER_PORT}`)
})

// export default app
exports.app = app;
