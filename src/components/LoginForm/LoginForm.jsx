import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { animated } from 'react-spring';
import useActions from '../../hooks/useActions';
import { authSelectors } from '../../store/auth';
import useAnimation from '../../hooks/useAnimation';
import eyeOnIcon from '../../assets/img/eyeOn.png';
import eyeOffIcon from '../../assets/img/eyeOff.png';
import './LoginForm.scss';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPeeking, setIsPeeking] = useState(false);
  const navigate = useNavigate();
  const isPasswordForgotten = useSelector(authSelectors.getIsPasswordForgotten);
  const { logIn, switchRestoreFlag } = useActions();
  const animProps = useAnimation();

  const handleSubmit = e => {
    e.preventDefault();

    if (username.trim() === '') {
      toast.error('Email cannot be empty!', {
        duration: 3000,
        icon: '🤷‍♂️',
      });
    }

    if (password.trim() === '') {
      toast.error('Password cannot be empty!', {
        duration: 3000,
        icon: '🤷‍♂️',
      });
    }

    if (password.trim() && username.trim() !== '') {
      const loginDataObj = {
        username,
        password,
      };
      logIn(loginDataObj);
      setUsername('');
      setPassword('');
      setTimeout(() => {
        navigate('/home');
      }, 1000);
    }
  };

  return (
    <animated.div className="formWrapper" style={animProps}>
      <h1 className="authHeading">Client Area</h1>
      <div className="formContainer">
        <p className="formTitle">Log in</p>
        <form autoComplete="off" className="authForm" onSubmit={handleSubmit}>
          <input
            type="text"
            className="formInput"
            placeholder="Username"
            title={`Provide a valid username`}
            required
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type={isPeeking ? 'text' : 'password'}
            className="formInput"
            title={`Provide a valid password`}
            // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="button" onClick={() => setIsPeeking(!isPeeking)} className="peekBtn">
            <img src={isPeeking ? eyeOnIcon : eyeOffIcon} alt="peeking eye" />
          </button>
          <button type="submit" className="formSingInBtn">
            SIGN IN
          </button>
          <button
            className="lostPassBtn"
            type="button"
            onClick={() => switchRestoreFlag(!isPasswordForgotten)}
          >
            FORGOT PASSWORD?
          </button>
        </form>
      </div>
    </animated.div>
  );
}
