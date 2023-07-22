import React from 'react'
import { styled } from 'styled-components'
import { Avatar, Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger } from '@chakra-ui/react'

export default function Navbar({ RouteName, Path }) {

    

    return (
        <Div>
            <div className='routeName'>
                <p>{Path}</p>
                <h3>{RouteName}</h3>
            </div>
            <div className='profileSection'>
                <Popover>
                    <PopoverTrigger>
                        <Avatar size='sm' bg='purple.500' />
                    </PopoverTrigger>
                    <PopoverContent width={'200px'}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody >
                            <div style={{display:'flex',gap:'10px',flexDirection:'column',marginTop:'20px'}}>
                                <Button >Edit Profile</Button>
                                <Button colorScheme='red'>Logout</Button>
                            </div>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </div>
        </Div>
    )
}

const Div = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

.routeName{
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    border-radius: 10px;
}
.routeName>p{
   font-size:15px;
   color:gray;
   text-align: start;
}
.routeName>h3{
   font-size:25px;
   font-weight:bold;
}
.profileSection{
   height:45px;
   background-color:white;
   display: flex;
   align-items: center;
   padding: 0px 5px 0px 70px;
   border-radius: 50px;
}

@media screen and (max-width:500px){
    .routeName>h3{
        font-size:20px;
        font-weight:bold;
        text-align: start;
     } 
     .profileSection{
        height:45px; 
        padding: 5px;
     }
}

`