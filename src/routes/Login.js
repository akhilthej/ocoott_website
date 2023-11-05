import { useNavigate, Link, useLocation } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { firebaseConfig } from '../components/Tools/firebaseConfig';
import { useEffect, useState } from 'react';

const Login = () => {
  initializeApp(firebaseConfig);
  const navigate = useNavigate();
  const location = useLocation();
  const page = location.pathname === '/login' ? true : false;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isUserExist, setUserExist] = useState(false);
  const [isEmailUsed, setIsEmailUsed] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const auth = getAuth();

  const validation = (fieldName, value) => {
    switch (fieldName) {
      case 'email':
        return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      case 'password':
        return value.length >= 6;
      default:
        break;
    }
  };

  const ctaClickHandler = (e) => {
    e.preventDefault();

    if (!validation('email', email) || !validation('password', password)) {
      setEmailValid(validation('email', email));
      setPasswordValid(validation('password', password));
      return;
    }

    if (page) {
      signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          if (auth) {
            navigate('/');
          }
        })
        .catch((error) => setUserExist(true));
      // user-not-found
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          if (auth) {
            navigate('/');
          }
        })
        .catch((error) => setIsEmailUsed(true));
    }
  };

  useEffect(() => {
    setUserExist(false);
    setIsEmailUsed(false);
  }, [location]);

  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="login min-h-screen flex items-center justify-center bg-black">
      <div className="holder p-8 bg-black min-h-460 w-450 absolute z-10 mt-32 left-1/2 transform -translate-x-1/2">
        <h1 className="text-white text-center text-2xl mb-5">{page ? 'Sign In' : 'Register'}</h1>
        <form>
          <input
            className={`form-control bg-gray-800 text-white p-2 w-full ${
              !emailValid ? 'border-red-500' : ''
            } mb-4`}
            value={email}
            onChange={emailOnChangeHandler}
            type="email"
            placeholder="Email"
          />
          {!emailValid && <p className="text-danger">Email is invalid/blank</p>}
          <input
            className={`form-control bg-gray-800 text-white p-2 w-full ${
              !passwordValid ? 'border-red-500' : ''
            } mb-4`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          {!passwordValid && <p className="text-danger text-red-700">Password is invalid/blank</p>}
          <div className="text-center">
            <button
              className="btn btn-danger bg-red-500 hover:bg-red-600 text-white p-2 w-full mt-4"
              onClick={ctaClickHandler}
            >
              {page ? 'Sign In' : 'Register'}
            </button>
          </div>
          <div className="form-check mt-4 text-center">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label text-white" htmlFor="flexCheckDefault">
              Remember Me
            </label>
          </div>
        </form>
        {isUserExist && <p className="text-danger mt-3 text-center">User does not exist | Go for Signup</p>}
        {isEmailUsed && <p className="text-danger mt-3 text-center">Email already in use | Go for Sign In</p>}
        <div className="login-form-other mt-5">
          <div className="login-signup-now text-center text-white text-sm">
            {page ? 'New to Netflix?' : 'Existing User'} &nbsp;
            <Link to={page ? '/register' : '/login'} className="text-red-500 hover:underline">
              {page ? 'Sign up now' : 'Sign In'}
            </Link>
            .
          </div>
        </div>
      </div>
      <div className="shadow bg-black bg-opacity-40 absolute top-0 w-full h-full"></div>
      <div className="concord-img vlv-creative w-full" style={{ objectFit: 'cover' }}>
  <img
    src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg"
    alt=""
  />
</div>

    </div>
  );
};

export default Login;
