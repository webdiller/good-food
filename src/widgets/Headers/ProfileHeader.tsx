import Link from "next/link"
import { FC } from "react"

interface ComponentProps {}

const ProfileHeader: FC<ComponentProps> = () => {
  return (
    <header className="container flex items-center space-x-4">
      <Link href="/">go to home</Link>
    </header>
  )
}

export default ProfileHeader
