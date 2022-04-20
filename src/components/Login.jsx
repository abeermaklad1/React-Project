import {useRef, useEffect, useState} from "react";
import { Container, Form, Button } from "react-bootstrap";
//import axios from "axios";

export default function Login() {
    let myInputRef = useRef();
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    let [username, setUsername] = useState('');
    let [email, setEmail] = useState('');
    let [pass, setPass] = useState('');
    let [phone, setPhone] = useState("");
    let [errors, setErrors] = useState({username: null, email: null, phone: null, pass: null});

    
  // let login = async (post) =>{
  //   let response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, post);
  //   console.log(response.data);
  // }

    useEffect(() => {
        myInputRef.current.focus()
    }, []);
    
    let getUsernameValue = (e) => {
        setUsername(e.target.value);
    };
    let getEmailValue = (e) => {
        setEmail(e.target.value);
    };
    let getPasswordValue = (e) => {
        setPass(e.target.value);
    };
    let getPhonelValue = (e) => {
        setPhone(e.target.value);
    };

    let validateForm = () => {
        let errors = {};
        if(username.length <= 3){
            errors.username = 'username length must be greater than 3';
        }
        if(!regex.test(email)){
            errors.email = 'email invalid';
        }
        if(phone.length != 11){
            errors.phone = 'invalid phone number';
        }
        if(pass.length <= 4){
            errors.pass = 'password length must be greater than 4 digits';
        };
        setErrors(errors);
        
        return Object.keys.length != 0 ? false : true;
    };
    let submitHandler = (e) => {
        e.preventDefault();
        let result = validateForm();
        
        if(result){
            //call API
            let values = {username, email, phone, pass};
            console.log(values);
            //login(values);
            
        }
        else{
            //show errors
        }
        console.log(errors);
    };

  return (
    <Container style={{border:"2px solid rgb(107, 164, 193 )"}} className=" rounded-3 my-3 p-3 w-75">
      <h2 style={{color: 'rgb(107, 164, 193 )'}} className="text-center ">Login</h2>
      <div className="row">
      <Form onSubmit={submitHandler} className="col-6 ">
      <Form.Group className="mb-3 " controlId="formBasicUsername">
          <Form.Label className="fw-bold">Username</Form.Label>
          <Form.Control 
           type="text"
           placeholder="Enter Username"
           value={username}
           onChange={(event) => {getUsernameValue(event)}}
            />
          <Form.Text className="text-danger">
            {errors.username}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control
           type="email" 
           placeholder="Enter email"
           value={email}
           onChange={(event) => {getEmailValue(event)}}
            />
          <Form.Text className="text-danger">
            {errors.email}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label className="fw-bold">Phone Number</Form.Label>
          <Form.Control
           type="number" 
           placeholder="Enter Phone"
           value={phone}
           onChange={(event) => {getPhonelValue(event)}}
            />
          <Form.Text className="text-danger">
            {errors.phone}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
           type="password"
           placeholder="Password"
           value={pass}
           onChange={(event) => {getPasswordValue(event)}}
            />
            <Form.Text className="text-danger">
            {errors.pass}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <input
        ref={myInputRef}
        type='search'
        placeholder="Search"
        className="form-control mb-3"
        
        ></input>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <div className="col-6">
      <img src={require('../assets/images/login.png')} className="img-fluid rounded" alt="" style={{ height: '100%' }} />

      </div>
      </div>
     
    </Container>
  );
}
