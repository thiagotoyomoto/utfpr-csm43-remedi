import { Medication } from '@/domain';
import { create } from 'zustand'

type MedicationsStore = {
  medications: Map<string, Medication>;
  setMedication: (medication: Medication) => void;
  setMedications: (medications: Medication[]) => void;
};

export const useMedicationsStore = create<MedicationsStore>((set) => ({
  medications: new Map<string, Medication>(),
  setMedication: (medication) => set((state) => {
    state.medications.set(medication.id, medication);
    return state;
  }),
  setMedications: (medications) => set((state) => {
    return {
      medications: new Map(medications.map(medication => [medication.id, medication]))
    }
  })
}));
