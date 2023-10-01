const mongoose= require('mongoose')
const info1 = new mongoose.Schema({
   name:String,
    mail:String, 
    checkin:String,

        checkout:
            String, 
        guest:String,
        yourmessage:String,


    
})
module.exports= mongoose.model('Reservation',info1);