import { useCookieStore } from "@/store/useCookieStore";
import { motion } from "motion/react";
import { useState } from "react";

const CookiePrompt = () => {
  const [close, setClose] = useState(false);
  const setAgree = useCookieStore((state) => state.setAgree);

  const variant = {
    show: {
      y: 0,
      opacity: 1,
    },
    hidden: {
      y: 200,
      opacity: 0,
    },
  };
  return (
    <motion.div
      variants={variant}
      initial="show"
      animate={close ? "hidden" : "show"}
      className="fixed right-0 bottom-0 left-0 z-40 m-auto flex w-[90%] flex-col items-center gap-y-4 rounded-t-3xl bg-black/80 p-4 text-white backdrop-blur-md lg:w-4/5 lg:flex-row lg:p-8"
    >
      <div className="order-2 lg:order-1">
        <p className="mb-6 text-sm font-semibold sm:text-lg">
          This website uses cookies to enhance user experience. You can modify
          your browser settings to change how cookies function. For more
          details, please refer to our Cookie Policy. By continuing to browse
          the site, you agree to our use of cookies. If you consent to the use
          of cookies, please click the “Agree” button.
        </p>
        <p className="text-xs sm:text-sm">
          このウェブサイトでは、サイトの利便性向上を目的に、クッキーを使用しています。ブラウザの設定によりクッキーの機能を変更することもできます。詳細はクッキーポリシーをご覧ください。サイトを閲覧いただく際には、クッキーの使用に同意いただく必要があります。Cookieの利用に同意頂ける場合は、「同意する」ボタンを押してください。 
        </p>
      </div>
      <button
        type="button"
        className="order-3 mx-8 flex cursor-pointer items-center gap-2 lg:order-2 lg:flex-col"
        onClick={() => setAgree(true)}
      >
        <div className="text-4xl font-semibold">Agree</div>
        <p>同意する</p>
      </button>
      <div className="order-1 mt-0 mb-auto lg:order-3">
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => setClose(true)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="size-14 p-2 lg:size-8 lg:p-0"
          >
            <path d="M1 1L19 19" stroke="white" stroke-width="2" />
            <path d="M19 1L1 19" stroke="white" stroke-width="2" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default CookiePrompt;
