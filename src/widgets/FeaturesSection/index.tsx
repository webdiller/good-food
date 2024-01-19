import SharedButton from "@/src/shared/ui/SharedButton"
import imgFeature from "@/public/icon-features.svg"
import { FC } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"

interface ComponentProps {}

const FeaturesSection: FC<ComponentProps> = () => {
  
  const t = useTranslations("pages.home")
  const tApp = useTranslations("app")

  const title = t("sectionFeatures2.title")
  const feature1 = t("sectionFeatures2.item1")
  const feature2 = t("sectionFeatures2.item2")
  const feature3 = t("sectionFeatures2.item3")
  const feature4 = t("sectionFeatures2.item4")

  const showMore = tApp("actions.more_details")
  return (
    <div className="bg-primary">
      <div className="container max-w-[1180px] space-y-8 py-5 md:flex md:space-x-6 md:space-y-0 lg:justify-between lg:space-x-0 lg:py-9">
        {/* CONTENT */}
        <div className="flex flex-col text-left text-[#F9E8E1] md:w-[300px] md:max-w-[300px] lg:w-[400px] lg:max-w-[400px]">
          <p className="font-raleway mb-4 text-2lg font-black lg:mb-3 lg:text-3md">{title}</p>
          <ul className="mb-4 font-raleway space-y-1.5 text-base font-light lg:mb-6.5 lg:space-y-2 lg:text-2md">
            <li>– {feature1}</li>
            <li>– {feature2}</li>
            <li>– {feature3}</li>
            <li>– {feature4}</li>
          </ul>
          <SharedButton
            classNames="max-h-[37px] self-start flex min-h-[37px] text-base w-auto"
            variant="fill-pink">
            {showMore}
          </SharedButton>
        </div>

        {/* MEDIA */}
        <div className="md:max-w-[640px] md:flex-auto">
          <Image
            unoptimized
            className="h-auto w-[95%] object-contain md:w-full"
            alt=""
            width={imgFeature.width}
            height={imgFeature.height}
            src={imgFeature.src}
          />
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
