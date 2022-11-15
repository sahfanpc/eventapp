const express=require('express')
const app=express()
const databaseservices=require('./services/register')
const dataservises=require('./services/add')
app.use(express.json())
const cors=require('cors');
app.use(cors({
    origin:'http://localhost:4200'
}))
app.listen(3003,()=>{
    console.log("running")
})
app.post('/register',(req,res)=>{
    databaseservices.Register(req.body.userid,req.body.email,req.body.password,req.body.dateofbirth)
    .then(result=>{
        res.status(result.statuscode).json(result)
    })
})
app.post('/login',(req,res)=>{
    databaseservices.Login(req.body.email,req.body.password)
    .then(result=>{
        res.status(result.statuscode).json(result)
    })
})
app.post('/add',(req,res)=>{
   dataservises.Add(req.body.eventname,req.body.eventdate,req.body.eventowner,req.body.priority)
    .then(result=>{
        res.status(result.statuscode).json(result)
    })
})

app.get('/events/:eventowner',(req,res)=>{
    dataservises.eventShow(req.params.eventowner).then(result=>{
        if(result){
            res.json(result)
        }
    })
})
app.delete('/delete/:eventname/:eventdate',(req,res)=>{
    dataservises.Deletedevent(req.params.eventname,req.params.eventdate).then(result=>{
        if(result){
            res.json(result)
        }
    })
})
app.post('/delete',(req,res)=>{
    dataservises.Delete1(req.body.eventname,req.body.eventdate,req.body.eventowner,req.body.priority)
    .then(result=>{
            res.json(result)
    })
})
app.get('/eventdel/:eventowner',(req,res)=>{
    dataservises.eventDel(req.params.eventowner).then(result=>{
        if(result){
            res.json(result)
        }
    })
})