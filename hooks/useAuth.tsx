import { useContext } from 'react';
import { AuthContext, AuthContextDataProps } from '../src/contexts/AuthContext';

export function userAuth(): AuthContextDataProps {
  const context = useContext(AuthContext);
  return context;
}