import SharedButton from "@/src/shared/ui/SharedButton"
import imgFeature from "@/public/icon-features.svg"
import { FC } from "react"
import Image from "next/image"

interface ComponentProps {}

const FeaturesSection: FC<ComponentProps> = () => {
  return (
    <div className="bg-primary">
      <div className="container max-w-[1180px] space-y-8 py-5 md:flex md:space-x-6 md:space-y-0 lg:justify-between lg:space-x-0 lg:py-9">
        {/* CONTENT */}
        <div className="flex flex-col text-left text-[#F9E8E1] md:w-[300px] md:max-w-[300px] lg:w-[400px] lg:max-w-[400px]">
          <p className="lg:text-3md mb-4 text-2lg font-black lg:mb-3">Наши преимущества</p>
          <ul className="mb-4 lg:mb-6.5 space-y-1.5 text-base font-light lg:space-y-2 lg:text-2md">
            <li>– индивидуальный подход</li>
            <li>– свежие фермерские продукты</li>
            <li>– доставка на следующее утро</li>
            <li>– готовим и упаковываем с любовью</li>
          </ul>
          <SharedButton
            classNames="max-h-[37px] self-start flex min-h-[37px] text-base w-auto"
            variant="fill-pink">
            Выбрать рацион
          </SharedButton>
        </div>

        {/* MEDIA */}
        <div className="md:max-w-[640px] md:flex-auto">
          <Image
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
