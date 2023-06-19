'use client';

import useHttpClient from '@/lib/hooks/useHttpClient';
import { AuthContext } from '@/lib/providers/AuthProvider';
import { getPriceWithCurrency } from '@/module/product/utils';
import { useEffect, useContext } from 'react';

export default function PointsCards() {
  const { translate } = useContext(AuthContext);
  const { sendRequest } = useHttpClient();
  useEffect(() => {
    document.body.classList.add('!bg-primary');
  });

  const convertPoints = (points: number) => {};

  return (
    <>
      <div className="grid grid-cols-2 gap-3 mt-4 bg-primary px-2 py-4 rounded-2xl rounded-b-none">
        <button
          onClick={() => convertPoints(100)}
          className="bg-gradient-to-b from-brown-soft to-brown flex-shrink-0 flex flex-col bg-white w-full rounded-xl p-4 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-5">
            <img src="/assets/logo-light.svg" alt="" />
            <div className="text-xs text-white font-bold">
              {translate('cacsh_back')}
            </div>
          </div>
          <div className="flex items-center justify-between mb-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19.605"
                height="19.678"
                viewBox="0 0 19.605 19.678"
              >
                <g
                  id="Group_449"
                  data-name="Group 449"
                  transform="translate(0.7 0.7)"
                >
                  <path
                    id="Path_402"
                    data-name="Path 402"
                    d="M12.15,16.5v1.919"
                    transform="translate(-2.91 -3.248)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_403"
                    data-name="Path 403"
                    d="M7.15,21.742h9.139v-.914A1.833,1.833,0,0,0,14.461,19H8.978A1.833,1.833,0,0,0,7.15,20.828v.914Z"
                    transform="translate(-2.48 -3.463)"
                    fill="none"
                    stroke="#fff"
                    stroke-miterlimit="10"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_404"
                    data-name="Path 404"
                    d="M6.15,22H17.117"
                    transform="translate(-2.394 -3.722)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_405"
                    data-name="Path 405"
                    d="M11.4,14.795A6.393,6.393,0,0,1,5,8.4V5.656A3.655,3.655,0,0,1,8.656,2h5.483a3.655,3.655,0,0,1,3.656,3.656V8.4A6.393,6.393,0,0,1,11.4,14.795Z"
                    transform="translate(-2.295 -2)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_406"
                    data-name="Path 406"
                    d="M5.175,11.022a4.441,4.441,0,0,1-1.764-1.1A4.875,4.875,0,0,1,2.04,6.635,2.263,2.263,0,0,1,4.325,4.35h.594a3.432,3.432,0,0,0-.274,1.371V8.463A6.441,6.441,0,0,0,5.175,11.022Z"
                    transform="translate(-2.04 -2.202)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_407"
                    data-name="Path 407"
                    d="M18.53,11.022a4.441,4.441,0,0,0,1.764-1.1,4.875,4.875,0,0,0,1.371-3.29A2.263,2.263,0,0,0,19.38,4.35h-.594a3.432,3.432,0,0,1,.274,1.371V8.463A6.441,6.441,0,0,1,18.53,11.022Z"
                    transform="translate(-3.46 -2.202)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                </g>
              </svg>
            </div>
            <div className="text-lg text-white font-bold">
              {getPriceWithCurrency(1, translate('currency'))}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.223"
                height="18.278"
                viewBox="0 0 11.223 18.278"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_122"
                      data-name="Rectangle 122"
                      width="11.223"
                      height="18.278"
                      fill="#fcfcfc"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_789"
                  data-name="Group 789"
                  transform="translate(0 0)"
                >
                  <g
                    id="Group_788"
                    data-name="Group 788"
                    transform="translate(0 0)"
                    clip-path="url(#clip-path)"
                  >
                    <path
                      id="Path_3127"
                      data-name="Path 3127"
                      d="M8.669,18.278a.887.887,0,0,1-.679-1.456A11.971,11.971,0,0,0,7.938,1.464a.884.884,0,0,1,.045-1.2l0,0A.887.887,0,0,1,8.619,0a.875.875,0,0,1,.67.309,13.741,13.741,0,0,1,.073,17.642.9.9,0,0,1-.693.327"
                      transform="translate(-1.308 0)"
                      fill="#fcfcfc"
                    />
                    <path
                      id="Path_3128"
                      data-name="Path 3128"
                      d="M4.833,15.74a.887.887,0,0,1-.71-1.415,7.532,7.532,0,0,0-.047-9.066.89.89,0,0,1,.712-1.427.866.866,0,0,1,.694.34,9.312,9.312,0,0,1,.074,11.2A.893.893,0,0,1,4.833,15.74Z"
                      transform="translate(-0.659 -0.649)"
                      fill="#fcfcfc"
                    />
                    <path
                      id="Path_3129"
                      data-name="Path 3129"
                      d="M.946,13.185a.832.832,0,0,1-.591-.246l-.066-.066a.855.855,0,0,1-.143-1A3.032,3.032,0,0,0,.1,9,.858.858,0,0,1,.258,7.985l.052-.053a.844.844,0,0,1,.6-.248.821.821,0,0,1,.725.419A4.852,4.852,0,0,1,1.7,12.729a.852.852,0,0,1-.754.456"
                      transform="translate(0 -1.301)"
                      fill="#fcfcfc"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="text-white text-xs">100 {translate('points')}</div>
        </button>
        <button
          onClick={() => convertPoints(200)}
          className="bg-gradient-to-b from-brown-soft to-brown flex-shrink-0 flex flex-col bg-white w-full rounded-xl p-4 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-5">
            <img src="/assets/logo-light.svg" alt="" />
            <div className="text-xs text-white font-bold">
              {translate('cacsh_back')}
            </div>
          </div>
          <div className="flex items-center justify-between mb-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19.605"
                height="19.678"
                viewBox="0 0 19.605 19.678"
              >
                <g
                  id="Group_449"
                  data-name="Group 449"
                  transform="translate(0.7 0.7)"
                >
                  <path
                    id="Path_402"
                    data-name="Path 402"
                    d="M12.15,16.5v1.919"
                    transform="translate(-2.91 -3.248)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_403"
                    data-name="Path 403"
                    d="M7.15,21.742h9.139v-.914A1.833,1.833,0,0,0,14.461,19H8.978A1.833,1.833,0,0,0,7.15,20.828v.914Z"
                    transform="translate(-2.48 -3.463)"
                    fill="none"
                    stroke="#fff"
                    stroke-miterlimit="10"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_404"
                    data-name="Path 404"
                    d="M6.15,22H17.117"
                    transform="translate(-2.394 -3.722)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_405"
                    data-name="Path 405"
                    d="M11.4,14.795A6.393,6.393,0,0,1,5,8.4V5.656A3.655,3.655,0,0,1,8.656,2h5.483a3.655,3.655,0,0,1,3.656,3.656V8.4A6.393,6.393,0,0,1,11.4,14.795Z"
                    transform="translate(-2.295 -2)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_406"
                    data-name="Path 406"
                    d="M5.175,11.022a4.441,4.441,0,0,1-1.764-1.1A4.875,4.875,0,0,1,2.04,6.635,2.263,2.263,0,0,1,4.325,4.35h.594a3.432,3.432,0,0,0-.274,1.371V8.463A6.441,6.441,0,0,0,5.175,11.022Z"
                    transform="translate(-2.04 -2.202)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_407"
                    data-name="Path 407"
                    d="M18.53,11.022a4.441,4.441,0,0,0,1.764-1.1,4.875,4.875,0,0,0,1.371-3.29A2.263,2.263,0,0,0,19.38,4.35h-.594a3.432,3.432,0,0,1,.274,1.371V8.463A6.441,6.441,0,0,1,18.53,11.022Z"
                    transform="translate(-3.46 -2.202)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                </g>
              </svg>
            </div>
            <div className="text-lg text-white font-bold">
              {getPriceWithCurrency(4, translate('currency'))}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.223"
                height="18.278"
                viewBox="0 0 11.223 18.278"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_122"
                      data-name="Rectangle 122"
                      width="11.223"
                      height="18.278"
                      fill="#fcfcfc"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_789"
                  data-name="Group 789"
                  transform="translate(0 0)"
                >
                  <g
                    id="Group_788"
                    data-name="Group 788"
                    transform="translate(0 0)"
                    clip-path="url(#clip-path)"
                  >
                    <path
                      id="Path_3127"
                      data-name="Path 3127"
                      d="M8.669,18.278a.887.887,0,0,1-.679-1.456A11.971,11.971,0,0,0,7.938,1.464a.884.884,0,0,1,.045-1.2l0,0A.887.887,0,0,1,8.619,0a.875.875,0,0,1,.67.309,13.741,13.741,0,0,1,.073,17.642.9.9,0,0,1-.693.327"
                      transform="translate(-1.308 0)"
                      fill="#fcfcfc"
                    />
                    <path
                      id="Path_3128"
                      data-name="Path 3128"
                      d="M4.833,15.74a.887.887,0,0,1-.71-1.415,7.532,7.532,0,0,0-.047-9.066.89.89,0,0,1,.712-1.427.866.866,0,0,1,.694.34,9.312,9.312,0,0,1,.074,11.2A.893.893,0,0,1,4.833,15.74Z"
                      transform="translate(-0.659 -0.649)"
                      fill="#fcfcfc"
                    />
                    <path
                      id="Path_3129"
                      data-name="Path 3129"
                      d="M.946,13.185a.832.832,0,0,1-.591-.246l-.066-.066a.855.855,0,0,1-.143-1A3.032,3.032,0,0,0,.1,9,.858.858,0,0,1,.258,7.985l.052-.053a.844.844,0,0,1,.6-.248.821.821,0,0,1,.725.419A4.852,4.852,0,0,1,1.7,12.729a.852.852,0,0,1-.754.456"
                      transform="translate(0 -1.301)"
                      fill="#fcfcfc"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="text-white text-xs">200 {translate('points')}</div>
        </button>
        <button
          onClick={() => convertPoints(300)}
          className="bg-gradient-to-b from-gray-soft to-gray flex-shrink-0 flex flex-col bg-white w-full rounded-xl p-4 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-5">
            <img src="/assets/logo-light.svg" alt="" />
            <div className="text-xs text-white font-bold">
              {translate('cacsh_back')}
            </div>
          </div>
          <div className="flex items-center justify-between mb-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19.605"
                height="19.678"
                viewBox="0 0 19.605 19.678"
              >
                <g
                  id="Group_449"
                  data-name="Group 449"
                  transform="translate(0.7 0.7)"
                >
                  <path
                    id="Path_402"
                    data-name="Path 402"
                    d="M12.15,16.5v1.919"
                    transform="translate(-2.91 -3.248)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_403"
                    data-name="Path 403"
                    d="M7.15,21.742h9.139v-.914A1.833,1.833,0,0,0,14.461,19H8.978A1.833,1.833,0,0,0,7.15,20.828v.914Z"
                    transform="translate(-2.48 -3.463)"
                    fill="none"
                    stroke="#fff"
                    stroke-miterlimit="10"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_404"
                    data-name="Path 404"
                    d="M6.15,22H17.117"
                    transform="translate(-2.394 -3.722)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_405"
                    data-name="Path 405"
                    d="M11.4,14.795A6.393,6.393,0,0,1,5,8.4V5.656A3.655,3.655,0,0,1,8.656,2h5.483a3.655,3.655,0,0,1,3.656,3.656V8.4A6.393,6.393,0,0,1,11.4,14.795Z"
                    transform="translate(-2.295 -2)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_406"
                    data-name="Path 406"
                    d="M5.175,11.022a4.441,4.441,0,0,1-1.764-1.1A4.875,4.875,0,0,1,2.04,6.635,2.263,2.263,0,0,1,4.325,4.35h.594a3.432,3.432,0,0,0-.274,1.371V8.463A6.441,6.441,0,0,0,5.175,11.022Z"
                    transform="translate(-2.04 -2.202)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_407"
                    data-name="Path 407"
                    d="M18.53,11.022a4.441,4.441,0,0,0,1.764-1.1,4.875,4.875,0,0,0,1.371-3.29A2.263,2.263,0,0,0,19.38,4.35h-.594a3.432,3.432,0,0,1,.274,1.371V8.463A6.441,6.441,0,0,1,18.53,11.022Z"
                    transform="translate(-3.46 -2.202)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                </g>
              </svg>
            </div>
            <div className="text-lg text-white font-bold">
              {getPriceWithCurrency(8, translate('currency'))}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.223"
                height="18.278"
                viewBox="0 0 11.223 18.278"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_122"
                      data-name="Rectangle 122"
                      width="11.223"
                      height="18.278"
                      fill="#fcfcfc"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_789"
                  data-name="Group 789"
                  transform="translate(0 0)"
                >
                  <g
                    id="Group_788"
                    data-name="Group 788"
                    transform="translate(0 0)"
                    clip-path="url(#clip-path)"
                  >
                    <path
                      id="Path_3127"
                      data-name="Path 3127"
                      d="M8.669,18.278a.887.887,0,0,1-.679-1.456A11.971,11.971,0,0,0,7.938,1.464a.884.884,0,0,1,.045-1.2l0,0A.887.887,0,0,1,8.619,0a.875.875,0,0,1,.67.309,13.741,13.741,0,0,1,.073,17.642.9.9,0,0,1-.693.327"
                      transform="translate(-1.308 0)"
                      fill="#fcfcfc"
                    />
                    <path
                      id="Path_3128"
                      data-name="Path 3128"
                      d="M4.833,15.74a.887.887,0,0,1-.71-1.415,7.532,7.532,0,0,0-.047-9.066.89.89,0,0,1,.712-1.427.866.866,0,0,1,.694.34,9.312,9.312,0,0,1,.074,11.2A.893.893,0,0,1,4.833,15.74Z"
                      transform="translate(-0.659 -0.649)"
                      fill="#fcfcfc"
                    />
                    <path
                      id="Path_3129"
                      data-name="Path 3129"
                      d="M.946,13.185a.832.832,0,0,1-.591-.246l-.066-.066a.855.855,0,0,1-.143-1A3.032,3.032,0,0,0,.1,9,.858.858,0,0,1,.258,7.985l.052-.053a.844.844,0,0,1,.6-.248.821.821,0,0,1,.725.419A4.852,4.852,0,0,1,1.7,12.729a.852.852,0,0,1-.754.456"
                      transform="translate(0 -1.301)"
                      fill="#fcfcfc"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="text-white text-xs">300 {translate('points')}</div>
        </button>
        <button
          onClick={() => convertPoints(400)}
          className="bg-gradient-to-b from-gray-soft to-gray flex-shrink-0 flex flex-col bg-white w-full rounded-xl p-4 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-5">
            <img src="/assets/logo-light.svg" alt="" />
            <div className="text-xs text-white font-bold">
              {translate('cacsh_back')}
            </div>
          </div>
          <div className="flex items-center justify-between mb-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19.605"
                height="19.678"
                viewBox="0 0 19.605 19.678"
              >
                <g
                  id="Group_449"
                  data-name="Group 449"
                  transform="translate(0.7 0.7)"
                >
                  <path
                    id="Path_402"
                    data-name="Path 402"
                    d="M12.15,16.5v1.919"
                    transform="translate(-2.91 -3.248)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_403"
                    data-name="Path 403"
                    d="M7.15,21.742h9.139v-.914A1.833,1.833,0,0,0,14.461,19H8.978A1.833,1.833,0,0,0,7.15,20.828v.914Z"
                    transform="translate(-2.48 -3.463)"
                    fill="none"
                    stroke="#fff"
                    stroke-miterlimit="10"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_404"
                    data-name="Path 404"
                    d="M6.15,22H17.117"
                    transform="translate(-2.394 -3.722)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_405"
                    data-name="Path 405"
                    d="M11.4,14.795A6.393,6.393,0,0,1,5,8.4V5.656A3.655,3.655,0,0,1,8.656,2h5.483a3.655,3.655,0,0,1,3.656,3.656V8.4A6.393,6.393,0,0,1,11.4,14.795Z"
                    transform="translate(-2.295 -2)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_406"
                    data-name="Path 406"
                    d="M5.175,11.022a4.441,4.441,0,0,1-1.764-1.1A4.875,4.875,0,0,1,2.04,6.635,2.263,2.263,0,0,1,4.325,4.35h.594a3.432,3.432,0,0,0-.274,1.371V8.463A6.441,6.441,0,0,0,5.175,11.022Z"
                    transform="translate(-2.04 -2.202)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_407"
                    data-name="Path 407"
                    d="M18.53,11.022a4.441,4.441,0,0,0,1.764-1.1,4.875,4.875,0,0,0,1.371-3.29A2.263,2.263,0,0,0,19.38,4.35h-.594a3.432,3.432,0,0,1,.274,1.371V8.463A6.441,6.441,0,0,1,18.53,11.022Z"
                    transform="translate(-3.46 -2.202)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                </g>
              </svg>
            </div>
            <div className="text-lg text-white font-bold">
              {getPriceWithCurrency(12, translate('currency'))}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.223"
                height="18.278"
                viewBox="0 0 11.223 18.278"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_122"
                      data-name="Rectangle 122"
                      width="11.223"
                      height="18.278"
                      fill="#fcfcfc"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_789"
                  data-name="Group 789"
                  transform="translate(0 0)"
                >
                  <g
                    id="Group_788"
                    data-name="Group 788"
                    transform="translate(0 0)"
                    clip-path="url(#clip-path)"
                  >
                    <path
                      id="Path_3127"
                      data-name="Path 3127"
                      d="M8.669,18.278a.887.887,0,0,1-.679-1.456A11.971,11.971,0,0,0,7.938,1.464a.884.884,0,0,1,.045-1.2l0,0A.887.887,0,0,1,8.619,0a.875.875,0,0,1,.67.309,13.741,13.741,0,0,1,.073,17.642.9.9,0,0,1-.693.327"
                      transform="translate(-1.308 0)"
                      fill="#fcfcfc"
                    />
                    <path
                      id="Path_3128"
                      data-name="Path 3128"
                      d="M4.833,15.74a.887.887,0,0,1-.71-1.415,7.532,7.532,0,0,0-.047-9.066.89.89,0,0,1,.712-1.427.866.866,0,0,1,.694.34,9.312,9.312,0,0,1,.074,11.2A.893.893,0,0,1,4.833,15.74Z"
                      transform="translate(-0.659 -0.649)"
                      fill="#fcfcfc"
                    />
                    <path
                      id="Path_3129"
                      data-name="Path 3129"
                      d="M.946,13.185a.832.832,0,0,1-.591-.246l-.066-.066a.855.855,0,0,1-.143-1A3.032,3.032,0,0,0,.1,9,.858.858,0,0,1,.258,7.985l.052-.053a.844.844,0,0,1,.6-.248.821.821,0,0,1,.725.419A4.852,4.852,0,0,1,1.7,12.729a.852.852,0,0,1-.754.456"
                      transform="translate(0 -1.301)"
                      fill="#fcfcfc"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="text-white text-xs">400 {translate('points')}</div>
        </button>
        <button
          onClick={() => convertPoints(500)}
          className="bg-gradient-to-b from-yellow-soft to-yellow flex-shrink-0 flex flex-col bg-white w-full rounded-xl p-4 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-5">
            <img src="/assets/logo-light.svg" alt="" />
            <div className="text-xs text-white font-bold">
              {translate('cacsh_back')}
            </div>
          </div>
          <div className="flex items-center justify-between mb-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19.605"
                height="19.678"
                viewBox="0 0 19.605 19.678"
              >
                <g
                  id="Group_449"
                  data-name="Group 449"
                  transform="translate(0.7 0.7)"
                >
                  <path
                    id="Path_402"
                    data-name="Path 402"
                    d="M12.15,16.5v1.919"
                    transform="translate(-2.91 -3.248)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_403"
                    data-name="Path 403"
                    d="M7.15,21.742h9.139v-.914A1.833,1.833,0,0,0,14.461,19H8.978A1.833,1.833,0,0,0,7.15,20.828v.914Z"
                    transform="translate(-2.48 -3.463)"
                    fill="none"
                    stroke="#fff"
                    stroke-miterlimit="10"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_404"
                    data-name="Path 404"
                    d="M6.15,22H17.117"
                    transform="translate(-2.394 -3.722)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_405"
                    data-name="Path 405"
                    d="M11.4,14.795A6.393,6.393,0,0,1,5,8.4V5.656A3.655,3.655,0,0,1,8.656,2h5.483a3.655,3.655,0,0,1,3.656,3.656V8.4A6.393,6.393,0,0,1,11.4,14.795Z"
                    transform="translate(-2.295 -2)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_406"
                    data-name="Path 406"
                    d="M5.175,11.022a4.441,4.441,0,0,1-1.764-1.1A4.875,4.875,0,0,1,2.04,6.635,2.263,2.263,0,0,1,4.325,4.35h.594a3.432,3.432,0,0,0-.274,1.371V8.463A6.441,6.441,0,0,0,5.175,11.022Z"
                    transform="translate(-2.04 -2.202)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_407"
                    data-name="Path 407"
                    d="M18.53,11.022a4.441,4.441,0,0,0,1.764-1.1,4.875,4.875,0,0,0,1.371-3.29A2.263,2.263,0,0,0,19.38,4.35h-.594a3.432,3.432,0,0,1,.274,1.371V8.463A6.441,6.441,0,0,1,18.53,11.022Z"
                    transform="translate(-3.46 -2.202)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                </g>
              </svg>
            </div>
            <div className="text-lg text-white font-bold">
              {getPriceWithCurrency(20, translate('currency'))}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.223"
                height="18.278"
                viewBox="0 0 11.223 18.278"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_122"
                      data-name="Rectangle 122"
                      width="11.223"
                      height="18.278"
                      fill="#fcfcfc"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_789"
                  data-name="Group 789"
                  transform="translate(0 0)"
                >
                  <g
                    id="Group_788"
                    data-name="Group 788"
                    transform="translate(0 0)"
                    clip-path="url(#clip-path)"
                  >
                    <path
                      id="Path_3127"
                      data-name="Path 3127"
                      d="M8.669,18.278a.887.887,0,0,1-.679-1.456A11.971,11.971,0,0,0,7.938,1.464a.884.884,0,0,1,.045-1.2l0,0A.887.887,0,0,1,8.619,0a.875.875,0,0,1,.67.309,13.741,13.741,0,0,1,.073,17.642.9.9,0,0,1-.693.327"
                      transform="translate(-1.308 0)"
                      fill="#fcfcfc"
                    />
                    <path
                      id="Path_3128"
                      data-name="Path 3128"
                      d="M4.833,15.74a.887.887,0,0,1-.71-1.415,7.532,7.532,0,0,0-.047-9.066.89.89,0,0,1,.712-1.427.866.866,0,0,1,.694.34,9.312,9.312,0,0,1,.074,11.2A.893.893,0,0,1,4.833,15.74Z"
                      transform="translate(-0.659 -0.649)"
                      fill="#fcfcfc"
                    />
                    <path
                      id="Path_3129"
                      data-name="Path 3129"
                      d="M.946,13.185a.832.832,0,0,1-.591-.246l-.066-.066a.855.855,0,0,1-.143-1A3.032,3.032,0,0,0,.1,9,.858.858,0,0,1,.258,7.985l.052-.053a.844.844,0,0,1,.6-.248.821.821,0,0,1,.725.419A4.852,4.852,0,0,1,1.7,12.729a.852.852,0,0,1-.754.456"
                      transform="translate(0 -1.301)"
                      fill="#fcfcfc"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="text-white text-xs">500 {translate('points')}</div>
        </button>
        <button
          onClick={() => convertPoints(800)}
          className="bg-gradient-to-b from-yellow-soft to-yellow flex-shrink-0 flex flex-col bg-white w-full rounded-xl p-4 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-5">
            <img src="/assets/logo-light.svg" alt="" />
            <div className="text-xs text-white font-bold">
              {translate('cacsh_back')}
            </div>
          </div>
          <div className="flex items-center justify-between mb-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19.605"
                height="19.678"
                viewBox="0 0 19.605 19.678"
              >
                <g
                  id="Group_449"
                  data-name="Group 449"
                  transform="translate(0.7 0.7)"
                >
                  <path
                    id="Path_402"
                    data-name="Path 402"
                    d="M12.15,16.5v1.919"
                    transform="translate(-2.91 -3.248)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_403"
                    data-name="Path 403"
                    d="M7.15,21.742h9.139v-.914A1.833,1.833,0,0,0,14.461,19H8.978A1.833,1.833,0,0,0,7.15,20.828v.914Z"
                    transform="translate(-2.48 -3.463)"
                    fill="none"
                    stroke="#fff"
                    stroke-miterlimit="10"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_404"
                    data-name="Path 404"
                    d="M6.15,22H17.117"
                    transform="translate(-2.394 -3.722)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_405"
                    data-name="Path 405"
                    d="M11.4,14.795A6.393,6.393,0,0,1,5,8.4V5.656A3.655,3.655,0,0,1,8.656,2h5.483a3.655,3.655,0,0,1,3.656,3.656V8.4A6.393,6.393,0,0,1,11.4,14.795Z"
                    transform="translate(-2.295 -2)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_406"
                    data-name="Path 406"
                    d="M5.175,11.022a4.441,4.441,0,0,1-1.764-1.1A4.875,4.875,0,0,1,2.04,6.635,2.263,2.263,0,0,1,4.325,4.35h.594a3.432,3.432,0,0,0-.274,1.371V8.463A6.441,6.441,0,0,0,5.175,11.022Z"
                    transform="translate(-2.04 -2.202)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_407"
                    data-name="Path 407"
                    d="M18.53,11.022a4.441,4.441,0,0,0,1.764-1.1,4.875,4.875,0,0,0,1.371-3.29A2.263,2.263,0,0,0,19.38,4.35h-.594a3.432,3.432,0,0,1,.274,1.371V8.463A6.441,6.441,0,0,1,18.53,11.022Z"
                    transform="translate(-3.46 -2.202)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                </g>
              </svg>
            </div>
            <div className="text-lg text-white font-bold">
              {getPriceWithCurrency(40, translate('currency'))}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.223"
                height="18.278"
                viewBox="0 0 11.223 18.278"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_122"
                      data-name="Rectangle 122"
                      width="11.223"
                      height="18.278"
                      fill="#fcfcfc"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_789"
                  data-name="Group 789"
                  transform="translate(0 0)"
                >
                  <g
                    id="Group_788"
                    data-name="Group 788"
                    transform="translate(0 0)"
                    clip-path="url(#clip-path)"
                  >
                    <path
                      id="Path_3127"
                      data-name="Path 3127"
                      d="M8.669,18.278a.887.887,0,0,1-.679-1.456A11.971,11.971,0,0,0,7.938,1.464a.884.884,0,0,1,.045-1.2l0,0A.887.887,0,0,1,8.619,0a.875.875,0,0,1,.67.309,13.741,13.741,0,0,1,.073,17.642.9.9,0,0,1-.693.327"
                      transform="translate(-1.308 0)"
                      fill="#fcfcfc"
                    />
                    <path
                      id="Path_3128"
                      data-name="Path 3128"
                      d="M4.833,15.74a.887.887,0,0,1-.71-1.415,7.532,7.532,0,0,0-.047-9.066.89.89,0,0,1,.712-1.427.866.866,0,0,1,.694.34,9.312,9.312,0,0,1,.074,11.2A.893.893,0,0,1,4.833,15.74Z"
                      transform="translate(-0.659 -0.649)"
                      fill="#fcfcfc"
                    />
                    <path
                      id="Path_3129"
                      data-name="Path 3129"
                      d="M.946,13.185a.832.832,0,0,1-.591-.246l-.066-.066a.855.855,0,0,1-.143-1A3.032,3.032,0,0,0,.1,9,.858.858,0,0,1,.258,7.985l.052-.053a.844.844,0,0,1,.6-.248.821.821,0,0,1,.725.419A4.852,4.852,0,0,1,1.7,12.729a.852.852,0,0,1-.754.456"
                      transform="translate(0 -1.301)"
                      fill="#fcfcfc"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="text-white text-xs">800 {translate('points')}</div>
        </button>
        <button
          onClick={() => convertPoints(1000)}
          className="col-span-2 max-h-56 h-56 justify-between bg-gradient-to-b from-yellow-soft to-yellow flex-shrink-0 flex flex-col bg-white w-full rounded-xl p-4 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-5">
            <img src="/assets/logo-light.svg" alt="" />
            <div className="text-xs text-white font-bold">
              {translate('cacsh_back')}
            </div>
          </div>
          <div className="flex items-center justify-between mb-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19.605"
                height="19.678"
                viewBox="0 0 19.605 19.678"
              >
                <g
                  id="Group_449"
                  data-name="Group 449"
                  transform="translate(0.7 0.7)"
                >
                  <path
                    id="Path_402"
                    data-name="Path 402"
                    d="M12.15,16.5v1.919"
                    transform="translate(-2.91 -3.248)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_403"
                    data-name="Path 403"
                    d="M7.15,21.742h9.139v-.914A1.833,1.833,0,0,0,14.461,19H8.978A1.833,1.833,0,0,0,7.15,20.828v.914Z"
                    transform="translate(-2.48 -3.463)"
                    fill="none"
                    stroke="#fff"
                    stroke-miterlimit="10"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_404"
                    data-name="Path 404"
                    d="M6.15,22H17.117"
                    transform="translate(-2.394 -3.722)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_405"
                    data-name="Path 405"
                    d="M11.4,14.795A6.393,6.393,0,0,1,5,8.4V5.656A3.655,3.655,0,0,1,8.656,2h5.483a3.655,3.655,0,0,1,3.656,3.656V8.4A6.393,6.393,0,0,1,11.4,14.795Z"
                    transform="translate(-2.295 -2)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_406"
                    data-name="Path 406"
                    d="M5.175,11.022a4.441,4.441,0,0,1-1.764-1.1A4.875,4.875,0,0,1,2.04,6.635,2.263,2.263,0,0,1,4.325,4.35h.594a3.432,3.432,0,0,0-.274,1.371V8.463A6.441,6.441,0,0,0,5.175,11.022Z"
                    transform="translate(-2.04 -2.202)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                  <path
                    id="Path_407"
                    data-name="Path 407"
                    d="M18.53,11.022a4.441,4.441,0,0,0,1.764-1.1,4.875,4.875,0,0,0,1.371-3.29A2.263,2.263,0,0,0,19.38,4.35h-.594a3.432,3.432,0,0,1,.274,1.371V8.463A6.441,6.441,0,0,1,18.53,11.022Z"
                    transform="translate(-3.46 -2.202)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                  />
                </g>
              </svg>
            </div>
            <div className="text-lg text-white font-bold">
              {getPriceWithCurrency(80, translate('currency'))}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.223"
                height="18.278"
                viewBox="0 0 11.223 18.278"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_122"
                      data-name="Rectangle 122"
                      width="11.223"
                      height="18.278"
                      fill="#fcfcfc"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_789"
                  data-name="Group 789"
                  transform="translate(0 0)"
                >
                  <g
                    id="Group_788"
                    data-name="Group 788"
                    transform="translate(0 0)"
                    clip-path="url(#clip-path)"
                  >
                    <path
                      id="Path_3127"
                      data-name="Path 3127"
                      d="M8.669,18.278a.887.887,0,0,1-.679-1.456A11.971,11.971,0,0,0,7.938,1.464a.884.884,0,0,1,.045-1.2l0,0A.887.887,0,0,1,8.619,0a.875.875,0,0,1,.67.309,13.741,13.741,0,0,1,.073,17.642.9.9,0,0,1-.693.327"
                      transform="translate(-1.308 0)"
                      fill="#fcfcfc"
                    />
                    <path
                      id="Path_3128"
                      data-name="Path 3128"
                      d="M4.833,15.74a.887.887,0,0,1-.71-1.415,7.532,7.532,0,0,0-.047-9.066.89.89,0,0,1,.712-1.427.866.866,0,0,1,.694.34,9.312,9.312,0,0,1,.074,11.2A.893.893,0,0,1,4.833,15.74Z"
                      transform="translate(-0.659 -0.649)"
                      fill="#fcfcfc"
                    />
                    <path
                      id="Path_3129"
                      data-name="Path 3129"
                      d="M.946,13.185a.832.832,0,0,1-.591-.246l-.066-.066a.855.855,0,0,1-.143-1A3.032,3.032,0,0,0,.1,9,.858.858,0,0,1,.258,7.985l.052-.053a.844.844,0,0,1,.6-.248.821.821,0,0,1,.725.419A4.852,4.852,0,0,1,1.7,12.729a.852.852,0,0,1-.754.456"
                      transform="translate(0 -1.301)"
                      fill="#fcfcfc"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="text-white text-xs">1000 {translate('points')}</div>
        </button>
      </div>
    </>
  );
}
