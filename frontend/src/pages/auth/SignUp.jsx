// src/pages/auth/SignUpPage.jsx
import React, { useState } from 'react';
import AuthForm from '../../components/forms/AuthForm';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [formType, setFormType] = useState('signup');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle Sign Up logic here (e.g., API call)
    console.log('Sign Up Data:', formData);
    // Redirect after successful sign-up
    navigate('/');
  };

  const toggleForm = () => {
    setFormType(formType === 'signin' ? 'signup' : 'signin');
  };

  return (
    <div className="auth-page">
      <h2 className="auth-title">Sign Up</h2>
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

export default SignUpPage;
