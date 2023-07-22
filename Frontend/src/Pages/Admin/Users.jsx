import React from 'react'
import Navbar from './otherComponent/navbar'
import { styled } from 'styled-components'
const user = require('../../db.json')

export default function Users() {
  
  return (
    <div>
      <Navbar Path={'Pages / Users'} RouteName={'User Preview'} />
      <Div>
        <table className='usertable'>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {user?.map((data) => <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
                <button>Block</button>
              </td>
            </tr>)}
          </tbody>
        </table>

      </Div>
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

.usertable{
  width: 100%;
}
.usertable>thead{
  font-weight:700;
}
.usertable>thead>tr>td:nth-child(2){
  text-align: center;
}
.usertable>tbody>tr>td:nth-child(2){
  text-align: center;
}
.usertable>tbody>tr:hover{
  color:purple;
  cursor: pointer;
}
.usertable>tbody>tr>td:nth-child(3){
  text-align: end;
}
.usertable>tbody>tr>td:nth-child(3)>button{
  padding:2px 10px;
  border-radius:5px;
  background-color:red;
  color:white;
}

@media screen and (max-width:700px){
  height:610px;
}

@media screen and (max-width:500px){
  .usertable>tbody>tr{
    display:flex;
    flex-direction:column;
  }
  .usertable>thead{
    display:none;
  }
  .usertable>tbody>tr>td:nth-child(2){
    text-align: start;
  }
  .usertable>tbody>tr>td:nth-child(3){
    text-align: start;
  }
  .usertable>tbody>tr>td:nth-child(3)>button{
   margin-bottom:10px;
  }
}

`