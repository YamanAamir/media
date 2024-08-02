import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, userType, requiredType, redirectTo = '/' }) => {
  return userType === requiredType ? <Element /> : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
