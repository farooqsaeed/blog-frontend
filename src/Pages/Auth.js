import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
}
from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';


function Auth() {
  const navgate =  useNavigate();
  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerfirst_name, setRegisterfirst_name] = useState('');
  const [registerlast_name, setRegisterlast_name] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  
  // call login api

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Make API call for login
      const response = await axios.post('http://127.0.0.1:4000/v1/api/user/login', {
        email: loginEmail,
        password: loginPassword,
      });
  
      console.log('Login response:', response.data);
      localStorage.setItem("token",response.data.token);
      localStorage.setItem("isLoggedIn",true);
      console.log(localStorage.getItem("token"))
      navgate("/dashboard");
  
      // Reset form values or perform any further actions
  
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login error
    }
  };

  // register
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Make API call for registration
      const response = await axios.post('http://127.0.0.1:4000/v1/api/register/user', {
        first_name: registerfirst_name,
        last_name: registerlast_name,
        email: registerEmail,
        password: registerPassword,
      });
  
      console.log('Registration response:', response.data);
      localStorage.setItem("token",response.data.token);
      localStorage.setItem("isLoggedIn",true);
      console.log(localStorage.getItem("token"))
      navgate("/dashboard");
  
      // Reset form values or perform any further actions
  
    } catch (error) {
      console.error('Error registering:', error);
      // Handle registration error
    }
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Login</p>
          </div>
          <form onSubmit={handleLoginSubmit}>
          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'
          value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'
          value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
          </form>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Register</p>
          </div>
          <form onSubmit={handleRegisterSubmit}>
          <MDBInput wrapperClass='mb-4' label='First Name' id='form1' type='text'
          value={registerfirst_name} onChange={(e) => setRegisterfirst_name(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Last Name' id='form1' type='text'
          value={registerlast_name} onChange={(e) => setRegisterlast_name(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'
          value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'
          value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)}/>
          <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
          </form>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Auth;