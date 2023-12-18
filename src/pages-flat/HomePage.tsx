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

interface ComponentProps {}

const HomePage: FC<ComponentProps> = () => {
  return (
    <div>
      <div className="my-2 sm:mt-0">
        <WelcomeSection />
      </div>
      <div className="container my-5.5 lg:my-8">
        <FeaturesAltSection />
      </div>
      <MenuWidgetSection />
      <div className="container my-5.5 lg:my-10">
        <ProcessSection />
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
