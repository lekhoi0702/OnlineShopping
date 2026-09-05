import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import CartView from '../views/CartView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import ShopView from '../views/ShopView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import OrdersView from '../views/OrdersView.vue'
import OrderDetailView from '../views/OrderDetailView.vue'
import ProfileView from '../views/ProfileView.vue'
import AddressesView from '../views/AddressesView.vue'
import AddressFormView from '../views/AddressFormView.vue'
import ChangePasswordView from '../views/ChangePasswordView.vue'
import NotificationsView from '../views/NotificationsView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import VouchersView from '../views/VouchersView.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'
import OrderSuccessView from '../views/OrderSuccessView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import SellerDashboardView from '../views/SellerDashboardView.vue'
import SellerProductsView from '../views/SellerProductsView.vue'
import SellerProductFormView from '../views/SellerProductFormView.vue'
import SellerOrdersView from '../views/SellerOrdersView.vue'
import SellerOrderDetailView from '../views/SellerOrderDetailView.vue'
import SellerShopSettingsView from '../views/SellerShopSettingsView.vue'
import SellerReviewsView from '../views/SellerReviewsView.vue'
import SellerVouchersView from '../views/SellerVoucherFormView.vue'
import SellerVoucherFormView from '../views/SellerVoucherFormView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
  path: '/login',
  name: 'login',
  component: AuthView,
},
{
  path: '/register',
  name: 'register',
  component: AuthView,
},
  {
  path: '/cart',
  name: 'cart',
  component: CartView,
},
{
  path: '/product-detail',
  name: 'product-detail',
  component: ProductDetailView,
},
{
  path: '/shop-detail',
  name: 'shop-detail',
  component: ShopView,
},
{
  path: '/checkout',
  name: 'checkout',
  component: CheckoutView,
},
{
  path: '/orders',
  name: 'orders',
  component: OrdersView,
},
{
  path: '/order-detail',
  name: 'order-detail',
  component: OrderDetailView,
},
{
  path: '/profile',
  name: 'profile',
  component: ProfileView,
},
{
  path: '/addresses',
  name: 'addresses',
  component: AddressesView,
},
{
  path: '/addresses/new',
  name: 'address-new',
  component: AddressFormView,
},
{
  path: '/change-password',
  name: 'change-password',
  component: ChangePasswordView,
},
{
  path: '/notifications',
  name: 'notifications',
  component: NotificationsView,
},
{
  path: '/favorites',
  name: 'favorites',
  component: FavoritesView,
},
{
  path: '/vouchers',
  name: 'vouchers',
  component: VouchersView,
},
{
  path: '/forgot-password',
  name: 'forgot-password',
  component: ForgotPasswordView,
},
{
  path: '/order-success',
  name: 'order-success',
  component: OrderSuccessView,
},
{
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: NotFoundView,
},
{
  path: '/seller',
  name: 'seller-dashboard',
  component: SellerDashboardView,
},
{
  path: '/seller/products',
  name: 'seller-products',
  component: SellerProductsView,
},
{
  path: '/seller/products/new',
  name: 'seller-product-new',
  component: SellerProductFormView,
},
{
  path: '/seller/orders',
  name: 'seller-orders',
  component: SellerOrdersView,
},
{
  path: '/seller/order-detail',
  name: 'seller-order-detail',
  component: SellerOrderDetailView,
},
{
  path: '/seller/settings',
  name: 'seller-settings',
  component: SellerShopSettingsView,
},
{
  path: '/seller/reviews',
  name: 'seller-reviews',
  component: SellerReviewsView,
},
{
  path: '/seller/vouchers',
  name: 'seller-vouchers',
  component: SellerVouchersView,
},
{
  path: '/seller/vouchers/new',
  name: 'seller-voucher-new',
  component: SellerVoucherFormView,
},
  ],
})

export default router
