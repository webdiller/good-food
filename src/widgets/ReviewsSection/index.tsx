import SharedButton from "@/src/shared/ui/SharedButton"
import { FC, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { type Swiper as SwiperRef } from "swiper"
import { Navigation } from "swiper/modules"
import imgUser from "@/public/img-user.jpg"
import Image from "next/image"
import { useTranslations } from "next-intl"

interface ComponentProps {}

const ReviewsSection: FC<ComponentProps> = () => {
  const [swiperLoaded, setSwiperLoaded] = useState(false)
  const swiperRef = useRef<SwiperRef>()
  const slidePrev = useRef(null)
  const slideNext = useRef(null)

  const t = useTranslations("pages.home")
  const tApp = useTranslations("app")
  const title = t("sectionReviews.title")
  const more_details = tApp("actions.more_details")

  
interface Review {
  name: string;
  text: string;
  imgSrc: string;
}

const reviews: Review[] = [
  {
    name: "Арина",
    text: "Похудела на 5 кг с рационом 1500ккал! Качество блюд: 10. Разнообразие: 10. Супы у вас просто отличные!",
    imgSrc: "/img-user.jpg"
  },
  {
    name: "Илья",
    text: "10 баллов, мне все нравится. Ваши доставщики, они как эльфы, пакеты с едой оставляли у двери.",
    imgSrc: "/img-user.jpg"
  },
  {
    name: "Саша",
    text: "14 дней на Good Food – привёл себя в форму. Я в IT работаю, постоянно дела, а тут сервис очень выручает",
    imgSrc: "/img-user.jpg"
  },
  {
    name: "Илья",
    text: "В связи с активным графиком работы очень тяжело готовить. И ваша еда спасает",
    imgSrc: "/img-user.jpg"
  },
  // Add more reviews here
];

  return (
    <div className="text-center lg:text-left">
      <div className="container mb-3.5 font-raleway">
        <p className="inline-block border-b-3 border-b-secondary text-2lg font-black lg:border-0 lg:text-3lg">{title}</p>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: slidePrev.current,
            nextEl: slideNext.current,
          }}
          className="text-left"
          spaceBetween={36}
          slidesOffsetBefore={20}
          slidesOffsetAfter={20}
          speed={500}
          slidesPerView={1.15}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
            setSwiperLoaded(true)
          }}
          breakpoints={{
            576: {
              slidesPerView: 1.8,
            },
            768: {
              slidesPerView: 2.3,
            },
            991: {
              slidesPerView: 2.5,
            },
            1240: {
              slidesPerView: 3.3,
              spaceBetween: 30,
              slidesOffsetBefore: 40,
            },
          }}>
          {reviews.map((item, indx) => {
            return (
              <SwiperSlide
                className="rounded-20 bg-[#EFEFEF] p-2 h-auto flex flex-col"
                key={indx}>
                <div className="mb-3 flex items-center space-x-2.5 text-[25px] font-bold lg:mb-1.5">
                  <Image
                    unoptimized
                    width={imgUser.width}
                    height={imgUser.height}
                    src={imgUser.src}
                    alt=""
                    className="h-[90px] w-[90px] min-w-[90px] rounded-full"
                  />
                  <p>{item.name}</p>
                </div>

                <p className="mb-3.5 font-light lg:mb-2.5">
                  {item.text}
                </p>

                <SharedButton
                  variant="fill-secondary"
                  size="default"
                  classNames="min-h-[36px] mt-auto mr-auto max-h-[36px] lg:min-h-[48px] lg:max-h-[48px] lg:text-[22px] text-white">
                  {more_details}
                </SharedButton>
              </SwiperSlide>
            )
          })}
        </Swiper>

        {/* NAVIGATION */}
        <div className="absolute-center pointer-events-none z-10 flex w-full justify-between md:px-2 lg:px-4">
          <button
            ref={slidePrev}
            className="inline-flex-center pointer-events-auto h-4 w-4 rounded-full transition-all duration-300 md:h-6 md:w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-2 w-2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            ref={slideNext}
            className="inline-flex-center pointer-events-auto h-4 w-4 rounded-full transition-all duration-300 md:h-6 md:w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-2 w-2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReviewsSection
