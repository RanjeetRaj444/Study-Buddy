import React from 'react'
import { styled } from 'styled-components'
import Navbar from './otherComponent/navbar'

export default function Users() {
  return (
    <Div>
      <Navbar Path={'Pages / Users'} RouteName={'Users Page'} />
      <div className='Users_div'>

      </div>
    </Div>
  )
}

const Div = styled.div`
  height: 100%;

.Users_div{
  width: 100%;
  height: 88%;
  border-radius: 20px;
  background-color:white;
}
`
