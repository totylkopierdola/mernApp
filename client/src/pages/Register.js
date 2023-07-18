import React from 'react'
import { Button, Card, Divider, Form, Input } from 'antd'
import {Link} from 'react-router-dom'


const Register = () => {

  const onFinish = (values) => {
    console.log(values)
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