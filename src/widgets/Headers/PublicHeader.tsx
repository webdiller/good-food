import Link from "next/link"
import { FC } from "react"

interface ComponentProps {}

const PublicHeader: FC<ComponentProps> = () => {
  return (
    <header className="container flex items-center space-x-4">
      <Link href="/">home</Link>
      <Link href="/about">about</Link>
      <Link href="/profile">profile</Link>
    </header>
  )
}

export default PublicHeader
