import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const login = (id) => {
    // This is where you set the user ID
    setUserId((prevUserId) => {
      console.log("Previous userId state:", prevUserId);
      console.log(isLoggedIn)
      return id; // Set to the provided id
    });

    console.log("Setting user ID:", id);
  };

  // This is where you use useEffect to handle side effects
  useEffect(() => {
    if (userId) {
    console.log("Current user ID:", userId);
      setIsLoggedIn(true);
    }
  }, [userId]);

  useEffect(() => {
    console.log("isLoggedIn =", isLoggedIn);
  }, [isLoggedIn]);

  const logout = () => {
setIsLoggedIn(false);
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
