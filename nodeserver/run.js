let express = require('express');
let app = express();
let bodyParser=require('body-parser');
let portnumber=3000;
var dateTime = require('node-datetime');
app.use(express.static('./public'));
app.use(bodyParser.json());
require('./mysqlconnect')('localhost','root','','onlinetuition');

//http://domainname/
app.get('/',  (req, res)=> {
    res.send('Welcome to Online Tuition Api');
});

//http://domainname/api/(any table name) =>get data
app.get('/api/:tablename/',  (req, res)=> {
    selectAll(req.param("tablename"),(data)=>{
        res.send(data);
    });
});

//http://domainname/api/(any table name)/(any pk id) =>get particular pk data from table
app.get('/api/:tablename/:id',  (req, res)=> {
    selectAllByPk(req.param("tablename"),req.param("id"),(data)=>{
        res.send(data);
    });
});

//http://domainname/api/(any table name)/(any pk id) =>delete pk from table
app.delete('/api/:tablename/:id',  (req, res)=> {
    deleteByPk(req.param("tablename"),req.param("id"),(data)=>{
        res.send(data);
    });
});

//http://domainname/api/(any table name) || post body form in json
//data is on key value pair , key must be same as table field => insert data in given table
app.post('/api/:tablename',  (req, res)=> {
    var dt = dateTime.create();
    var formatted = dt.format('Y-m-d H:M:S');
    req.body.createdDate=formatted;
    insertdata(req.param("tablename"),req.body,(data)=>{
        res.send(data);
    });
});
//http://domainname/api/(any table name) || post body form in json
//data is on key value pair , key must be same as table field => update data in given table
app.put('/api/:tablename',  (req, res)=> {
    var dt = dateTime.create();
    var formatted = dt.format('Y-m-d H:M:S');
    req.body.updatedDate=formatted;
    updatedata(req.param("tablename"),req.body,(data)=>{
        res.send(data);
    });
});
app.listen(portnumber,  ()=> {
    console.log('started');
});
