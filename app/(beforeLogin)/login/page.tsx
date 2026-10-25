"use client";

import {API_URL} from "@/common/constants";
import {redirect} from "next/navigation";

export default function Login() {
  const clickGoogleOAuth = () => redirect(`${API_URL}/auth`);
  return (
    <div>
      <button onClick={clickGoogleOAuth} className="cursor-pointer">
        GooGle
      </button>
    </div>
  );
}
