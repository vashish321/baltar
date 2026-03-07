// SignupPage.js
'use client';
import { useState } from 'react';
import SubscriptionTier from '@/components/auth/SubscriptionTier';
import './signup.css'; // ✅ Make sure this is present

export default function SignupPage() {
  const [selectedPlan, setSelectedPlan] = useState('');

  return (
    <div className="signup-container">
      <h1 className="signup-heading">Create Account</h1>

      <form className="signup-form">
        <input placeholder="First Name" className="form-input" />
        <input placeholder="Last Name" className="form-input" />
        <input placeholder="Email" type="email" className="form-input" />
        <input placeholder="Phone (with + code)" className="form-input" />
        <input placeholder="Password" type="password" className="form-input" />
        <input placeholder="Re-type Password" type="password" className="form-input" />

        <SubscriptionTier selected={selectedPlan} onSelect={setSelectedPlan} />

        <button className="submit-btn">Sign Up</button>
      </form>
    </div>
  );
}
