import create, { GetState, SetState } from 'zustand'

interface color {
  paintColor: string;
  setPaintColor: (selectedColor: string) => void;
}

export const useStore = create<color>((set: SetState<color>, get: GetState<color>) => ({
  paintColor: '',
  setPaintColor: (selectedColor: string): void => {
    let { paintColor } = get()
    set({ paintColor: paintColor = selectedColor})
  }
}))