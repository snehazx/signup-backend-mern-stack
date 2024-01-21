import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
   const [name,setName] = useState("");
   const[password, setPassword] = useState("");
   const navigate = useNavigate();
   const[email, setEmail] = useState("");
      //  useEffect(() => {
      //   const auth = localStorage.getItem('users');
      //   if(auth)
      //   { navigate('/')  
      //  }},
      //   []  );
      useEffect(() => {
        const auth = localStorage.getItem('user'); 
        if (auth) {
          navigate('/');
        }
      }, []); // Fix: Empty dependency array for useEffect
    
      const collectData = async () => {
        console.warn(name, email, password);
        const apiPayload = { name: name, email: email, password: password };
        try {
          let result = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            body: JSON.stringify(apiPayload),
    headers: { 'Content-Type': 'application/json' },
          });
    
          result = await result.json();
          console.warn(result);
          localStorage.setItem('user', JSON.stringify(result));
          navigate('/');
        } catch (error) {
          console.error('Error:', error);
          // Handle error, show a message, or perform any necessary actions
        }
      };
  //   const collectData= async()=>{
  //   console.warn(name,email,password);
  //   const apiplayload ={name:name,email:email,password:password}
  //   let result =  await fetch('http://localhost:3000/signup',{
  //     method:'POST',
  //     body:JSON.stringify(apiplayload),
  //     headers:{'Content-Type':'application/json'}
  //   })
  //   result = await result.json()
  //   console.warn(result)
  //   localStorage.setItem('user',JSON.stringify(result));
  //    navigate('/')
  //  }
  return (
    <div className="ml-76 ">
      <div>Register</div>
      <input
        className="border border-s-sky-600 block m-19 p-2 w-80"
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
        name="name"
      />
      <input
        className="border border-solid-1 block m-19 p-2 w-80"
        value={email}
        onChange={(e) =>setEmail(e.target.value)}
        type="email"
        placeholder="Enter email"
        name="email"
        required
      />
      <input
        className="border border-solid-1 block m-19 p-2 w-80"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter  password"
        name="password"
        required
      />
      
      <button onClick={collectData} className="  border border-s-gray-700 m-1 p-2 bg-cyan-600 cursor-pointer">
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
