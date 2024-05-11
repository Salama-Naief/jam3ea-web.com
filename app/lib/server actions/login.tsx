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
    username: z.string(),
    password: z.string(),
  });
};

export const Login = async (prevState: any, formData: FormData) => {
  //translation method used in async server component
  //   const t = await getTranslations("Auth");
  //   const locale = useLocale();
  const apiUrl =
    process.env.API_BASE_URL + "/api?route=/api?route=/profile/login";
  //console.log("locale", locale);
  //validate incoming data
  console.log("formData", formData);
  try {
    const parsedData = schema().safeParse({
      username: formData.get("username"),
      password: formData.get("password"),
    });

    //check validation
    if (!parsedData.success) {
      return {
        type: "errorType.validationError",
        error: {
          username: parsedData.error.format().username?._errors[0],
          password: parsedData.error.format().password?._errors[0],
        },
      };
    }

    const response = await fetch(
      "https://jm3eia.com/api?route=/profile/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //"Accept-Language": locale,
        },
        body: JSON.stringify({
          username: "mrabdelrahman10",
          password: "123456",
        }),
      }
    );
    const data = await response.json();
    console.log("login data", data);
    if (data.success) {
      cookies().set({
        name: "token",
        value: data.token,
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
