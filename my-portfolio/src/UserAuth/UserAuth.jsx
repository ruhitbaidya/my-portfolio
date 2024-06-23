import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState} from "react";
import auth from "../firebase";
export const ContextProvide = createContext(null);

const UserAuth = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const loginEmailpass = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }
  const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const googleLogin = ()=>{
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
  }

  useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (person)=>{
            setUser(person)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
  }, [])

  const info = {user, loading, googleLogin, loginEmailpass, createUser};

  return (
    <ContextProvide.Provider value={info}>{children}</ContextProvide.Provider>
  );
};

export default UserAuth;
