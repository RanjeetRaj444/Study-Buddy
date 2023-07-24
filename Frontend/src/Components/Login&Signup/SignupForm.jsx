import { Button, Center, FormControl, FormLabel, Input, Text } from "@chakra-ui/react"
import axios from "axios";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components"

let initialState = {
    birthday: "", email: "", username: "", password: ""
};

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "birthday": {
            return {
                ...state,
                birthday: payload,
            }
        }
        case "email": {
            return {
                ...state,
                email: payload,
            }
        }
        case "username": {
            return {
                ...state,
                username: payload,
            }
        }
        case "password": {
            return {
                ...state,
                password: payload,
            }
        }
        case "reset": {
            return initialState;
        }

        default:
            return state;
    }
}

const SignupForm = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate()

    const handleChange = (e) => {
        dispatch({ type: e.target.name, payload: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://studybuddy-backend-t2yy.onrender.com/users/register", state).then((res) => {
            alert(res.data.msg)
            navigate('/')
            
        })
        .then((error)=>console.log(error))
        dispatch({ type: "reset" });

    }
    return (
        <DIV>
            <div className="formSec">
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired>
                        <FormLabel fontSize={"sm"} color={"#718096"}>BIRTHDAY</FormLabel>
                        <input type="date" name="birthday" value={state.birthday} onChange={handleChange} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontSize={"sm"} color={"#718096"}>EMAIL</FormLabel>
                        <input
                            placeholder="user@studdyBuddy.com"
                            name="email"
                            value={state.email}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontSize={"sm"} color={"#718096"}>USERNAME</FormLabel>
                        <input
                            placeholder="john123"
                            name="username"
                            value={state.username}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl isRequired >
                        <FormLabel fontSize={"sm"} color={"#718096"}>PASSWORD</FormLabel>
                        <input
                            type="password"
                            placeholder="*******"
                            name="password"
                            value={state.password}
                            onChange={handleChange} />
                    </FormControl>
                    <div className="policyText">
                        <Text>By tapping Sign up, you accept StuddyBuddy's</Text>
                        <Text>
                            Terms of Service
                        </Text>
                        <Text>
                            and
                        </Text>
                        <Text>
                            Privacy Policy
                        </Text>
                    </div>
                    <Button type="submit" width={"100%"} height={"70px"} size={"lg"} fontWeight={"bold"} color={"white"} bg={"teal.400"} _hover={{ bg: "teal" }}>Sign up</Button>
                </form>
            </div>
            <div className="bottomSec">
                <Text>
                    Already have an account?
                </Text>
                <Text>Log in</Text>
            </div>
        </DIV>
    )
}

const DIV = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;

.topSec{
    width: 80%;
    display: flex;
}

.formSec{
    width: 80%;
}
.formSec input{
    width: 100%;
    border-radius: 3px;
    outline: 2px solid;
    height: 53px;
    font-size: 18px;
    padding: 0px 10px;
    margin-bottom: 30px;
}
.formSec input:focus{
    outline: none;
    border:3px solid #f2c935;
    border-radius: 5px;
}
.policyText{
    width: 82%;
    display: flex;
    margin: 0px auto 25px auto;
    justify-content: space-between;
    font-size: 13.5px;
    color: #718096;
}
.policyText > :nth-last-child(1) {
    font-weight: bold;
    color: #4A5568; 
 }
.policyText > :nth-child(2) {
    font-weight: bold;
    color: #4A5568; 
}
.bottomText{
    margin: 5px 0px;
    display: flex;
    justify-content: space-between;
}
.bottomText>:first-child{
    color:#718096 ;
    font-size: 13.5px;
}
.bottomText>:last-child{
    color: #38B2AC;
    font-weight: bold;
    font-size: 15px;
}
.bottomText>:last-child:hover{
    cursor: pointer;
    color: #f2c935;
}
.bottomSec{
    border: 2px solid #718096;
    width: 80%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    margin: 20px 0px;
}
.bottomSec>:last-child{
    color: #38B2AC;
    font-weight: bold;
}
.bottomSec>:last-child:hover{
    cursor: pointer;
    color: #f2c935;
}




 `

export default SignupForm;