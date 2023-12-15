import { NextPageWithLayout } from "./_app"
import { ReactElement } from "react"
import DefaultLayout from "@/src/widgets/Layouts/DefaultLayout"
import AboutPage from "../pages-flat/AboutPage"

interface PageProps {}

const Page: NextPageWithLayout<PageProps> = () => {
  return <AboutPage />
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Page
