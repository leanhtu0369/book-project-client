import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import AuthService from "../services/auth.service";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) =>{
    e.preventDefault();

    AuthService.login(email, password).then(
      () => {
        window.location.pathname = "/"
      },
      error => {

      }
    );
  }

  const onChangeEmail = e => {
    setEmail(e.target.value)
  }

  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  return (
    <>
      <Form 
        method="POST" 
        onSubmit={handleLogin}
        style={{
          border: "1px solid #dee2e6",
          borderRadius: ".25rem",
          padding: "1.5rem"
        }}
      >
        <FormGroup>
          <Label for="loginEmail">Email</Label>
          <Input 
            type="email" 
            name="email" 
            id="loginEmail" 
            placeholder="with a placeholder" 
            value={email}
            onChange={onChangeEmail}
          />
        </FormGroup>
        <FormGroup>
          <Label for="loginPassword">Password</Label>
          <Input 
            type="password" 
            name="password" 
            id="loginPassword" 
            placeholder="password placeholder" 
            value={password}
            onChange={onChangePassword}
          />
        </FormGroup>
        
        <Button>Submit</Button>
      </Form>
    </>
  )
}

export default Login
