import React from "react"
import img1 from "@/public/img-process-1.svg"
import img2 from "@/public/img-process-2.svg"
import img3 from "@/public/img-process-3.svg"
import img4 from "@/public/img-process-4.svg"
import Image from "next/image"
import { sharedi18n } from "@/src/shared/i18n"
import { useTranslations } from "next-intl"

interface ComponentProps {
  currentLocale: (typeof sharedi18n.locales)[number]
}

const ProcessSection = ({ currentLocale }: ComponentProps) => {
  const t = useTranslations("pages.home")
  const dataItems = [
    {
      title: t("sectionProcess.item1.title"),
      img: img1,
    },
    {
      title: t("sectionProcess.item2.title"),
      img: img2,
    },
    {
      title: t("sectionProcess.item3.title"),
      img: img3,
    },
    {
      title: t("sectionProcess.item4.title"),
      img: img4,
    },
  ]

  return (
    <div className="space-y-5 text-center font-raleway text-black lg:space-y-7">
      <p className="inline-block border-b-3 border-b-secondary text-2lg font-black lg:border-0 lg:text-4sm">{t("sectionProcess.title")}</p>
      <div className="mx-auto max-w-[270px] space-y-4.5 text-left lg:flex lg:max-w-[1200px] lg:justify-between lg:space-y-0 lg:text-center">
        {dataItems.map((item, indx) => {
          return (
            <div
              className="relative flex items-center lg:flex-col lg:space-x-0 [&:last-child>svg]:hidden"
              key={indx}>
              <svg
                className="absolute right-[-20px] top-4 hidden lg:inline-block"
                width="29"
                height="25"
                viewBox="0 0 29 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 12.7657H28.1759"
                  stroke="black"
                />
                <path
                  d="M16.2106 1L28.0332 12.8227L17.0863 23.7696"
                  stroke="black"
                />
              </svg>

              <Image
                unoptimized
                className="mr-4 h-[84px] w-[84px] min-w-[84px] object-contain md:mr-2 lg:mb-3.5 lg:mr-0 lg:h-[100px] lg:w-[100px] lg:min-w-[100px]"
                alt=""
                width={item.img.width}
                height={item.img.height}
                src={item.img.src}
              />
              <div className="lg:max-w-[260px]">
                <p className="text-base font-black lg:text-2md">
                  {item.title}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProcessSection
