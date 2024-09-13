import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from 'next/link';
type Props = {}

function LoginPage({}: Props) {
  return (
    <div className='container mx-auto flex flex-col items-center justify-center'>
        <h3 className='text-xl my-6'>Login page</h3>
        <form action="" className='flex flex-col w-2/4 space-y-6'> 
            <TextField id="email" label="Email" variant="outlined" className=''/>
            <TextField id="password" label="Password" variant="outlined" className=''/>
            <Button type='submit' color="success" variant="contained">Sign in</Button>

        </form>
        <div className='my-3'>
        <p>Already have account   <Link className='text-blue-600 hover:underline' href="/register">register page</Link>
        </p>
        </div>
    </div>
  )
}

export default LoginPage;
