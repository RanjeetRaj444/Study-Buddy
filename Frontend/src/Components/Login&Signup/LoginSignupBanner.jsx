import React from 'react';
import { styled } from 'styled-components';
import { Text } from "@chakra-ui/react";

const LoginSignupBanner = () => {
  return (
    <DIV>
      <div className='bannerTextDiv'>
        <Text className="bannerText">
          Take the guesswork out of your coursework. Sign up today.
        </Text>
      </div>
    </DIV>
  )
}

const DIV = styled.div`
  
    width: 50%;
    height: 100%;
    background-image: url("https://assets.quizlet.com/a/j/dist/app/i/signup/QZ_Auth_Light.f0832112f8d66a6.png");
    background-position: center;
    background-size: cover;
    position: relative;
  
  .bannerTextDiv{
    width: 100%;
    height: 40vh;
    position: absolute;
    margin: 45px 0px 0px 45px;
  }
  .bannerText{
    width: 63%;
    color: #423ED8;
    font-size: 43px;
    font-weight: bold;
    text-align: left;
    line-height: 55px;
  }
  
`

export default LoginSignupBanner;