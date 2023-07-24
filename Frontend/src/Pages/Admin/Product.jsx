
import React, { useEffect, useState } from 'react'

import Navbar from './otherComponent/navbar'
import { styled } from 'styled-components'

import axios from 'axios'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'


export default function Product() {
  const [newBook, setNewBook] = useState({})
  const [Action, setAction] = useState('add')
  const { isOpen, onOpen, onClose } = useDisclosure()
  let [selected, setSeleted] = useState({})
  let [books, setBooksData] =useState([])

 async function getAllData(){
  axios.get('https://studybuddy-backend-t2yy.onrender.com/books')
  .then((res)=>setBooksData(res.data));
}


 async function updateData(id){
  let temp=selected
  if(Array.isArray(selected.chapter)===false){
      temp={...temp,"chapter":selected.chapter.split(',')}
    }
  if(Array.isArray(selected.exercise)===false){
      temp={...temp,"exercise":selected.exercise.split(',')}
    }
    onClose()

  axios.patch(`https://studybuddy-backend-t2yy.onrender.com/books/update/${id}`,temp)
  .then((res)=>getAllData());
  
}

 async function addData(){
  let temp=newBook
  if(Array.isArray(selected.chapter)===false){
      temp={...temp,"chapter":selected.chapter.split(',')}
    }
  if(Array.isArray(selected.exercise)===false){
      temp={...temp,"exercise":selected.exercise.split(',')}
    }
    onClose()

  axios.post(`https://studybuddy-backend-t2yy.onrender.com/books/add`,temp)
  .then((res)=>getAllData());
  
}


 async function deleteData(id){
  axios.delete(`https://studybuddy-backend-t2yy.onrender.com/books/delete/${id}`)
  .then((res)=>getAllData());
}


useEffect(()=>{
  getAllData()
},[])

  return (

    <div>
      <Navbar Path={'Pages / Product'} RouteName={'Product Preview'} />
      <Div>
        <button className='AddBooksBtn' onClick={()=>{onOpen();setAction('add')}}>+</button>
        <div className='productShow'>
          {
            books.map((book) => <div className='bookCard'>
              <img src={book.image} alt="" />
              <div>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <p>-{book.author}</p>
                <div>
                  <Button colorScheme='linkedin' size='xs' onClick={()=>{setSeleted(book);setAction('edit');onOpen()}}>Edit</Button>
                  <Button colorScheme='red' size='xs' onClick={()=>deleteData(book._id)}>Delete</Button>
                </div>
              </div>
            </div>)
          }
        </div>

        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          {Action === "add" ?
            <ModalContent >
              <ModalHeader>Add Book</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <div className='addBookModel' style={{ display: 'flex', flexDirection: 'column' }}>
                  {newBook.image === '' ?
                    <div style={{ height: '200px' }}></div> :
                    <img style={{ height: '200px' }} src={newBook.image} alt="" />
                  }
                  <p style={{ fontWeight: '600' }}>Image link</p>
                  <input type="text" style={{ border: '1px solid black' }} onChange={(e) => setNewBook({ ...newBook, "image": e.target.value })} />
                  <p style={{ fontWeight: '600' }}>Titel</p>
                  <input type="text" style={{ border: '1px solid black' }} onChange={(e) => setNewBook({ ...newBook, "title": e.target.value })} />
                  <p style={{ fontWeight: '600' }}>Description</p>
                  <input type="text" style={{ border: '1px solid black' }} onChange={(e) => setNewBook({ ...newBook, "description": e.target.value })} />
                  <p style={{ fontWeight: '600' }}>Author</p>
                  <input type="text" style={{ border: '1px solid black' }} onChange={(e) => setNewBook({ ...newBook, "author": e.target.value })} />
                  <p style={{ fontWeight: '600' }}>category</p>
                  <select style={{ border: '1px solid black' }} name="" id="" onChange={(e) => setNewBook({ ...newBook, "category": e.target.value })}>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                  </select>
                  <p style={{ fontWeight: '600' }}>Chapter</p>
                  <span style={{ color: 'red', marginTop: '0px' }}>{`use (,) to seprate data `}</span>
                  <textarea style={{ border: '1px solid black' }} name="" id="" cols="30" rows="5"></textarea>
                  <p style={{ fontWeight: '600' }}>Exercise</p>
                  <textarea style={{ border: '1px solid black' }} name="" id="" cols="30" rows="5"></textarea>
                  <p style={{ fontWeight: '600' }}>Solution</p>
                  <textarea style={{ border: '1px solid black' }} name="" id="" cols="30" rows="5"></textarea>
                  <Button colorScheme='whatsapp' onClick={()=>addData()} mt={'10px'}>Add</Button>
                </div>
              </ModalBody>
            </ModalContent>
            :
            <ModalContent >
              <ModalHeader>Edit Book</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <div className='addBookModel' style={{ display: 'flex', flexDirection: 'column' }}>
                  <img style={{ height: '200px' }} src={selected.image} alt="" />
                  <p style={{ fontWeight: '600' }}>Image link</p>
                  <input type="text" value={selected.image} style={{ border: '1px solid black' }} onChange={(e) => setSeleted({ ...selected, "image": e.target.value })} />
                  <p style={{ fontWeight: '600' }}>Titel</p>
                  <input type="text" value={selected.title} style={{ border: '1px solid black' }} onChange={(e) => setSeleted({ ...selected, "title": e.target.value })} />
                  <p style={{ fontWeight: '600' }}>Description</p>
                  <input type="text" value={selected.description} style={{ border: '1px solid black' }} onChange={(e) => setSeleted({ ...selected, "description": e.target.value })} />
                  <p style={{ fontWeight: '600' }}>Author</p>
                  <input type="text" value={selected.author} style={{ border: '1px solid black' }} onChange={(e) => setSeleted({ ...selected, "author": e.target.value })} />
                  <p style={{ fontWeight: '600' }}>category</p>
                  <select style={{ border: '1px solid black' }} name="" id="" onChange={(e) => setSeleted({ ...selected, "category": e.target.value })}>
                    <option value="Physics" selected={selected.category==='physics'}>Physics</option>
                    <option value="Chemistry" selected={selected.category==='Chemistry'}>Chemistry</option>
                  </select>
                  <p style={{ fontWeight: '600' }}>Chapter</p>
                  <span style={{ color: 'red', marginTop: '0px' }}>{`use (,) to seprate data `}</span>
                  <textarea onChange={(e) => setSeleted({ ...selected, "chapter": e.target.value })} value={selected.chapter}style={{ border: '1px solid black' }} name="" id="" cols="30" rows="5"></textarea>
                  <p style={{ fontWeight: '600' }}>Exercise</p>
                  <textarea onChange={(e) => setSeleted({ ...selected, "exercise": e.target.value })} value={selected.exercise} style={{ border: '1px solid black' }} name="" id="" cols="30" rows="5"></textarea>
                  <p style={{ fontWeight: '600' }}>Solution</p>
                  <textarea onChange={(e) => setSeleted({ ...selected, "solution": e.target.value })} value={selected.solution} style={{ border: '1px solid black' }} name="" id="" cols="30" rows="5"></textarea>
                  <Button onClick={()=>updateData(selected._id)} colorScheme='whatsapp' mt={'10px'}>Save</Button>
                  <Button colorScheme='red' mt={'10px'} onClick={onClose}>Cancel</Button>
                </div>
              </ModalBody>
            </ModalContent>}
      </Modal>
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
position: relative;

.AddBooksBtn{
  background-color:lightgreen;
  color:white;
  border-radius:100%;
  height:50px;
  width:50px;
  position:fixed;
  bottom:80px;
  right:60px;
}
.productShow{
  display: grid;
  grid-template-columns: 48% 48%;
  justify-content: space-around;
}
.bookCard{
    display: flex;
    padding:10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-bottom:10px;
    gap:10px;
}
.bookCard>div>h3{
    font-weight:bold;
}
.bookCard>div>div{
    display: flex;
    gap:10px;
}
.bookCard>img{
    height:200px
}


@media screen and (max-width:700px){
  height:610px;
}
@media screen and (max-width:1000px){
  .productShow{
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width:500px){
  .bookCard{
    display: flex;
    flex-direction: column;
}
}

`
