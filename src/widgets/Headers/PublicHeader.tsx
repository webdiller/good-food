import logo from "@/public/logo.svg"
import SharedButton from "@/src/shared/ui/SharedButton"
import clsx from "clsx"

import Image from "next/image"
import Link from "next/link"
import { FC, useState } from "react"
import MenuLanguage from "../MenuLanguage"
import MenuUser from "../MenuUser"
import { useTranslations } from "next-intl"

interface ComponentProps {}

const PublicHeader: FC<ComponentProps> = () => {
  const t = useTranslations("app")

  const write_to_us = t("actions.write_to_us")
  const request_order = t("actions.request_order")

  const navItemAbout = t("navigation.about.title")
  const navItemProgramm = t("navigation.programm.title")
  const navItemDelivery = t("navigation.delivery.title")
  const navItemTestimonials = t("navigation.testimonials.title")
  const navItemProduction = t("navigation.production.title")

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
            unoptimized
            className="lg:w-10"
            alt=""
            width={logo.width}
            height={logo.height}
            src={logo.src}
          />
        </Link>

        <Link
          className="hidden text-2sm font-bold text-secondary underline underline-offset-4 hover:no-underline lg:inline-block"
          href="/">
          {write_to_us}
        </Link>

        <div className="ml-auto inline-flex items-center">
          <SharedButton
            variant="fill-secondary"
            size="default"
            classNames="rounded text-base mr-[55px] lg:inline-flex hidden">
            {request_order}
          </SharedButton>

          <div className="ml-2 inline-flex items-center space-x-1 md:space-x-2">
            <button
              className="relative h-[23px] min-w-[30px] lg:h-[30px] lg:min-w-[40px]"
              onClick={toggleMenu}>
              <svg
                width="30"
                height="25"
                viewBox="0 0 30 25"
                className={clsx("absolute-center h-2 w-2 stroke-secondary transition duration-300 lg:stroke-[#D9D9D9]", {
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
                className={clsx("absolute-center h-2 w-2 stroke-secondary transition duration-300 lg:stroke-[#D9D9D9]", {
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
            <MenuUser />
            <MenuLanguage />
          </div>
        </div>
      </div>

      <div
        className={clsx("grid bg-primary transition-all duration-300", {
          "grid-rows-[0fr]": !activeMenu,
          "grid-rows-[1fr]": activeMenu,
        })}>
        <div className="overflow-hidden">
          <div className="container flex flex-col py-3">
            <nav className="mb-6 flex flex-col justify-center space-y-2.5 text-center text-base text-white md:mb-0 md:flex-row md:space-x-3 md:space-y-0 lg:space-x-4.5 lg:text-2md">
              <Link
                className="font-black"
                href="/">
                {navItemAbout}
              </Link>
              <Link href="/">{navItemProgramm}</Link>
              <Link href="/">{navItemDelivery}</Link>

              <Link
                className="md:block"
                href="/">
                {navItemTestimonials}
              </Link>
              <Link
                className="md:block"
                href="/">
                {navItemProduction}
              </Link>
            </nav>
            <p className="inline-block self-center border-b-1 border-b-secondary pb-[2px] text-medium font-bold text-secondary md:hidden">{write_to_us}</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PublicHeader
