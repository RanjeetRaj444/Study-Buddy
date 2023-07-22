import React from 'react'
import Navbar from './otherComponent/navbar'
import { styled } from 'styled-components'

export default function UserLog() {
  return (
    <div>
      <Navbar Path={'Pages / UsersLog'} RouteName={'User Logs'} />
      <Div></Div>
    </div>
  )
}
const Div = styled.div`
width: 100%;
height: 540px;
border-radius:10px;
background-color: white;
overflow-y: scroll;
padding:10px;

@media screen and (max-width:700px){
  height:610px;
}

`