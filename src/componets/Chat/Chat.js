import React,{useState,useEffect} from 'react'
import socketIoClient from 'socket.io-client';
import {Form,Button,Container} from 'semantic-ui-react';
import classNames from 'classnames'
import './Chat.scss'

// const ENDPOINT = 'http://127.0.0.1:4001';
const ENDPOINT = "https://react-socket-chat-twitch.herokuapp.com"
const socket = socketIoClient(ENDPOINT);

const Chat = (props) => {

  const {username,room} = props;
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [totalUsers, setTotalUsers] = useState(0)

  useEffect(() => {
    socket.emit('joinUser',username,room);
    socket.on('chatMessages',(data)=>{
      setMessages((prevData) => [...prevData,data])
    })
    socket.on('join',(data)=>{
        setTotalUsers(data.totalUsers)
        setMessages(data.lastMessages || [])
        socket.emit('sendMessage',{
          username:'Staff',
          room,
          text:`${username} se ha unido a la sala`
        })
    })
    socket.on('leaveUser',(data)=>{
      setTotalUsers(data.totalUsers)
    })

  }, [])

  const sendMessage = () =>{
    socket.emit('sendMessage',{
      username,
      room,
      text:message
    })
    setMessage('');
  }

  return (
    <div className="chat">
      <div className="chat__info">
        <h2>User: {username}</h2>
        <h2>Room: {room}</h2>
        <h2>Total users: {totalUsers}</h2>
      </div>
      <Container>
        <div className="chat__form">
          <Form onSubmit={sendMessage}>
            <Form.Input 
              placeholder="Message"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              />
              <Button type="submit" fluid>Send</Button>
          </Form>
        </div>

        <ul className="chat__list">
          {messages.map((message,index)=>(
            <li key={index} className={classNames({
              right:username === message.username
            })}>
            {username !== message.username && <p>{message.username}: </p>}
              <p>{message.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

export default Chat
