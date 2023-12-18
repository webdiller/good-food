import Link from "next/link"
import { FC } from "react"

interface ComponentProps {}

const dataNav = [
  {
    label: "Contact us",
    href: "/",
  },
  {
    label: "FAQ",
    href: "/",
  },
  {
    label: "Terms of Service",
    href: "/",
  },
  {
    label: "Contact",
    href: "/",
  },
  {
    label: "Order",
    href: "/",
  },
  {
    label: "Privacy Policy",
    href: "/",
  },
]

const Footer: FC<ComponentProps> = () => {
  return (
    <footer className="pt-8.5 pb-2.5 lg:bg-[#FAFAFA] lg:py-6.5">
      <div className="container flex flex-col items-center text-center">
        {/* SOCIALS */}
        <div className="mx-auto mb-4.5 flex w-full max-w-[300px] justify-between gap-1 lg:max-w-[540px]">
          {Array.from({ length: 4 }).map((item, indx) => {
            return (
              <Link
                href="/"
                className="font-raleway inline-flex h-[57px] w-[57px] min-w-[57px] items-center justify-center rounded-12 bg-secondary text-medium font-black text-primary lg:h-[75px] lg:w-[75px] lg:min-w-[75px] lg:text-2md"
                key={indx}>
                FB
              </Link>
            )
          })}
        </div>

        {/* NAVS */}
        <div className="mb-7 flex max-w-[305px] flex-wrap gap-2.5 text-black lg:mb-6 lg:max-w-none lg:flex-nowrap lg:justify-between">
          {dataNav.map(({ label, href }, indx) => {
            return (
              <Link
                className="border-b-1 border-b-black pb-[3px] text-base font-bold lg:text-[24px]"
                key={indx}
                href={href}>
                {label}
              </Link>
            )
          })}
        </div>
      </div>

      <div className="color-[#182927] text-center text-medium lg:text-2md">good.food.ge © 2023</div>
    </footer>
  )
}

export default Footer
