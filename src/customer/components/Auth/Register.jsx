import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Register() {
    const navigate=useNavigate();




    const handleSubmit=(event)=>{
        event.preventDefault();
        const data=new FormData(event.currentTarget);
        const userData={
            firstName:data.get('firstname'),
            lastName:data.get('lastname'),
            email:data.get("email"),
            password:data.get("password")
        };
        console.log("userData ",userData);
        

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                required
                id='firstname'
                name='firstname'
                label='First Name'
                fullWidth
                autoComplete='given-name'/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                required
                id='lastname'
                name='lastname'
                label='Last Name'
                fullWidth
                autoComplete='given-name'/>
            </Grid>
            <Grid item xs={12}>
                <TextField
                required
                id='email'
                name='email'
                label='Email'
                fullWidth
                autoComplete='email'/>
            </Grid>
            <Grid item xs={12}>
                <TextField
                required
                id='password'
                name='password'
                label='Password'
                fullWidth
                autoComplete='Password'/>
            </Grid>
            <Grid item xs={12}>
                <Button
                className='bg-[#235d46] w-full'
                type='submit'
                variant='contained'
                size='large'
                sx={{padding:".8rem 0"}}>
                    Register
                </Button>
            </Grid>
        </Grid>
        </form>
        <div className='flex justify-center flex-col items-center'>
            <div className='py-3 flex items-center'>
                <p>If You Have  An Account?</p>
                <Button onClick={()=>navigate("/login")} className='ml-5' size='small'>Login</Button>
            </div>
        </div>
    </div>
  )
}

export default Register