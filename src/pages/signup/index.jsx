import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useAuth from '../../hooks/userAuth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Singup() {

  const { signup } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState([])

  const handleSignUp = () => {
    signup(form.email, form.password)
    navigate('/')
  }


  return (
    <Form style={{ width: '70%', margin: "120px auto", boxSizing: 'border-box', padding: 15, background: "rgba(44, 0, 255, 0.04)" }}>
      <h1>Cadastrar</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Confirmação de email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Senha" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSignUp}>
        Inscrever-se
      </Button>
    </Form>
  );
}

export default Singup;