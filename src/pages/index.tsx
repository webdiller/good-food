import { NextPageWithLayout } from "./_app"
import HomePage from "@/src/pages-flat/HomePage"
import { ReactElement } from "react"
import DefaultLayout from "@/src/widgets/Layouts/DefaultLayout"
import { NextSeo } from "next-seo"
import { GetStaticPropsContext } from "next"
import { useTranslations } from "next-intl"
import { sharedi18n } from "../shared/i18n"
import PublicHeader from "@/src/widgets/Headers/PublicHeader"
import Footer from "@/src/widgets/Footer"

interface PageProps {
  messages: any
  currentLocale: typeof sharedi18n.locales[number]
}

const Page: NextPageWithLayout<PageProps> = ({ messages, currentLocale }) => {
  const t = useTranslations("pages.home.meta");
  return (
    <>
      <NextSeo
        title={t("title")}
        description={t("description")}
      />
      <PublicHeader />
      <HomePage currentLocale={currentLocale} />
      <Footer />
    </>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
      currentLocale: locale
    }
  };
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Page
