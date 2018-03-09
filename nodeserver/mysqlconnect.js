module.exports = function(host,user,password,databsase) {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: databsase
    });
    //Callback provide call back to your function
    //select all data from given table in param
    this.selectAll = (tablename,callback) => {
        con.query("SELECT * FROM " + tablename +" where isActive=1", function (err, result, fields) {
            if (err) callback(err);;
            callback(result);
        });
    }

    //insert data into table by passing table name,data in (key:object)
    this.insertdata = (tablename,data,callback) => {
        var key="";
        var value="";
        for(var d in data){
            key=key+d+",";
            //this is for like name,age,gender
           if(typeof data[d]=="string"){
               value=value+"'"+ data[d]+"',";
               //this is for like 'Rishabh,'
           }
           else if(typeof data[d]=="number"){
               value=value+ data[d]+",";
               //this is for like 53,
           }
           else{
               value=value+"NULL,";
               //this is for like NULL,
           }
        }
        s=s.slice(0, -1);
        s1=s1.slice(0, -1);
        con.query("insert into " + tablename +" ("+s+") values("+s1+")", function (err, result, fields) {
            if (err) callback(err);
            callback(result);
        });
    }

    //select all data from given table in param by its pk id
    this.selectAllByPk = (tablename, id,callback) => {
        con.query("SELECT * FROM " + tablename + " where id=" + id +" and isActive=1", function (err, result, fields) {
            if (err) callback(err);;
            callback(result);
        });
    }

    //select all data from given table having username and password
    this.login = (tablename,email, password,callback) => {
        con.query("SELECT * FROM " + tablename + " where email='" + email + "' and password='"+password+"' and isActive=1", function (err, result, fields) {
            if (err) callback(err);;
            callback(result);
        });
    }

    //run sql queries
    this.runsql = (query,callback) => {
        con.query(query, function (err, result, fields) {
            if (err) callback(err);;
            callback(result);
        });
    }

    //delete  data from given table by id ,here isActive will became 0
    this.deleteByPk = (tablename,id,callback) => {
        con.query("update " + tablename +" set isActive=0 where id="+id, function (err, result, fields) {
            if (err) callback(err);;
            callback(result);
        });
    }
    //update  data from given table by id
    this.updatedata= (tablename,data,callback) => {

        var set="";
        for(var d in data) {
            if(d!="id") {
                set += d + "=";
                if (typeof data[d] == "string") {
                    set = set + "'" + data[d] + "',";
                    //this is for like 'Rishabh,'
                }
                else if (typeof data[d] == "number") {
                    set = set + data[d] + ",";
                    //this is for like 53,
                }
                else {
                    set = set + "NULL,";
                    //this is for like NULL,
                }
            }
        }
        set=set.slice(0, -1);
        console.log("update " + tablename +" set "+set+" where id="+data.id);
        con.query("update " + tablename +" set "+set+" where id="+data.id, function (err, result, fields) {
            if (err) callback(err);;
            callback(result);
        });
    }
}