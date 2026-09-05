<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import SiteFooter from '@/components/SiteFooter.vue'
const keyword = ref('')
const route = useRoute()

const isAuthPage = computed(() => {
  return (
    route.name === 'login' ||
    route.name === 'register' ||
    route.name === 'forgot-password'
  )
})

const isSellerPage = computed(() => {
  return route.path === '/seller' || route.path.startsWith('/seller/')
})
</script>

<template>
  <header v-if="!isAuthPage && !isSellerPage" class="site-header">
    <nav class="container account-nav" aria-label="Tài khoản">
  <RouterLink to="/login">Đăng nhập</RouterLink>
  <RouterLink to="/register">Đăng ký</RouterLink>
</nav>
    <div class="container header-content">
      <RouterLink class="brand" to="/">
        Online Shopping
      </RouterLink>

      <div class="header-search">
        <el-input
          v-model="keyword"
          size="large"
          placeholder="Tìm sản phẩm bạn yêu thích"
          aria-label="Tìm kiếm sản phẩm"
          clearable
        />
      </div>

<RouterLink class="cart-button cart-link" to="/cart">
  Giỏ hàng
</RouterLink>
    </div>
  </header>

<RouterView v-if="isAuthPage" :key="route.path" />
<RouterView v-else-if="isSellerPage" />
<RouterView v-else :keyword="keyword" />

<SiteFooter v-if="!isAuthPage && !isSellerPage" />
</template>

<style scoped>
.site-header {
  padding: 24px 0;
  background: var(--el-color-primary);
  color: white;
}

.header-content {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  grid-template-areas: 'brand search cart';
  align-items: center;
  gap: 32px;
}

.brand {
  grid-area: brand;
  font-size: 26px;
  font-weight: 700;
  white-space: nowrap;
}

.header-search {
  grid-area: search;
  min-width: 0;
}

.cart-button {
  grid-area: cart;
}

@media (max-width: 768px) {
  .site-header {
    padding: 16px 0;
  }

  .header-content {
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-areas:
      'brand cart'
      'search search';
    gap: 16px;
  }

  .brand {
    font-size: 20px;
    white-space: normal;
  }
}

/* Account nav */

.account-nav {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 16px;
  font-size: 14px;
}

.account-nav a:hover {
  text-decoration: underline;
}

/* cart link */
.cart-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 20px;
  border-radius: 6px;
  background: white;
  color: var(--el-color-primary-dark-2);
  font-weight: 500;
}

.cart-link:focus-visible {
  outline: 2px solid white;
  outline-offset: 4px;
}
</style>