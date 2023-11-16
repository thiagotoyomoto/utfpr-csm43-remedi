import { User } from '@/domain';
import { create } from 'zustand'

type UserStore = {
  user: User;
  setUser: (user: User) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set((state) => ({ user }))
}));
