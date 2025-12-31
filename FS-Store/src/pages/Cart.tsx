import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

// Redirect to home and open sidebar instead of showing a dedicated page
export const Cart = () => {
  const { setIsCartOpen } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    setIsCartOpen(true);
    navigate('/');
  }, [setIsCartOpen, navigate]);

  return null;
};
