// src/pages/auth/SignInPage.jsx
import React, { useState } from 'react';
import AuthForm from '../../components/forms/AuthForm';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formType, setFormType] = useState('signin');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle Sign In logic here (e.g., API call)
    console.log('Sign In Data:', formData);
    // Redirect after successful login
    navigate('/');
  };

  const toggleForm = () => {
    setFormType(formType === 'signin' ? 'signup' : 'signin');
  };

  return (
    <div className="auth-page">
      <h2 className="auth-title">Sign In</h2>
      <AuthForm
        formType={formType}
        onSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
        toggleForm={toggleForm}
      />
    </div>
  );
};

export default SignInPage;
