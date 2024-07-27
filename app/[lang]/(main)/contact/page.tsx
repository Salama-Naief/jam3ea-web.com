import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Locale } from "../../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";
import { Rating } from "@mantine/core";
import facbookIcon from "../../../../public/assets/socialIcons/facebook.png";
import instagramIcon from "../../../../public/assets/socialIcons/instegram.png";
import twitterIcon from "../../../../public/assets/socialIcons/tiwetter.png";
import phoneIcon from "../../../../public/assets/socialIcons/phone.png";
import Image from "next/image";

export default async function Contact({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <Container>
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto h-fit my-8  flex items-center justify-center">
        <div className="rounded-lg shadow-md">
          <div className=" py-6  w-full mx-auto sm:w-[40rem]">
            <div className="flex gap-5 md:gap-7 justify-center">
              <a
                href="#"
                className=" w-fit h-fit flex items-center justify-center"
              >
                {/* <PhoneArrowUpRightIcon className="w-4 h-4 text-success" /> */}
                <Image src={phoneIcon} alt="phoneIcon" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/jameiakw?igsh=d3J3YnRyb3E5MXZu"
                className=" w-fit h-fit flex items-center justify-center "
              >
                <Image src={instagramIcon} alt="instagramIcon" />
              </a>
              <a
                target="_blank"
                href="https://x.com/jameiakw?t=sR9j5tRpeWbAh_mK2t5s-Q&s=09"
                className=" w-fit h-fit flex items-center justify-center"
              >
                <Image src={twitterIcon} alt="twitterIcon" />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/jameiakw?mibextid=ZbWKwL"
                className=" w-fit h-fit flex items-center justify-center"
              >
                <Image src={facbookIcon} alt="facbookIcon" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl w-3/4 mx-auto flex flex-col gap-3 p-3">
            <div className="text-center font-bold text-secondary text-2xl">
              {translate(dict, "rate_app")}
            </div>
            <div className="flex justify-center">
              <Rating defaultValue={5} size={"lg"} my={"md"} readOnly></Rating>
            </div>
            <div className="grid grid-cols-2 font-bold">
              <div className="text-sm text-primary">
                {translate(dict, "contact_us_via_email")}
              </div>
              <div className="text-sm ">cs@jameai.com</div>
            </div>
            <div className="grid grid-cols-2 font-bold">
              <div className="text-sm text-primary">
                {translate(dict, "job_application")}
              </div>
              <div className="text-sm ">hr@jameai.com</div>
            </div>
            <div className="grid grid-cols-2   font-bold">
              <div className="text-sm text-primary">
                {translate(dict, "marketing")}
              </div>
              <div className="text-sm ">marketing@jameai.com</div>
            </div>
            <div className="grid grid-cols-2 font-bold">
              <div className="text-sm text-primary">
                {translate(dict, "purchase_management")}
              </div>
              <div className="text-sm ">Purchase@jameai.com</div>
            </div>
          </div>
          <div className="text-center ">
            {translate(dict, "for_complaints_call")}{" "}
            <a href="tel:22274222" className="text-primary">
              22274222
            </a>
            , {translate(dict, "communicate_via_chat")}
          </div>

          <div className="pt-20"></div>
        </div>
      </div>
    </Container>
  );
}
