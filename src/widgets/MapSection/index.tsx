import { FC } from "react"

interface ComponentProps {}

const MapSection: FC<ComponentProps> = () => {
  return (
    <div className="md:container md:flex md:flex-row-reverse md:gap-3 lg:flex lg:gap-6">
      <div className="font-raleway container mb-3.5 text-center md:hidden">
        <p className="inline-block border-b-3 border-b-secondary text-2lg font-black lg:border-0 lg:text-3lg">Карта доставки</p>
      </div>

      <div className="relative h-[500px] overflow-hidden bg-gray-300 md:flex-1 md:rounded-[35px] lg:h-[600px] lg:w-[62%] lg:min-w-[62%]">
        {/* <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad13373c7eda4af91874e0cb1a603cbe92e966ac3de28ec90336d362bfb2b1039&amp;source=constructor"
          width="100%"
          height="100%"></iframe> */}

          <iframe
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Tbilisi+(Good%20Food)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe>
      </div>

      <div className="mx-auto mt-1.5 max-w-[92%] px-2.5 py-2 md:mt-0 md:max-w-none md:flex-1 md:bg-transparent md:p-0 lg:flex-auto">
        <p className="mb-5 hidden border-b-3 border-b-secondary pb-0.5 text-2md font-black md:inline-block lg:border-0 lg:text-4sm lg:leading-none">Карта доставки</p>
        <div className="relative space-y-3 text-medium lg:text-2md">
          <p>
            <strong className="font-raleway">Доставим по Тбилиси и +20км бесплатно!</strong>
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
