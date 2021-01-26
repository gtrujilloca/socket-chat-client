import React,{useState} from 'react'
import Login from './componets/Login/Login';
import Room from './componets/Room/Room';

export const App = () => {

  const [username, setUsername] = useState(null);
  const [room, setRoom] = useState(null)

  const hanldlerComponent = () =>{
    if(!username && !room) return <Login setusername={setUsername}/>
    else if (username && !room) return <Room setRoom={setRoom}/>;
    else return "Chat...";
  }

  return (
    <div>
      <h1>My app</h1>
    </div>
  )
}

export default App;
