const webRoutes = {
  home: '/',
  splash: '/choose',
  login: '/login',
  register: '/register',
  logout: '/logout',
  resetPassword: '/resetpassword',
  profile: '/account',
  updateProfile: '/account/profile',
  updatePassword: '/account/password',
  addresses: '/addresses',
  cart: '/cart',
  wishlist: '/wishlist',
  stores: '/stores',
  orders: '/orders',
  contact: '/contact',
  privacy: '/privacy',
  trackOrder: (id: string) => `/orders/${id}/track`,
  orderDetails: (id: string) => `/orders/${id}`,
  category: (id: string, supplierId?: string) =>
    `/category/${id}${supplierId ? '?supplier=' + supplierId : ''}`,
  subcategory: (id: string, subId: string) => `/category/${id}/${subId}`,
  feature: (id: string, name?: string, supplierId?: string) =>
    `/feature/${id}${supplierId ? '?supplier=' + supplierId : ''}${
      name ? (supplierId ? '&' : '?') + 'name=' + name : ''
    }`,
  product: (sku: string) => `/product/${sku}`,
  store: (id: string) => `/stores/${id}`,
  search: (q?: string, supplierId?: string) =>
    `/search${q ? '/' + q : ''}${supplierId ? '?supplier=' + supplierId : ''}`,
};

export default webRoutes;
