import SharedButton from "@/src/shared/ui/SharedButton"
import { FC } from "react"

interface ComponentProps {}

const AboutUsSection: FC<ComponentProps> = () => {
  return (
    <div className="bg-secondary">
      <div className="container py-5 text-center text-black md:text-left lg:py-9">
        <div className="space-y-5.5 sm:space-8 md:grid md:grid-cols-2 md:gap-3 md:space-y-0 lg:gap-6">
          {/* ITEM */}
          <div className="space-y-2.5 lg:py-2">
            <p className="lg:text-4 inline-block border-b-3 border-b-white pb-[4px] text-2lg font-bold lg:text-4sm">О нас</p>
            <p className="text-left text-medium lg:text-2md">
              Компания GoodFood занимается подготовкой и доставкой сбалансированных рационов питания с доставкой на дом. Основная задача нашего сервиса — предоставление вкусной и здорово пищи,
              спроектированной с учетом потребностей нашего клиента на весь день, неделю, или даже на месяц. Мы формируем разнообразное меню, включающее комплексные завтраки, обеды и ужины, которое
              помогает нашим клиентам достижению своих целей.
            </p>
          </div>

          {/* ITEM */}
          <div className="space-y-2.5 lg:py-2">
            <p className="lg:text-4 inline-block border-b-3 border-b-white pb-[4px] text-2lg font-bold lg:text-4sm">Где купить</p>
            <p className="text-left text-medium lg:text-2md">
              Купить готовые рационы питания от <strong>Good Food</strong> на данный момент можно в Тбилиси и его окрестностях. Доставка осуществляется собственной компанией на следующий день.
              <br />
              <br />
              <strong>Оформи заказ и сэкономь до 20 часов в неделю!</strong>
            </p>

            <div className="!mt-7 flex justify-center md:!mt-3 md:justify-start">
              <SharedButton classNames="text-white w-auto">Оформить заказ</SharedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsSection
