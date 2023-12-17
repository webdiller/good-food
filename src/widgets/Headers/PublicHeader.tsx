import logo from "@/public/logo.svg"
import SharedButton from "@/src/shared/ui/SharedButton"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { FC, useState } from "react"

interface ComponentProps {}

const PublicHeader: FC<ComponentProps> = () => {
  const [activeMenu, setactiveMenu] = useState(false)
  const toggleMenu = () => setactiveMenu((prev) => !prev)
  return (
    <header className="bg-primary text-[#F5F5F5]">
      <div className="container relative flex min-h-[76px] items-center py-1 lg:min-h-[80px]">
        <Link
          className="lg:hidden"
          href="/">
          Тбилиси
        </Link>

        <Link
          className="absolute-center lg:static lg:mr-[54px] lg:transform-none"
          href="/">
          <Image
            className="lg:w-[117px]"
            alt=""
            width={logo.width}
            height={logo.height}
            src={logo.src}
          />
        </Link>

        <Link
          className="hidden text-2md font-bold text-secondary underline underline-offset-4 hover:no-underline lg:inline-block"
          href="/">
          Написать нам
        </Link>

        <div className="ml-auto inline-flex items-center">
          <SharedButton
            variant="fill-secondary"
            size="default"
            classNames="rounded-6 mr-[55px] lg:inline-flex hidden">
            Оформить заказ
          </SharedButton>

          <button
            className="relative h-[23px] min-w-[30px] lg:h-[30px] lg:min-w-[40px]"
            onClick={toggleMenu}>
            <svg
              width="30"
              height="25"
              viewBox="0 0 30 25"
              className={clsx("absolute-center stroke-secondary transition duration-300 lg:stroke-[#D9D9D9]", {
                "scale-110 opacity-0": activeMenu,
                "scale-100 opacity-100": !activeMenu,
              })}
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 1H30"
                strokeWidth="2"
              />
              <path
                d="M0 13H30"
                strokeWidth="2"
              />
              <path
                d="M0 24H30"
                strokeWidth="2"
              />
            </svg>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={clsx("absolute-center stroke-secondary transition duration-300 lg:stroke-[#D9D9D9]", {
                "scale-110 opacity-0": !activeMenu,
                "scale-100 opacity-100": activeMenu,
              })}>
              <path
                d="M1.39331 22.6064L22.6065 1.39324"
                strokeWidth="2"
              />
              <path
                d="M22.2131 22.2131L0.999931 0.999934"
                strokeWidth="2"
              />
            </svg>
          </button>

          <div className="ml-2 hidden space-x-2 lg:inline-flex">
            <button className="border-1 rounded-6 inline-flex h-[41px] w-[41px] min-w-[41px] items-end justify-center border-[#EFEFEF]">
              <svg
                width="25"
                height="29"
                viewBox="0 0 25 29"
                fill="none"
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
            </button>
            <button className="border-1 rounded-6 inline-flex-center text-grey h-[41px] w-[41px] min-w-[41px] border-[#EFEFEF] text-2sm">RU</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PublicHeader
