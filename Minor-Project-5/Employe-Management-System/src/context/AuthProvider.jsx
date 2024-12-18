import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
 useEffect(()=>{
  const {employes,admin} = getLocalStorage();
  setUser({employes,admin})
 },[])
  return (
    <div>
      <AuthContext.Provider value={user}>

      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
