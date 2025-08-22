import React, { useContext } from 'react';
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const onFinish = values => {
    // Foydalanuvchini username va password bo‘yicha qidiramiz
    axios
      .get(`https://ceed8a646c7fba8b.mokky.dev/foydalanuvchi?username=${values.username}&password=${values.password}`)
      .then(res => {
        if (res.data.length > 0) {
          const user = res.data[0]; // birinchi topilgan foydalanuvchi
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
          messageApi.success("Xush kelibsiz!");
        } else {
          messageApi.error("Login yoki parol xato!");
        }
      })
      .catch(err => {
        messageApi.error("Server bilan ulanishda xatolik!");
        console.error("Login error:", err);
      });
  };

  return (
    <>
      {contextHolder}
      <section className="login">
        <div className="login-box">
          <h1 className="login-box-title">Kirish</h1>
          <Form
            name='basic'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete='off'
            className='login-forma'
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Username kiriting!' }]}
              className='login-inp'
            >
              <Input type="text" placeholder='Username' />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Parol kiriting!' }]}
              className='login-inp'
            >
              <Input type="password" placeholder='Password' />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit' className='login-btn'>
                Login
              </Button>
            </Form.Item>
            <Link to="/register" className='login-register-btn'>Ro'yhatdan o'tish</Link>
          </Form>
        </div>
      </section>
    </>
  );
}

export default Login;
