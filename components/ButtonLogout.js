"use client";

// ! IMPORTANT ! When using client, always import from "next-auth/react" and not from out "auth.js", that would compromise our secrets.
import { signOut } from "next-auth/react";

const ButtonLogout = () => {
  return (
    <button className="btn btn-ghost" onClick={() => signOut()}>
      Logout
    </button>
  );
};

export default ButtonLogout;
