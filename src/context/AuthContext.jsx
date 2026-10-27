
import { createContext, useState } from "react";

export const AuthContext = createContext();

function getSavedUser() {
  try {
    const savedUser = localStorage.getItem("shopeasyUser");
    return savedUser ? JSON.parse(savedUser) : null;
  } catch {
    return null;
  }
}

function AuthProvider({ children }) {
  const [user, setUser] = useState(getSavedUser);

  const isLoggedIn = Boolean(user);

  function login(email) {
    const cleanEmail = email.trim().toLowerCase();

    const newUser = {
      name: cleanEmail.split("@")[0],
      email: cleanEmail,
    };

    localStorage.setItem("shopeasyUser", JSON.stringify(newUser));
    setUser(newUser);
  }

  function logout() {
    localStorage.removeItem("shopeasyUser");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;