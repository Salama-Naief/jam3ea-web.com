import * as crypto from 'crypto';

const pkcs5Pad = (text: string) => {
  const blocksize = 16;
  const pad = blocksize - (text.length % blocksize);

  return text + pad.toString().repeat(pad);
};

const aesEncrypt = (text: string, key: string) => {
  const AES_METHOD = 'aes-128-cbc';
  const content = pkcs5Pad(text);

  try {
    const cipher = crypto.createCipheriv(AES_METHOD, new Buffer(key), key);
    let encrypted = cipher.update(content);

    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return `${encrypted.toString('hex')}`;
  } catch (err) {
    /* empty */
  }
};

const aesDecrypt = (text: string) => {
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

/* const initiateKnetPayment = () => {
  const kpayUrl = process.env.kpayUrl; // https://www.kpay.com.kw/kpg/PaymentHTTP.htm for production or https://www.kpaytest.com.kw/kpg/PaymentHTTP.htm for test
  const tranportalId = process.env.tranportalId;
  const tranportalPassword = process.env.tranportalPassword;
  const termResourceKey = process.env.termResourceKey;
  const responseUrl = process.env.kpayResponseUrl;
  const errorUrl = process.env.kpayErrorUrl;

  const paramData = {
    currencycode: '414',
    id: tranportalId,
    password: tranportalPassword,
    action: '1',
    langid: 'AR',
    amt: 20, // amount
    responseURL: responseUrl,
    errorURL: errorUrl,
    trackid: Math.random(),
    udf3: 12345678, // 8 digit numeric value as customer identifier
  };

  let params = '';

  Object.keys(paramData).forEach((key) => {
    params += `${key}=${paramData[key as keyof typeof paramData]}&`;
  });

  const encryptedParams = aesEncrypt(params, termResourceKey);

  params = `${encryptedParams}&tranportalId=${tranportalId}&responseURL=${responseUrl}&errorURL=${errorUrl}`;

  const url = `${kpayUrl}?param=paymentInit&trandata=${params}`;

  Router.push(url);
}; */
