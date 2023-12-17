import React from "react"
import img1 from "@/public/img-feature-1.png"
import img2 from "@/public/img-feature-2.png"
import img3 from "@/public/img-feature-3.png"
import img4 from "@/public/img-feature-4.png"
import Image from "next/image"

const dataItems = [
  {
    title: "Удобство доставки",
    descrption: "Еда на следующее утро у вашей двери",
    img: img1,
  },
  {
    title: "Надежные курьеры",
    descrption: "Доставка всегда в интервал часа",
    img: img2,
  },
  {
    title: "Сервис, ориентированный на вас",
    descrption: "Мы слушаем ваши пожелания и стараемся их исполнить",
    img: img3,
  },
  {
    title: "Свежесть продуктов",
    descrption: "Только натуральные фермерские продукты",
    img: img4,
  },
]

const FeaturesAltSection = () => {
  return (
    <div className="text-center text-black">
      <p className="text-3 mb-3 inline-block font-black uppercase lg:mb-6 lg:text-4sm">Good Food — это</p>
      <div className="mx-auto xl:grid xl:grid-cols-4 max-w-[320px] space-y-3 text-left lg:flex lg:max-w-[1400px] lg:justify-between lg:space-x-3 lg:space-y-0 lg:text-center xl:space-x-0 xl:gap-3">
        {dataItems.map((item, indx) => {
          return (
            <div
              className="flex items-center lg:flex-col lg:space-x-0"
              key={indx}>
              <Image
                className="mr-2.5 h-[80px] w-[80px] min-w-[80px] object-contain md:h-[90px] md:w-[90px] md:min-w-[90px] lg:mb-3.5 lg:mr-0 lg:h-[125px] lg:w-[125px] lg:min-w-[125px]"
                alt=""
                width={item.img.width}
                height={item.img.height}
                src={item.img.src}
              />
              <div className="space-y-1.5">
                <p className="text-medium font-black xl:text-2md">{item.title}</p>
                <p className="text-base lg:text-2sm">{item.descrption}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturesAltSection
