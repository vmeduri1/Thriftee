import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  isRequired,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import * as sessionActions from "../store/session"
import { useDispatch } from "react-redux";



export function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const dispatched = await dispatch(sessionActions.login({ email, password }))
    // return dispatch(sessionActions.login({ credential, password })).catch(
    // async (res) => {
    //   const data = await res.json();
    //   if (data && data.errors) setErrors(data.errors);
    // }
    if (dispatched.errors) setErrors(dispatch.errors)
    // } else setErrors(['issues'])                       // need to work on fix!!
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {errors.map((error, idx) => <span key={idx}>{error}</span>)}
      </div>
      <Stack spacing={3}>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <Input
              // ref={initialRef}
              placeholder="Email"
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              // ref={initialRef}
              placeholder="Password"
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          <br />
          <Button type='Submit'>Log in</Button>
        </FormControl>
      </Stack>
    </form>
  )
}