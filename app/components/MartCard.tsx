"use client";

import { useCookies } from "react-cookie";
import { Locale } from "../../i18n-config";
import { useRouter } from "next/navigation";
import webRoutes from "@/lib/utils/webRoutes";
import Image from "next/image";

export default function MartCard({ lang }: { lang: Locale }) {
  const [cookies, setCookie] = useCookies(["isVIP"]);
  const router = useRouter();
  const revokeVIP = () => {
    setCookie("isVIP", false);
    // router.replace(webRoutes.home);
  };
  return (
    <button onClick={revokeVIP} className="w-1/2">
      <Image
        src={`/assets/mart/${lang}.jpg`}
        width={400}
        height={400}
        className="mb-2"
        alt="Mart"
      />
    </button>
  );
}
