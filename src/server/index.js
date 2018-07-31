import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import url from 'url'

// 引入history模块
import history from 'connect-history-api-fallback'

// 正式环境时，下面两个模块不需要引入
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config from '../../build/webpack.dev.conf'

import mysql from 'mysql'

const app = express()

// 引入history模式让浏览器进行前端路由页面跳转
app.use(history())

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

const compiler = webpack(config)
//webpack 中间件
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
}))

app.use(webpackHotMiddleware(compiler))
app.use(express.static(path.join(__dirname, 'views')))
























// 业务
// ===========================================================


app.post('/result', function (req, res) {
    var connection = mysql.createConnection({
        host     : '127.0.0.1',
        user     : 'root',
        password : 'PASSroot1234',
        port: '3306',
        database: 'mytodo',
    });
    connection.connect();
    var sql = 'SELECT * FROM user';
    connection.query(sql,function (err, result) {
            if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
            }
        res.send(result);
    });
    connection.end();
    // var data = {};
    // data.data = req.path;
    // data.originalUrl = req.originzalUrl;
    // data.url = url.parse(req.url, true);
    // data.query = data.url.query;

});






app.post('/haveUserName', function (req, res) {
    var user_name=(JSON.stringify(req.body));
    console.log("User name = "+user_name);
    var connection = mysql.createConnection({
        host     : '127.0.0.1',
        user     : 'root',
        password : 'PASSroot1234',
        port: '3306',
        database: 'mytodo',
    });
    connection.connect();
    var sql = 'SELECT * FROM user';

    connection.query(sql,function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }
        res.send(user_name);
    });
    connection.end();
    // var data = {};
    // data.data = req.path;
    // data.originalUrl = req.originzalUrl;
    // data.url = url.parse(req.url, true);
    // data.query = data.url.query;

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

export default app
