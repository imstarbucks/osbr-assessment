import { CursorSize } from "@/lib/types";
import { create } from "zustand";

interface UseCursorState {
  label?: string;
  size: CursorSize;
  setLabel: (label: string) => void;
  setSize: (size: CursorSize) => void;
}

const useCursorStore = create<UseCursorState>()((set) => ({
  label: "",
  size: "none",
  setLabel: (label) =>
    set({
      label: label,
    }),
  setSize: (size) =>
    set({
      size: size,
    }),
}));

export { useCursorStore };
