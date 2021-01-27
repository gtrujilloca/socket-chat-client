import React,{useState} from 'react'
import Chat from './componets/Chat/Chat';
import Login from './componets/Login/Login';
import Room from './componets/Room/Room';

const App = () => {

  const [username, setUsername] = useState(null);
  const [room, setRoom] = useState(null)

  const hanldlerComponent = () =>{
    if(!username && !room) return <Login setUsername={setUsername}/>;
    else if (username && !room) return <Room setRoom={setRoom}/>;
    else return <Chat username={username} room={room}/>;
  }

  return hanldlerComponent();
}

export default App;
