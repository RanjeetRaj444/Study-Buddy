import React from 'react'
import { styled } from 'styled-components'
import Navbar from './otherComponent/navbar'

export default function Product() {
  return (
    <Div>
      <Navbar Path={'Pages / Product'} RouteName={'Product Page'} />
      <div className='product_div'>

      </div>
    </Div>
  )
}

const Div = styled.div`
  height: 100%;

.product_div{
  width: 100%;
  height: 88%;
  border-radius: 20px;
  background-color:white;
}

`
