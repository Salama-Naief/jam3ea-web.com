"use server";
import { z } from "zod";
// import getProducts from "../get data/getProducts";
// import axios from "axios";
import { cookies } from "next/headers";
// import { apiUrl } from "@/config/apiUrl";
import { redirect } from "next/navigation";
// import { errorType } from "@/config/const";
// import { getTranslations } from "next-intl/server";
// import { useLocale } from "next-intl";

//validation schema
const schema = () => {
  return z.object({
    city_id: z.string(),
  });
};

export const SetGuestCityId = async (prevState: any, formData: FormData) => {
  //translation method used in async server component
  //   const t = await getTranslations("Auth");
  //   const locale = useLocale();
  const apiUrl = process.env.API_BASE_URL + "/profile/updatecity";
  //console.log("locale", locale);
  //validate incoming data
  console.log("formData", formData.get("city_id"));
  try {
    const parsedData = schema().safeParse({
      city_Id: formData.get("city_id"),
    });

    //check validation
    if (!parsedData.success) {
      return {
        type: "errorType.validationError",
        error: {
          city_value: parsedData.error.format().city_id?._errors[0],
        },
      };
    }

    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        //"Accept-Language": locale,
      },
      body: JSON.stringify({ city_idl: parsedData.data.city_id }),
    });
    const data = await response.json();
    console.log("login data", data);
    if (data.success) {
      cookies().set({
        name: "city",
        value: "data.city._id",
        httpOnly: true,
        // expires: 12 * 60 * 60 * 1000,
        // path: '/',
      });

      redirect("/");
    } else if (!data.success) {
      return { type: "errorType.serverError", message: data.message };
    }
  } catch (error) {
    console.log("login error===>", error);
  }
};
