import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Header from "./LandingPAge/Header";
import { useNavigate } from "react-router-dom";


const BookingForm = () => {
  const [name,setname] = useState("")
  const[mail,setmail]=useState("")
  const [checkin, setcheckin] = useState(" ")
  const [checkout, setcheckout] = useState(" ")
  const [guest, setguest] = useState("")
  const [text, settext] = useState("")
 const s= localStorage.getItem('amount')
 const s1= localStorage.getItem('checkin')
 const s2= localStorage.getItem('checkout')
 const s4= localStorage.getItem('adults')
 const s5= localStorage.getItem('children')
 const s6= localStorage.getItem('roomtype')


 const navigate= useNavigate()


  const checkouts = async(amount) => {

  
    
    localStorage.setItem('amount', amount); // Set the 'amount' in localStorage\
    try{
    
      var data1 = await fetch("http://localhost:5000/Order",{
        method: 'POST', 
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({name, amount})
      })
     
      var keys= await fetch("http://localhost:5000/key",{
        method: 'GET',
    
      })
      keys = await keys.json()
      console.log(keys,"yes")
      data1 = await data1.json()
    
    
      // const keys='rzp_test_OmCfFJhnp3Fztn'
      console.log(keys)
      console.log(data1.amount)
      console.log(data1.id)
      console.log(data1)
    
   
      if (data1.success) {
    
      const  options = {
        key:keys.key, // Enter the Key ID generated from the Dashboard
        amount: data1.order.tot, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Acme Corp", //your business name
        description: "Test Transaction",
        // image: "https://example.com/your_logo",
        order_id: data1.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:5000/verification",
        handler: function (response) {
          // Handle the payment success callback here
          console.log("Payment successful: ", response);
          try {
            navigate('/');
          } catch (error) {
            console.error('Navigation error:', error);
          }
          // You can navigate to a success page or perform further actions here
    
          // Save data to the database (you need to implement this on your backend)
          saveDataToDatabase();
        },
        prefill: { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
            name: "Gaurav Kumar", //your customer's name
            email: "gaurav.kumar@example.com",
            contact: "9000090000" //Provide the customer's phone number for better conversion rates 
        },
    
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#3399cc"
        }
    };
    const rzp1 = new window.Razorpay(options);
    
            rzp1.on("payment.success", function (response) {
              // Payment was successful, now save data to the database
              saveDataToDatabase();
              console.log("Payment successful: ", response);
              // You can navigate to a success page or perform further actions here
            });
    
            rzp1.open();
          } else {
            console.error("Error creating Razorpay order:", data1.error);
            // Handle the error, e.g., show an error message to the user
          }
        } catch (error) {
          console.error("Error processing payment:", error);
          // Handle the error, e.g., show an error message to the user
        }
      };
      
    
      const saveDataToDatabase = async () => {
        
        try {
    
          // Send a request to your server to save data to the database
          const response = await fetch("http://localhost:5000/saveDataToDatabase", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, mail, checkin:s1, checkout:s2, amount:s ,guest,text,adult:s4,children:s5,roomtype:s6}),
          });
    
          const data = await response.json();
    
          if (data.success) {
            console.log("Data saved successfully:", data);
            // You can show a success message to the user
          } else {
            console.error("Error saving data:", data.error);
            // Handle the error, e.g., show an error message to the user
          }
        } catch (error) {
          console.error("Error saving data:", error);
          // Handle the error, e.g., show an error message to the user
        }
      };
    
  
  




  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server, etc.)
  };

  return (
    <>
    <Header />
    <Container className="py-5" style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Book a Hotel Room</h2>
      <Form onSubmit={(e) => { e.preventDefault(); checkouts(s); }}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e)=>{
              setname(e.target.value)
            }}
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={mail}
            onChange={(e)=>{
              setmail(e.target.value)
            }}            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group controlId="checkIn">
              <Form.Label>Check-in Date</Form.Label>
              <Form.Control
                type="date"
                value={s1}
                // onChange={(e)=>{
                //   setcheckin(e.target.value)
                // }}                
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="checkOut">
              <Form.Label>Check-out Date</Form.Label>
              <Form.Control
                type="date"
                value={s2}
                // onChange={(e)=>{
                //   setcheckout(e.target.value)
                // }}              
                  required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="guests">
          <Form.Label>Number of Guests</Form.Label>
          <Form.Control
            as="select"
            value={guest}
            onChange={(e)=>{
              setguest(e.target.value)
            }}          >
            <option value={1}>1 Guest</option>
            <option value={2}>2 Guests</option>
            <option value={3}>3 Guests</option>
            {/* Add more options as needed */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            value={text}
            onChange={(e)=>{
              settext(e.target.value)
            }}            rows={3}
            placeholder="Optional: Leave a message for the hotel"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    </>
  );
};

export default BookingForm;
