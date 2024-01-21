import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState()
    const [password,setPassword] = useState()
    const handlelogin =() =>{
        console.warn(email,password);
    }
  return (
    <div className='ml-76 mt-24 '>Login Page
    <input className='border border-s-sky-600 block m-19 p-2 w-80' name="email" type="text" placeholder="enter email" onChange={(e)=> setEmail(e.target.value)}  value={email}        />
    <input  className='border border-s-sky-600 block m-19 p-2 w-80' name="password" placeholder="enter email" type="password"  onChange={(e) => setPassword(e.target.value)} value={password}        />
    <button  className=" border border-s-gray-700 m-1 p-2 bg-cyan-600 cursor-pointer" onClick={handlelogin} type="button">login</button>
    </div>
  )
}

export default Login