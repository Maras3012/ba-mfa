import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import PhoneSignUp from './components/PhoneSignUp';
import ProtectedRoute from './components/ProtectedRoute';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Switch from 'react-input-switch';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [onOff, setOnOff] = useState(1);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(onOff);
    navigate('/home');
  }

  return (
    <Container style={{ width: '400px' }}>
      <Row>
        <Col>
          <h4>Protection</h4>
          <Switch
            style={{ scale: '2', marginLeft: '20px' }}
            value={onOff}
            onChange={setOnOff}
          />
          <br></br>
          <br></br>
          <form onSubmit={handleSubmit}>
            <button type="submit">Apply</button>
          </form>
          <br></br>
          <br></br>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  onOff ? (
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  ) : (
                    <Home />
                  )
                }
                // <ProtectedRoute>
                //   <Home />
                // </ProtectedRoute>
              />
              <Route path="/" element={<Login />} />
              <Route path="/phonesignup" element={<PhoneSignUp />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
