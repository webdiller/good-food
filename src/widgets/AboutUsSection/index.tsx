import SharedButton from "@/src/shared/ui/SharedButton"
import { useTranslations } from "next-intl"
import { FC } from "react"

interface ComponentProps {}

const AboutUsSection: FC<ComponentProps> = () => {
  const t = useTranslations("pages.home")
  const tApp = useTranslations("app")
  
  const aboutTitle = t("sectionFooter.aboutTitle")
  const aboutDescription = t("sectionFooter.aboutDescription")

  const whereToByTitle = t("sectionFooter.whereToByTitle")
  const where_to_buy_description = t.raw("sectionFooter.where_to_buy_description")
  const where_to_buy_description2 = t("sectionFooter.where_to_buy_description2")

  const makeOrder = tApp("actions.make_order")

  return (
    <div className="bg-secondary">
      <div className="container py-5 text-center text-black md:text-left lg:py-9">
        <div className="sm:space-8 space-y-5.5 md:grid md:grid-cols-2 md:gap-3 md:space-y-0 lg:gap-6">
          {/* ITEM */}
          <div className="space-y-2.5 lg:py-2">
            <p className="lg:text-4 inline-block border-b-3 border-b-white pb-[4px] font-raleway text-2lg font-bold lg:text-4sm">{aboutTitle}</p>
            <p className="text-left text-medium lg:text-2md">{aboutDescription}</p>
          </div>

          {/* ITEM */}
          <div className="space-y-2.5 lg:py-2">
            <p className="lg:text-4 inline-block border-b-3 border-b-white pb-[4px] font-raleway text-2lg font-bold lg:text-4sm">{whereToByTitle}</p>
            <div className="text-left text-medium lg:text-2md">
              <p dangerouslySetInnerHTML={{__html: where_to_buy_description}}/>
              <br />
              <br />
              <strong>{where_to_buy_description2}</strong>
            </div>

            <div className="!mt-7 flex justify-center md:!mt-3 md:justify-start">
              <SharedButton classNames="text-white w-auto">{makeOrder}</SharedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsSection
