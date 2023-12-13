import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/userAuth';

function Home() {

    const { signout } = useAuth()
    const navigate = useNavigate()

    const Logout = () => {
        const { status } = signout();
        if (status === 200) {
            return navigate('/');
        }
        return
    };

    return (
        <Form style={{ display: "flex", justifyContent: 'center', alignItems: "center", width: '70%', margin: "120px auto", boxSizing: 'border-box', padding: 15, background: "rgba(44, 0, 255, 0.04)" }}>
            <h1>Home</h1>
            <Button variant="primary" onClick={Logout}>
                Sair
            </Button>
        </Form>
    );
}

export default Home;