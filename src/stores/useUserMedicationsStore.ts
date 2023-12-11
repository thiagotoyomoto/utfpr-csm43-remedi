import { UserMedication } from '@/domain';
import { create } from 'zustand'

type UserMedicationsStore = {
  userMedications: Map<string, UserMedication>;
  setUserMedication: (medication: UserMedication) => void;
  setUserMedications: (medications: UserMedication[]) => void;
};

export const useUserMedicationsStore = create<UserMedicationsStore>((set) => ({
  userMedications: new Map<string, UserMedication>(),
  setUserMedication: (medication) => set((state) => {
    state.userMedications.set(medication.id, medication);
    return state;
  }),
  setUserMedications: (medications) => set((state) => {
    return {
      userMedications: new Map(medications.map(medication => [medication.id, medication]))
    }
  })
}));
