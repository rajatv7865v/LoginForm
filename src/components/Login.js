import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    pass: "",
  });
  const [val, setval] = useState([]);
  const getData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const saveData = (e) => {
    e.preventDefault();
    const getuserArr=localStorage.getItem("uservalue");
    const { email, pass } = data;

    if (email === "" || !email.includes("@")) {
      alert("PLease valid email address");
    } else if (pass === "" || pass.length < 5) {
      alert("Password length should be greater than 5");
    } else {
      if(getuserArr && getuserArr.length){
        const userdata=JSON.parse(getuserArr);
        const userlogin = userdata.filter((el,k)=>{
            return el.email===email && el.pass ===pass
        });
        
      
      if(userlogin.length ===0){
        alert("enter valid data")
      }else{
        alert("LOgin successfully")
      }
    }
}
  };
  return (
    <>
      <div className="container mt-3">
        <section>
          <div className="left_data">
            <h2 className="text-center col-lg-6">Sign In</h2>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  onChange={getData}
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  onChange={getData}
                  name="pass"
                  placeholder="Password"
                />
              </Form.Group>

              <Button variant="primary" onClick={saveData} type="submit">
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Alredy Have an Account{" "}
              <span>
                <NavLink to="/">SignUp</NavLink>
              </span>{" "}
            </p>
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

export default Login;
