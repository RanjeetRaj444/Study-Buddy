import React from 'react'
import { styled } from 'styled-components'
import Navbar from './otherComponent/navbar'

export default function UserLog() {
  return (
    <Div>
      <Navbar Path={'Pages / UserLog'} RouteName={'Page Logs'} />
      <div className='userLog_details'>

      </div>
    </Div>
  )
}

const Div = styled.div`
  height: 100%;

.userLog_details{
  width: 100%;
  height: 88%;
  border-radius: 20px;
  background-color:white;
}`