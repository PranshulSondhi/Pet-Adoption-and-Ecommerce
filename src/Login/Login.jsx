import React from 'react';
import './Login.css'; // Import the CSS file for styling
import {Link} from 'react-router-dom';


const Form = () => {
    return (
        <div className='ww'>
        <ul className="navbarsign">
        <li className="empty"></li>
        <li><b><Link className="li"  to='/login'>Login</Link></b></li>
        <li><Link className="li"  to='/sign'>Sign In</Link></li>
        <li><Link className="li"  to='/eco'>Shopping</Link></li>
        <li><Link className="l2"  to='/search'>Adopt Now </Link></li>
        <li><Link className="l2" to='/'>Home</Link></li>
        </ul>
        <div className="box">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Email" required />
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <i className='bx bxs-lock-alt'></i>
                </div>
                <div className="remember-forget">
                    <label><input type="checkbox" /> Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" className="btn" onClick={() => {}}>Login</button>
                <div className="register-link">
                    <p>Don't have an account? <Link to='/sign'>Register</Link></p>
                </div>
            </form>
        </div>
        </div>
    );
};


const Login = () => {
    return (
      <>
        <Form/>
      </>
    );
  };
export default Login;
