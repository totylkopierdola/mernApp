import React from 'react'
import { Button, Card, Divider, Form, Input } from 'antd'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'


const Login = () => {

  const navigate = useNavigate()
  
  const onFinish = async(values) => {
    try {
      console.log('reqFront', values)
      const response = await axios.post('/api/user/login', values)
      if(response.data.success) {
        toast.success(response.data.message)
        toast('Redirecting to home page')
        localStorage.setItem('token', response.data.data)
        navigate('/')
      }else {
        toast.error(response.data.message)
      }
    }catch(error) {
      // toast.error(error.response.data.message)
      toast.error('Something went wrong')
    }

  }

  return (
    <div className='authentication'>
      <Card className='authenticaction-form'>
        <h1>Log in</h1>

        <Divider />

        <Form layout='vertical' onFinish={onFinish}>
          
          <Form.Item label='Email' name='email'>
            <Input placeholder='email' type='email'/>
          </Form.Item>

          <Form.Item label='Password' name='password'>
            <Input placeholder='password' type='password'/>
          </Form.Item>

          <Button className='mt-3' block type="primary" htmlType='submit'>Login</Button>

          <Link className='d-flex w-100 mt-1 text-right justify-content-end small' to='/register'>Register now</Link>

        </Form>
      </Card>
    </div>
  );
}

export default Login