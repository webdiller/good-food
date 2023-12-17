import { FC } from "react"
import imgCook from "@/public/img-cook.jpg"

interface ComponentProps {}

const HowWeCookSection: FC<ComponentProps> = () => {
  return (
    <div>
      <p className="lg:text-4 inline-block border-b-3 border-b-white pb-[4px] text-2lg font-bold lg:text-4sm">Где мы готовим?</p>
      <div></div>
    </div>
  )
}

export default HowWeCookSection
