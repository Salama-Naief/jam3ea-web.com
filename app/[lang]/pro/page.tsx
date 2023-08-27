import Container from '@/components/Container';

export default function Pro() {
  return (
    <Container className='px-0'>
      <div className="space-y-4 relative">
        <div className="flex flex-col bg-gradient-to-r from-primary to-[#f77d0fb5] relative p-3 h-[180px] pt-10 overflow-hidden">
          <button className="bg-white rounded-full w-fit p-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col">
            <div className="text-white font-medium text-lg flex gap-1">
              <span className="z-10 font-bold text-white text-xl">Pro</span>
              <img src="/assets/jamia-logo.svg" width="16" alt="" />
            </div>
            <div className="text-white text-xl">توصيل مجاني</div>
            <div className="text-white text-sm">
              Plus exclusive offers to pros
            </div>
          </div>
          <div className="absolute bottom-0 right-0">
            <img src="/assets/pay.svg" className="w-52" alt="" />
          </div>
        </div>

        <div className="mt-2 p-4 h-[calc(100vh-180px)] flex flex-col">
          <div className="text-xl font-semibold">مزايا برو الحصرية</div>
          <div className="flex flex-col gap-2 mt-3">
            <div className="flex items-center gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-xs">توصيل مجاني للوجبات</div>
                <div className="text-xs text-gray">
                  on orders above kd 3.5 at most restaurants
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-xs">Free delivery on food</div>
                <div className="text-xs text-gray">
                  on orders above kd 3.5 at most restaurants
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-nowrap overflow-x-auto max-w-full py-4 gap-1">
              <div className="flex flex-col align-items-center justify-content-center flex-shrink-0">
                <img src="/assets/no-image.jpeg" width="75" />
              </div>
              <div className="flex flex-col align-items-center justify-content-center flex-shrink-0">
                <img src="/assets/no-image.jpeg" width="75" />
              </div>
              <div className="flex flex-col align-items-center justify-content-center flex-shrink-0">
                <img src="/assets/no-image.jpeg" width="75" />
              </div>
              <div className="flex flex-col align-items-center justify-content-center flex-shrink-0">
                <img src="/assets/no-image.jpeg" width="75" />
              </div>
              <div className="flex flex-col align-items-center justify-content-center flex-shrink-0">
                <img src="/assets/no-image.jpeg" width="75" />
              </div>
              <div className="flex flex-col align-items-center justify-content-center flex-shrink-0">
                <img src="/assets/no-image.jpeg" width="75" />
              </div>
              <div className="flex flex-col align-items-center justify-content-center flex-shrink-0">
                <img src="/assets/no-image.jpeg" width="75" />
              </div>
              <div className="flex flex-col align-items-center justify-content-center flex-shrink-0">
                <img src="/assets/no-image.jpeg" width="75" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full pb-4 mt-auto border-t pt-4">
            <div className="text-center text-black text-sm mb-4">
              Two weeks free trial
            </div>
            <button
              type="button"
              className="bg-primary p-3 w-full text-white flex items-center justify-center rounded-xl"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
