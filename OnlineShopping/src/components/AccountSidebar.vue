<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <aside class="panel account-sidebar">
    <div class="account-identity">
      <div class="account-avatar" aria-hidden="true">MA</div>

      <div>
        <p class="account-name">Minh Anh</p>
        <p class="account-caption">Tài khoản của bạn</p>
      </div>
    </div>

    <nav class="account-menu" aria-label="Quản lý tài khoản">
      <RouterLink to="/profile">Hồ sơ của tôi</RouterLink>
      <RouterLink to="/orders">Đơn mua</RouterLink>
      <RouterLink to="/vouchers">Mã giảm giá</RouterLink>
      <RouterLink to="/favorites">Sản phẩm yêu thích</RouterLink>
      <RouterLink to="/notifications">Thông báo</RouterLink>
      <RouterLink to="/addresses">Địa chỉ của tôi</RouterLink>
      
    </nav>
  </aside>
</template>

<style scoped>
.account-identity {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.account-avatar {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary-dark-2);
  font-weight: 700;
}

.account-name {
  font-weight: 600;
}

.account-caption {
  margin-top: 4px;
  color: var(--el-text-color-secondary);
  font-size: 12px;
}

.account-menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
}

.account-menu a {
  padding: 12px;
  border-radius: 8px;
}

.account-menu a:hover {
  background: var(--el-fill-color-light);
}

.account-menu a.router-link-active {
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary-dark-2);
  font-weight: 600;
}

.account-menu a:focus-visible {
  outline: 2px solid var(--el-color-primary);
  outline-offset: 2px;
}
</style>
