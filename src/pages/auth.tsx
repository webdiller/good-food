import { NextPageWithLayout } from "./_app"
import { ReactElement } from "react"
import AuthMainPage from "../pages-flat/Auth/AuthMainPage"
import AuthLayout from "../widgets/Layouts/AuthLayout"

interface PageProps {}

const Page: NextPageWithLayout<PageProps> = () => {
  return <AuthMainPage />
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>
}

export default Page
