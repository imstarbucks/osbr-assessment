import { NavListType } from "@/lib/types";
import navLogo from "@assets/header-logo.png";
import { motion } from "motion/react";
import { useState } from "react";
import InstaIcon from "@assets/icons/instagram-icon.svg";
import FacebookIcon from "@assets/icons/facebook.svg";

const navList: NavListType[] = [
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Service",
    href: "/service",
  },
  {
    label: "Works",
    href: "/works",
  },
  {
    label: "Staff",
    href: "/staff",
  },
  {
    label: "Recruit",
    href: "/recruit",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  const crossVariant1 = {
    open: {
      rotate: 45,
    },
    close: {
      rotate: 0,
    },
  };

  const crossVariant2 = {
    open: {
      rotate: -45,
    },
    close: {
      rotate: 0,
    },
  };

  const crossVariant3 = {
    open: {
      opacity: 0,
    },
    close: {
      opacity: 1,
    },
  };

  const menuVariant = {
    open: {
      opacity: 1,
      display: "block",
    },
    close: {
      opacity: 0,
      display: "none",
    },
  };

  return (
    <>
      <nav className="fixed top-10 left-0 z-50 flex w-full items-start justify-between px-10 xl:right-0 xl:left-auto xl:w-fit xl:flex-col xl:items-end">
        <h1>
          <a href="/">
            <img src={navLogo} className="w-16 sm:w-36" alt="aab.co logo" />
            <span className="sr-only">AAB.co website</span>
          </a>
        </h1>
        <button
          type="button"
          className="aspect-square w-6 cursor-pointer space-y-1 xl:hidden"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={crossVariant1}
            initial="close"
            animate={open ? "open" : "close"}
            className="h-[3px] w-full origin-top-left -translate-y-1/2 rounded-4xl bg-black"
          ></motion.div>
          <motion.div
            variants={crossVariant3}
            initial="close"
            animate={open ? "open" : "close"}
            className="h-[3px] w-full rounded-4xl bg-black"
          ></motion.div>
          <motion.div
            variants={crossVariant2}
            initial="close"
            animate={open ? "open" : "close"}
            className="h-[3px] w-full origin-bottom-left translate-y-1/2 rounded-4xl bg-black"
          ></motion.div>
        </button>
        <ul className="mt-6 hidden flex-col items-end gap-y-2 xl:flex">
          {navList.map((nav, index) => (
            <li key={nav.label + index} className="flex justify-end">
              <a href={nav.href} className="text-2xl font-semibold">
                {nav.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <motion.div
        variants={menuVariant}
        initial="close"
        animate={open ? "open" : "close"}
        className="fixed top-0 left-0 z-40 h-screen w-screen bg-white/50 backdrop-blur-lg xl:!hidden"
      >
        <div className="relative flex size-full items-center justify-center">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 px-4">
            <a href="/" className="*:transition-opacity hover:*:opacity-50">
              <div className="text-3xl font-semibold">Service Menu</div>
              <p className="text-lg font-medium">サービス一覧 </p>
            </a>
            <a href="/" className="hover:*:opacity-50">
              <div className="text-3xl font-semibold">Recruit </div>
              <p className="text-lg font-medium">採用情報</p>
            </a>
            <a href="/" className="hover:*:opacity-50">
              <div className="text-3xl font-semibold">About Us </div>
              <p className="text-lg font-medium">AABについて</p>
            </a>
            <a href="/" className="hover:*:opacity-50">
              <div className="text-3xl font-semibold">Contact Us</div>
              <p className="text-lg font-medium">実績紹介</p>
            </a>
            <a href="/" className="hover:*:opacity-50">
              <div className="text-3xl font-semibold">Staff</div>
              <p className="text-lg font-medium">スタッフ紹介</p>
            </a>
          </div>
          <div className="absolute bottom-10 left-4 xl:left-10">
            <ul className="flex flex-col gap-y-8">
              <li>
                <a
                  href="https://www.instagram.com/aabinc_japan/"
                  target="_blank"
                  className="flex items-center gap-x-2"
                >
                  <img src={InstaIcon} alt="Instagram Icon" />
                  <span className="text-2xl font-semibold">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/aabinc/"
                  target="_blank"
                  className="flex items-center gap-x-2"
                >
                  <img src={FacebookIcon} alt="Facebook Icon" />
                  <span className="text-2xl font-semibold">Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export { Nav };
