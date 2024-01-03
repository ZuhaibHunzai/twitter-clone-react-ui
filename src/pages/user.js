import React from "react";
import ProfileHeader from "../components/profileHeader";
import ProfileTabs from "../components/tabs";
import { useAuth } from "../hooks/useAuth";

export default function PublicPreview() {
  const auth = useAuth();

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
