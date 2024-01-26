import { NextPageWithLayout } from "./_app"
import HomePage from "@/src/pages-flat/HomePage"
import { ReactElement } from "react"
import DefaultLayout from "@/src/widgets/Layouts/DefaultLayout"
import { DefaultSeoProps, NextSeo } from "next-seo"
import { GetStaticPropsContext } from "next"
import { useTranslations } from "next-intl"
import { sharedi18n } from "../shared/i18n"
import PublicHeader from "@/src/widgets/Headers/PublicHeader"
import Footer from "@/src/widgets/Footer"

import imgBanner1MobileJpgRU from "@/public/banners/ru/banner-1-mob.jpg"
import imgBanner1MobileJpgEN from "@/public/banners/en/banner-1-mob.jpg"
import imgBanner1MobileJpgKA from "@/public/banners/ka/banner-1-mob.jpg"

interface PageProps {
  messages: any
  currentLocale: (typeof sharedi18n.locales)[number]
}

const Page: NextPageWithLayout<PageProps> = ({ messages, currentLocale }) => {
  const t = useTranslations("pages.home.meta")
  let ogImage = imgBanner1MobileJpgRU
  if (currentLocale === "en") ogImage = imgBanner1MobileJpgEN
  if (currentLocale === "ka") ogImage = imgBanner1MobileJpgKA

  const defaultSeoProps: DefaultSeoProps = {
    title: t("title"),
    description: t("description"),
    openGraph: {
      url: process.env.WEBSITE_URL,
      title: t("ogImageTitle"),
      description: t("ogImageDescription"),
      images: [
        {
          url: `${process.env.WEBSITE_URL}${ogImage.src}`,
          width: ogImage.width,
          height: ogImage.height,
          alt: "Og Image Alt",
          type: "image/jpeg",
        },
      ],
      siteName: "GoodFood",
    },
  }

  return (
    <>
      <NextSeo {...defaultSeoProps} />
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
      currentLocale: locale,
    },
  }
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Page
