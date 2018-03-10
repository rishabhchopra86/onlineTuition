let express = require('express');
let jwt=require('jsonwebtoken');
let app = express();
let bodyParser=require('body-parser');
let portnumber=3000;
let secreat='onlinetuition';
var dateTime = require('node-datetime');
app.use(express.static('./public'));
app.use(bodyParser.json());
let arrayofat=[];
require('./mysqlconnect')('192.168.200.30','onlinetuition','onlinetuition','onlinetuition');

//middleware for authorization
authchecker=(req,res,next)=>{
  // console.log(req.headers.acesstoken);
  // console.log(arrayofat);
  let f=0;
  for(let i=0;i<arrayofat.length;i++){
      if(arrayofat[i].acesstoken==req.headers.acesstoken){
          f=1;
          next();
      }
  }
  if(f==0){
  res.send('login require');
  }
};

//http://domainname/
app.get('/',authchecker,  (req, res)=> {
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
  console.log(req)
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

app.post('/api/:tablename/login',(req,res)=>{
  login(req.params.tablename,req.body.email,req.body.password,(data)=>{
    let acesstoken=jwt.sign({email:data.email},secreat);
    res.set("acesstoken",acesstoken);
    arrayofat.push({"acesstoken":acesstoken,"user":data.email})
    console.log(arrayofat);
    res.send(data);
  })
});

app.post('/api/:tablename/logout',authchecker,(req,res)=>{
   for(let i=0;i<arrayofat.length;i++){
       if(req.headers.acesstoken==arrayofat[i].acesstoken){
           arrayofat.splice(i,1);
           console.log(arrayofat);
           res.send('logout');
       }
   }
});

app.listen(portnumber,  ()=> {
    console.log('started at 3000');
});
