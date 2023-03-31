import { Email } from '@mui/icons-material'
import React, { useState } from 'react'
import './Add.css'
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../context/context';


interface User {
  first_name: string;
  last_name: string;
  email: string;
}

function Add() {
  const { users, setusers } = useContext(UserContext)
  const [email, setemail] = useState<string>('')
  const [des, setdes] = useState<string>('')
  const [fn, setfn] = useState<string>('')
  const [ln, setln] = useState<string>('')
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  function save() {
    const newUser: User = { first_name: fn, last_name: ln, email: email };
    setusers([...users, newUser])
    navigate('/');
  }

  return (
    <div className='container'>
      <IconButton onClick={handleClick}><ArrowBackIcon />BACK</IconButton>

      <label htmlFor="uname"><b>Firstname</b></label>
      <input type="text" placeholder="Firstname" name="uname" onChange={(e) => setfn(e.target.value)} required />

      <label htmlFor="psw"><b>Lastname</b></label>
      <input type='text' placeholder="Lastname" name="psw" onChange={(e) => setln(e.target.value)} required />

      <label htmlFor="Email"><b>Email</b></label>
      <input type='email' placeholder="Email" name="Email" onChange={(e) => setemail(e.target.value)} required />

      <label htmlFor="designation"><b>Designation</b></label>
      <input type='email' placeholder="Designation" name="designation" onChange={(e) => setdes(e.target.value)} required />

      <button type="submit" onClick={save}>Save info</button>

    </div>
  )
}

export default Add;
