import React from "react";
import ProfileHeader from "../components/profileHeader";
import ProfileTabs from "../components/tabs";
import { useAuth } from "../hooks/useAuth";
import Login from "./login";

export default function Profile() {
  const auth = useAuth();

  return (
    <>
      {!auth.user ? (
        <>
          <div>
            <Login />
          </div>
        </>
      ) : (
        <>
          <div className="pt-16  ">
            <ProfileHeader />
          </div>
          <div>
            <ProfileTabs />
          </div>
        </>
      )}
    </>
  );
}
