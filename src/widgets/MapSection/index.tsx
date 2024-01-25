import { useTranslations } from "next-intl"
import { FC } from "react"

interface ComponentProps {}

const MapSection: FC<ComponentProps> = () => {
  const t = useTranslations("pages.home")
  const title = t("sectionLocation.title")
  const subtitle = t("sectionLocation.subtitle")
  const description1 = t("sectionLocation.description1")
  const description2 = t("sectionLocation.description2")
  return (
    <div className="md:container md:flex md:flex-row-reverse md:gap-3 lg:flex lg:gap-6">
      <div className="container mb-3.5 text-center font-raleway md:hidden">
        <p className="inline-block border-b-3 border-b-secondary text-2lg font-black lg:border-0 lg:text-3lg">{title}</p>
      </div>

      <div className="relative h-[500px] overflow-hidden bg-gray-300 md:flex-1 md:rounded-[35px] lg:h-[600px] lg:w-[62%] lg:min-w-[62%]">
        {/* <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad13373c7eda4af91874e0cb1a603cbe92e966ac3de28ec90336d362bfb2b1039&amp;source=constructor"
          width="100%"
          height="100%"></iframe> */}

        <iframe
          width="100%"
          height="100%"
          src="https://www.google.com/maps/d/embed?mid=1Tk202JDC12JUXi6gwNGCEWoM7g3N4go&ehbc=2E312F&noprof=1&hl=ru"/>
      </div>

      <div className="mx-auto mt-1.5 max-w-[92%] px-2.5 py-2 md:mt-0 md:max-w-none md:flex-1 md:bg-transparent md:p-0 lg:flex-auto">
        <p className="mb-5 hidden border-b-3 border-b-secondary pb-0.5 text-2md font-black md:inline-block lg:border-0 lg:text-4sm lg:leading-none">{title}</p>
        <div className="relative space-y-3 text-medium lg:text-2md">
          <p>
            <strong className="font-raleway">{subtitle}</strong>
            <br />
            <br />
            {description1}
            <br />
            <br />
            {description2}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MapSection
