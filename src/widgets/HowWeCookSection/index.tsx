import { FC } from "react"
import imgCook from "@/public/img-cook.jpg"
import imgCookElement from "@/public/icon-element-1.svg"
import Image from "next/image"
import SharedButton from "@/src/shared/ui/SharedButton"

interface ComponentProps {}

const HowWeCookSection: FC<ComponentProps> = () => {
  return (
    <div className="md:container md:grid md:grid-cols-2 md:gap-3 lg:flex lg:gap-6">
      <div className="container mb-3.5 text-center md:hidden">
        <p className="inline-block border-b-3 border-b-secondary text-2lg font-black lg:border-0 lg:text-3lg">Где мы готовим?</p>
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
        <p className="mb-5 hidden border-b-3 border-b-secondary pb-0.5 text-2lg font-black md:inline-block lg:text-4sm lg:leading-none">Где мы готовим?</p>
        <div className="relative space-y-3 text-medium lg:text-[24px]">
          <p>
            <strong>Наши кухни: чистота и безопасность пищи</strong>
            <br />
            <br />
            Промышленная кухня в центре Тбилиси, где мы ежедневно готовим 200кг еды. Благодаря ежедневным поставкам, строгим стандартам чистоты и гигиены — наша еда всегда свежая.
            <br />
            <br />
            Вы будете впечатлены, как мы готовим!
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
