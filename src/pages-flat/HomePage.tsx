import React, { FC } from "react"
import AboutUsSection from "../widgets/AboutUsSection"
import FeaturesSection from "../widgets/FeaturesSection"
import ProcessSection from "../widgets/ProcessSection"
import FeaturesAltSection from "../widgets/FeaturesAltSection"
import HowWeCookSection from "../widgets/HowWeCookSection"
import MapSection from "../widgets/MapSection"
import MenuWidgetSection from "../widgets/MenuWidgetSection"
import WelcomeSection from "../widgets/WelcomeSection"
import ReviewsSection from "../widgets/ReviewsSection"
import { sharedi18n } from "../shared/i18n"

interface ComponentProps {
  currentLocale: typeof sharedi18n.locales[number]
}

const HomePage: FC<ComponentProps> = ({currentLocale}) => {
  return (
    <div>
      <div className="my-2 sm:mt-0">
        <WelcomeSection currentLocale={currentLocale} />
      </div>
      <div className="container my-5.5 lg:my-8">
        <FeaturesAltSection currentLocale={currentLocale} />
      </div>
      <MenuWidgetSection />
      <div className="container my-5.5 lg:my-10">
        <ProcessSection currentLocale={currentLocale} />
      </div>
      <div className="mb-6 mt-9 lg:my-15">
        <HowWeCookSection />
      </div>
      <div className="mb-6 mt-9 lg:my-15">
        <MapSection />
      </div>
      <div className="my-3 lg:my-12">
        <ReviewsSection />
      </div>
      <FeaturesSection />
      <div className="lg:mb-2">
        <AboutUsSection />
      </div>
    </div>
  )
}

export default HomePage
