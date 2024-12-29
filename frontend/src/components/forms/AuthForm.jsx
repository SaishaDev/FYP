import React from 'react';
import InputField from './InputField';
import Button from './Button';

const AuthForm = ({ formType, onSubmit, formData, handleChange, toggleForm }) => {
  return (
    <form onSubmit={onSubmit} className="auth-form">
      <InputField
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <InputField
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      {formType === 'signup' && (
        <InputField
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      )}
      <Button text={formType === 'signin' ? 'Sign In' : 'Sign Up'} className="auth-btn" type="submit" />
      <div className="auth-toggle">
        <p>
          {formType === 'signin' ? "Don't have an account?" : "Already have an account?"}
          <button className="toggle-btn" onClick={toggleForm}>
            {formType === 'signin' ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </form>
  );
};

export default AuthForm;
