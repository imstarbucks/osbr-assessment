import { NavListType } from '@/lib/types';
import navLogo from '@assets/header-logo.png';

const navList: NavListType[] = [
  {
    label: 'About Us',
    href: '/about-us',
  },
  {
    label: 'Service',
    href: '/service',
  },
  {
    label: 'Works',
    href: '/works',
  },
  {
    label: 'Staff',
    href: '/staff',
  },
  {
    label: 'Recruit',
    href: '/recruit',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const Nav = () => {
  return (
    <nav className="fixed right-10 top-10 flex flex-col z-50">
      <h1>
        <a href="/">
          <img src={navLogo} className="w-36" alt="aab.co logo" />
          <span className="sr-only">AAB.co website</span>
        </a>
      </h1>
      <ul className="flex flex-col gap-y-2 mt-6 items-end">
        {navList.map((nav, index) => (
          <li key={nav.label + index} className="flex justify-end">
            <a href={nav.href} className="font-semibold text-2xl">
              {nav.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Nav };
