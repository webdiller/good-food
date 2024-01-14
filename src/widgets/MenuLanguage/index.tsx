import React, { MouseEvent, useEffect } from "react"
import { Menu, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import iconFlagGe from "@/public/icon-flag-ge.svg"
import iconFlagRu from "@/public/icon-flag-ru.svg"
import iconFlagEn from "@/public/icon-flag-en.svg"
import clsx from "clsx"
import Image, { StaticImageData } from "next/image"
import { useRouter } from "next/router"
import { sharedi18n } from "@/src/shared/i18n"

interface langProps {
  label: string
  value: string
  image: StaticImageData
}


const MenuLanguage = () => {
  const router = useRouter();
  const onLanguageChange = (localeArgs: string) => async (e: React.MouseEvent<HTMLButtonElement>) => {
    router.push("/", undefined, { locale: localeArgs });
  };

  const availableLangs: langProps[] = sharedi18n.locales.map(item => ({
    value: item,
    label: item.toUpperCase(),
    image: item === "ru" ? iconFlagRu : item === "ka" ? iconFlagGe : iconFlagEn
  }))

  return (
    <Menu
      as="div"
      className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex-center h-[30px] w-[30px] min-w-[30px] rounded-6 border-1 border-[#EFEFEF] text-base text-grey md:h-[35px] md:w-[35px] md:min-w-[35px]">
          {router.locale?.toUpperCase()}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0">
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="flex flex-col text-left text-black">
            {availableLangs.map((item, indx) => {
              return (
                <Menu.Item key={indx}>
                  {({ active }) => (
                    <button
                      onClick={onLanguageChange(item.value)}
                      className={clsx("flex items-center space-x-0.5 px-1 py-0.5 transition-all duration-300 hover:bg-grey")}>
                      <Image
                        unoptimized
                        className="w-[24px] min-w-[24px]"
                        alt=""
                        width={item.image.width}
                        height={item.image.height}
                        src={item.image.src}
                      />
                      <span>{item.label}</span>
                    </button>
                  )}
                </Menu.Item>
              )
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default MenuLanguage
