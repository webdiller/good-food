import SharedButton from "@/src/shared/ui/SharedButton"
import { FC, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { type Swiper as SwiperRef } from "swiper"
import { Pagination, Autoplay } from "swiper/modules"
import imgBanner from "@/public/img-banner.jpg"
import imgBannerLg from "@/public/img-banner-lg.jpg"

interface ComponentProps {}

const WelcomeSection: FC<ComponentProps> = () => {
  const [swiperLoaded, setSwiperLoaded] = useState(false)
  const swiperRef = useRef<SwiperRef>()
  const pagination = useRef(null)

  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          el: pagination.current,
          clickable: true,
          bulletElement: "button",
        }}
       
        className="text-left"
        slidesOffsetBefore={35}
        spaceBetween={35}
        slidesPerView={1.2}
        speed={500}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
          setSwiperLoaded(true)
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            spaceBetween: 0,
          },
          991: {
            slidesPerView: 1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            spaceBetween: 0,
          },
        }}>
        {Array.from({ length: 5 }).map((item, indx) => {
          return (
            <SwiperSlide
              className="relative flex items-end justify-center bg-[#EFEFEF]"
              key={indx}>
              <picture className="w-full">
                <source
                  media="(min-width: 576px)"
                  srcSet={imgBannerLg.src}
                />
                <img
                  className="h-auto w-full max-w-none object-contain transition-all duration-500"
                  alt="Изображение"
                  src={imgBanner.src}
                />
              </picture>
              <div className="absolute bottom-3 flex justify-center lg:bottom-[unset] lg:left-10 lg:top-[220px] lg:pb-5 xl:left-16 xl:top-[350px]">
                <SharedButton classNames="text-white w-auto">Оформить заказ</SharedButton>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div
        className="flex-center swiper-pagination static z-10 mt-3 space-x-[8px] lg:absolute lg:!bottom-3 lg:left-0 lg:right-0 lg:mt-0"
        ref={pagination}></div>
    </div>
  )
}

export default WelcomeSection
