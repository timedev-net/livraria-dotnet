import { create } from 'zustand'

export const useGlobalStore = create((set) => ({
  showSideBar: true,
  toggleSideBar: () => set((state: any) => ({ showSideBar: !state.showSideBar })),
//   removeAllBears: () => set({ bears: 0 }),
}))