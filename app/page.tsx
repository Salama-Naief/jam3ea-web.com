export default function Home() {
  return (
    <>
      <nav className="app-container border-gray-200 px-0 bg-white mb-2 fixed top-0 left-1/2 transform -translate-x-1/2 z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex gap-6">
            <button
              data-drawer-target="drawer-navigation"
              data-drawer-show="drawer-navigation"
              aria-controls="drawer-navigation"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <img src="/assets/bars-icon.svg" alt="" />
            </button>
            <button>
              <div className="text-gray-500 text-sm">Delivering To</div>
              <div className="text-sm ml-8">
                <i className="fa-solid fa-chevron-down fa-xs text-primary"></i>{' '}
                imadys (Jahra)
              </div>
            </button>
          </div>

          <div className="flex gap-2">
            <button
              className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              data-modal-target="searchModal"
              data-modal-toggle="searchModal"
              type="button"
            >
              <img src="/assets/search-icon.svg" alt="" />
            </button>
            <button
              data-drawer-target="categories-navigation"
              data-drawer-show="categories-navigation"
              aria-controls="categories-navigation"
              data-drawer-placement="right"
              type="button"
              className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <img src="/assets/categories-icon.svg" alt="" />
            </button>
          </div>
        </div>
      </nav>
      <div className="pt-20"></div>
      <div className="app-container">
        <img src="/assets/header.jpeg" className="mb-2" alt="" />
        <div className="flex items-center mb-2">
          <div className="bg-primary w-full h-8 rounded-bl-2xl flex items-center justify-center text-xs text-white">
            Up to 80 kw
          </div>

          <div className="bg-secondary text-white py-2 text-xs overflow-hidden rounded-tr-2xl">
            <div
              className="flex whitespace-nowrap"
              style={{ animation: 'ticker 10s linear infinite' }}
            >
              <div className="mx-8">
                News Item 1: Lorem ipsum dolor sit amet.
              </div>
              <div className="mx-8">
                News Item 2: Consectetur adipiscing elit.
              </div>
              <div className="mx-8">
                News Item 3: Sed do eiusmod tempor incididunt.
              </div>
            </div>
          </div>
        </div>

        <h2 className="font-bold text-lg">Sections</h2>
        <div className="grid grid-cols-4 gap-2 items-start">
          <a href="#" className="flex items-center flex-col gap-1">
            <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
              <img
                className="h-auto max-w-full"
                src="/assets/no-image.jpeg"
                alt=""
              />
            </div>
            <span className="text-xs text-center">Fruits and vegetables</span>
          </a>
          <a href="#" className="flex items-center flex-col gap-1">
            <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
              <img
                className="h-auto max-w-full"
                src="/assets/no-image.jpeg"
                alt=""
              />
            </div>
            <span className="text-xs text-center">Baked goods and cakes</span>
          </a>
          <a href="#" className="flex items-center flex-col gap-1">
            <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
              <img
                className="h-auto max-w-full"
                src="/assets/no-image.jpeg"
                alt=""
              />
            </div>
            <span className="text-xs text-center">Frozen Food</span>
          </a>
          <a href="#" className="flex items-center flex-col gap-1">
            <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
              <img
                className="h-auto max-w-full"
                src="/assets/no-image.jpeg"
                alt=""
              />
            </div>
            <span className="text-xs text-center">Meat & Poultry</span>
          </a>
          <a href="#" className="flex items-center flex-col gap-1">
            <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
              <img
                className="h-auto max-w-full"
                src="/assets/no-image.jpeg"
                alt=""
              />
            </div>
            <span className="text-xs text-center">Perfume & Incense</span>
          </a>
          <a href="#" className="flex items-center flex-col gap-1">
            <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
              <img
                className="h-auto max-w-full"
                src="/assets/no-image.jpeg"
                alt=""
              />
            </div>
            <span className="text-xs text-center">Baked goods and cakes</span>
          </a>
          <a href="#" className="flex items-center flex-col gap-1">
            <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
              <img
                className="h-auto max-w-full"
                src="/assets/no-image.jpeg"
                alt=""
              />
            </div>
            <span className="text-xs text-center">Baked goods and cakes</span>
          </a>
          <a href="#" className="flex items-center flex-col gap-1">
            <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
              <img
                className="h-auto max-w-full"
                src="/assets/no-image.jpeg"
                alt=""
              />
            </div>
            <span className="text-xs text-center">Baked goods and cakes</span>
          </a>
          <a href="#" className="flex items-center flex-col gap-1">
            <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
              <img
                className="h-auto max-w-full"
                src="/assets/no-image.jpeg"
                alt=""
              />
            </div>
            <span className="text-xs text-center">Baked goods and cakes</span>
          </a>
          <a href="#" className="flex items-center flex-col gap-1">
            <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
              <img
                className="h-auto max-w-full"
                src="/assets/no-image.jpeg"
                alt=""
              />
            </div>
            <span className="text-xs text-center">Baked goods and cakes</span>
          </a>
          <a href="#" className="flex items-center flex-col gap-1">
            <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
              <img
                className="h-auto max-w-full"
                src="/assets/no-image.jpeg"
                alt=""
              />
            </div>
            <span className="text-xs text-center">Baked goods and cakes</span>
          </a>

          <a href="#" className="flex items-center flex-col gap-1">
            <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
              <img
                className="h-auto max-w-full"
                src="/assets/all-sections-icon.svg"
                alt=""
              />
            </div>
            <span className="text-xs">All Sections</span>
          </a>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg">New Arrivals</h2>
            <a href="#" className="text-sm text-primary">
              View All
            </a>
          </div>
          <div className="flex flex-nowrap overflow-x-auto max-w-full py-4 gap-3">
            <div
              /* type="button"
          onclick="window.location.replace('/pages/product.html')" */
              className="flex-shrink-0 flex flex-col bg-white w-36 rounded-xl p-4 relative overflow-hidden"
            >
              <div className="bg-danger text-white w-fit px-2 absolute right-0 top-0 text-sm">
                90% Off
              </div>
              <button className="group">
                <img
                  className="group-hover:hidden"
                  src="/assets/like-inactive.svg"
                  alt=""
                />
                <img
                  className="hidden group-hover:block"
                  src="/assets/like-active.svg"
                  alt=""
                />
              </button>
              <div className="w-20 h-20 mx-auto">
                <img
                  className="w-full object-cover"
                  src="/assets/no-image.jpeg"
                  alt=""
                />
              </div>
              <button className="text-primary shadow w-5 h-5 flex items-center justify-center p-3 rounded-lg ml-auto">
                +
              </button>
              <div>
                <a href="#">
                  <h5 className="text-sm font-bold tracking-tight text-gray-900">
                    KD 24.00
                  </h5>
                </a>
                <p className="text-xs font-normal text-gray-500">
                  Coorg Farm Honey 500G
                </p>
              </div>
            </div>
            <div
              /* type="button"
          onclick="window.location.replace('/pages/product.html')" */
              className="flex-shrink-0 flex flex-col bg-white w-36 rounded-xl p-4 relative overflow-hidden"
            >
              <div className="bg-danger text-white w-fit px-2 absolute right-0 top-0 text-sm">
                90% Off
              </div>
              <button className="group">
                <img
                  className="group-hover:hidden"
                  src="/assets/like-inactive.svg"
                  alt=""
                />
                <img
                  className="hidden group-hover:block"
                  src="/assets/like-active.svg"
                  alt=""
                />
              </button>
              <div className="w-20 h-20 mx-auto">
                <img
                  className="w-full object-cover"
                  src="/assets/no-image.jpeg"
                  alt=""
                />
              </div>
              <button className="text-primary shadow w-5 h-5 flex items-center justify-center p-3 rounded-lg ml-auto">
                +
              </button>
              <div>
                <a href="#">
                  <h5 className="text-sm font-bold tracking-tight text-gray-900">
                    KD 24.00
                  </h5>
                </a>
                <p className="text-xs font-normal text-gray-500">
                  Coorg Farm Honey 500G
                </p>
              </div>
            </div>
            <div
              /* type="button"
          onclick="window.location.replace('/pages/product.html')" */
              className="flex-shrink-0 flex flex-col bg-white w-36 rounded-xl p-4 relative overflow-hidden"
            >
              <div className="bg-danger text-white w-fit px-2 absolute right-0 top-0 text-sm">
                90% Off
              </div>
              <button className="group">
                <img
                  className="group-hover:hidden"
                  src="/assets/like-inactive.svg"
                  alt=""
                />
                <img
                  className="hidden group-hover:block"
                  src="/assets/like-active.svg"
                  alt=""
                />
              </button>
              <div className="w-20 h-20 mx-auto">
                <img
                  className="w-full object-cover"
                  src="/assets/no-image.jpeg"
                  alt=""
                />
              </div>
              <button className="text-primary shadow w-5 h-5 flex items-center justify-center p-3 rounded-lg ml-auto">
                +
              </button>
              <div>
                <a href="#">
                  <h5 className="text-sm font-bold tracking-tight text-gray-900">
                    KD 24.00
                  </h5>
                </a>
                <p className="text-xs font-normal text-gray-500">
                  Coorg Farm Honey 500G
                </p>
              </div>
            </div>
            <div
              /* type="button"
          onclick="window.location.replace('/pages/product.html')" */
              className="flex-shrink-0 flex flex-col bg-white w-36 rounded-xl p-4 relative overflow-hidden"
            >
              <div className="bg-danger text-white w-fit px-2 absolute right-0 top-0 text-sm">
                90% Off
              </div>
              <button className="group">
                <img
                  className="group-hover:hidden"
                  src="/assets/like-inactive.svg"
                  alt=""
                />
                <img
                  className="hidden group-hover:block"
                  src="/assets/like-active.svg"
                  alt=""
                />
              </button>
              <div className="w-20 h-20 mx-auto">
                <img
                  className="w-full object-cover"
                  src="/assets/no-image.jpeg"
                  alt=""
                />
              </div>
              <button className="text-primary shadow w-5 h-5 flex items-center justify-center p-3 rounded-lg ml-auto">
                +
              </button>
              <div>
                <a href="#">
                  <h5 className="text-sm font-bold tracking-tight text-gray-900">
                    KD 24.00
                  </h5>
                </a>
                <p className="text-xs font-normal text-gray-500">
                  Coorg Farm Honey 500G
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src="/assets/ad.jpeg" alt="" />
        <div>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg">New Arrivals</h2>
            <a href="#" className="text-sm text-primary">
              View All
            </a>
          </div>
          <div className="flex flex-nowrap overflow-x-auto max-w-full py-4 gap-3">
            <div
              /* type="button"
          onclick="window.location.replace('/pages/product.html')" */
              className="flex-shrink-0 flex flex-col bg-white w-36 rounded-xl p-4 relative overflow-hidden"
            >
              <div className="bg-danger text-white w-fit px-2 absolute right-0 top-0 text-sm">
                90% Off
              </div>
              <button className="group">
                <img
                  className="group-hover:hidden"
                  src="/assets/like-inactive.svg"
                  alt=""
                />
                <img
                  className="hidden group-hover:block"
                  src="/assets/like-active.svg"
                  alt=""
                />
              </button>
              <div className="w-20 h-20 mx-auto">
                <img
                  className="w-full object-cover"
                  src="/assets/no-image.jpeg"
                  alt=""
                />
              </div>
              <button className="text-primary shadow w-5 h-5 flex items-center justify-center p-3 rounded-lg ml-auto">
                +
              </button>
              <div>
                <a href="#">
                  <h5 className="text-sm font-bold tracking-tight text-gray-900">
                    KD 24.00
                  </h5>
                </a>
                <p className="text-xs font-normal text-gray-500">
                  Coorg Farm Honey 500G
                </p>
              </div>
            </div>
            <div
              /* type="button"
          onclick="window.location.replace('/pages/product.html')" */
              className="flex-shrink-0 flex flex-col bg-white w-36 rounded-xl p-4 relative overflow-hidden"
            >
              <div className="bg-danger text-white w-fit px-2 absolute right-0 top-0 text-sm">
                90% Off
              </div>
              <button className="group">
                <img
                  className="group-hover:hidden"
                  src="/assets/like-inactive.svg"
                  alt=""
                />
                <img
                  className="hidden group-hover:block"
                  src="/assets/like-active.svg"
                  alt=""
                />
              </button>
              <div className="w-20 h-20 mx-auto">
                <img
                  className="w-full object-cover"
                  src="/assets/no-image.jpeg"
                  alt=""
                />
              </div>
              <button className="text-primary shadow w-5 h-5 flex items-center justify-center p-3 rounded-lg ml-auto">
                +
              </button>
              <div>
                <a href="#">
                  <h5 className="text-sm font-bold tracking-tight text-gray-900">
                    KD 24.00
                  </h5>
                </a>
                <p className="text-xs font-normal text-gray-500">
                  Coorg Farm Honey 500G
                </p>
              </div>
            </div>
            <div
              /* type="button"
          onclick="window.location.replace('/pages/product.html')" */
              className="flex-shrink-0 flex flex-col bg-white w-36 rounded-xl p-4 relative overflow-hidden"
            >
              <div className="bg-danger text-white w-fit px-2 absolute right-0 top-0 text-sm">
                90% Off
              </div>
              <button className="group">
                <img
                  className="group-hover:hidden"
                  src="/assets/like-inactive.svg"
                  alt=""
                />
                <img
                  className="hidden group-hover:block"
                  src="/assets/like-active.svg"
                  alt=""
                />
              </button>
              <div className="w-20 h-20 mx-auto">
                <img
                  className="w-full object-cover"
                  src="/assets/no-image.jpeg"
                  alt=""
                />
              </div>
              <button className="text-primary shadow w-5 h-5 flex items-center justify-center p-3 rounded-lg ml-auto">
                +
              </button>
              <div>
                <a href="#">
                  <h5 className="text-sm font-bold tracking-tight text-gray-900">
                    KD 24.00
                  </h5>
                </a>
                <p className="text-xs font-normal text-gray-500">
                  Coorg Farm Honey 500G
                </p>
              </div>
            </div>
            <div
              /* type="button"
          onclick="window.location.replace('/pages/product.html')" */
              className="flex-shrink-0 flex flex-col bg-white w-36 rounded-xl p-4 relative overflow-hidden"
            >
              <div className="bg-danger text-white w-fit px-2 absolute right-0 top-0 text-sm">
                90% Off
              </div>
              <button className="group">
                <img
                  className="group-hover:hidden"
                  src="/assets/like-inactive.svg"
                  alt=""
                />
                <img
                  className="hidden group-hover:block"
                  src="/assets/like-active.svg"
                  alt=""
                />
              </button>
              <div className="w-20 h-20 mx-auto">
                <img
                  className="w-full object-cover"
                  src="/assets/no-image.jpeg"
                  alt=""
                />
              </div>
              <button className="text-primary shadow w-5 h-5 flex items-center justify-center p-3 rounded-lg ml-auto">
                +
              </button>
              <div>
                <a href="#">
                  <h5 className="text-sm font-bold tracking-tight text-gray-900">
                    KD 24.00
                  </h5>
                </a>
                <p className="text-xs font-normal text-gray-500">
                  Coorg Farm Honey 500G
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20"></div>

      <div className="fixed z-[60] w-[calc(100%_-_2rem)] h-12 max-w-lg -translate-x-1/2 bg-success rounded-full bottom-4 left-1/2">
        <div className="h-full max-w-lg mx-auto">
          <div className="flex justify-between px-5 items-center gap-3 h-full">
            <div className="text-white font-bold">KD 124.000</div>
            <div className="flex gap-3">
              <button
                //onClick="window.location.replace('/pages/cart.html')"
                className="text-white"
                type="button"
              >
                View Cart
              </button>
              <div className="text-white font-bold">34</div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="drawer-navigation"
        className="fixed top-0 left-0 z-40 h-screen py-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80"
        tabIndex={1}
        aria-labelledby="drawer-navigation-label"
      >
        <img src="/assets/logo.svg" className="h-8 mx-auto" alt="Jamei" />

        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 hover:bg-primary-soft"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.77"
                  height="18.472"
                  viewBox="0 0 17.77 18.472"
                >
                  <g
                    id="Group_93"
                    data-name="Group 93"
                    transform="translate(0.75 0.75)"
                  >
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

                <span className="ml-5">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 hover:bg-primary-soft"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.541"
                  height="18.561"
                  viewBox="0 0 20.541 18.561"
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

                <span className="ml-5">Wishlist</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 hover:bg-primary-soft"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
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

                <span className="ml-5">My Cart</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 hover:bg-primary-soft"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.971"
                  height="19.953"
                  viewBox="0 0 19.971 19.953"
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
                <span className="ml-5">Brands</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 hover:bg-primary-soft"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.557"
                  height="21.978"
                  viewBox="0 0 20.557 21.978"
                >
                  <g
                    id="Group_774"
                    data-name="Group 774"
                    transform="translate(1.006 0.75)"
                  >
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

                <span className="ml-5">My Account</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 hover:bg-primary-soft"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
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

                <span className="ml-5">My Address</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        id="categories-navigation"
        className="fixed top-0 right-0 z-40 h-screen overflow-y-auto transition-transform translate-x-full bg-white w-80"
        tabIndex={-1}
        aria-labelledby="categories-navigation-label"
      >
        <div className="bg-secondary p-4 text-center">
          <span className="font-bold text-lg text-center text-white">
            Categories
          </span>
        </div>

        <div className="py-4 overflow-y-auto">
          <div className="grid grid-cols-3 gap-2 items-start">
            <a href="#" className="flex items-center flex-col gap-1">
              <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
                <img
                  className="h-auto max-w-full"
                  src="/assets/no-image.jpeg"
                  alt=""
                />
              </div>
              <span className="text-xs text-center">Fruits and vegetables</span>
            </a>
            <a href="#" className="flex items-center flex-col gap-1">
              <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
                <img
                  className="h-auto max-w-full"
                  src="/assets/no-image.jpeg"
                  alt=""
                />
              </div>
              <span className="text-xs text-center">Baked goods and cakes</span>
            </a>
            <a href="#" className="flex items-center flex-col gap-1">
              <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
                <img
                  className="h-auto max-w-full"
                  src="/assets/no-image.jpeg"
                  alt=""
                />
              </div>
              <span className="text-xs text-center">Frozen Food</span>
            </a>
            <a href="#" className="flex items-center flex-col gap-1">
              <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
                <img
                  className="h-auto max-w-full"
                  src="/assets/no-image.jpeg"
                  alt=""
                />
              </div>
              <span className="text-xs text-center">Meat & Poultry</span>
            </a>
            <a href="#" className="flex items-center flex-col gap-1">
              <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
                <img
                  className="h-auto max-w-full"
                  src="/assets/no-image.jpeg"
                  alt=""
                />
              </div>
              <span className="text-xs text-center">Perfume & Incense</span>
            </a>
            <a href="#" className="flex items-center flex-col gap-1">
              <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
                <img
                  className="h-auto max-w-full"
                  src="/assets/no-image.jpeg"
                  alt=""
                />
              </div>
              <span className="text-xs text-center">Baked goods and cakes</span>
            </a>
            <a href="#" className="flex items-center flex-col gap-1">
              <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
                <img
                  className="h-auto max-w-full"
                  src="/assets/no-image.jpeg"
                  alt=""
                />
              </div>
              <span className="text-xs text-center">Baked goods and cakes</span>
            </a>
            <a href="#" className="flex items-center flex-col gap-1">
              <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
                <img
                  className="h-auto max-w-full"
                  src="/assets/no-image.jpeg"
                  alt=""
                />
              </div>
              <span className="text-xs text-center">Baked goods and cakes</span>
            </a>
            <a href="#" className="flex items-center flex-col gap-1">
              <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
                <img
                  className="h-auto max-w-full"
                  src="/assets/no-image.jpeg"
                  alt=""
                />
              </div>
              <span className="text-xs text-center">Baked goods and cakes</span>
            </a>
            <a href="#" className="flex items-center flex-col gap-1">
              <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
                <img
                  className="h-auto max-w-full"
                  src="/assets/no-image.jpeg"
                  alt=""
                />
              </div>
              <span className="text-xs text-center">Baked goods and cakes</span>
            </a>
            <a href="#" className="flex items-center flex-col gap-1">
              <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
                <img
                  className="h-auto max-w-full"
                  src="/assets/no-image.jpeg"
                  alt=""
                />
              </div>
              <span className="text-xs text-center">Baked goods and cakes</span>
            </a>
          </div>
        </div>
      </div>
      <div
        id="searchModal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 bottom-0 z-50 hidden items-center justify-center"
      >
        <div className="relative bg-white shadow w-full h-full max-w-md">
          <div className="relative h-full">
            <div className="flex items-start justify-between p-4">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mr-auto inline-flex items-center"
                data-modal-hide="searchModal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    id="Group_10"
                    data-name="Group 10"
                    transform="translate(-16 -49)"
                  >
                    <rect
                      id="Rectangle_4"
                      data-name="Rectangle 4"
                      width="24"
                      height="24"
                      transform="translate(16 49)"
                      fill="none"
                    />
                    <g
                      id="Group_9"
                      data-name="Group 9"
                      transform="translate(2.68 1.158)"
                    >
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

                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 h-full overflow-y-auto bg-[#fafafa]">
              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full py-3 pr-5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Search here"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
              <button
                data-modal-hide="searchModal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                I accept
              </button>
              <button
                data-modal-hide="searchModal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
