const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/EVENTAPP',{
    useNewUrlParser:true
})
const User=mongoose.model('User',{
    userid:Number,
    email:String,
    password:String,
    dateofbirth:String

})
const Addevent=mongoose.model('Addevent',{
    eventname:String,
    eventdate:String,
    eventowner:Number,
    priority:String
})
// const Deletedevent=mongoose.model('Deletedevent',{
//     eventname:String,
//     eventdate:String,
//     eventowner:Number,
//     priority:String
// })
const Delete=mongoose.model('Delete',{
    eventname:String,
    eventdate:String,
    eventowner:Number,
    priority:String
})
module.exports={User,Addevent,Delete}