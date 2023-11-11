import { create } from 'zustand'

const weekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

type WeekDayState = {
    weekDay: string;
    setWeekDay: () => void;
}

export const useWeekDayStore = create<WeekDayState>((set) => ({
  weekDay: weekDays[0],
  setWeekDay: () => set((state) => {
    const date = new Date();
    const weekDay = weekDays[date.getDay()];
    
    return {
        weekDay
    };
  })
}));
