import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UseCookieState {
  agreed: boolean;
  setAgree: (agreed: boolean) => void;
}

const useCookieStore = create<UseCookieState>()(
  persist(
    (set) => ({
      agreed: false,
      setAgree: (agree) =>
        set({
          agreed: agree,
        }),
    }),
    {
      name: "cookie-agreement",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export { useCookieStore };
