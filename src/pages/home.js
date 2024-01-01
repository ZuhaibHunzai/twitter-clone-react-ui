import React from "react";
import SuggestedFriendCard from "../components/suggestedFriendsCard";
import logo from "../assets/images/exp.png";

export default function Home() {
  return (
    <div>
      <SuggestedFriendCard name="zuhaib alam" profilePic={logo} />
      <SuggestedFriendCard name="zuhaib alam" profilePic={logo} />
      <SuggestedFriendCard name="zuhaib alam" profilePic={logo} />
      <SuggestedFriendCard name="zuhaib alam" profilePic={logo} />
      <SuggestedFriendCard name="zuhaib alam" profilePic={logo} />
      <SuggestedFriendCard name="zuhaib alam" profilePic={logo} />
    </div>
  );
}
