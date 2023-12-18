import React, { MouseEvent } from "react"
import { Menu, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import iconFlagGe from "@/public/icon-flag-ge.svg"
import iconFlagRu from "@/public/icon-flag-ru.svg"
import iconFlagEn from "@/public/icon-flag-en.svg"
import clsx from "clsx"
import Image, { StaticImageData } from "next/image"

interface ItemProps {
  label: string
  value: string
  image: StaticImageData
}

const dataLangs: ItemProps[] = [
  {
    label: "EN",
    value: "en",
    image: iconFlagEn,
  },
  {
    label: "RU",
    value: "ru",
    image: iconFlagRu,
  },
  {
    label: "GE",
    value: "ge",
    image: iconFlagGe,
  },
]

const MenuLanguage = () => {
  const [selected, setSelected] = useState<ItemProps>(dataLangs[0])
  const handler = (value: ItemProps) => (e: MouseEvent<HTMLButtonElement>) => setSelected(value)
  return (
    <Menu
      as="div"
      className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex-center h-[35px] w-[35px] min-w-[35px] rounded-6 border-1 border-[#EFEFEF] text-base text-grey">{selected.label}</Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="flex flex-col text-left text-black">
            {dataLangs.map((item, indx) => {
              return (
                <Menu.Item key={indx}>
                  {({ active }) => (
                    <button
                      onClick={handler(item)}
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
