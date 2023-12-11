import { UserTodayMedication } from '@/domain';
import { create } from 'zustand'

type UserTodayMedicationsStore = {
    userTodayMedications: Map<string, UserTodayMedication>;
    setUserTodayMedication: (userTodayMedication: UserTodayMedication) => void;
    setUserTodayMedications: (userTodayMedications: UserTodayMedication[]) => void;
};

export const useUserTodayMedicationsStore = create<UserTodayMedicationsStore>((set) => ({
    userTodayMedications: new Map<string, UserTodayMedication>(),
    setUserTodayMedication: (medication) => set((state) => {
        state.userTodayMedications.set(medication.id, medication);
        return state;
    }),
    setUserTodayMedications: (userTodayMedications) => set((state) => {
        return {
            userTodayMedications: new Map(userTodayMedications.map(userTodayMedication => [userTodayMedication.id, userTodayMedication]))
        }
    })
}));
