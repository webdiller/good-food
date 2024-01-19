import React from "react"
import img1 from "@/public/img-feature-1.svg"
import img2 from "@/public/img-feature-2.svg"
import img3 from "@/public/img-feature-3.svg"
import img4 from "@/public/img-feature-4.svg"
import Image from "next/image"
import { sharedi18n } from "@/src/shared/i18n"
import { useTranslations } from "next-intl"

interface ComponentProps {
  currentLocale: (typeof sharedi18n.locales)[number]
}

const FeaturesAltSection = ({ currentLocale }: ComponentProps) => {
  const t = useTranslations("pages.home")
  const features = [
    {
      title: t("sectionFeatures.item1.title"),
      description: t("sectionFeatures.item1.description"),
      img: img1,
    },
    {
      title: t("sectionFeatures.item2.title"),
      description: t("sectionFeatures.item2.description"),
      img: img2,
    },
    {
      title: t("sectionFeatures.item3.title"),
      description: t("sectionFeatures.item3.description"),
      img: img3,
    },
    {
      title: t("sectionFeatures.item4.title"),
      description: t("sectionFeatures.item4.description"),
      img: img4,
    },
  ]

  return (
    <div className="text-center font-raleway text-black">
      <p className="mb-3 inline-block text-3 font-black uppercase lg:mb-6 lg:text-4sm">{t("sectionFeatures.title")}</p>
      <div className="mx-auto max-w-[320px] space-y-3 text-left lg:flex lg:max-w-[1400px] lg:justify-between lg:space-x-3 lg:space-y-0 lg:text-center xl:grid xl:grid-cols-4 xl:gap-3 xl:space-x-0">
        {features.map((item, indx) => {
          return (
            <div
              className="flex items-center lg:flex-col lg:space-x-0"
              key={indx}>
              <Image
                unoptimized
                className="mr-2.5 h-[80px] w-[80px] min-w-[80px] object-contain md:h-[90px] md:w-[90px] md:min-w-[90px] lg:mb-3.5 lg:mr-0 lg:h-[125px] lg:w-[125px] lg:min-w-[125px]"
                alt=""
                width={item.img.width}
                height={item.img.height}
                src={item.img.src}
              />
              <div className="space-y-1.5">
                <p className="text-medium font-black xl:text-2md">{item.title}</p>
                <p className="text-base lg:text-2sm">{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturesAltSection
