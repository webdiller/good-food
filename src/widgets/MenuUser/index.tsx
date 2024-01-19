import React from "react"
import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"

import clsx from "clsx"
import { useTranslations } from "next-intl"

const MenuUser = () => {
  const t = useTranslations("app")

  const account = t("actions.account")
  const logout = t("actions.logout")
  return (
    <Menu
      as="div"
      className="relative inline-block h-[30px] w-[30px] min-w-[30px] text-left md:h-[35px] md:w-[35px] md:min-w-[35px]">
      <Menu.Button className="inline-flex h-full w-full items-end justify-center rounded-6 border-1 border-[#EFEFEF]">
        <svg
          width="25"
          height="29"
          viewBox="0 0 25 29"
          fill="none"
          className="h-2 w-2 md:h-3 md:w-3"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.5 15C16.6421 15 20 11.6421 20 7.5C20 3.35786 16.6421 0 12.5 0C8.35786 0 5 3.35786 5 7.5C5 11.6421 8.35786 15 12.5 15Z"
            fill="#D9D9D9"
          />
          <path
            d="M0 29C0 21.272 5.6 15 12.5 15C19.4 15 25 21.272 25 29"
            fill="#D9D9D9"
          />
        </svg>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0">
        <Menu.Items className="absolute right-0 z-10 mt-2 w-auto origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none md:mt-1.5">
          <div className="flex flex-col divide-y divide-gray-100 whitespace-nowrap text-left text-black">
            <Menu.Item>
              {({ active }) => (
                <button
                  // onClick={handler(item)}
                  className={clsx("flex items-center space-x-0.5 px-1 py-0.5 transition-all duration-300 hover:bg-grey")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-2 w-2 min-w-[20px]">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  <span>{account}</span>
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  // onClick={handler(item)}
                  className={clsx("flex items-center space-x-0.5 px-1 py-0.5 transition-all duration-300 hover:bg-grey")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-2 w-2 min-w-[20px]">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                    />
                  </svg>

                  <span>{logout}</span>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default MenuUser
