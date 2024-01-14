import { NextPageWithLayout } from "./_app"
import HomePage from "@/src/pages-flat/HomePage"
import { ReactElement } from "react"
import DefaultLayout from "@/src/widgets/Layouts/DefaultLayout"
import { NextSeo } from "next-seo"
import { GetStaticPropsContext } from "next"
import { useTranslations } from "next-intl"

interface PageProps {
  messages: any
  currentLocale: string
}

const Page: NextPageWithLayout<PageProps> = ({ messages, currentLocale }) => {
  const t = useTranslations("pages.home.meta");
  return (
    <>
      <NextSeo
        title={t("title")}
        description={t("description")}
      />
      <HomePage />
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
