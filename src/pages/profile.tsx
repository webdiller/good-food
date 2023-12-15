import { NextPageWithLayout } from "./_app"
import { ReactElement } from "react"
import ProfilePage from "../pages-flat/ProfilePage"
import ProfileLayout from "../widgets/Layouts/ProfileLayout"

interface PageProps {}

const Page: NextPageWithLayout<PageProps> = () => {
  return <ProfilePage />
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <ProfileLayout>{page}</ProfileLayout>
}

export default Page
