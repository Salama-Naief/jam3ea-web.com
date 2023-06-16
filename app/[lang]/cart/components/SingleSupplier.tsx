import Link from 'next/link';
import { IGetCheckoutResponseResult } from '../types';
import Button from '@/components/Button';
import webRoutes from '@/lib/utils/webRoutes';
import { getProductQuantityPrice } from '@/module/product/utils';
import { Locale } from '../../../../i18n-config';
import { translate } from '@/lib/utils/serverHelpers';
import DeliveryTimePicker from './DeliveryTimePicker';

interface SingleSupplierProps {
  cart: IGetCheckoutResponseResult;
  lang: Locale;
  dict: any;
}

export default function SingleSupplier({
  cart,
  lang,
  dict,
}: SingleSupplierProps) {
  const data = cart.data[0];
  return (
    <div id="single-supplier">
      <h5 className="text-base mb-2">
        {typeof data.supplier.name === 'object'
          ? data.supplier.name[lang]
          : data.supplier.name}
      </h5>
      {cart.products.map((product) => (
        <div
          key={product.sku}
          className="flex p-3 rounded-xl bg-white gap-3 items-center mb-3"
        >
          <img
            className="max-w-full min-h-[74px] max-h-[74px] h-full"
            src={product.picture}
            alt=""
          />
          <div className="flex flex-col gap-1">
            <span className="text-md">{product.name}</span>
            <span className="text-sm">
              {translate(dict, 'price')}: {product.price}
            </span>
            <span className="text-sm text-primary">
              {translate(dict, 'total')}:{' '}
              {getProductQuantityPrice(
                parseFloat(product.price),
                product.quantity
              )}
            </span>
          </div>
        </div>
      ))}

      <DeliveryTimePicker deliveryTimes={cart.delivery_times} />

      <div className="flex py-4 rounded-xl bg-white gap-3 items-center justify-center w-full  mb-3">
        <button className="bg-primary-soft text-orange-500 hover:bg-orange-400 hover:text-white py-2 px-4 text-sm rounded-2xl">
          Apply
        </button>
        <input
          type="text"
          className="border-0 p-0 focus:border-0 focus:outline-0"
          placeholder=""
        />
      </div>
      <h5 className="text-base mb-2">Payment Method</h5>

      <div className="flex flex-col bg-white rounded-2xl px-4 mb-3">
        <div className="flex items-center pl-4 border-b">
          <input
            id="bordered-radio-1"
            type="radio"
            value=""
            name="bordered-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor="bordered-radio-1"
            className="flex items-center gap-2 w-full py-4 ml-2 text-sm font-medium text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.66"
              height="18.027"
              viewBox="0 0 24.66 18.027"
            >
              <path
                id="Path_3058"
                data-name="Path 3058"
                d="M15.974.488a29.472,29.472,0,0,0-5.558,1.977c-3.963,1.652-5,1.908-7.776,1.915C.815,4.385.6,4.4.5,4.57c-.08.143.259,1.052,1.491,4,.877,2.1,1.71,4.062,1.851,4.361A2.17,2.17,0,0,0,5.19,14.126a15.4,15.4,0,0,0,4.01.007,28.711,28.711,0,0,0,5.087-1.7c4.622-1.992,6.708-2.5,9.4-2.293,1.194.092,1.346.065,1.426-.258a75.675,75.675,0,0,0-3.735-8.83c-.559-.666-.8-.74-2.585-.784A9.257,9.257,0,0,0,15.974.488ZM11.554,3.567A3.877,3.877,0,0,0,9.261,8.6a4.6,4.6,0,0,0,2.261,2.265,3.782,3.782,0,0,0,2.818-.028,4.313,4.313,0,0,0,1.926-1.924,2.779,2.779,0,0,0,.307-1.578,2.875,2.875,0,0,0-.279-1.55,4.021,4.021,0,0,0-3.436-2.367A3.057,3.057,0,0,0,11.554,3.567Zm0,.927c-.253.137-.27.182-.169.448s.076.334-.166.595a1.334,1.334,0,0,0,.071,2c.236.175.486.228,1.211.257a3.757,3.757,0,0,1,1,.121c.315.3-.493.844-1.25.844-.33,0-.366.029-.365.29a2.567,2.567,0,0,0,.068.54c.061.229.108.245.552.192a3.914,3.914,0,0,0,.657-.125c.125-.049.2.02.283.253.105.3.129.313.434.207.414-.144.446-.206.3-.581-.1-.275-.085-.344.162-.611a1.448,1.448,0,0,0,.372-1.492c-.246-.645-.6-.825-1.69-.868-.736-.029-.962-.074-1.011-.2-.086-.225.328-.539.813-.617.608-.1.667-.165.581-.671l-.075-.446-.4.064a3.933,3.933,0,0,0-.549.121c-.09.035-.2-.047-.27-.21C11.983,4.294,11.941,4.286,11.557,4.494ZM.572,8.5c-.212.212-.245.109.967,2.991.548,1.3,1.3,3.1,1.68,4,.788,1.882,1,2.207,1.679,2.534.436.211.66.239,1.978.246,2.471.014,3.888-.353,8.016-2.073,4.457-1.857,5.03-2,7.933-2.02,1.749-.01,2.157-.041,2.236-.166.114-.182.08-.321-.34-1.392-.254-.646-.375-.831-.577-.882a15.277,15.277,0,0,0-1.857-.013A16.487,16.487,0,0,0,15.525,13.5c-4.5,1.937-6.627,2.489-9.074,2.353-2.138-.119-2.136-.117-3.875-4.278C1.36,8.665,1.2,8.336.982,8.336A.668.668,0,0,0,.572,8.5Z"
                transform="translate(-0.458 -0.251)"
                fill="#f77d0f"
                fillRule="evenodd"
              />
            </svg>
            Payment on arrival
          </label>
        </div>
        <div className="flex items-center pl-4">
          <input
            checked
            id="bordered-radio-2"
            type="radio"
            value=""
            name="bordered-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor="bordered-radio-2"
            className="flex items-center gap-2 w-full py-4 ml-2 text-sm font-medium text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23.625"
              height="16.382"
              viewBox="0 0 23.625 16.382"
            >
              <g
                id="Group_828"
                data-name="Group 828"
                transform="translate(-285.57 -412.591)"
              >
                <rect
                  id="Rectangle_2983"
                  data-name="Rectangle 2983"
                  width="23.625"
                  height="16.382"
                  rx="1.671"
                  transform="translate(285.57 412.591)"
                  fill="#1670a2"
                />
                <g id="Group_75322" data-name="Group 75322">
                  <g id="Group_75317" data-name="Group 75317">
                    <rect
                      id="Rectangle_2976"
                      data-name="Rectangle 2976"
                      width="0.568"
                      height="0.353"
                      transform="translate(303.949 416.115)"
                      fill="#fff"
                    />
                    <rect
                      id="Rectangle_2977"
                      data-name="Rectangle 2977"
                      width="0.568"
                      height="0.353"
                      transform="translate(303.225 416.115)"
                      fill="#fff"
                    />
                    <path
                      id="Path_2577"
                      data-name="Path 2577"
                      d="M295.28,415.453h-.347v-.5h-.7v.5h-5.054l-.062-.132.479-.624v-.446h-.688l-.76.988.433.925h7.4v-1.21h-.7Z"
                      fill="#fff"
                    />
                    <rect
                      id="Rectangle_2978"
                      data-name="Rectangle 2978"
                      width="0.568"
                      height="0.353"
                      transform="translate(295.363 414.306)"
                      fill="#fff"
                    />
                    <rect
                      id="Rectangle_2979"
                      data-name="Rectangle 2979"
                      width="0.568"
                      height="0.353"
                      transform="translate(290.04 414.413)"
                      fill="#fff"
                    />
                    <rect
                      id="Rectangle_2980"
                      data-name="Rectangle 2980"
                      width="0.568"
                      height="0.353"
                      transform="translate(290.776 414.413)"
                      fill="#fff"
                    />
                    <path
                      id="Path_2578"
                      data-name="Path 2578"
                      d="M306.147,414.812H304.08l-.315-.262h2.2l-.229-.4h-2.757l-.044.141.947.789h1.629v.21H303.75l-.6-.5h-1.194v1.055h-1.963v-.433h1.658v-.62H298.97v1.567h3.7v-.832l.417.347h3.1l.434-.445v-.145Z"
                      fill="#fff"
                    />
                    <rect
                      id="Rectangle_2981"
                      data-name="Rectangle 2981"
                      width="1.309"
                      height="0.572"
                      transform="translate(296.67 415.148)"
                      fill="#fff"
                    />
                  </g>
                  <path
                    id="Path_2579"
                    data-name="Path 2579"
                    d="M304.222,422.825l-3.539-2.662,3.477-2.129h-6.228l-3.046,1.866v-1.866h-4.343v4.791h4.343v-2.494l2.788,2.494Z"
                    fill="#f7f719"
                  />
                  <g id="Group_75318" data-name="Group 75318">
                    <path
                      id="Path_2580"
                      data-name="Path 2580"
                      d="M289.965,427.1v-2.374h.622v.281a.855.855,0,0,1,.314-.258.936.936,0,0,1,.4-.087.782.782,0,0,1,.589.2.864.864,0,0,1,.195.615V427.1h-.636v-1.434a.6.6,0,0,0-.086-.365.34.34,0,0,0-.281-.109.476.476,0,0,0-.356.134.5.5,0,0,0-.131.366V427.1Z"
                      fill="#fff"
                    />
                    <path
                      id="Path_2581"
                      data-name="Path 2581"
                      d="M297.824,426.352h.633a1.02,1.02,0,0,1-.387.589,1.173,1.173,0,0,1-.711.213,1.028,1.028,0,0,1-.817-.346,1.378,1.378,0,0,1-.3-.938,1.338,1.338,0,0,1,.3-.919,1.026,1.026,0,0,1,.812-.336,1.076,1.076,0,0,1,.843.33,1.369,1.369,0,0,1,.3.943v.1c0,.022,0,.044-.005.065h-1.586a.669.669,0,0,0,.137.422.441.441,0,0,0,.355.142.5.5,0,0,0,.268-.065A.439.439,0,0,0,297.824,426.352Zm-.926-.716h.935a.544.544,0,0,0-.128-.366.452.452,0,0,0-.342-.126.426.426,0,0,0-.326.127.584.584,0,0,0-.14.365Z"
                      fill="#fff"
                    />
                    <path
                      id="Path_2582"
                      data-name="Path 2582"
                      d="M304.8,427.4l-.209.007c-.081,0-.132.005-.154.005a.7.7,0,0,1-.5-.136.784.784,0,0,1-.135-.538V425.45h-.314v-.445h.314v-.649h.629v.649h.367v.445h-.367v1.315a.143.143,0,0,0,.042.124.321.321,0,0,0,.17.03h.155Z"
                      fill="#fff"
                    />
                  </g>
                </g>
              </g>
            </svg>
            Pay with Knet (Online)
          </label>
        </div>
      </div>

      <div className="flex flex-col bg-white rounded-2xl gap-2 p-4 mb-2">
        <div className="flex items-center">
          <div className="text-sm">Order details</div>
          <div className="bg-primary-soft text-primary py-2 px-4 text-sm rounded-2xl ms-auto">
            {cart.products.length} Product
          </div>
        </div>
        <div className="flex flex-col border-l-0 border-r-0 border py-2">
          <div className="flex items-center">
            <div className="text-sm">Total price</div>
            <div className="ms-auto text-sm">{cart.subtotal} KD</div>
          </div>
          <div className="flex items-center">
            <div className="text-sm">Delivery fee</div>
            <div className="ms-auto text-sm">{cart.shipping_cost} KD</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-md">Total Receipt</div>
          <div className="ms-auto text-md font-semibold">{cart.total} KD</div>
        </div>
      </div>
      {cart.message && (
        <div className="text-danger text-center mb-2">{cart.message}</div>
      )}
      <Button disabled>Pay</Button>
      <div className="text-center">
        <Link
          href={webRoutes.home}
          className="text-primary text-lg text-center flex items-center w-full"
        >
          <div className="ms-auto">{translate(dict, 'back_to_home')}</div>

          <div className="ms-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="24"
              viewBox="0 0 12 24"
            >
              <g
                id="Group_10"
                data-name="Group 10"
                transform="translate(28 73) rotate(180)"
              >
                <rect
                  id="Rectangle_4"
                  data-name="Rectangle 4"
                  width="12"
                  height="24"
                  transform="translate(16 49)"
                  fill="none"
                />
                <g
                  id="Group_9"
                  data-name="Group 9"
                  transform="translate(18.511 53.427)"
                >
                  <path
                    id="Path_333"
                    data-name="Path 333"
                    d="M23.462,53.181l-7.631,7.631,7.631,7.631"
                    transform="translate(-15.831 -53.181)"
                    fill="none"
                    stroke="#f77d0f"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </g>
              </g>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
