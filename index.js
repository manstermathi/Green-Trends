const express=require("express")
const cors=require("cors")
const bodyparser=require("body-parser")
const database=require("mysql")
const connect=express()

connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(express.static('public'))
connect.use(bodyparser.urlencoded({extended:true}))

let databaseconnection =database.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Mathi@262001",
    database:"gt"
})

databaseconnection.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("database connected")
    }
})

connect.post('/register',(request,response)=>{
    let{name,email,password}=request.body
    let sql='insert into greentrends(name,email,password)values(?,?,?)'
    databaseconnection.query(sql,[name,email,password],(error,result)=>{
     if(error){
        response.send({"status":"error"})
     }
     else{
        response.send({"status":"success"})
     }
    })
})

connect.post('/login',(request,response)=>{
    let{email,password}=request.body
    let sql='select * from greentrends where email=?'
    databaseconnection.query(sql,[email],(error,result)=>{
        if(error){
            response.send({"status":"empty_set"})
        }
        else if(result.length>0){
            let dbemail=result[0].email
            let dbpassword=result[0].password
            let id=result[0].id
            if(dbemail===email && dbpassword===password){
                response.send({"status":"success","id":id})
            }
            else{
                response.send({"status":"invalid_user"})
            }

        }
        else{
            response.send({"status":"error"})
        }
    })
})

connect.get('/display/:id',(request,response)=>{
    let{id}=request.params
    let sql='select * from greentrends where id=?'
    databaseconnection.query(sql,[id],(error,result)=>{
      if(error){
          response.send(error)
          console.log(error)
      }
      else{
          response.send(result)
      }
    }
    )})
    connect.get('/getdata', (request, response) => {
        let sql = 'select * from greentrends'
        databaseconnection.query(sql,(error, result)=> {
            if(error){
         response.send(error)
        console.log(error)
        }
       else {
                response.send(result)
            }
       })
    })
    connect.get('/getsingle',(request,response)=>{
        let{id}=request.params
        let sql='select * from greentrends where id=?'
        databaseconnection.query(sql,[id],(error,result)=>{
          if(error){
              response.send(error)
              console.log(error)
          }
          else{
              response.send(result)
          }
        }
        )
  })
  connect.put('/update/:id',(request,response)=>{
    let{id}=request.params
    let {name,email,password}=request.body
    let sql='update greentrends set name=?,email=?,password=? where id=?'
    databaseconnection.query(sql,[name,email,password,id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
    })
})
connect.post('/formpage', (request, response) => {

    let {name,servicetype,date,time } = request.body
    let sql ='insert into bookingpage(name,servicetype,date,time)values(?,?,?,?)'
    databaseconnection.query(sql,[name,servicetype,date,time], (error,result) => {
        if(error) {
            response.send({"status":"error"})
            console.log(error)
        }
        else {
            response.send({"status":"success"})
        }
    })
})
connect.post('/delete' ,(request,response)=>{
    let name=request.body.name
    let sql='delete from bookingpage where name=?'
    databaseconnection.query(sql,[name],(error,result)=>{
      if(error){
        response.send({" status":"error"})
      }
      else {
        response.send({"status":"success"})
      }
    }
    )
})
connect.listen(3002, () => {
  console.log(`Server is running on port ${3002}`);
});



