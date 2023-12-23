import React, { FC } from "react"
import clsx from "clsx"
import Link from "next/link"
import { SharedButtonProps } from "../types/SharedButtonProps"

interface ComponentProps extends SharedButtonProps {
  href?: string
  [x: string]: any
}

const SharedButton: FC<ComponentProps> = ({ children, classNames, size = "sm", href, variant = "fill-primary", ...rest }) => {
  if (href) {
    return (
      <Link
        href={href}
        {...rest}
        className={clsx(
          `active:bg-gray active:text-dark group relative inline-flex items-center justify-center whitespace-nowrap rounded-10 text-center text-medium font-bold outline-none transition-all duration-300 ${classNames}`,
          {
            "bg-secondary text-black hover:opacity-90": variant === "fill-secondary",
            "bg-primary text-secondary hover:opacity-90": variant === "fill-primary",
            "bg-pink text-black hover:opacity-90": variant === "fill-pink",

            "min-h-[48px] px-[25px] py-[5px] lg:min-h-[60px] lg:px-[30px] lg:text-[24px]": size === "sm",
            "min-h-[40px] px-[25px] py-[5px] lg:px-[20px] lg:text-2sm": size === "default",
          },
        )}>
        {children}
      </Link>
    )
  } else {
    return (
      <button
        {...rest}
        className={clsx(
          `active:bg-gray active:text-dark group relative inline-flex items-center justify-center whitespace-nowrap rounded-10 text-center text-medium font-bold outline-none transition-all duration-300 ${classNames}`,
          {
            "bg-secondary text-black hover:opacity-90": variant === "fill-secondary",
            "bg-primary text-secondary hover:opacity-90": variant === "fill-primary",
            "bg-pink text-black hover:opacity-90": variant === "fill-pink",

            "min-h-[48px] px-[25px] py-[5px] lg:min-h-[60px] lg:px-[30px] lg:text-[24px]": size === "sm",
            "min-h-[40px] px-[25px] py-[5px] lg:px-[20px] lg:text-2sm": size === "default",
          },
        )}>
        {children}
      </button>
    )
  }
}

export default SharedButton
