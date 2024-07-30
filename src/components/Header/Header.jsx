import { Fragment, useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../../img/Gree-Logo.png";
import eng from "../../img/eng.png";
import "./Header.css";
import phone from "../../img/phone-volume-solid.svg";
import location from "../../img/location-dot-solid.svg";
import envelope from "../../img/envelope-solid.svg";
import { Link } from "react-router-dom";

const navigation = {
  pages: [
    { name: "მთავარი", href: "/" },
    { name: "ჩვენ შესახებ", href: "/about" },
    { name: "პროდუქცია", href: "/products" },
    { name: "სერვისები", href: "#" },
    { name: "კონტაქტი", href: "/contact" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white" style={{ fontFamily: "tkt" }}>
      {/* Mobile menu */}
      <Transition show={open}>
        <Dialog className="relative z-40 lg:hidden" onClose={setOpen}>
          <TransitionChild
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 z-40 flex">
            <TransitionChild
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                  <img
                      src={eng}
                      alt=""
                      className="block h-auto w-6 flex-shrink-0"
                    />
                  </a>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <header
        className="relative bg-white border-b-2 border-customBlue"
      >
        <div className="blue-header-container">
          <div className="info-container">
            <img src={phone} alt="Phone Icon" className="icon" />
            <h3 className="info-text">+995 592 55 33 22</h3>
          </div>
          <div className="info-container">
            <img src={envelope} alt="Location Icon" className="icon" />
            <h3 className="info-text">gree.georgia@gmail.com</h3>
          </div>
          <div className="info-container">
            <img src={location} alt="Location Icon" className="icon" />
            <h3 className="info-text">საქ. თბილისი. ოთარ ჭილაძის 302</h3>
          </div>
        </div>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          style={{ position: "relative", zIndex: "2" }}
        >
          <div className="py-2 border-gray-200 item">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <button
                  type="button"
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <a href="#">
                    <span className="sr-only">Your Company</span>
                    <img className="h-20 w-auto" src={logo} alt="" />
                  </a>
                </div>
              </div>

              {/* Flyout menus */}
              <PopoverGroup
                className="hidden lg:flex lg:items-center lg:justify-center lg:flex-grow lg:space-x-8"
                style={{ fontFamily: "tkt", fontSize: "18px" }}
              >
                {navigation.pages.map((page) => (
                  <a
                    key={page.name}
                    href={page.href}
                    className="text-base font-medium text-gray-700 hover:text-gray-800"
                  >
                    {page.name}
                  </a>
                ))}
              </PopoverGroup>

              <div className="flex items-center">
                <div className="hidden lg:ml-8 lg:flex">
                  <a
                    href="#"
                    className="flex items-center text-gray-700 hover:text-gray-800"
                  >
                    <img
                      src={eng}
                      alt=""
                      className="block h-auto w-6 flex-shrink-0"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
