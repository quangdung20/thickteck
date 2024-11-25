import React from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', current: true },
  { name: 'Courses', href: '#courses', current: false },
  { name: 'Mentor', href: '#mentor', current: false },
  { name: 'Group', href: '#/', current: false },
  { name: 'About', href: '#about', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'text-black hover:opacity-100' : 'hover:text-black hover:opacity-100',
                  'py-1 text-lg font-normal opacity-75 block'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4"></div>

            {/* Cart Icon */}
            <div className="">
              <Link href="/cart">
                <button className="fbg-white w-full text-Blueviolet border border-semiblueviolet font-medium py-2 px-8 rounded flex items-center justify-center gap-2">
                  <FaShoppingCart className="text-2xl opacity-75 hover:text-Blueviolet " />
                  Giỏ hàng
                </button>
              </Link>
            </div>
            <div className="">
              <Link href="/account">
                <button className="bg-semiblueviolet w-full hover:bg-Blueviolet hover:text-white text-Blueviolet font-medium my-2 py-2 px-4 rounded flex items-center justify-center gap-2">
                  <FaUser className="text-2xl opacity-75 hover:text-Blueviolet " />
                  Account
                </button>
              </Link>
            </div>
            {/* <button className="bg-semiblueviolet w-full hover:bg-Blueviolet hover:text-white text-Blueviolet font-medium my-2 py-2 px-4 rounded">
              Sign up
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
