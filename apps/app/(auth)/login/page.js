'use client';

import { useState } from 'react';
import ForgotPasswordModal from '@/components/auth/ForgotPasswordModal';
import './login.css';

export default function LoginPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="login-container">
      <h1 className="login-heading">Login to Your Account</h1>

      <form className="login-form">
        <input type="email" placeholder="Email" className="form-input" />
        <input type="password" placeholder="Password" className="form-input" />

        <div className="login-options">
          <label>
            <input type="checkbox" />
            <span> Remember Me</span>
          </label>
          <button type="button" className="forgot-link" onClick={() => setShowModal(true)}>
            Forgot Password?
          </button>
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>

      {showModal && <ForgotPasswordModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
