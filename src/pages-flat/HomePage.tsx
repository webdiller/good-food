import React, { FC } from "react"
import dynamic from "next/dynamic"
import ContactUsSection from "../widgets/ContactUsSection"
import AboutUsSection from "../widgets/AboutUsSection"
import FeaturesSection from "../widgets/FeaturesSection"
import ProcessSection from "../widgets/ProcessSection"
import FeaturesAltSection from "../widgets/FeaturesAltSection"
import HowWeCookSection from "../widgets/HowWeCookSection"
const ReviewsSection = dynamic(import("../widgets/ReviewsSection"))
const WelcomeSection = dynamic(import("../widgets/WelcomeSection"))

interface ComponentProps {}

const HomePage: FC<ComponentProps> = () => {
  return (
    <div>
      <div className="my-2 lg:mt-0">
        <WelcomeSection />
      </div>
      <div className="my-5.5 container lg:my-8">
        <FeaturesAltSection />
      </div>
      <div className="my-5.5 container lg:my-10">
        <ProcessSection />
      </div>
      {/* <div className="my-5.5 container lg:my-10">
        <HowWeCookSection />
      </div> */}
      <div className="my-3 lg:my-12">
        <ReviewsSection />
      </div>
      <div className="lg:mb-3">
        <FeaturesSection />
      </div>
      <AboutUsSection />
      <ContactUsSection />
    </div>
  )
}

export default HomePage
