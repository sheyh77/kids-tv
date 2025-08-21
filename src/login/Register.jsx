import React from 'react';
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const onFinish = (values) => {
    axios.post("https://ceed8a646c7fba8b.mokky.dev/foydalanuvchi", values)
      .then(res => {
        if (res.status === 201) {
          // foydalanuvchini localStorage ga saqlaymiz
          localStorage.setItem("user", JSON.stringify(res.data));

          // xabar
          messageApi.success("Ro‘yxatdan o‘tish muvaffaqiyatli!");

          // asosiy menyuga o‘tkazamiz
          navigate("/");
        }
      })
      .catch(err => {
        messageApi.open({
          type: "error",
          content: "Ro‘yxatdan o‘tishda xatolik!",
        });
        console.log("error:", err);
      });
  };

  return (
    <>
      {contextHolder}
      <section className="login">
        <div className="login-box">
          <h1 className="login-box-title">Register</h1>
          <Form
            name='basic'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete='off'
            className='login-form'
          >
            <Form.Item 
              name="username"
              rules={[{ required: true, message: 'Username kiriting!' }]}
            >
              <Input type="text" placeholder='Username' />
            </Form.Item>

            <Form.Item 
              name="password"
              rules={[{ required: true, message: 'Parol kiriting!' }]}
            >
              <Input.Password placeholder='Password' />
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </>
  );
}

export default Register;