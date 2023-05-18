import React from 'react';
import { useEffect } from 'react';
import './Alert.css';

type AlertProps = {
  removeAlert: () => void;
};

const Alert = ({ removeAlert }: AlertProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [removeAlert]);

  return <p className="alert">Please enter a valid grocery</p>;
};

export default Alert;
