import React from 'react'
import './SecondPage.css'

import Form from 'react-bootstrap/Form';
import {       CiLocationOn } from "react-icons/ci";
import {       FcCallback } from "react-icons/fc";
import {       AiOutlineMail} from "react-icons/ai";

const Header = () => {
  return (
    <>
 
 <div className='container-fluid header mb-5' style={{ backgroundImage: "url(https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=600)", backgroundSize: "cover", backgroundPosition: "center", height: "25rem", position: "relative" }}>
  <div className="row imgdiv" style={{ position: "absolute", top: "27%", left: "13%", zIndex: 2, color: "white" }}>
    <div className="col">
      <h2  style={{ fontWeight: 600 }} className='bussinn'> TRUSTED ACCOUNTANTS ,</h2>
      <h1 className='mt-3 bussin' style={{ fontWeight: "bold" }}>& BUSINESS ADVISOR</h1>
      <button className='mt-3 btn btn-primary'>CONSULT NOW</button>
    </div>
  </div>
  </div>
  <div className="container">
  <div className="row">
  <div className="col  mt-5">
    <h1 className="  mb-4" style={{fontWeight:"bold"}}> WHAT IS BUSINESS ADVISOR ? </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi labore similique dolorum laboriosam dolores numquam assumenda nulla doloribus veniam, expedita, aliquid, maxime dolorem! Vitae, sint qui porro iusto odio et.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sequi nesciunt ratione perspiciatis tempora soluta similique amet iusto iure tenetur! Eaque non quam excepturi placeat cum. Excepturi voluptas error nesciunt?

    </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt laborum autem accusantium quo omnis tempora alias doloribus asperiores vero, minus distinctio beatae quod laudantium, amet dolore quas praesentium. Aliquid, architecto!</p>
  </div>
<div className="col col-sm-12 col-md-6 mt-5 mb-5 bg-primary " style={{height:"33rem",borderRadius:"60px"}}>
<Form style={{width:"50%" ,marginLeft:"25%", marginTop:"5%"}}>
  <h1 style={{fontWeight:"bold" , fontSize:60}}>30% <span style={{fontWeight:"normal" , fontSize:50}}>OFF</span></h1>
  <h5 style={{fontSize:40,color:"white"}}>On All Services </h5>
<Form.Group className="mb-4 mt-5" controlId="exampleForm.ControlInput1">
        <Form.Control  type="text" placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" placeholder="Enter Your Number" />
      </Form.Group>
      
      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <button className='btn btn-danger' type='submit'> Submit </button>
    </Form>
</div>
  </div>
<div className="container mt-5 mb-5">
<div className="row">
  <div className="col"><CiLocationOn size="30px" color="black" style={{ marginRight: 30 ,background:" rgb(8, 201, 208)",color:"blue",width:90,height:60,paddingTop:6 ,marginBottom:6}} />
  <span style={{fontWeight:"bold"}}>Location</span>
 </div>
 <div className="col"><AiOutlineMail size="30px" color="black" style={{ marginRight: 30 ,background:" rgb(8, 201, 208)",color:"blue",width:90,height:60,paddingTop:6 ,marginBottom:6 }} />
 <span style={{fontWeight:"bold"}}>Email Us</span>
 </div>
 <div className="col"><FcCallback size="30px" color="black" style={{ marginRight: 30 ,background:" rgb(8, 201, 208)",color:"blue",width:90,height:60,paddingTop:6 ,marginBottom:6}} />
 <span style={{fontWeight:"bold"}}>Call US </span>
 </div>

</div>
</div>

  </div>


    </>
  )
}

export default Header
