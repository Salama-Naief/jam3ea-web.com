interface IconProps {
  className?: string;
  color?: string;
}

export const MenuIcon = ({ className = '' }: IconProps) => {
  return <img src="/assets/bars-icon.svg" alt="" className={className} />;
};

export const SearchIcon = ({ className = '' }: IconProps) => {
  return <img src="/assets/search-icon.svg" alt="" className={className} />;
};

export const CategoriesIcon = ({ className = '' }: IconProps) => {
  return <img src="/assets/categories-icon.svg" alt="" className={className} />;
};

export const HomeIcon = ({ className = '' }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17.77"
      height="18.472"
      viewBox="0 0 17.77 18.472"
      className={className}
    >
      <g id="Group_93" data-name="Group 93" transform="translate(0.75 0.75)">
        <path
          id="Path_201"
          data-name="Path 201"
          d="M7.679,15.135h0Z"
          transform="translate(-2.011 -3.14)"
          fill="none"
        />
        <path
          id="Path_203"
          data-name="Path 203"
          d="M1,10.94c0-4.779.521-4.445,3.326-7.046C5.553,2.906,7.462,1,9.111,1s3.6,1.9,4.834,2.894c2.8,2.6,3.325,2.267,3.325,7.046,0,7.032-1.662,7.032-8.135,7.032S1,17.972,1,10.94Z"
          transform="translate(-1 -1)"
          fill="none"
          stroke="#f77d0f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          fillRule="evenodd"
        />
        <path
          id="Path_202"
          data-name="Path 202"
          d="M7.679,15.135h4.935"
          transform="translate(-2.011 -3.14)"
          fill="none"
          stroke="#f77d0f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
};

export const WhishListIcon = ({ className = '' }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20.541"
      height="18.561"
      viewBox="0 0 20.541 18.561"
      className={className}
    >
      <g
        id="Group_773"
        data-name="Group 773"
        transform="translate(0.772 0.839)"
      >
        <path
          id="Path_335"
          data-name="Path 335"
          d="M1.372,9.9c-1.073-3.35.182-7.515,3.7-8.647a4.869,4.869,0,0,1,5.43,1.69,4.73,4.73,0,0,1,5.42-1.69c3.516,1.132,4.778,5.3,3.706,8.647-1.67,5.31-7.5,8.076-9.126,8.076S3.1,15.268,1.372,9.9Z"
          transform="translate(-1 -1)"
          fill="none"
          stroke="#f77d0f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          fillRule="evenodd"
        />
        <path
          id="Path_336"
          data-name="Path 336"
          d="M14.238,5.014a2.154,2.154,0,0,1,1.917,2.422"
          transform="translate(-1 -1)"
          fill="none"
          stroke="#f77d0f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
};

export const CartIcon = ({ className = '' }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <g id="cart" transform="translate(609 -3323)">
        <g
          id="Group_669"
          data-name="Group 669"
          transform="translate(-607.024 3326.938)"
        >
          <g
            id="Group_108"
            data-name="Group 108"
            transform="translate(0.5 -1.158)"
          >
            <path
              id="Path_210"
              data-name="Path 210"
              d="M16.1,19.582H3.945a2.462,2.462,0,0,1-2.4-1.876L-.177,10.721a2.468,2.468,0,0,1,2.4-3.06H17.831a2.468,2.468,0,0,1,2.4,3.06L18.5,17.707A2.462,2.462,0,0,1,16.1,19.582ZM2.219,9.161a.968.968,0,0,0-.94,1.2l1.727,6.986a.965.965,0,0,0,.939.735H16.1a.965.965,0,0,0,.939-.735l1.727-6.986a.968.968,0,0,0-.939-1.2Z"
              transform="translate(-0.5 -0.857)"
              fill="#f77d0f"
            />
            <path
              id="Path_211"
              data-name="Path 211"
              d="M16.479,4.934a.75.75,0,0,1-.75-.75,2.934,2.934,0,0,0-5.868,0,.75.75,0,0,1-1.5,0,4.434,4.434,0,0,1,8.868,0A.75.75,0,0,1,16.479,4.934Z"
              transform="translate(-3.271 -0.5)"
              fill="#f77d0f"
            />
          </g>
        </g>
        <rect
          id="Rectangle_107"
          data-name="Rectangle 107"
          width="24"
          height="24"
          transform="translate(-609 3323)"
          fill="none"
        />
      </g>
    </svg>
  );
};

