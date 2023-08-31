import crypto from 'crypto';
import { v4 as uuid } from 'uuid';

//const SECRET_KEY = '0fe99fe7b9404fb7906533ef83e43bca763b7dc97d0e41a9966fbbe4a1fcbb0852797bb2088242dead0d2eb2506ed7f2b256af439bb64c20a11b0a685fc2f28859af3867e5d84d368b58a73f6e3c3932e6badb347e704860b93820d0566c308ba82728dcc8ca40d79f7b16a43008011a47e44a83a49b47e99e9f969ec908fa0c';
const SECRET_KEY =
  '1b589a812e874d07945e466597ca16395e873d49694b4d30891919c0027fd311f329b039003e480cbae891d1c24715c81b512cc7c6c74391b9f6a1658442e0fb367ec92c34da49cc8671117c0f09a8cb7c1d81dcf7724857905ded3ada725881f7039a4e62a44af3b04f82c1bc115ccc4d6fa040c7f14ab0af6cd53b335b221e';

export default class CyberSource {
  //apiEndPoint: string = 'https://secureacceptance.cybersource.com/silent/pay';
  //accessKey: string = '51b5f416d74f361ea4a38a1543c4dd6a';
  //profileId: string = 'AE4EF5C6-4753-45F3-A8B7-4E2434C6A79F';
  apiEndPoint: string = 'https://testsecureacceptance.cybersource.com/silent/pay';
  accessKey: string = 'e88390bdbf56388083902795c41125a6';
  profileId: string = '19C7D8F3-0E7F-4393-AF06-3F4091C2A789';
  transactionUuid: string = '';
  signedFieldNames: string =
    'access_key,reason_code,bill_trans_ref_no,merchant_id,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency,payment_method,bill_to_forename,bill_to_surname,bill_to_email,bill_to_phone,bill_to_address_line1,bill_to_address_line2,bill_to_address_city,bill_to_address_state,bill_to_address_country,bill_to_address_postal_code';
  billTransReferenceNumber: string = '';
  reasonCode: string = '';
  merchantId: string = '55211222';
  unsignedFieldNames: string =
    'card_type_name,card_type,card_number,card_expiry_date,card_cvn,response_return_url';
  signedDateTime: string = new Date().toISOString();
  locale: string = 'en';
  transactionType: string = 'sale';
  currency: string = 'USD';
  paymentMethod: string = 'card';
  billToForename: string = '';
  billToSurename: string = '';
  billToEmail: string = '';
  billToPhone: string = '';
  billAddressLine1: string = '';
  billAddressLine2: string = '';
  billCity: string = '';
  billState: string = '';
  billCountry: string = '';
  billPostalCode: string = '';
  amount: number = 0.0;
  referenceId: string = '';
  card_type_name: string = '';
  card_type: string = '001';
  card_number: string = '4111111111111111';
  card_expiry_date: string = '06-2025';
  card_cvn: string = '100';
  response_return_url: string = 'http://localhost:3000/api/payment';
  payload: Record<string, any> = {};

  constructor() {
    this.signedDateTime = '2023-08-31T00:34:55Z';
  }

  static async handleResult(body: any) {
    const referenceNumber = body.req_reference_number;

    const decision = body.decision;
    let redirectUrl = `/checkout?referenceNumber=${referenceNumber}&payment_method=visa`;
    if (decision === 'ACCEPT') {
      // Insert the order here

      redirectUrl += '&success=true';
    } else {
      redirectUrl += '&success=false';
    }

    return redirectUrl;
  }

  setBillingData(params: any): void {
    this.billToForename = params.billing_forename || null;
    this.billToSurename = params.billing_surename || null;
    this.billToEmail =
      params.billing_email || `${params.billing_phone}@jm3eia.com`;
    this.billToPhone = params.billing_phone || null;
    this.billAddressLine1 = params.billing_adress_line1 || null;
    this.billAddressLine2 = params.billing_address_line2 || null;
    this.billCity = params.billing_city || null;
    this.billState = params.billing_state || null;
    this.billCountry = params.billing_country || null;
    this.billPostalCode = params.billing_postalcode || null;
    this.reasonCode = uuid();
    this.transactionUuid = params.bill_trans_ref_no;
    this.billTransReferenceNumber = params.bill_trans_ref_no;
  }

  setCardDetails(params: any): void {
    this.card_type_name = 'Mastercard';
    this.card_number = params.card_number;
    this.card_expiry_date = params.card_expiry_date;
    this.card_cvn = params.card_cvn;
    this.response_return_url = params.response_return_url;
  }

  preparePayload(): void {
    this.payload = {
      access_key: this.accessKey,
      merchant_id: this.merchantId,
      profile_id: this.profileId,
      transaction_uuid: this.transactionUuid,
      signed_field_names: this.signedFieldNames,
      unsigned_field_names: this.unsignedFieldNames,
      signed_date_time: this.signedDateTime,
      locale: this.locale,
      reason_code: this.reasonCode,
      bill_trans_ref_no: this.billTransReferenceNumber,
      transaction_type: this.transactionType,
      reference_number: this.referenceId,
      amount: this.amount,
      currency: this.currency,
      payment_method: this.paymentMethod,
      bill_to_forename: this.billToForename,
      bill_to_surname: this.billToSurename,
      bill_to_email: this.billToEmail,
      bill_to_phone: this.billToPhone,
      bill_to_address_line1: this.billAddressLine1,
      bill_to_address_line2: this.billAddressLine2,
      bill_to_address_city: this.billCity,
      bill_to_address_state: this.billState,
      bill_to_address_country: this.billCountry,
      bill_to_address_postal_code: this.billPostalCode,
      card_type_name: this.card_type_name,
      card_type: this.card_type,
      card_number: this.card_number,
      card_expiry_date: this.card_expiry_date,
      card_cvn: this.card_cvn,
      response_return_url: this.response_return_url,
    };

    const signature = this.sign();
    this.payload.signature = signature;
  }

  sign(): string {
    return this.signData(this.buildDataToSign(this.payload), SECRET_KEY);
  }

  signData(data: string, secretKey: string): string {
    return crypto.createHmac('sha256', secretKey).update(data).digest('base64');
  }

  buildDataToSign(params: Record<string, any>): string {
    const signedFieldNames = this.signedFieldNames.split(',');
    const dataToSign = signedFieldNames.map(
      (field) => `${field}=${params[field]}`
    );
    return this.commaSeparate(dataToSign);
  }

  commaSeparate(dataToSign: any) {
    return dataToSign.join(',');
  }
}
