import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/userAuth';
import { useState } from 'react';

function Login() {

  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState([])

  const handleLogin = (e) => {
    e.preventDefault()
    login(form.email, form.password)
    navigate('/home')
  }

  return (
    <Form style={{ width: '70%', margin: "120px auto", boxSizing: 'border-box', padding: 15, background: "rgba(44, 0, 255, 0.04)" }}>
      <h1>Logar</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Senha" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Link to={"/singup"}>registrar</Link>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleLogin}>
        Entrar
      </Button>
    </Form>
  );
}

export default Login;