export const BrandIcon = ({ className = '' }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19.971"
      height="19.953"
      viewBox="0 0 19.971 19.953"
      className={className}
    >
      <g
        id="Group_775"
        data-name="Group 775"
        transform="translate(-2.014 -2.022)"
      >
        <path
          id="Path_3059"
          data-name="Path 3059"
          d="M4.17,15.3,8.7,19.83a4.78,4.78,0,0,0,6.75,0l4.39-4.39a4.78,4.78,0,0,0,0-6.75L15.3,4.17a4.751,4.751,0,0,0-3.6-1.39l-5,.24A3.864,3.864,0,0,0,3.01,6.69l-.24,5A4.8,4.8,0,0,0,4.17,15.3Z"
          fill="none"
          stroke="#f77d0f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          id="Path_3060"
          data-name="Path 3060"
          d="M9.5,12A2.5,2.5,0,1,0,7,9.5,2.5,2.5,0,0,0,9.5,12Z"
          fill="none"
          stroke="#f77d0f"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
};

export const AccountIcon = ({ className = '' }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20.557"
      height="21.978"
      viewBox="0 0 20.557 21.978"
      className={className}
    >
      <g id="Group_774" data-name="Group 774" transform="translate(1.006 0.75)">
        <path
          id="Path_204"
          data-name="Path 204"
          d="M12.371,12.741A5.371,5.371,0,1,0,7,7.371,5.371,5.371,0,0,0,12.371,12.741Z"
          transform="translate(-3.098 -2)"
          fill="none"
          stroke="#f77d0f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          id="Path_206"
          data-name="Path 206"
          d="M14.238,5.014a1.67,1.67,0,0,1,1.486,1.878"
          transform="translate(-3.973 -2.001)"
          fill="none"
          stroke="#f77d0f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          id="Path_337"
          data-name="Path 337"
          d="M2,7.73a10.367,10.367,0,0,1,18.545,0"
          transform="translate(-2 12.492)"
          fill="none"
          stroke="#f77d0f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
};

export const AddressIcon = ({ className = '' }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <g id="address" transform="translate(609 -3323)">
        <rect
          id="Rectangle_107"
          data-name="Rectangle 107"
          width="24"
          height="24"
          transform="translate(-609 3323)"
          fill="none"
        />
        <path
          id="Subtraction_1"
          data-name="Subtraction 1"
          d="M9-27.918c-1.485,0-4.044-2.534-5.783-4.7-1.193-1.488-3.967-5.3-3.967-8.55A9.676,9.676,0,0,1,9-50.75a9.676,9.676,0,0,1,9.75,9.578,10.306,10.306,0,0,1-1.168,4.335,23.3,23.3,0,0,1-2.661,4.209C13.217-30.456,10.644-27.918,9-27.918ZM9-49.25A8.175,8.175,0,0,0,.75-41.173c0,2.853,2.784,6.547,3.637,7.612a23.218,23.218,0,0,0,2.884,3.038A4.426,4.426,0,0,0,9-29.418,4.094,4.094,0,0,0,10.838-30.5a20.633,20.633,0,0,0,2.9-3.059,21.787,21.787,0,0,0,2.488-3.931,8.865,8.865,0,0,0,1.021-3.687A8.175,8.175,0,0,0,9-49.25ZM9-37.112a4.1,4.1,0,0,1-4.125-4.061A4.1,4.1,0,0,1,9-45.233a4.1,4.1,0,0,1,4.125,4.06A4.1,4.1,0,0,1,9-37.112Zm0-6.621a2.6,2.6,0,0,0-2.625,2.56A2.6,2.6,0,0,0,9-38.612a2.6,2.6,0,0,0,2.625-2.561A2.6,2.6,0,0,0,9-43.733Z"
          transform="translate(-606 3374.334)"
          fill="#f77d0f"
        />
      </g>
    </svg>
  );
};

