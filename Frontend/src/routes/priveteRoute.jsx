import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import LoginModal from '../Pages/LoginModal'

export default function PriveteRoute({children}) {
    const [loginOpen, setLoginOpen] = useState(true);

    const isAuth =useSelector((store)=>store.authReducer.isAuth)
    if(!isAuth){
        return <LoginModal loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
    }
  return (
    <div>
        {children}
    </div>
  )
}
