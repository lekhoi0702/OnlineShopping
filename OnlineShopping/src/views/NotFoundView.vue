<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="container not-found-page">
    <section class="panel not-found-card">
      <p class="error-code" aria-hidden="true">404</p>

      <h1>Không tìm thấy trang</h1>
      <p class="error-description">
        Đường dẫn không tồn tại hoặc trang đã được di chuyển.
      </p>

      <RouterLink class="home-link" to="/">
        Về trang chủ
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
.not-found-page {
  padding-top: 48px;
  padding-bottom: 48px;
}

.not-found-card {
  max-width: 640px;
  margin: 0 auto;
  padding: 48px 24px;
  text-align: center;
}

.error-code {
  color: var(--el-color-primary);
  font-size: clamp(80px, 15vw, 140px);
  font-weight: 700;
  line-height: 1;
}

.not-found-card h1 {
  margin-top: 24px;
  font-size: 28px;
}

.error-description {
  max-width: 360px;
  margin: 16px auto 0;
  color: var(--el-text-color-secondary);
  line-height: 1.8;
}

.home-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  margin-top: 28px;
  padding: 12px 24px;
  border-radius: 8px;
  background: var(--el-color-primary-dark-2);
  color: white;
  font-weight: 600;
}

.home-link:focus-visible {
  outline: 2px solid var(--el-color-primary);
  outline-offset: 4px;
}

@media (max-width: 540px) {
  .not-found-page {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .not-found-card h1 {
    font-size: 24px;
  }
}
</style>