import { Navigate , Outlet} from "react-router-dom";
import React from 'react'

const Private = () => {
        const auth = localStorage.getItem('users');
      return auth ? <Outlet/>:<Navigate to ="/signup" />
  
}

export default Private