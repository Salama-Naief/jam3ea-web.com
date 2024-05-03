import Image from "next/image";
import React from "react";
import avatar from "../../../../public/assets/avatar.svg";

function UserAvatar() {
  return (
    <div>
      <Image src={avatar} alt="avatar" />
    </div>
  );
}

export default UserAvatar;
