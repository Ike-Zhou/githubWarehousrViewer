import {
  Button, Form, Input, message,
} from 'antd'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../service'

import { loginSuccess } from '../../store/actions/user'

class Login extends Component {
  onFinish = (values) => {
    console.log('Success:', values)
    if (values.password !== '123') {
      message.info('用户名或密码错误')
      return
    }
    this.doLogin(values)
  }

  doLogin = (userdata) => {
    login(userdata).then((resp) => {
      console.log(resp)
      // eslint-disable-next-line react/destructuring-assignment, react/prop-types
      this.props.loginSuccess(resp)
    }).catch(() => { message.info('用户名或密码错误') })
  }

  render() {
    return (
      <div
        style={{
          position: 'relative',
          height: '100vh',
        }}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          autoComplete="off"
          style={{
            position: 'absolute',
            top: '50%',
            right: '50%',
            marginTop: -150,
            marginRight: -200,
            height: 300,
            width: 600,
          }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
export default connect((state) => ({
  ...state.user,
}), { loginSuccess })(Login)
