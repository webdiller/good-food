import React from "react"
import Footer from "@/src/widgets/Footer"
import PublicHeader from "@/src/widgets/Headers/PublicHeader"

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PublicHeader />
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout
