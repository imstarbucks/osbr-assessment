import { create } from "zustand";

interface UseServiceCursorState {
  show: boolean;
  index: number;
  setShow: (show: boolean) => void;
  setIndex: (index: number) => void;
}

const useServiceCursorStore = create<UseServiceCursorState>()((set) => ({
  show: false,
  index: 0,
  setShow: (show) =>
    set({
      show: show,
    }),
  setIndex: (index) =>
    set({
      index: index,
    }),
}));

export { useServiceCursorStore };
