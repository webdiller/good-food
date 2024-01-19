import { useTranslations } from "next-intl"
import Link from "next/link"
import { FC } from "react"

interface ComponentProps {}

const Footer: FC<ComponentProps> = () => {
  const year = new Date().getFullYear()

  const t = useTranslations("app")
  const navItemContact = t("navigation2.contact.title")
  const navItemFaq = t("navigation2.faq.title")
  const navItemTerms = t("navigation2.terms.title")
  const navItemOrder = t("navigation2.order.title")
  const navItemPrivacy = t("navigation2.privacy.title")

  const dataNav = [
    {
      label: navItemContact,
      href: "/",
    },
    {
      label: navItemFaq,
      href: "/",
    },
    {
      label: navItemTerms,
      href: "/",
    },
    {
      label: navItemOrder,
      href: "/",
    },
    {
      label: navItemPrivacy,
      href: "/",
    },
  ]

  return (
    <footer className="pb-2.5 pt-8.5 lg:bg-[#FAFAFA] lg:py-6.5">
      <div className="container flex flex-col items-center text-center">
        {/* SOCIALS */}
        <div className="mx-auto mb-4.5 flex w-full max-w-[300px] justify-between gap-1 lg:max-w-[540px]">
          {Array.from({ length: 4 }).map((item, indx) => {
            return (
              <Link
                href="/"
                className="inline-flex h-[57px] w-[57px] min-w-[57px] items-center justify-center rounded-12 bg-secondary font-raleway text-medium font-black text-primary lg:h-[75px] lg:w-[75px] lg:min-w-[75px] lg:text-2md"
                key={indx}>
                FB
              </Link>
            )
          })}
        </div>

        {/* NAVS */}
        <div className="2lg:gap-5 mb-7 flex max-w-[305px] flex-wrap gap-2.5 whitespace-nowrap text-black lg:mb-6 lg:max-w-none lg:justify-between xl:flex-nowrap">
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

      <div className="color-[#182927] text-center text-medium lg:text-2md">good.food.ge © {year}</div>
    </footer>
  )
}

export default Footer
