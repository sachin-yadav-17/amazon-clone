import type { User } from "firebase/auth";

export type AuthContextType = {
  user: User | null;
  login: (data: AuthData) => Promise<any>;
  signup: (data: AuthData) => Promise<any>;
  logout: () => Promise<void>;
};

export type AuthData = {
  name?: string;
  email: string;
  password: string;
  displayName?: any;
};

export type UserDoc = {
  name: string;
  email: string;
};
