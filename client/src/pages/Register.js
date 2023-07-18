import React from 'react'
import { Button, Card, Divider, Form, Input } from 'antd'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'


const Register = () => {
  const navigate = useNavigate()

  const onFinish = async(values) => {
    try {
      console.log('reqFront', values)
      const response = await axios.post('/api/user/register', values)
      if(response.data.success) {
        toast.success(response.data.message)
        toast('Redirecting to login page')
        navigate('/login')
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
        <h1>Register</h1>

        <Divider />

        <Form layout='vertical' onFinish={onFinish}>

          <Form.Item label='Name' name='name'>
            <Input placeholder='name' />
          </Form.Item>

          <Form.Item label='Email' name='email'>
            <Input placeholder='email' type='email'/>
          </Form.Item>

          <Form.Item label='Password' name='password'>
            <Input placeholder='password' type='password'/>
          </Form.Item>

          <Button className='mt-3' block type="primary" htmlType='submit'>Register</Button>

          <Link className='d-flex w-100 mt-1 text-right justify-content-end small' to='/login'>Back to Login</Link>

        </Form>
      </Card>
    </div>
  )
}

export default Register