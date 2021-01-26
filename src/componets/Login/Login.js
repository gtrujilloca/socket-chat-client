import React,{useState} from 'react'
import {Form,Button} from 'semantic-ui-react'
import './Login.scss'

const Login = (props) => {
  const {setUsername} = props;
  const [formData, setFormData] = useState("")
  const [formError, setFormError] = useState(false)

  const onSubmit = () =>{
    if(formData)
      setUsername(formData)
    else
      setFormError(true);
    
  }

  return (
    <div className="login">
      <Form onSubmit={onSubmit}>
        <Form.Input placeholder="Username" 
            onChange={(e)=> setFormData(e.target.value) } 
            error={formError}
        />
        <Button type="submit" color="green" fluid>Enter</Button>
      </Form>
    </div>
  )
}

export default Login
