'use client';

import Navbar from '@/components/Navbar';
import ProductCard from '@/product/components/ProductCard';
import Container from '@/components/Container';
import { Flowbite, Tabs } from 'flowbite-react';

export default function Category({ params }: { params: { id: string } }) {
  //const products = await getCategoryProducts(params.id);
  const customTheme = {
    tab: {
      tablist: {
        tabitem: {
          styles: {
            underline: {
              'text-primary': 'primary',
              'hover:text-primary': 'primary',
              'border-primary': 'primary',
            },
          },
        },
      },
    },
  };

  return (
    <div>
      {/* <Navbar />
      <div className="pt-20"></div>
      <Container>
        <div className="flex flex-nowrap overflow-x-auto max-w-full py-4 gap-3">
          {products.data.map(
            ({
              name,
              price,
              old_price,
              picture,
              sku,
              availability,
              cart_status,
              has_variants,
              max_quantity_cart,
              wishlist_status,
            }) => (
              <ProductCard
                key={sku}
                sku={sku}
                name={name}
                price={price}
                oldPrice={old_price}
                picture={picture}
                isInWhishlist={wishlist_status.is_exists}
                cartStatus={cart_status}
                isAvailable={availability}
                maxQuantityCart={max_quantity_cart}
                hasVariants={has_variants}
              />
            )
          )}
        </div>
      </Container> */}

      <>
        <nav className="app-container border-gray-200 px-0 bg-white mb-2 fixed top-0 left-1/2 transform -translate-x-1/2 z-10">
          <div className="max-w-screen-xl flex gap-6 items-center justify-between mx-auto p-4">
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open main menu</span>
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
            </button>
            <div className="text-lg font-semibold line-clamp-1">
              Fruits & Vegetables
            </div>
            <button className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.534"
                height="18.472"
                viewBox="0 0 18.534 18.472"
              >
                <g
                  id="Group_733"
                  data-name="Group 733"
                  transform="translate(0.75 0.75)"
                >
                  <path
                    id="Path_329"
                    data-name="Path 329"
                    d="M18.606,4.477A3.476,3.476,0,1,1,15.129,1,3.478,3.478,0,0,1,18.606,4.477Z"
                    transform="translate(-1.572 -1)"
                    fill="none"
                    stroke="#1d1a1b"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    fillRule="evenodd"
                  />
                  <path
                    id="Path_330"
                    data-name="Path 330"
                    d="M7.952,4.477A3.476,3.476,0,1,1,4.476,1,3.477,3.477,0,0,1,7.952,4.477Z"
                    transform="translate(-1 -1)"
                    fill="none"
                    stroke="#1d1a1b"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    fillRule="evenodd"
                  />
                  <path
                    id="Path_331"
                    data-name="Path 331"
                    d="M18.606,15.065a3.476,3.476,0,1,1-3.477-3.477A3.476,3.476,0,0,1,18.606,15.065Z"
                    transform="translate(-1.572 -1.568)"
                    fill="none"
                    stroke="#1d1a1b"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    fillRule="evenodd"
                  />
                  <path
                    id="Path_332"
                    data-name="Path 332"
                    d="M7.952,15.065a3.476,3.476,0,1,1-3.477-3.477A3.476,3.476,0,0,1,7.952,15.065Z"
                    transform="translate(-1 -1.568)"
                    fill="none"
                    stroke="#1d1a1b"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    fillRule="evenodd"
                  />
                </g>
              </svg>
            </button>
          </div>
        </nav>
        <div className="pt-20"></div>
        <div className="app-container">
          <Flowbite
            theme={{
              // @ts-ignore
              theme: customTheme,
            }}
          >
            <Tabs.Group
              aria-label="Tabs with underline"
              style="underline"
              className="custom-tabs"
            >
              <Tabs.Item active title="Food">
                <div className="flex gap-3 mb-4">
                  <a
                    href="#category1"
                    className="bg-primary-soft text-sm  rounded-full py-1 w-full !text-primary text-center"
                  >
                    Sub category 1
                  </a>
                  <a
                    href="#category2"
                    className="bg-primary-soft text-sm  rounded-full py-1 w-full !text-primary text-center"
                  >
                    Sub category 2
                  </a>
                </div>
                <div id="category1">
                  <div className="bg-white shadow-sm w-fit text-sm px-2 py-1 rounded-full mb-3 mx-auto text-primary">
                    category 1
                  </div>

                  <div className="grid grid-cols-4 gap-2 items-stretch">
                    <ProductCard
                      sku={''}
                      price={''}
                      picture={''}
                      name={'example product'}
                      isAvailable={false}
                      cartStatus={{} as any}
                      isInWhishlist={false}
                      maxQuantityCart={0}
                      hasVariants={false}
                    />
                    <ProductCard
                      sku={''}
                      price={''}
                      picture={''}
                      name={'example product'}
                      isAvailable={false}
                      cartStatus={{} as any}
                      isInWhishlist={false}
                      maxQuantityCart={0}
                      hasVariants={false}
                    />
                    <ProductCard
                      sku={''}
                      price={''}
                      picture={''}
                      name={'example product'}
                      isAvailable={false}
                      cartStatus={{} as any}
                      isInWhishlist={false}
                      maxQuantityCart={0}
                      hasVariants={false}
                    />
                    <ProductCard
                      sku={''}
                      price={''}
                      picture={''}
                      name={'example product'}
                      isAvailable={false}
                      cartStatus={{} as any}
                      isInWhishlist={false}
                      maxQuantityCart={0}
                      hasVariants={false}
                    />
                    <ProductCard
                      sku={''}
                      price={''}
                      picture={''}
                      name={'example product'}
                      isAvailable={false}
                      cartStatus={{} as any}
                      isInWhishlist={false}
                      maxQuantityCart={0}
                      hasVariants={false}
                    />
                  </div>
                </div>
                <div id="category2">
                  <div className="bg-white shadow-sm w-fit text-sm px-2 py-1 rounded-full mb-3 mx-auto text-primary">
                    category 2
                  </div>
                  <div className="grid grid-cols-4 gap-2 items-stretch">
                    <ProductCard
                      sku={''}
                      price={''}
                      picture={''}
                      name={'example product'}
                      isAvailable={false}
                      cartStatus={{} as any}
                      isInWhishlist={false}
                      maxQuantityCart={0}
                      hasVariants={false}
                    />
                    <ProductCard
                      sku={''}
                      price={''}
                      picture={''}
                      name={'example product'}
                      isAvailable={false}
                      cartStatus={{} as any}
                      isInWhishlist={false}
                      maxQuantityCart={0}
                      hasVariants={false}
                    />
                    <ProductCard
                      sku={''}
                      price={''}
                      picture={''}
                      name={'example product'}
                      isAvailable={false}
                      cartStatus={{} as any}
                      isInWhishlist={false}
                      maxQuantityCart={0}
                      hasVariants={false}
                    />
                    <ProductCard
                      sku={''}
                      price={''}
                      picture={''}
                      name={'example product'}
                      isAvailable={false}
                      cartStatus={{} as any}
                      isInWhishlist={false}
                      maxQuantityCart={0}
                      hasVariants={false}
                    />
                    <ProductCard
                      sku={''}
                      price={''}
                      picture={''}
                      name={'example product'}
                      isAvailable={false}
                      cartStatus={{} as any}
                      isInWhishlist={false}
                      maxQuantityCart={0}
                      hasVariants={false}
                    />
                  </div>
                </div>
              </Tabs.Item>
              <Tabs.Item active title="Clothes">
                <div className="flex gap-3 mb-4">
                  <a
                    href="#category1"
                    className="bg-primary-soft text-sm  rounded-full py-1 w-full !text-primary text-center"
                  >
                    Sub category 1
                  </a>
                  <a
                    href="#category2"
                    className="bg-primary-soft text-sm  rounded-full py-1 w-full !text-primary text-center"
                  >
                    Sub category 2
                  </a>
                </div>
                <div id="category1">
                  <div className="bg-white shadow-sm w-fit text-sm px-2 py-1 rounded-full mb-3 mx-auto text-primary">
                    category 1
                  </div>

                  <div className="grid grid-cols-4 gap-2 items-stretch">
                    <ProductCard
                      sku={''}
                      price={''}
                      picture={''}
                      name={'example product'}
                      isAvailable={false}
                      cartStatus={{} as any}
                      isInWhishlist={false}
                      maxQuantityCart={0}
                      hasVariants={false}
                    />
                    <ProductCard
                      sku={''}
                      price={''}
                      picture={''}
                      name={'example product'}
                      isAvailable={false}
                      cartStatus={{} as any}
                      isInWhishlist={false}
                      maxQuantityCart={0}
                      hasVariants={false}
                    />
                    <ProductCard
                      sku={''}
                      price={''}
                      picture={''}
                      name={'example product'}
                      isAvailable={false}
                      cartStatus={{} as any}
                      isInWhishlist={false}
                      maxQuantityCart={0}
                      hasVariants={false}
                    />
                    <ProductCard
                      sku={''}
                      price={''}
                      picture={''}
                      name={'example product'}
                      isAvailable={false}
                      cartStatus={{} as any}
                      isInWhishlist={false}
                      maxQuantityCart={0}
                      hasVariants={false}
                    />
                    <ProductCard
                      sku={''}
                      price={''}
                      picture={''}
                      name={'example product'}
                      isAvailable={false}
                      cartStatus={{} as any}
                      isInWhishlist={false}
                      maxQuantityCart={0}
                      hasVariants={false}
                    />
                  </div>
                </div>
                <div id="category2">
                  <div className="bg-white shadow-sm w-fit text-sm px-2 py-1 rounded-full mb-3 mx-auto text-primary">
                    category 2
                  </div>
                  <div className="grid grid-cols-4 gap-2 items-stretch">
                    <ProductCard
                      sku={''}
                      price={''}
                      picture={''}
                      name={'example product'}
                      isAvailable={false}
                      cartStatus={{} as any}
                      isInWhishlist={false}
                      maxQuantityCart={0}
                      hasVariants={false}
                    />
                    <ProductCard
                      sku={''}
                      price={''}
                      picture={''}
                      name={'example product'}
                      isAvailable={false}
                      cartStatus={{} as any}
                      isInWhishlist={false}
                      maxQuantityCart={0}
                      hasVariants={false}
                    />
                    <ProductCard
                      sku={''}
                      price={''}
                      picture={''}
                      name={'example product'}
                      isAvailable={false}
                      cartStatus={{} as any}
                      isInWhishlist={false}
                      maxQuantityCart={0}
                      hasVariants={false}
                    />
                    <ProductCard
                      sku={''}
                      price={''}
                      picture={''}
                      name={'example product'}
                      isAvailable={false}
                      cartStatus={{} as any}
                      isInWhishlist={false}
                      maxQuantityCart={0}
                      hasVariants={false}
                    />
                    <ProductCard
                      sku={''}
                      price={''}
                      picture={''}
                      name={'example product'}
                      isAvailable={false}
                      cartStatus={{} as any}
                      isInWhishlist={false}
                      maxQuantityCart={0}
                      hasVariants={false}
                    />
                  </div>
                </div>
              </Tabs.Item>
            </Tabs.Group>
          </Flowbite>
        </div>
        <div className="pt-20"></div>
      </>
    </div>
  );
}
