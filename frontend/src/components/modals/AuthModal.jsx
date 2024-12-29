// src/components/modals/AuthModal.jsx
import React from 'react';
import './AuthModal.css';  // Import the external CSS file

const AuthModal = ({ isOpen, toggleModal, isSignIn, toggleForm }) => {
  if (!isOpen) return null; // Don't render if modal is not open

  return (
    <div className="auth-modal-overlay" onClick={toggleModal}>
      <div className="auth-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="auth-modal-header">
          <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
          <button className="close-btn" onClick={toggleModal}>X</button>
        </div>
        <div className="auth-modal-body">
          {/* Form content */}
          <form>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="auth-input"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="auth-input"
            />
            <button type="submit" className="auth-btn">
              {isSignIn ? 'Sign In' : 'Sign Up'}
            </button>
          </form>
        </div>
        <div className="auth-modal-footer">
          <p>
            {isSignIn ? 'Don’t have an account?' : 'Already have an account?'}
            <button className="toggle-form-btn" onClick={toggleForm}>
              {isSignIn ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
