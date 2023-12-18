import { NextPageWithLayout } from "./_app"
import HomePage from "@/src/pages-flat/HomePage"
import { ReactElement } from "react"
import DefaultLayout from "@/src/widgets/Layouts/DefaultLayout"
import { NextSeo } from "next-seo"

interface PageProps {}

const Page: NextPageWithLayout<PageProps> = () => {
  return (
    <>
      <NextSeo
        title="GoodFood | Готовая еда по подписке Тбилиси, Грузия"
        description="GoodFood доставка рационов питания на целый день по подписке в Тбилиси. Доставка еды на дом на следующее утро. Закажите рацион питания уже сейчас!"
      />
      <HomePage />
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Page
