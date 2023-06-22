import * as crypto from 'crypto';
import { NextResponse } from 'next/server';
import { LANGUAGES } from '../enums';

class Knet {
  /* private isWallet: boolean;
  private amount: number;
  private resUrl: string;
  private resultUrl: string; */
  private amount;
  private lang;
  constructor(amount = 0, lang = 'en') {
    this.amount = amount;
    this.lang = lang;
  }

  private pkcs5Pad = (text: string) => {
    const blocksize = 16;
    const pad = blocksize - (text.length % blocksize);

    return text + pad.toString().repeat(pad);
  };

  private aesEncrypt = (text: string, key: string) => {
    const AES_METHOD = 'aes-128-cbc';
    const content = this.pkcs5Pad(text);

    try {
      const cipher = crypto.createCipheriv(AES_METHOD, new Buffer(key), key);
      let encrypted = cipher.update(content);

      encrypted = Buffer.concat([encrypted, cipher.final()]);

      return `${encrypted.toString('hex')}`;
    } catch (err) {
      /* empty */
    }
  };

  private aesDecrypt = (text: string) => {
    const AES_METHOD = 'aes-128-cbc';
    const key = process.env.termResourceKey;

    const decipher = crypto.createDecipheriv(
      AES_METHOD,
      new Buffer(key as string),
      key as string
    );
    const encryptedText = new Buffer(text, 'hex');
    let decrypted = decipher.update(encryptedText);

    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
  };

  pay = () => {
    const kpayUrl = process.env.knet_payment_url;
    const tranportalId = process.env.knet_tranportal_id;
    const tranportalPassword = process.env.knet_req_tranportal_password;
    const termResourceKey = process.env.knet_term_resource_key;
    const responseUrl = process.env.SITE_URL + '/checkout';
    const errorUrl = process.env.SITE_URL + '/checkout';

    const paramData = {
      currencycode: '414',
      id: tranportalId,
      password: tranportalPassword,
      action: '1',
      langid: this.lang.toUpperCase(),
      amt: this.amount,
      responseURL: responseUrl,
      errorURL: errorUrl,
      trackid: Math.random(),
      udf3: 12345678,
    };

    let params = '';

    Object.keys(paramData).forEach((key) => {
      params += `${key}=${paramData[key as keyof typeof paramData]}&`;
    });

    const encryptedParams = this.aesEncrypt(params, termResourceKey as any);

    params = `${encryptedParams}&tranportalId=${tranportalId}&responseURL=${responseUrl}&errorURL=${errorUrl}`;

    const url = `${kpayUrl}&param=paymentInit&trandata=${params}`;
    return url;
    //return NextResponse.redirect(new URL(url));
  };
}

export default Knet;
