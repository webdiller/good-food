import type { AppProps } from "next/app"
import { NextPage } from "next"
import React, { ReactElement, ReactNode } from "react"
import { fontMulish } from "@/src/shared/styles/fonts"
import "@/src/shared/styles/globals.scss"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <style
        jsx
        global
      >
        {`
          :root {
            --font-mulish: ${fontMulish.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>,
  )
}
