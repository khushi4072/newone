
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path');
var instance = require('./Razorpay');



const userControler = require('./controller/user')
// const collection = require('./togglesign')
// const collection2 = require('./togglesignup')

require('./Confi')
const information = require('./Contactus')
const Reserv = require('./Reservation')



const cors=require('cors');
// const { Collection } = require('mongoose')
app.use(cors())

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json());


app.use(express.json())
app.use(express.static(path.join(__dirname, "../frontend/build")))




app.listen(process.env.PORT || 5000);

app.post('/Order', async (req, resp) => {
  const option = {
    amount: Number(req.body.amount * 100),
    currency: 'INR',
  };
  const order = await instance.orders.create(option);
  console.log(order);
  resp.status(200).json({
    success: true,
    order,
  });
});
app.get('/key', (req, resp) => {
  resp.json({ key: 'rzp_test_OmCfFJhnp3Fztn' });
});

app.post('/saveDataToDatabase', async (req, resp) => {
  try {
   
    const  {
 
      name,
      mail,
      checkin,
      checkout,
      amount,
      guest,
      text,
      adult,
      children,
      roomtype
        } = req.body;
     const  formData = new information({
                  name: name,
                  mail: mail,
                  checkin: checkin,
                  checkout: checkout,
                  amount: amount,
                  guest:guest,
                  text:text,
                  adult:adult,
                  children:children,
                  roomtype:roomtype
                
                });
          
                // Save the form data to the database
                const savedFormData = await formData.save();
                console.log('Form data saved:', savedFormData);
    // Implement code to save the formData to your database (e.g., using Mongoose for MongoDB)

    // Respond with a success message
    resp.status(200).json({
      success: true,
      message: 'Data saved successfully',
    });

  } catch (error) {
    console.error('Error saving data:', error);
    resp.status(500).json({
      success: false,
      error: 'Error saving data',
    });
  }
});




// contact us  detail 
// app.post('/contact', async(req, res) => {
//   console.log('Hello World!')
// let info = new information({
//     name:req.body.name,
//     email:req.body.email,
//     text:req.body.text


//   })
//   info = await info.save()
// console.log(info)
// res.send('lets go')
// })

// resevation 
app.post('/Reservation', async(req, res) => {
  console.log('Hello World!')
let info = new Reserv({
    name:req.body.name,
    mail:req.body.mail,
    checkin:req.body.checkin,
    checkout:req.body.checkout,
    guest:req.body.guest,
    yourmessage:req.body.yourmesssage
  })
  info = await info.save()
console.log(info)
res.send('lets go')
})


app.post('/signup' , userControler.signup)
app.post('/signin' , userControler.signin)


// app.post('/Authentication' , async(req,res)=>{

//   try{
//     const check=await collection.findOne({email:req.body.email})

//     if(check){
//       res.json("exist")
//     }
//     else{
//       res.json("notexist")
//       console.log("yess")
//     }
//   }
//   catch(e){
//     res.json("notexist")
//   }
// })


// app.post("/signup" , async(req,res)=>{

  

//     const check=await collection2.findOne({email:req.body.email})

//     if(check){
//       res.json("exist")
//       console.log("exist")
 
//     }
//     else{
      
//   var data=new collection2({
//     name:req.body.name,
//     email:req.body.email,
//     password:req.body.password
//   })
//   data= await data.save()
//   res.json("Notexist")
//   console.log("Notexist")
//     }
  
  
// })

// app.post("/signin",async(req,res)=>{
// const data= await collection2.findOne({email:req.body.email})
// if(data){
//   if(req.body.password==data.password){
//     res.json("sucess")
//     console.log("success")
    
//   }
//   else{
//     res.json("sorry")
//     console.log("sorry")
//   }
// }
// else{
//   res.json("nothing exist")
//   console.log("nothing exist")
 
// }
// })