import create, { GetState, SetState } from 'zustand'

interface Color {
  paintColor: string;
  setPaintColor: (selectedColor: string) => void;
}

interface Grid {
  x: number;
  y: number;
  setX: (clientX: number) => void;
  setY: (clientY: number) => void;
}

export const useColorStore = create<Color>((set: SetState<Color>, get: GetState<Color>) => ({
  paintColor: '',
  setPaintColor: (selectedColor: string): void => {
    let { paintColor } = get()
    set({ paintColor: paintColor = selectedColor})
  }
}))

export const useGridStore = create<Grid>((set: SetState<Grid>, get: GetState<Grid>) => ({
  x: 0,
  y: 0,
  setX: (clientX: number): void => {
    set(state => ({x: state.x = clientX}))
  },
  setY: (clientY: number): void => {
    set(state => ({y: state.y = clientY}))
  }
}))