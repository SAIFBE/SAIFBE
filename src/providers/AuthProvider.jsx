import { createContext, useMemo, useState } from 'react';
import { clearAccessToken, setAccessToken } from '../api/axios';
import { loginApi } from '../api/auth.api';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  const login = async (credentials) => {
    setIsAuthLoading(true);
    try {
      const response = await loginApi(credentials);
      setAccessToken(response.accessToken);
      setUser(response.user);
      return response.user;
    } finally {
      setIsAuthLoading(false);
    }
  };

  const logout = () => {
    clearAccessToken();
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      isAuthenticated: Boolean(user),
      isAuthLoading,
    }),
    [user, isAuthLoading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
