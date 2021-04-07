import React from 'react'
import ReactDOM,{useState,useEffect} from 'react'
import queryString from 'query-string'; 
import io from 'socket.io-client'
import Title from '../Title'
import SendMessageForm from '../SendMessageForm'
import MessageList from '../MessageList'
import { Redirect } from 'react-router';
let socket
function Chat({location}) {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [flag, setFlag]=useState(0);
    const ENDPOINT = 'https://localhost:3000/';
    useEffect(()=>{
        const {name,room} = queryString.parse()
        socket = io(ENDPOINT)
        setRoom(room)
        setName(name)
        socket.emit('join',{name,room},(error)=>{
            if(error){
                setFlag(1)
                alert(error)
            }
        });

    },[ENDPOINT])

    useEffect(()=>{
        socket.on('message',message=>{
            setMessages(msg=>[...msg,message])
        })
        socket.on('')

    })
    return (
        <div>
         <Title />
         <MessageList />
         <SendMessageForm />
            
        </div>
    )
}

export default Chat
