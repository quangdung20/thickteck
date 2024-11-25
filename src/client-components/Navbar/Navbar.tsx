import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { FaRegUser, FaShoppingCart } from 'react-icons/fa';

import Drawer from './Drawer';
import Drawerdata from './Drawerdata';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/client', current: true },
  { name: 'Courses', href: '/client/#courses', current: false },
  { name: 'Mentor', href: '/client/#mentor', current: false },
  { name: 'Product', href: '/client/products', current: false },
  { name: 'Testimonial', href: '/client/#testimonial', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const CustomLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => {
  return (
    <Link href={href} passHref>
      <span onClick={onClick} className="px-3 py-4 text-lg font-normal">
        {children}
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [currentLink, setCurrentLink] = useState('/');

  const handleLinkClick = (href: string) => {
    setCurrentLink(href);
  };

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
          <div className="relative flex h-12 md:h-18 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              {/* LOGO */}

              <div className="flex flex-shrink-0 items-center">
                <Image
                  className="block w-40 lg:hidden"
                  // src={'/assets/logo/logo.svg'}
                  src={'/assets/logo-removebg-preview.png'}
                  width={214}
                  height={66}
                  alt="dsign-logo"
                />
                <Image
                  className="hidden h-full w-full lg:block"
                  // src={'/assets/logo/logo.svg'}
                  src={'/assets/logo-removebg-preview.png'}
                  width={214}
                  height={66}
                  alt="dsign-logo"
                />
              </div>

              {/* LINKS */}

              <div className="hidden lg:block m-auto">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <CustomLink key={item.name} href={item.href} onClick={() => handleLinkClick(item.href)}>
                      <span
                        className={classNames(
                          item.href === currentLink ? 'underline-links' : 'text-slategray',
                          'px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100'
                        )}
                        aria-current={item.href ? 'page' : undefined}
                      >
                        {item.name}
                      </span>
                    </CustomLink>
                  ))}
                </div>
              </div>
            </div>

            {/* SIGNIN DIALOG */}

            {/* <Signdialog /> */}

            {/* Cart Icon */}
            <div className="lg:block hidden mx-1">
              <Link href="/cart">
                <div className="fbg-white w-full text-Blueviolet border border-semiblueviolet font-medium py-2 px-8 rounded">
                  <FaShoppingCart className="text-2xl opacity-75 hover:text-Blueviolet " />
                </div>
              </Link>
            </div>
            <div className="lg:block hidden mx-1">
              <Link href="/cart">
                <div className="bg-semiblueviolet w-full hover:bg-Blueviolet hover:text-white text-Blueviolet font-medium my-2 py-2 px-8 rounded">
                  <FaRegUser className="text-2xl opacity-7" />
                </div>
              </Link>
            </div>

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            <div className="block lg:hidden">
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
            </div>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
