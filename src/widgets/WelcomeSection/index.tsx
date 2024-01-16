import SharedButton from "@/src/shared/ui/SharedButton"
import { FC, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { type Swiper as SwiperRef } from "swiper"
import { Pagination, Autoplay } from "swiper/modules"

import imgBanner1MobileJpg from "@/public/banners/banner-1-mob.jpg"
import imgBanner1MobileWebp from "@/public/banners/banner-1-mob.webp"
import imgBanner1DeskJpg from "@/public/banners/banner-1-desk.jpg"
import imgBanner1DeskWebp from "@/public/banners/banner-1-desk.webp"

import imgBanner2MobileJpg from "@/public/banners/banner-2-mob.jpg"
import imgBanner2MobileWebp from "@/public/banners/banner-2-mob.webp"
import imgBanner2DeskJpg from "@/public/banners/banner-2-desk.jpg"
import imgBanner2DeskWebp from "@/public/banners/banner-2-desk.webp"

import imgBanner3MobileJpg from "@/public/banners/banner-3-mob.jpg"
import imgBanner3MobileWebp from "@/public/banners/banner-3-mob.webp"
import imgBanner3DeskJpg from "@/public/banners/banner-3-desk.jpg"
import imgBanner3DeskWebp from "@/public/banners/banner-3-desk.webp"

import imgBanner4MobileJpg from "@/public/banners/banner-4-mob.jpg"
import imgBanner4MobileWebp from "@/public/banners/banner-4-mob.webp"
import imgBanner4DeskJpg from "@/public/banners/banner-4-desk.jpg"
import imgBanner4DeskWebp from "@/public/banners/banner-4-desk.webp"

import { StaticImageData } from "next/image"
import clsx from "clsx"
import { useTranslations } from "next-intl"

interface ComponentProps {}
interface BannerProps {
  btnColor: string
  mobile: {
    webp: StaticImageData
    jpg: StaticImageData
  }
  desktop: {
    webp: StaticImageData
    jpg: StaticImageData
  }
}

const WelcomeSection: FC<ComponentProps> = () => {
  const t = useTranslations("pages.home");
  const [swiperLoaded, setSwiperLoaded] = useState(false)
  const swiperRef = useRef<SwiperRef>()
  const pagination = useRef(null)

  const banners: BannerProps[] = [
    {
      btnColor: "#82B749",
      desktop: {
        jpg: imgBanner1DeskJpg,
        webp: imgBanner1DeskWebp,
      },
      mobile: {
        jpg: imgBanner1MobileJpg,
        webp: imgBanner1MobileWebp,
      },
    },
    {
      btnColor: "#F9E8E0",
      desktop: {
        jpg: imgBanner2DeskJpg,
        webp: imgBanner2DeskWebp,
      },
      mobile: {
        jpg: imgBanner2MobileJpg,
        webp: imgBanner2MobileWebp,
      },
    },
    {
      btnColor: "#82B749",
      desktop: {
        jpg: imgBanner3DeskJpg,
        webp: imgBanner3DeskWebp,
      },
      mobile: {
        jpg: imgBanner3MobileJpg,
        webp: imgBanner3MobileWebp,
      },
    },
    {
      btnColor: "#FBB9D5",
      desktop: {
        jpg: imgBanner4DeskJpg,
        webp: imgBanner4DeskWebp,
      },
      mobile: {
        jpg: imgBanner4MobileJpg,
        webp: imgBanner4MobileWebp,
      },
    },
  ]

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
        {banners.map((item, indx) => {
          return (
            <SwiperSlide
              className="relative flex items-end justify-center bg-[#EFEFEF]"
              key={indx}>
              <picture className="w-full">
                {/* LG */}
                <source
                  media="(min-width: 576px)"
                  srcSet={item.desktop.webp.src}
                />
                <source
                  media="(min-width: 576px)"
                  srcSet={item.desktop.jpg.src}
                />
                <source srcSet={item.mobile.webp.src} />
                <img
                  className="h-auto w-full max-w-none object-contain transition-all duration-500"
                  alt="Изображение"
                  src={item.mobile.jpg.src}
                />
              </picture>
              <div className="absolute bottom-3 flex justify-center lg:bottom-[20px] lg:left-[10vw] lg:pb-5 xl:left-[14vw]">
                <SharedButton style={{backgroundColor: item.btnColor, color: '#012421'}} classNames={clsx(`w-auto lg:min-h-[78px] lg:max-h-[78px] lg:px-[45px] lg:text-[30px]`)}>{t("place_order.title")}</SharedButton>
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
