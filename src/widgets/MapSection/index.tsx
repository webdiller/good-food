import { FC } from "react"
import imgCook from "@/public/img-cook.jpg"
import imgCookElement from "@/public/icon-element-1.svg"
import Image from "next/image"
import SharedButton from "@/src/shared/ui/SharedButton"

interface ComponentProps {}

const MapSection: FC<ComponentProps> = () => {
  return (
    <div className="md:container md:my-custom-class md:grid md:grid-cols-2 md:gap-3 lg:flex lg:gap-6">
      <div className="container mb-3.5 text-center md:hidden">
        <p className="inline-block border-b-3 border-b-secondary text-2lg font-black lg:border-0 lg:text-3lg">Карта доставки</p>
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

      <div className="mx-auto mt-1.5 max-w-[92%] px-2.5 py-2 md:mt-0 md:max-w-none md:bg-transparent md:p-0 lg:flex-auto">
        <p className="mb-5 hidden border-b-3 border-b-secondary pb-0.5 text-2lg font-black md:inline-block lg:text-4sm lg:leading-none">Карта доставки</p>
        <div className="relative space-y-3 text-medium lg:text-[24px]">
          <p>
            <strong>Доставим по Тбилиси и +20км бесплатно!</strong>
            <br />
            <br />
            Наши преимущества:
            <br />
            <br />– Своя служба доставки – Экспресс-доставка: привезем в течение выбранного времени – По Тбилиси и +20км – При заказе до 12:00, привезём уже завтра!
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default MapSection
