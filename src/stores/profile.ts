import { Profile } from '@/domain';
import { create } from 'zustand'

type ProfileStore = {
  profile: Profile;
  setProfile: (profile: Profile) => void;
};

export const useProfileStore = create<ProfileStore>((set) => ({
  profile: null,
  setProfile: (profile) => set((state) => ({ profile }))
}));
