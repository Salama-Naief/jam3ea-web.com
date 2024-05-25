import * as crypto from "crypto";
import querystring from "querystring";
import { LANGUAGES } from "../enums";
import { IGetCheckoutResponseResult } from "@/module/(main)/cart/types";
import apiHandler from "./apiHandler";
import { IUser } from "@/module/(main)/(profile)/types";

class Knet {
  private lang;
  constructor(lang = "en") {
    this.lang = lang;
  }

  private pkcs5Pad = (text: string) => {
    const blocksize = 16;
    const pad = blocksize - (text.length % blocksize);

    return text + pad.toString().repeat(pad);
  };

  private aesEncrypt = (text: string, key: string) => {
    const AES_METHOD = "aes-128-cbc";
    const content = this.pkcs5Pad(text);

    try {
      const cipher = crypto.createCipheriv(AES_METHOD, new Buffer(key), key);
      let encrypted = cipher.update(content);

      encrypted = Buffer.concat([encrypted, cipher.final()]);

      return `${encrypted.toString("hex")}`;
    } catch (err) {
      /* empty */
    }
  };

  private aesDecrypt = (text: string, key: string) => {
    const AES_METHOD = "aes-128-cbc";

    const decipher = crypto.createDecipheriv(
      AES_METHOD,
      new Buffer(key as string),
      key as string
    );
    const encryptedText = new Buffer(text, "hex");
    let decrypted = decipher.update(encryptedText);

    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
  };

  pay = async (hash: string, user: IUser) => {
    const kpayUrl = process.env.knet_payment_url;
    const tranportalId = process.env.knet_tranportal_id;
    const tranportalPassword = process.env.knet_req_tranportal_password;
    const termResourceKey = process.env.knet_term_resource_key;
    const responseUrl = process.env.SITE_URL + "/api/payment";
    const errorUrl = process.env.SITE_URL + "/checkout";

    const cart: IGetCheckoutResponseResult = await apiHandler("/checkout");

    const paramData = {
      currencycode: "414",
      id: tranportalId,
      password: tranportalPassword,
      action: "1",
      langid: this.lang === LANGUAGES.ARABIC ? this.lang.toUpperCase() : "USA",
      amt: parseFloat(cart.total),
      responseURL: responseUrl,
      errorURL: errorUrl,
      trackid: hash,
      udf1: "",
      udf2: "",
      udf3: user && user.mobile && user.mobile.length === 8 ? user.mobile : "",
      udf4: "",
      udf5: hash,
    };

    let params = "";

    Object.keys(paramData).forEach((key) => {
      params += `${key}=${paramData[key as keyof typeof paramData]}&`;
    });

    const encryptedParams = this.aesEncrypt(params, termResourceKey as any);

    params = `${encryptedParams}&tranportalId=${tranportalId}&responseURL=${responseUrl}&errorURL=${errorUrl}`;

    const url = `${kpayUrl}&trandata=${params}`;
    return url;
  };

  result = (jsonBody: querystring.ParsedUrlQuery) => {
    const {
      ErrorText,
      paymentid,
      trackid,
      Error,
      result,
      postdate,
      tranid,
      auth,
      avr,
      ref,
      amt,
      udf1,
      udf2,
      udf3,
      udf4,
      udf5,
    } = jsonBody;

    const termResourceKey = process.env.knet_term_resource_key;

    if (!ErrorText && !Error) {
      const resTranData = jsonBody.trandata;
      if (resTranData) {
        const decrytedData = this.aesDecrypt(
          resTranData as string,
          termResourceKey as string
        );
        const url = process.env.SITE_URL + "/checkout?" + decrytedData;
        return url;
      }
    } else {
      const url =
        process.env.SITE_URL +
        "/checkout?" +
        "Error=" +
        Error +
        "&ErrorText=" +
        ErrorText +
        "&trackid=" +
        trackid +
        "&amt=" +
        amt +
        "&paymentid=" +
        paymentid;
      return url;
    }
  };
}

export default Knet;
