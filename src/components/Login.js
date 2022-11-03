import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Login = () => {
  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">BA Phone Login</h2>

        <hr />
        <Link to="/phonesignup">
          <div className="d-grid gap-2 mt-3">
            <Button variant="success" type="Submit">
              Phone Authentification
            </Button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Login;