export const BackIcon = ({ className = '' }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <g id="Group_10" data-name="Group 10" transform="translate(-16 -49)">
        <rect
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="24"
          height="24"
          transform="translate(16 49)"
          fill="none"
        />
        <g id="Group_9" data-name="Group 9" transform="translate(2.68 1.158)">
          <line
            id="Line_2"
            data-name="Line 2"
            x2="18.174"
            transform="translate(16.5 59.897)"
            fill="none"
            stroke="#1d1a1b"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <path
            id="Path_333"
            data-name="Path 333"
            d="M23.462,53.181l-7.631,7.631,7.631,7.631"
            transform="translate(0 -0.911)"
            fill="none"
            stroke="#1d1a1b"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </g>
    </svg>
  );
};

export const ForwardIcon = ({ className = '' }: IconProps) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={className}
        style={{ transform: 'rotate(180deg)' }}
      >
        <g id="Group_10" data-name="Group 10" transform="translate(-16 -49)">
          <rect
            id="Rectangle_4"
            data-name="Rectangle 4"
            width="24"
            height="24"
            transform="translate(16 49)"
            fill="none"
          />
          <g id="Group_9" data-name="Group 9" transform="translate(2.68 1.158)">
            <line
              id="Line_2"
              data-name="Line 2"
              x2="18.174"
              transform="translate(16.5 59.897)"
              fill="none"
              stroke="#1d1a1b"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <path
              id="Path_333"
              data-name="Path 333"
              d="M23.462,53.181l-7.631,7.631,7.631,7.631"
              transform="translate(0 -0.911)"
              fill="none"
              stroke="#1d1a1b"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </g>
      </svg>
    );
  };

export const LoadingIcon = ({ className = '' }: IconProps) => {
  return (
    <svg
      aria-hidden="true"
      role="status"
      className={`inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 ${className}`}
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="#ffffff"
      />
    </svg>
  );
};

export const ChevronRight = ({
  className = '',
  color = '#707070',
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="24"
      viewBox="0 0 12 24"
      className={className}
    >
      <g
        id="Group_10"
        data-name="Group 10"
        transform="translate(-16 -49)"
        opacity="0.638"
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
            d="M7.631,0,0,7.631l7.631,7.631"
            transform="translate(7.631 15.262) rotate(180)"
            fill="none"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </g>
      </g>
    </svg>
  );
};

export const EmptyWishlistIcon = ({ className = '' }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="103.013"
      height="92.192"
      viewBox="0 0 103.013 92.192"
    >
      <g id="Group_300" data-name="Group 300" transform="translate(1.613 1.54)">
        <path
          id="Path_335"
          data-name="Path 335"
          d="M2.953,47.73c-5.636-17.6.956-39.475,19.43-45.421,9.718-3.136,21.71-.52,28.523,8.877C57.329,1.442,69.668-.806,79.375,2.309c18.469,5.946,25.1,27.824,19.467,45.421C90.07,75.622,59.462,90.152,50.905,90.152S12.019,75.948,2.953,47.73Z"
          transform="translate(-1 -1)"
          fill="none"
          stroke="#bfbfbf"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          fill-rule="evenodd"
        />
        <path
          id="Path_336"
          data-name="Path 336"
          d="M14.238,5.014c6.34.651,10.306,5.678,10.07,12.722"
          transform="translate(55.298 16.071)"
          fill="none"
          stroke="#bfbfbf"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
      </g>
    </svg>
  );
};

export const KnetIcon = ({ className = '' }: IconProps) => {
  return (
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
  );
};

export const CODIcon = ({ className = '' }: IconProps) => {
  return (
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
  );
};

export const TimePickerIcon = ({ className = '' }: IconProps) => {
  return (
    <svg
      id="Group_539"
      data-name="Group 539"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g
        id="Ellipse_34"
        data-name="Ellipse 34"
        fill="#fff"
        stroke="#f77d0f"
        stroke-width="2"
      >
        <circle cx="12" cy="12" r="12" stroke="none" />
        <circle cx="12" cy="12" r="11" fill="none" />
      </g>
      <path
        id="Path_3022"
        data-name="Path 3022"
        d="M51,159.849v5.832l2.717,2.717"
        transform="translate(-39 -153)"
        fill="none"
        stroke="#f77d0f"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  );
};

