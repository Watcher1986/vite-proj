import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { animated } from 'react-spring';
import useAnimation from '../../hooks/useAnimation';
import useActions from '../../hooks/useActions';
import { authSelectors } from '../../store/auth';
import './CredsRecovery.scss';

export default function CredsRecovery() {
  const [email, setEmail] = useState('');
  const { restorePass } = useActions();
  const isPasswordForgotten = useSelector(authSelectors.getIsPasswordForgotten);
  const animProps = useAnimation();

  const handleSubmit = e => {
    e.preventDefault();

    if (email.trim() === '') {
      toast.error('Email cannot be empty!', {
        duration: 3000,
        icon: '🤷‍♂️',
      });
    }

    if (email.trim() !== '') {
      restorePass({ value: !isPasswordForgotten });
    }
  };

  return (
    <animated.div className="formPassWrapper" style={animProps}>
      <h1 className="authPassHeading">Client Area</h1>
      <div className="formPassContainer">
        <p className="formPassTitle">Forgot Password?</p>
        <form autoComplete="off" className="authPassForm" onSubmit={handleSubmit}>
          <input
            type="email"
            className="mailInput"
            placeholder="Email"
            title={`Provide valid email with no spaces, "@" and ".com" params`}
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button type="submit" className="formBtn" onClick={handleSubmit}>
            RESET PASSWORD
          </button>
        </form>
      </div>
    </animated.div>
  );
}
