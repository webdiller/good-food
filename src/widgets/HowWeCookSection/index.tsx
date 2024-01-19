import { FC } from "react"
import imgCook from "@/public/img-cook.jpg"
import imgCookElement from "@/public/icon-element-1.svg"
import Image from "next/image"
import SharedButton from "@/src/shared/ui/SharedButton"
import { useTranslations } from "next-intl"

interface ComponentProps {}

const HowWeCookSection: FC<ComponentProps> = () => {
  const t = useTranslations("pages.home")
  const title = t("sectionWhereWeCook.title")
  const subtitle = t("sectionWhereWeCook.subtitle")
  const description1 = t("sectionWhereWeCook.description1")
  const description2 = t("sectionWhereWeCook.description2")
  return (
    <div className="md:container md:grid md:grid-cols-2 md:gap-3 lg:flex lg:gap-6">
      <div className="container mb-3.5 text-center font-raleway md:hidden">
        <p className="inline-block border-b-3 border-b-secondary text-2lg font-black lg:border-0 lg:text-3lg">{title}</p>
      </div>

      <div className="relative lg:w-[57%] lg:min-w-[57%]">
        <Image
          unoptimized
          className="right-0 top-0 h-auto w-full md:absolute md:inset-0 md:h-full md:w-full md:object-cover"
          alt=""
          width={imgCook.width}
          height={imgCook.height}
          src={imgCook.src}
        />
      </div>

      <div className="relative mx-auto mt-1.5 max-w-[92%] rounded-20 bg-[#EFEFEF] px-2.5 py-2 md:mt-0 md:max-w-none md:bg-transparent md:p-0 lg:flex-auto">
        <Image
          unoptimized
          className="absolute right-0 top-0 md:hidden"
          alt=""
          width={imgCookElement.width}
          height={imgCookElement.height}
          src={imgCookElement.src}
        />
        <p className="mb-5 hidden border-b-3 border-b-secondary pb-0.5 text-2lg font-black md:inline-block lg:text-4sm lg:leading-none">{title}</p>
        <div className="relative space-y-3 text-medium lg:text-[24px]">
          <p>
            <strong>{subtitle}</strong>
            <br />
            <br />
            {description1}
            <br />
            <br />
            {description2}
          </p>
          <SharedButton
            variant="fill-secondary"
            size="default"
            classNames="md:hidden">
            Оформить заказ
          </SharedButton>
        </div>
      </div>
    </div>
  )
}

export default HowWeCookSection
