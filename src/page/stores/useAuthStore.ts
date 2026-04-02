import { create } from "zustand";
import { persist } from "zustand/middleware";

export type AuthUser = {
  username?: string;
  name?: string;
  email: string;
};

type AuthState = {
  user: AuthUser | null;
  token: string | null;
  login: (user: AuthUser, token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      login: (user, token) => set({ user, token }),
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: "hyper-auth",
      partialize: (state) => ({ user: state.user, token: state.token }),
    },
  ),
);
