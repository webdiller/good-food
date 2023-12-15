import React from "react"
import ProfileHeader from "@/src/widgets/Headers/ProfileHeader"

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProfileHeader />
      {children}
    </>
  )
}

export default ProfileLayout
