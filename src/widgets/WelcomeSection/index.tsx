import SharedButton from "@/src/shared/ui/SharedButton"
import { FC, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { type Swiper as SwiperRef } from "swiper"
import { Pagination, Autoplay } from "swiper/modules"

// RU
import imgBanner1MobileJpgRU from "@/public/banners/ru/banner-1-mob.jpg"
import imgBanner1MobileWebpRU from "@/public/banners/ru/banner-1-mob.webp"
import imgBanner1DeskJpgRU from "@/public/banners/ru/banner-1-desk.jpg"
import imgBanner1DeskWebpRU from "@/public/banners/ru/banner-1-desk.webp"

import imgBanner2MobileJpgRU from "@/public/banners/ru/banner-2-mob.jpg"
import imgBanner2MobileWebpRU from "@/public/banners/ru/banner-2-mob.webp"
import imgBanner2DeskJpgRU from "@/public/banners/ru/banner-2-desk.jpg"
import imgBanner2DeskWebpRU from "@/public/banners/ru/banner-2-desk.webp"

import imgBanner3MobileJpgRU from "@/public/banners/ru/banner-3-mob.jpg"
import imgBanner3MobileWebpRU from "@/public/banners/ru/banner-3-mob.webp"
import imgBanner3DeskJpgRU from "@/public/banners/ru/banner-3-desk.jpg"
import imgBanner3DeskWebpRU from "@/public/banners/ru/banner-3-desk.webp"

import imgBanner4MobileJpgRU from "@/public/banners/ru/banner-4-mob.jpg"
import imgBanner4MobileWebpRU from "@/public/banners/ru/banner-4-mob.webp"
import imgBanner4DeskJpgRU from "@/public/banners/ru/banner-4-desk.jpg"
import imgBanner4DeskWebpRU from "@/public/banners/ru/banner-4-desk.webp"

// EN
import imgBanner1MobileJpgEN from "@/public/banners/en/banner-1-mob.jpg"
import imgBanner1MobileWebpEN from "@/public/banners/en/banner-1-mob.webp"
import imgBanner1DeskJpgEN from "@/public/banners/en/banner-1-desk.jpg"
import imgBanner1DeskWebpEN from "@/public/banners/en/banner-1-desk.webp"

import imgBanner2MobileJpgEN from "@/public/banners/en/banner-2-mob.jpg"
import imgBanner2MobileWebpEN from "@/public/banners/en/banner-2-mob.webp"
import imgBanner2DeskJpgEN from "@/public/banners/en/banner-2-desk.jpg"
import imgBanner2DeskWebpEN from "@/public/banners/en/banner-2-desk.webp"

import imgBanner3MobileJpgEN from "@/public/banners/en/banner-3-mob.jpg"
import imgBanner3MobileWebpEN from "@/public/banners/en/banner-3-mob.webp"
import imgBanner3DeskJpgEN from "@/public/banners/en/banner-3-desk.jpg"
import imgBanner3DeskWebpEN from "@/public/banners/en/banner-3-desk.webp"

import imgBanner4MobileJpgEN from "@/public/banners/en/banner-4-mob.jpg"
import imgBanner4MobileWebpEN from "@/public/banners/en/banner-4-mob.webp"
import imgBanner4DeskJpgEN from "@/public/banners/en/banner-4-desk.jpg"
import imgBanner4DeskWebpEN from "@/public/banners/en/banner-4-desk.webp"

// KA
import imgBanner1MobileJpgKA from "@/public/banners/ka/banner-1-mob.jpg"
import imgBanner1MobileWebpKA from "@/public/banners/ka/banner-1-mob.webp"
import imgBanner1DeskJpgKA from "@/public/banners/ka/banner-1-desk.jpg"
import imgBanner1DeskWebpKA from "@/public/banners/ka/banner-1-desk.webp"

import imgBanner2MobileJpgKA from "@/public/banners/ka/banner-2-mob.jpg"
import imgBanner2MobileWebpKA from "@/public/banners/ka/banner-2-mob.webp"
import imgBanner2DeskJpgKA from "@/public/banners/ka/banner-2-desk.jpg"
import imgBanner2DeskWebpKA from "@/public/banners/ka/banner-2-desk.webp"

import imgBanner3MobileJpgKA from "@/public/banners/ka/banner-3-mob.jpg"
import imgBanner3MobileWebpKA from "@/public/banners/ka/banner-3-mob.webp"
import imgBanner3DeskJpgKA from "@/public/banners/ka/banner-3-desk.jpg"
import imgBanner3DeskWebpKA from "@/public/banners/ka/banner-3-desk.webp"

import imgBanner4MobileJpgKA from "@/public/banners/ka/banner-4-mob.jpg"
import imgBanner4MobileWebpKA from "@/public/banners/ka/banner-4-mob.webp"
import imgBanner4DeskJpgKA from "@/public/banners/ka/banner-4-desk.jpg"
import imgBanner4DeskWebpKA from "@/public/banners/ka/banner-4-desk.webp"

import { StaticImageData } from "next/image"
import clsx from "clsx"
import { useTranslations } from "next-intl"
import { sharedi18n } from "@/src/shared/i18n"

interface ComponentProps {
  currentLocale: (typeof sharedi18n.locales)[number]
}

interface BannerProps {
  btnColor: string
  lang: (typeof sharedi18n.locales)[number]
  mobile: {
    webp: StaticImageData
    jpg: StaticImageData
  }
  desktop: {
    webp: StaticImageData
    jpg: StaticImageData
  }
}

interface BannerProps2 {
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

const WelcomeSection: FC<ComponentProps> = ({ currentLocale }) => {
  const t = useTranslations("pages.home")

  const [swiperLoaded, setSwiperLoaded] = useState(false)
  const swiperRef = useRef<SwiperRef>()
  const pagination = useRef(null)

  const banners: BannerProps[] = [
    // RU
    {
      btnColor: "#82B749",
      lang: "ru",
      desktop: {
        jpg: imgBanner1DeskJpgRU,
        webp: imgBanner1DeskWebpRU,
      },
      mobile: {
        jpg: imgBanner1MobileJpgRU,
        webp: imgBanner1MobileWebpRU,
      },
    },
    {
      btnColor: "#F9E8E0",
      lang: "ru",
      desktop: {
        jpg: imgBanner2DeskJpgRU,
        webp: imgBanner2DeskWebpRU,
      },
      mobile: {
        jpg: imgBanner2MobileJpgRU,
        webp: imgBanner2MobileWebpRU,
      },
    },
    {
      btnColor: "#82B749",
      lang: "ru",
      desktop: {
        jpg: imgBanner3DeskJpgRU,
        webp: imgBanner3DeskWebpRU,
      },
      mobile: {
        jpg: imgBanner3MobileJpgRU,
        webp: imgBanner3MobileWebpRU,
      },
    },
    {
      btnColor: "#FBB9D5",
      lang: "ru",
      desktop: {
        jpg: imgBanner4DeskJpgRU,
        webp: imgBanner4DeskWebpRU,
      },
      mobile: {
        jpg: imgBanner4MobileJpgRU,
        webp: imgBanner4MobileWebpRU,
      },
    },
    // EN
    {
      btnColor: "#82B749",
      lang: "en",
      desktop: {
        jpg: imgBanner1DeskJpgEN,
        webp: imgBanner1DeskWebpEN,
      },
      mobile: {
        jpg: imgBanner1MobileJpgEN,
        webp: imgBanner1MobileWebpEN,
      },
    },
    {
      btnColor: "#F9E8E0",
      lang: "en",
      desktop: {
        jpg: imgBanner2DeskJpgEN,
        webp: imgBanner2DeskWebpEN,
      },
      mobile: {
        jpg: imgBanner2MobileJpgEN,
        webp: imgBanner2MobileWebpEN,
      },
    },
    {
      btnColor: "#82B749",
      lang: "en",
      desktop: {
        jpg: imgBanner3DeskJpgEN,
        webp: imgBanner3DeskWebpEN,
      },
      mobile: {
        jpg: imgBanner3MobileJpgEN,
        webp: imgBanner3MobileWebpEN,
      },
    },
    {
      btnColor: "#FBB9D5",
      lang: "en",
      desktop: {
        jpg: imgBanner4DeskJpgEN,
        webp: imgBanner4DeskWebpEN,
      },
      mobile: {
        jpg: imgBanner4MobileJpgEN,
        webp: imgBanner4MobileWebpEN,
      },
    },

    // KA
    {
      btnColor: "#82B749",
      lang: "ka",
      desktop: {
        jpg: imgBanner1DeskJpgKA,
        webp: imgBanner1DeskWebpKA,
      },
      mobile: {
        jpg: imgBanner1MobileJpgKA,
        webp: imgBanner1MobileWebpKA,
      },
    },
    {
      btnColor: "#F9E8E0",
      lang: "ka",
      desktop: {
        jpg: imgBanner2DeskJpgKA,
        webp: imgBanner2DeskWebpKA,
      },
      mobile: {
        jpg: imgBanner2MobileJpgKA,
        webp: imgBanner2MobileWebpKA,
      },
    },
    {
      btnColor: "#82B749",
      lang: "ka",
      desktop: {
        jpg: imgBanner3DeskJpgKA,
        webp: imgBanner3DeskWebpKA,
      },
      mobile: {
        jpg: imgBanner3MobileJpgKA,
        webp: imgBanner3MobileWebpKA,
      },
    },
    {
      btnColor: "#FBB9D5",
      lang: "ka",
      desktop: {
        jpg: imgBanner4DeskJpgKA,
        webp: imgBanner4DeskWebpKA,
      },
      mobile: {
        jpg: imgBanner4MobileJpgKA,
        webp: imgBanner4MobileWebpKA,
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
        {banners
          .filter((search) => search.lang === currentLocale)
          .map((item, indx) => {
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
                  <SharedButton
                    style={{ backgroundColor: item.btnColor, color: "#012421" }}
                    classNames={clsx(`w-auto lg:min-h-[78px] lg:max-h-[78px] lg:px-[45px] lg:text-[30px]`)}>
                    {t("place_order.title")}
                  </SharedButton>
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
