<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="seller-layout">
    <header class="seller-header">
      <RouterLink class="seller-brand" to="/seller">
        Kênh người bán
      </RouterLink>
      <span>Lami Fashion</span>
    </header>

    <div class="seller-body">
      <aside class="seller-sidebar">
        <nav class="seller-menu" aria-label="Quản lý cửa hàng">
          <RouterLink to="/seller">Tổng quan</RouterLink>
          <RouterLink to="/seller/products">Sản phẩm</RouterLink>
          <RouterLink to="/seller/orders">Đơn hàng</RouterLink>
          <RouterLink to="/seller/settings">Thiết lập cửa hàng</RouterLink>
          <RouterLink to="/seller/vouchers">Mã giảm giá</RouterLink>
        </nav>

        <RouterLink class="storefront-link" to="/shop-detail">
          Xem cửa hàng →
        </RouterLink>
      </aside>

      <main class="seller-content">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
.seller-layout {
  min-height: 100vh;
}

.seller-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding: 20px 28px;
  border-bottom: 1px solid var(--el-border-color-lighter);
  background: white;
}

.seller-brand {
  color: var(--el-color-primary-dark-2);
  font-size: 22px;
  font-weight: 700;
}

.seller-body {
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
}

.seller-sidebar {
  padding: 24px 16px;
  border-right: 1px solid var(--el-border-color-lighter);
  background: white;
}

.seller-menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.seller-menu a,
.seller-menu button {
  display: block;
  padding: 14px 16px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--el-text-color-regular);
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.seller-menu a:hover,
.seller-menu button:hover {
  background: var(--el-fill-color-light);
}

.seller-menu a.router-link-exact-active {
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary-dark-2);
  font-weight: 600;
}

.storefront-link {
  display: block;
  margin-top: 28px;
  padding: 12px 16px;
  color: var(--el-color-primary-dark-2);
}

.seller-sidebar a:focus-visible,
.seller-menu button:focus-visible {
  outline: 2px solid var(--el-color-primary);
  outline-offset: 2px;
}

.seller-content {
  min-width: 0;
  padding: 28px;
}

@media (max-width: 768px) {
  .seller-body {
    grid-template-columns: 1fr;
  }

  .seller-sidebar {
    border-right: 0;
    border-bottom: 1px solid var(--el-border-color-lighter);
    padding: 16px;
  }

  .seller-menu {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .storefront-link {
    margin-top: 12px;
  }

  .seller-content {
    padding: 20px 16px;
  }
}
</style>