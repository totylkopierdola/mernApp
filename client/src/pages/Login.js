import React from 'react'
import { Button, Card, Divider, Form, Input } from 'antd'
import {Link} from 'react-router-dom'


const Login = () => {
  
  const onFinish = (values) => {
    console.log(values);
  };

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