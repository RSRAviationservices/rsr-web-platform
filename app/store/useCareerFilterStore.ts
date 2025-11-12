import { create } from 'zustand';
// No longer need CareerDepartment

interface CareerFilterState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  resetFilters: () => void; // This will now only reset the search
}

export const useCareerFilterStore = create<CareerFilterState>((set) => ({
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  resetFilters: () =>
    set({
      searchQuery: '',
    }),
}));