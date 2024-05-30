"use client";

import { useCookies } from "react-cookie";
import { Locale } from "../../i18n-config";
import { useRouter } from "next/navigation";
import webRoutes from "@/lib/utils/webRoutes";
import Image from "next/image";

export default function VipCard({ lang }: { lang: Locale }) {
  const [cookies, setCookie] = useCookies(["isVIP"]);
  const router = useRouter();
  const makeVIP = () => {
    setCookie("isVIP", true);
    // router.replace(webRoutes.home);
  };
  return (
    <button onClick={makeVIP} className="w-1/2">
      <Image
        src={`/assets/vip/${lang}.jpg`}
        className="object-cover"
        alt="VIP"
        width={400}
        height={400}
      />
    </button>
  );
}
