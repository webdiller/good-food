import type { AppProps } from "next/app"
import { NextPage } from "next"
import React, { ReactElement, ReactNode, useEffect } from "react"
import { NextIntlClientProvider } from "next-intl"
import { useRouter } from "next/router"
import Script from "next/script"
import { fontNotoSans, fontNotoSansDisplay, fontRaleway } from "@/src/shared/styles/fonts"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import "swiper/css/bundle"
import "@/src/shared/styles/globals.scss"
import { switchLangWidget } from "../shared/functions/switchLangWidget"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()
  const getLayout = Component.getLayout ?? ((page) => page)

  useEffect(()=>{
    if (window && typeof window !== "undefined") {
      try {
        const currentLocale = pageProps.currentLocale as string
        switchLangWidget(currentLocale)
      } catch (error) {
        console.log(error);
      }
    }
    
  }, [pageProps])

  return getLayout(
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Europe/Moscow"
      messages={pageProps.messages}>
      <style
        jsx
        global>
        {`
          :root {
            --font-noto-sans: ${fontNotoSans.style.fontFamily};
            --font-noto-sans-display: ${fontNotoSansDisplay.style.fontFamily};
            --font-raleway: ${fontRaleway.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
      <Script
        type="module"
        id="cleverfoodWebComponent"
        src="./cleverfood.es.js"
      />
      {process.env.NODE_ENV !== "production" ? null : (
        <>
          <Script
            id="googletagmanager"
            src="https://www.googletagmanager.com/gtag/js?id=G-N63X908FKH"
          />
          <Script
            id="gtag"
            dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-N63X908FKH');` }}
          />
          <Script
            id="facebook"
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1354440645473347');fbq('track', 'PageView');`,
            }}
          />
          <Script
            id="yandexMetrika"
            dangerouslySetInnerHTML={{
              __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");ym(94537188, "init", {clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});`,
            }}
          />
        </>
      )}
      <link
        href="https://good-food.ge"
        hrefLang="x-default"
        rel="alternate"
      />
    </NextIntlClientProvider>,
  )
}
