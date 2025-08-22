import React, { useContext } from 'react';
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Register() {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const onFinish = async (values) => {
    try {
      // 1) Avval username bor-yo‘qligini tekshiramiz
      const checkUser = await axios.get(
        `https://ceed8a646c7fba8b.mokky.dev/foydalanuvchi?username=${values.username}`
      );

      if (checkUser.data.length > 0) {
        messageApi.error("Bu username allaqachon mavjud, boshqasini tanlang!");
        return;
      }

      // 2) Agar username bo‘lmasa → yangi user yaratamiz
      const res = await axios.post(
        "https://ceed8a646c7fba8b.mokky.dev/foydalanuvchi",
        values
      );

      if (res.status === 201) {
        const user = res.data;

        // foydalanuvchini localStorage ga saqlaymiz
        localStorage.setItem("user", JSON.stringify(user));

        // Contextni yangilaymiz
        setUser(user);

        // Xabar va redirect
        messageApi.success("Ro‘yxatdan o‘tish muvaffaqiyatli!");
        navigate("/");
      }
    } catch (err) {
      messageApi.open({
        type: "error",
        content: "Ro‘yxatdan o‘tishda xatolik!",
      });
      console.error("Register error:", err);
    }
  };

  return (
    <>
      {contextHolder}
      <section className="register">
        <div className="register-box">
          <h1 className="register-box-title">Register</h1>
          <Form
            name='basic'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete='off'
            className='register-form'
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
              <Button type='primary' htmlType='submit' className='register-btn'>
                Register
              </Button>
            </Form.Item>
            <Link to="/login" className='register-login-btn'>Akkauntingiz bo'lsa bosing!</Link>
          </Form>
        </div>
      </section>
    </>
  );
}

export default Register;