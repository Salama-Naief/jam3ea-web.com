"use client";

import Loader from "@/components/Loader";
import Popup from "@/components/Popup";
import { clientRequest } from "@/lib/utils/helpers";
import { SetStateAction, useEffect, useState } from "react";

interface VisaProps {
  isOpen: boolean;
  close: (isOpen: SetStateAction<boolean>) => void;
}

export default function Visa({ close, isOpen }: VisaProps) {
  const [result, setResult] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    const data = await clientRequest(
      "http://localhost:3000/api/checkout",
      "GET",
      undefined,
      true
    );
    setResult(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const disabledFields = [
    "card_number",
    "card_expiry_date",
    "response_return_url",
    "card_cvn",
    "card_type_name",
  ];

  return (
    <>
      <Popup isOpen={isOpen} close={close}>
        {isLoading || !result ? (
          <Loader />
        ) : (
          <form action={result.results.apiEndPoint} method="POST">
            {Object.keys(result.results.payload)
              //.filter((p) => !disabledFields.includes(p))
              .map((key: string, i) => (
                <input
                  type="hidden"
                  name={key}
                  id={key}
                  key={i}
                  value={result.results.payload[key]}
                />
              ))}

            <input
              type="hidden"
              className="border-b px-3 py-2 w-full outline-none"
              name="settlement_method"
              value="card"
            />
            <input
              type="hidden"
              className="border-b px-3 py-2 w-full outline-none"
              name="settlement_currency"
              value="KWD"
            />

            <button className="submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
              Pay now
            </button>
          </form>
        )}
      </Popup>
      {/* <Popup close={close} isOpen={isOpen}> */}
      {/* <form
        method="POST"
        action={result.results['apiEndPoint']}
      >
        <input type="hidden" name='access_key' value='057287710ca13d098473ed1235571fbc' />
        <input type="hidden" name='profile_id' value='FAF242D4-65A8-45AA-B48B-F72E6C9689DD' />

        <input type="hidden" name='bill_to_forename' value='Osama' />
        <input type="hidden" name='bill_to_surname' value='Dev' />
        <input type="hidden" name='bill_to_address_line1' value='anywhere' />
        <input type="hidden" name='bill_to_address_city' value='Rabat' />
        <input type="hidden" name='bill_to_address_post_code' value='10030' />
        <input type="hidden" name='bill_to_address_country' value='Morocco' />
        <input type="hidden" name='bill_to_email' value='jakerossama2000@gmail.com' />

        <input type="hidden" name='signed_field_names' value='' /> */}
      {/* <input type="hidden" name="paymentMethod" value="visa" />
        <input
          type="hidden"
          className="border-b px-3 py-2 w-full outline-none"
          id="card_type_name"
          name="card_type_name"
          value="Visa"
        />
        <input
          type="hidden"
          className="border-b px-3 py-2 w-full outline-none"
          name="settlement_method"
          value="card"
        />
        <input
          type="hidden"
          className="border-b px-3 py-2 w-full outline-none"
          name="settlement_currency"
          value="KWD"
        />
        <input
          type="hidden"
          className="border-b px-3 py-2 w-full outline-none"
          name="response_return_url"
          value="http://localhost:5000/checkout"
        />
        <input
          type="hidden"
          id="card_type_field"
          className="border-b px-3 py-2 w-full outline-none"
          name="card_type"
          value="001"
        />
        <input
          type="hidden"
          placeholder="Card number"
          name="card_number"
          id="card_number_hidden"
        />
        <input
          type="hidden"
          className="border-b px-3 py-2 w-full outline-none"
          placeholder="MM-YYYY"
          name="card_expiry_date"
          id="card_expiry_date"
        />
        <input
          type="hidden"
          className="border-b px-3 py-2 w-full outline-none"
          placeholder="CCV"
          maxLength={3}
          minLength={3}
          name="card_cvn"
          value={}
        /> */}

      {/* <button type="submit">Pay</button>
      </form> */}
      {/* </Popup> */}

      {/* <form
        id="visaForm"
        action="https://secureacceptance.cybersource.com/silent/pay"
        method="POST"
      >
        <input
          type="hidden"
          name="_token"
          value="PQMxpbUUDYK3mn29e0yIjYm9S2auEvXuJwJvsFc8"
        />{' '}
        <input type="hidden" name="paymentMethod" value="visa" />
        <input
          type="hidden"
          id="access_key"
          name="access_key"
          value="057287710ca13d098473ed1235571fbc"
        />
        <input
          type="hidden"
          id="merchant_id"
          name="merchant_id"
          value="555412401"
        />
        <input
          type="hidden"
          id="profile_id"
          name="profile_id"
          value="FAF242D4-65A8-45AA-B48B-F72E6C9689DD"
        />
        <input
          type="hidden"
          id="transaction_uuid"
          name="transaction_uuid"
          value="0bbe7efc-e3c9-4f55-84e2-9aa8640f4efb"
        />
        <input
          type="hidden"
          id="signed_field_names"
          name="signed_field_names"
          value="access_key,reason_code,bill_trans_ref_no,merchant_id,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency,payment_method,bill_to_forename,bill_to_surname,bill_to_email,bill_to_phone,bill_to_address_line1,bill_to_address_line2,bill_to_address_city,bill_to_address_state,bill_to_address_country,bill_to_address_postal_code"
        />
        <input
          type="hidden"
          id="unsigned_field_names"
          name="unsigned_field_names"
          value="card_type_name,card_type,card_number,card_expiry_date,card_cvn,response_return_url"
        />
        <input
          type="hidden"
          id="signed_date_time"
          name="signed_date_time"
          value="2023-08-30T14:08:55Z"
        />
        <input type="hidden" id="locale" name="locale" value="en" />
        <input
          type="hidden"
          id="reason_code"
          name="reason_code"
          value="64ef4d77670f5"
        />
        <input
          type="hidden"
          id="bill_trans_ref_no"
          name="bill_trans_ref_no"
          value="0bbe7efc-e3c9-4f55-84e2-9aa8640f4efb"
        />
        <input
          type="hidden"
          id="transaction_type"
          name="transaction_type"
          value="sale"
        />
        <input
          type="hidden"
          id="reference_number"
          name="reference_number"
          value="0bbe7efc-e3c9-4f55-84e2-9aa8640f4efb"
        />
        <input type="hidden" id="amount" name="amount" value="1" />
        <input type="hidden" id="currency" name="currency" value="KWD" />
        <input
          type="hidden"
          id="payment_method"
          name="payment_method"
          value="card"
        />
        <input
          type="hidden"
          id="bill_to_forename"
          name="bill_to_forename"
          value="osama"
        />
        <input
          type="hidden"
          id="bill_to_surname"
          name="bill_to_surname"
          value="dev"
        />
        <input
          type="hidden"
          id="bill_to_email"
          name="bill_to_email"
          value="12345677@jm3eia.com"
        />
        <input
          type="hidden"
          id="bill_to_phone"
          name="bill_to_phone"
          value="12345677"
        />
        <input
          type="hidden"
          id="bill_to_address_line1"
          name="bill_to_address_line1"
          value="Kuwait"
        />
        <input
          type="hidden"
          id="bill_to_address_line2"
          name="bill_to_address_line2"
          value="Kuwait city"
        />
        <input
          type="hidden"
          id="bill_to_address_city"
          name="bill_to_address_city"
          value="Kuwait"
        />
        <input
          type="hidden"
          id="bill_to_address_state"
          name="bill_to_address_state"
          value="Kuwait"
        />
        <input
          type="hidden"
          id="bill_to_address_country"
          name="bill_to_address_country"
          value="KW"
        />
        <input
          type="hidden"
          id="bill_to_address_postal_code"
          name="bill_to_address_postal_code"
          value="12345"
        />
        <input type="hidden" id="card_type" name="card_type" value="001" />
        <input
          type="hidden"
          id="signature"
          name="signature"
          value="gz1JiD+FxlAaClAQOlTD9G8nhsuo14RophgyV8XuO9A="
        />
        <div className="flex flex-col gap-3">
          <input
            type="hidden"
            className="border-b px-3 py-2 w-full outline-none"
            id="card_type_name"
            name="card_type_name"
            value=""
          />
          <input
            type="hidden"
            className="border-b px-3 py-2 w-full outline-none"
            name="settlement_method"
            value="card"
          />
          <input
            type="hidden"
            className="border-b px-3 py-2 w-full outline-none"
            name="settlement_currency"
            value="KWD"
          />

          <input
            type="hidden"
            className="border-b px-3 py-2 w-full outline-none"
            name="response_return_url"
            value="https://pay.jm3eia.com/checkout/callback/visa"
          />
          <input
            type="hidden"
            id="card_type_field"
            className="border-b px-3 py-2 w-full outline-none"
            name="card_type"
            value=""
          />
          <input
            type="text"
            className="border-b px-3 py-2 w-full outline-none"
            placeholder="Card number"
            maxLength={19}
            minLength={19}
            id="card-number"
          />
          <input
            type="hidden"
            placeholder="Card number"
            name="card_number"
            id="card_number_hidden"
          />

          <div className="flex gap-3">
            <input
              type="hidden"
              className="border-b px-3 py-2 w-full outline-none"
              placeholder="MM-YYYY"
              name="card_expiry_date"
              id="card_expiry_date"
            />
            <div className="flex">
              <input
                type="text"
                className="text-center  border-b px-3 py-2 w-1/3 outline-none"
                placeholder="MM"
                id="card-expiry-month"
                value=""
              />
              <span className="mt-2 text-xl text-center">/</span>
              <input
                type="text"
                className="text-center  border-b px-3 py-2 w-1/3 outline-none"
                placeholder="YY"
                id="card-expiry-year"
                value=""
                min="23"
                max="99"
              />
            </div>

            <input
              type="password"
              className="border-b px-3 py-2 w-full outline-none"
              placeholder="CCV"
              maxLength={3}
              minLength={3}
              name="card_cvn"
            />
          </div>

          <div className="">
            <a href="#" className="flex gap-2 items-center mt-4 border-b pb-3">
              <i className="fa-solid fa-lock text-orange-400 text-xs"></i>
              <div className="text-orange-400 text-xs">
                More about card security
              </div>
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <div className="text-xs">Total amount</div>
              <div className="text-xs">1.000KD</div>
            </div>
          </div>
          <div className="text-sm mt-4 border-b pb-2">
            يرجى التأكد من البيانات أعلاه قبل إتمام العملية
            <br />
            When choosing payment methods, please check the accuracy of your
            information
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              className="closeModal w-full bg-red-600 rounded-full py-2 text-white closeModal"
            >
              Cancel - إلغاء الأمر
            </button>
            <button
              type="submit"
              id="visaSubmitButton"
              className="w-full bg-orange-600 rounded-full py-2 text-white"
            >
              Pay now | ادفع الآن
            </button>
          </div>
        </div>
      </form> */}
    </>
  );
}
