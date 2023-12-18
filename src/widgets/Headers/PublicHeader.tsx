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
            unoptimized
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
            <button className="inline-flex h-[41px] w-[41px] min-w-[41px] items-end justify-center rounded-6 border-1 border-[#EFEFEF]">
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
            <button className="inline-flex-center h-[41px] w-[41px] min-w-[41px] rounded-6 border-1 border-[#EFEFEF] text-2sm text-grey">RU</button>
          </div>
        </div>
      </div>

      <div
        className={clsx("grid bg-primary transition-all duration-300", {
          "grid-rows-[0fr]": !activeMenu,
          "grid-rows-[1fr]": activeMenu,
        })}>
        <div className="overflow-hidden">
          <div className="container flex flex-col py-5">
            <nav className="mb-8 flex flex-col justify-center space-y-2.5 text-center text-2sm text-white md:mb-0 md:flex-row md:space-x-3 md:space-y-0 lg:space-x-4.5 lg:text-2md">
              <Link
                className="font-black"
                href="/">
                О нас
              </Link>
              <Link href="/">Программа питания</Link>
              <Link href="/">Доставка</Link>

              <Link
                className="md:block"
                href="/">
                Отзывы
              </Link>
              <Link
                className="md:block"
                href="/">
                Производство
              </Link>
            </nav>

            <div className="mb-2 inline-flex items-center justify-center space-x-2 md:hidden">
              <button className="inline-flex h-[30px] w-[30px] min-w-[30px] items-end justify-center rounded-6 border-1 border-[#EFEFEF]">
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.2229 11.8222C13.2987 11.8222 15.7922 9.32874 15.7922 6.2529C15.7922 3.17706 13.2987 0.683594 10.2229 0.683594C7.14703 0.683594 4.65356 3.17706 4.65356 6.2529C4.65356 9.32874 7.14703 11.8222 10.2229 11.8222Z"
                    fill="#D9D9D9"
                  />
                  <path
                    d="M0.940674 21.4757C0.940674 16.147 5.09909 11.8223 10.2229 11.8223C15.3466 11.8223 19.505 16.147 19.505 21.4757"
                    fill="#D9D9D9"
                  />
                </svg>
              </button>
              <button className="inline-flex-center h-[30px] w-[30px] min-w-[30px] rounded-6 border-1 border-[#EFEFEF] text-base text-grey">RU</button>
            </div>

            <p className="inline-block self-center border-b-1 border-b-secondary pb-[2px] text-medium font-bold text-secondary md:hidden">Написать нам </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PublicHeader
