import React from 'react'
import {Container,Button} from 'semantic-ui-react'
import './Room.scss'

const Room = (props) => {

  const {setRoom} = props;

  return (
    <div className="room">
      <Container>
        <Button onClick={() => setRoom('react')}>React</Button>
        <Button onClick={() => setRoom('vue')}>Vue</Button>
        <Button onClick={() => setRoom('angular')}>Angular</Button>
      </Container>
    </div>
  )
}

export default Room
