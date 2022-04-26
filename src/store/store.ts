import create, { GetState, SetState } from 'zustand'

interface IColor {
  paintColor: string;
  addedColor: string;
  setPaintColor: (selectedColor: string) => void;
  setAddedColor: (selectedColor: string) => void;
}

interface IGrid {
  x: number;
  y: number;
  setX: (clientX: number) => void;
  setY: (clientY: number) => void;
}

export const useColorStore = create<IColor>((set: SetState<IColor>, get: GetState<IColor>) => ({
  paintColor: '',
  addedColor: '',
  setAddedColor: (selectedColor: string): void => {
    let { addedColor } = get()
    set({ addedColor: addedColor = selectedColor})
  },
  setPaintColor: (selectedColor: string): void => {
    let { paintColor } = get()
    set({ paintColor: paintColor = selectedColor})
  }
}))

export const useGridStore = create<IGrid>((set: SetState<IGrid>, get: GetState<IGrid>) => ({
  x: 48,
  y: 48,
  setX: (clientX: number): void => {
    set(state => ({x: state.x = clientX}))
  },
  setY: (clientY: number): void => {
    set(state => ({y: state.y = clientY}))
  }
}))