export const LogoutIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.76"
      height="18.76"
      viewBox="0 0 18.76 18.76"
    >
      <g
        id="Group_398"
        data-name="Group 398"
        transform="translate(-16.25 -754.12)"
      >
        <g
          id="Group_397"
          data-name="Group 397"
          transform="translate(17 754.87)"
        >
          <path
            id="Path_393"
            data-name="Path 393"
            d="M10.63,2A8.63,8.63,0,1,1,2,10.63"
            transform="translate(-2 -2)"
            fill="none"
            stroke="#f77d0f"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="1.5"
          />
          <path
            id="Path_394"
            data-name="Path 394"
            d="M20.077,9.877,13,2.8"
            transform="translate(-12.31 -2.11)"
            fill="none"
            stroke="#f77d0f"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <path
            id="Path_395"
            data-name="Path 395"
            d="M17.17,6.168V2h4.168"
            transform="translate(-17.17 -2)"
            fill="none"
            stroke="#f77d0f"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
        </g>
      </g>
    </svg>
  );
};

export const ContactIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19.5"
    height="19.5"
    viewBox="0 0 19.5 19.5"
  >
    <g
      id="Group_401"
      data-name="Group 401"
      transform="translate(-16.25 -385.25)"
    >
      <g id="Group_394" data-name="Group 394" transform="translate(15.03 384)">
        <path
          id="Path_382"
          data-name="Path 382"
          d="M10.97,20a9,9,0,1,0-9-9A9,9,0,0,0,10.97,20Z"
          transform="translate(0)"
          fill="none"
          stroke="#f77d0f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Path_383"
          data-name="Path 383"
          d="M7.21,16a5.255,5.255,0,0,0,8.622,0"
          transform="translate(-0.524 -1.4)"
          fill="none"
          stroke="#f77d0f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
      </g>
    </g>
  </svg>
);

export const WalletIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20.988"
    height="18.065"
    viewBox="0 0 20.988 18.065"
  >
    <g
      id="Group_404"
      data-name="Group 404"
      transform="translate(-16.25 -211.25)"
    >
      <g id="Group_390" data-name="Group 390" transform="translate(17 212)">
        <path
          id="Path_367"
          data-name="Path 367"
          d="M12.846,9H7"
          transform="translate(-2.128 -3.641)"
          fill="none"
          stroke="#f77d0f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Path_368"
          data-name="Path 368"
          d="M21.869,10.944v2.007a1,1,0,0,1-.974.994h-1.91a2.078,2.078,0,0,1-2.1-1.822A2.008,2.008,0,0,1,18.868,9.95h2.027A1,1,0,0,1,21.869,10.944Z"
          transform="translate(-2.381 -3.665)"
          fill="none"
          stroke="#f77d0f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Path_369"
          data-name="Path 369"
          d="M17.084,10.37a1.957,1.957,0,0,0-.585,1.588,2.078,2.078,0,0,0,2.1,1.822h1.91v1.413a4.6,4.6,0,0,1-4.872,4.872H6.872A4.6,4.6,0,0,1,2,15.193V8.372A4.535,4.535,0,0,1,6.083,3.558,5.186,5.186,0,0,1,6.872,3.5h8.77a4.456,4.456,0,0,1,.731.049,4.545,4.545,0,0,1,4.141,4.823V9.785H18.487A1.942,1.942,0,0,0,17.084,10.37Z"
          transform="translate(-2 -3.5)"
          fill="none"
          stroke="#f77d0f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
      </g>
    </g>
  </svg>
);

export const PrivacyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17.59"
    height="19.558"
    viewBox="0 0 17.59 19.558"
  >
    <path
      id="Path_390"
      data-name="Path 390"
      d="M19.171,10.231a10.4,10.4,0,0,1-7.58,9.755,1.769,1.769,0,0,1-.92,0,10.4,10.4,0,0,1-7.58-9.755V6.269A2.168,2.168,0,0,1,4.344,4.41L9.371,2.353a4.681,4.681,0,0,1,3.528,0L17.926,4.41A2.185,2.185,0,0,1,19.18,6.269Z"
      transform="translate(-2.34 -1.241)"
      fill="none"
      stroke="#f77d0f"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
    />
  </svg>
);
