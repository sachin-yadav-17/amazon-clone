import { useContext, createContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";
import type { User } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import type { ReactNode } from "react";
import type { AuthContextType, AuthData, UserDoc } from "./types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = getAuth();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const signup = async ({ name, email, password }: AuthData) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const authUser = res.user;

      await setDoc(doc(db, "users", authUser.uid), {
        name,
        email,
      });

      setUser(authUser);
      toast.success(`${name} registered successfully`,{ position: "top-right" });
      navigate("/");

      return authUser;
    } catch (error: any) {
      toast.error(error.message);
      return null;
    }
  };

  const login = async ({ email, password }: AuthData) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully!",{ position: "top-right" });
      return res.user;
    } catch (error: any) {
      toast.error(error.message);
      return null;
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/");
    toast.success("Logged out",{ position: "top-right" });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const docRef = doc(db, "users", authUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data() as UserDoc;

          setUser({
            ...authUser,
            displayName: data.name,
          });
        } else {
          setUser(authUser);
        }
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, [auth]);

  const value: AuthContextType = {
    user,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};
