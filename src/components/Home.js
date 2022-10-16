import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {NavLink} from 'react-router-dom'


const Home = () => {
  const[data,setData]=useState({
    name:'',
    email:'',
    date:'',
    pass:'',
  });
  const[val,setval]=useState([]);
  const getData=(e)=>{
   
    setData(
      {
        ...data,
        [e.target.name]:e.target.value
      }
    )
   
  }
  const saveData=(e)=>{
  e.preventDefault();
  const{name,email,date,pass}=data;

  if(name==="" || name.length < 3){
    alert("please Enter valid name")
  }
  else if(email==='' || (!email.includes("@"))){
    alert ("PLease valid email address")
  }else if(date===''){
    alert("plaese enter correct date")
  }
  else if(pass==='' || pass.length<5){
    alert("Password length should be greater than 5")
  }else{
    console.log(data)
    localStorage.setItem("uservalue",JSON.stringify([...val,data]));
  }
  
  }
  return (
    <>
      <div className="container mt-3">
        <section>
          <div className="left_data">
            <h2 className="text-center col-lg-6">Sign Up</h2>
            <Form >
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="text" onChange={getData} name='name' placeholder="Enter Your Name" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="email" onChange={getData}  name='email' placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control onChange={getData} name='date' type="date" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control type="password" onChange={getData} name='pass' placeholder="Password" />
              </Form.Group>

              <Button variant="primary"  onClick={saveData} type="submit">
                Submit
              </Button>
            </Form>
            <p className="mt-3">Alredy Have an Account <span><NavLink to='/login'>Sign In</NavLink></span> </p>
          </div>
          <div className="right_data">
            <div className="sign_img">
                <img src="" alt="img" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
