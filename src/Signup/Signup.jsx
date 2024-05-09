import React from 'react';
import '../Login/Login.css'; // Import the CSS file for styling
import {Link} from 'react-router-dom';
const Form2 = () => {
    return (
        <div className='ww'>
        <ul className="navbarsign">
        <li className="empty"></li>
        
        <li><Link className="li"  to='/login'>Login</Link></li>
        <li><b><Link className="li"  to='/sign'>Sign In</Link></b></li>
        <li><Link className="li"  to='/eco'>Shopping</Link></li>
        <li><Link className="l2"  to='/search'>Adopt Now </Link></li>
        <li><Link className="l2" to='/'>Home</Link></li>
        </ul>
            <div className="box">
                <form action="">
                    <h1>Register</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Email" required />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Full Name" required />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Set Password" required />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <div className="remember-forget">
                        <label><input type="checkbox" /> Remember me</label>
                    </div>
                    <button type="submit" className="btn" onClick={() => {}}>Sign up</button>
                    <div className="register-link">
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};


const Register = () => {
    return (
      <>
        <Form2/>
      </>
    );
  };


export default Register;
