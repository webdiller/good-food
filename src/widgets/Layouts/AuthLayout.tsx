import React from "react"
import AuthHeader from "@/src/widgets/Headers/AuthHeader"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthHeader />
      {children}
    </>
  )
}

export default AuthLayout
