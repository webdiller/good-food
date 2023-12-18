import Link from "next/link"
import { FC } from "react"

interface ComponentProps {}

const ContactUsSection: FC<ComponentProps> = () => {
  return (
    <div className="container flex flex-col items-center space-y-3 py-7 text-center lg:space-y-4">
      <p className="text-medium font-black text-black underline underline-offset-4 lg:text-[24px]">Написать нам</p>

      <div className="mx-auto flex w-full max-w-[300px] justify-between gap-1 lg:max-w-[540px]">
        {Array.from({ length: 4 }).map((item, indx) => {
          return (
            <Link
              href="/"
              className="font-raleway inline-flex h-[57px] w-[57px] min-w-[57px] items-center justify-center rounded-12 bg-secondary text-medium font-black
           text-primary lg:h-[90px] lg:w-[90px] lg:min-w-[90px] lg:text-2lg"
              key={indx}>
              FB
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ContactUsSection
