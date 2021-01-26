import React from 'react'
import {Container,Button} from 'semantic-ui-react'
import './Room.scss'

const Room = (props) => {

  const {setRoom} = props;

  return (
    <div className="room">
      <Container>
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Angular</Button>
      </Container>
    </div>
  )
}

export default Room
