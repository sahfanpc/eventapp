// const db=require('./db')
const  db = require('./db')

const Register=(userid,email,password,dateofbirth)=>{
    return db.User.findOne({email})
    .then(user=>{
        console.log(user)
    if(user){
        return{
            statuscode:420,
            status:false,
            message:"already exist"
        }
    }else{
        const newUser=new db.User({
            userid,
            email,
            password,
            dateofbirth
        })
        newUser.save()
        return{
            statuscode:212,
            status:true,
            message:"user added seccessfully"
        }
    }
    })
}
const Login=(email,password)=>{
    return db.User.findOne({email,password})
    .then(user=>{
        console.log(user)
    if(user){
        return{
            statuscode:212,
            status:true,
            message:"login seccessfully",
            userid:user.userid
        }
    }else{
        return{
            statuscode:420,
            status:false,
            message:"login failed"
        }
    }
    })
}
module.exports={Register,Login}