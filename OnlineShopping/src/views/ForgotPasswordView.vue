<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="recovery-page">
    <section class="panel recovery-card">
      <RouterLink class="recovery-brand" to="/">
        Online Shopping
      </RouterLink>

      <h1>Quên mật khẩu?</h1>
      <p class="recovery-description">
        Nhập email đã đăng ký để yêu cầu đặt lại mật khẩu.
      </p>

      <el-form label-position="top" @submit.prevent>
        <el-form-item label="Email">
          <el-input
            type="email"
            size="large"
            placeholder="ban@example.com"
            autocomplete="email"
          />
        </el-form-item>

        <el-button class="recovery-submit" type="primary" size="large">
          Gửi yêu cầu
        </el-button>
      </el-form>

      <RouterLink class="recovery-back" to="/login">
        ← Quay lại đăng nhập
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
.recovery-page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 32px 16px;
  background: var(--el-color-primary-light-9);
}

.recovery-card {
  width: 100%;
  max-width: 460px;
  padding: 36px;
  border-radius: 16px;
  box-shadow: 0 12px 40px rgb(0 0 0 / 6%);
}

.recovery-brand {
  display: inline-block;
  margin-bottom: 28px;
  color: var(--el-color-primary-dark-2);
  font-size: 20px;
  font-weight: 700;
}

.recovery-card h1 {
  font-size: 28px;
}

.recovery-description {
  margin-top: 12px;
  margin-bottom: 28px;
  color: var(--el-text-color-secondary);
  line-height: 1.8;
}

.recovery-submit {
  width: 100%;
  margin-top: 8px;
}

.recovery-back {
  display: block;
  margin-top: 24px;
  text-align: center;
  color: var(--el-color-primary-dark-2);
}

.recovery-card a:focus-visible {
  outline: 2px solid var(--el-color-primary);
  outline-offset: 4px;
}

@media (max-width: 480px) {
  .recovery-card {
    padding: 24px;
  }

  .recovery-card h1 {
    font-size: 24px;
  }
}
</style>