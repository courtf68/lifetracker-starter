import { createContext, useState, useContext } from "react";

//file so no more props
const AuthContext = createContext(null);
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const authValue = { user, setUser };
  return (
    <AuthContext.Provider value={authValue}>
      <>{children}</>
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);
