import React from "react";
import ProfileHeader from "../components/profileHeader";
import ProfileTabs from "../components/tabs";

export default function Profile() {
  return (
    <>
      <div className="pt-16  ">
        <ProfileHeader />
      </div>
      <div>
        <ProfileTabs />
      </div>
    </>
  );
}
