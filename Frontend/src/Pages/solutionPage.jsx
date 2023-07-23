import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneBook } from "../Redux/Books/action";

const SolutionPage = () => {
  const id = useParams();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.singleData.data);
  console.log(data);
  useEffect(() => {
    dispatch(getOneBook(id.id));
  }, []);
  return <div>welcome to solution</div>;
};

export default SolutionPage;

// author: "James Brown";
// category: "physics";
// chapter: (2)[("Chapter 1: Special Relativity", "Chapter 2: Quantum Mechanics")];
// description: "Explore the world of modern physics, including relativity and quantum mechanics.";
// exercise: (2)[
//   ("Exercise 1: Time Dilation", "Exercise 2: Wave-Particle Duality")
// ];
// image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8QhxT3CGhg8bcwSYmJS7MLX3DgKVcmFAvUqBNbqeHdN0ckCU4P7Ej6hXMIY4YryguCk8&usqp=CAU";
// solution: "Solution to Exercise 1: Calculate time dilation for a moving object.";
// solution_No: 1;
// title: "Modern Physics";
// _id: "64bcc01032b082bdf7e04009";
