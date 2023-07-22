import React, { useState } from 'react'
import Navbar from './otherComponent/navbar'
import { styled } from 'styled-components'
import books from '../../db.json'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'

export default function Product() {
  const [newBook, setNewBook] = useState({"image":''})
  const { isOpen, onOpen, onClose } = useDisclosure()
  let [selected,setSeleted]=useState({})
  return (
    <div>
      <Navbar Path={'Pages / Product'} RouteName={'Product Preview'} />
      <Div>
        <button className='AddBooksBtn' onClick={onOpen}>+</button>
        <div className='productShow'>
              {
                books.map((book)=><div className='bookCard'>
                  <img src={book.image} alt="" />
                  <div>
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                    <p>{book.author}</p>
                    <div>
                      <Button colorScheme='linkedin' size='xs'>Edit</Button>
                      <Button colorScheme='red' size='xs'>Delete</Button>
                    </div>
                  </div>
                </div>)
              }
        </div>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Book</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
             <div className='addBookModel'>
                <img src={newBook.image} alt="" />
                <p>Image link</p>
                <input type="text" style={{border:'1px solid black'}} onChange={(e)=>setNewBook({...newBook,"image":e.target.value})}/>
                <p>Titel</p>
                <input type="text" style={{border:'1px solid black'}} onChange={(e)=>setNewBook({...newBook,"title":e.target.value})}/>
                <p>Description</p>
                <input type="text" style={{border:'1px solid black'}} onChange={(e)=>setNewBook({...newBook,"description":e.target.value})}/>
                <p>Author</p>
                <input type="text" style={{border:'1px solid black'}} onChange={(e)=>setNewBook({...newBook,"author":e.target.value})}/>
             </div>
          </ModalBody>
        </ModalContent>
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
}
.bookCard>div>h3{
    font-weight:bold;
}
.bookCard>div>div{
    display: flex;
    gap:10px;
}


@media screen and (max-width:700px){
  height:610px;
}

`