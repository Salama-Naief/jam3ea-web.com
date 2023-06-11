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
  category: (id: string) => `/category/${id}`,
};

export default webRoutes;
