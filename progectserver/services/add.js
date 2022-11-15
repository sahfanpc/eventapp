const  db = require('./db')

const Add=(eventname,eventdate,eventowner,priority)=>{
return db.Addevent.findOne({eventowner})
    .then(addevent=>{
    console.log(addevent)
const newAddevent=new db.Addevent({
    eventname,
    eventdate,
    eventowner,
    priority
})
newAddevent.save()
return {
    statuscode:212,
    status:true,
    message:"added seccessfully"
}
})

}

const eventShow=(eventowner)=>{
    return db.Addevent.find({eventowner}).then(events=>{
        if(events){
            return events
        }
    })
}
const Deletedevent=(eventname,eventdate)=>{
    return db.Addevent.deleteOne({eventname,eventdate}).then(events=>{
        if(events){
            console.log(events)
          
            
        }
    })
    
}
const Delete1=(eventname,eventdate,eventowner,priority)=>{
    return db.Delete.findOne({eventname})
    .then(Delete=>{
   
    const newDelete=new db.Delete({
        eventname,
        eventdate,
        eventowner,
        priority
    })
    newDelete.save()
  
})
}
const eventDel=(eventowner)=>{
    return db.Delete.find({eventowner}).then(events=>{
        if(events){
            return events
        }
    })
}




module.exports={Add,eventShow,Deletedevent,Delete1,eventDel}