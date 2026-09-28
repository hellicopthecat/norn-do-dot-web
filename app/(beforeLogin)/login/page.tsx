"use client";

import {API_URL} from "@/common/constants";

export default function Login() {
  const clickGoogleOAuth = () => window.location.assign(`${API_URL}/auth`);
  return (
    <div>
      <button onClick={clickGoogleOAuth} className="cursor-pointer">
        GooGle
      </button>
    </div>
  );
}
