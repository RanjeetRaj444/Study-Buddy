import React from 'react';
import { styled } from 'styled-components';
import { Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <DIV>
      <div className='leftBanner'>
        <div className='bannerTextDiv'>
          <Text className="bannerText">
            Take the guesswork out of your coursework. Sign up today.
          </Text>
        </div>
      </div>
      <div className='rightSideForm'>
        <div className='innerRightSide'>
          <div className='topSecRight'>
            <Link>Sign up</Link>
            <Link to={"/login"}>Login</Link>
          </div>
        </div>
      </div>
    </DIV>
  )
}

const DIV = styled.div`
display: flex;
  .leftBanner{
    width: 50%;
    height: 100vh;
    background-image: url("https://assets.quizlet.com/a/j/dist/app/i/signup/QZ_Auth_Light.f0832112f8d66a6.png");
    background-position: center;
    background-size: cover;
    position: relative;
  }
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
  .innerRightSide{
    border: 1px solid;
    margin: 45px 60px;
  }
  .rightSideForm{
    width: 50%;
  }
  .topSecRight{
    display:flex;
    gap: 30px;
  }
  
`

export default Signup