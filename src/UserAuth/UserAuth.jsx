
import { createContext} from "react";
export const ContextProvide = createContext(null);

const UserAuth = ({ children }) => {



  return (
    <ContextProvide.Provider value={{info: "ruhit"}}>{children}</ContextProvide.Provider>
  );
};

export default UserAuth;
