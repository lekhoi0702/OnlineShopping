<script setup lang="ts">
import AccountSidebar from '@/components/AccountSidebar.vue'
</script>

<template>
  <main class="container account-page">
    <AccountSidebar />

    <section class="panel password-panel">
      <header class="password-heading">
        <h1>Đổi mật khẩu</h1>
        <p>Cập nhật mật khẩu cho tài khoản của bạn.</p>
      </header>

      <el-form
        class="password-form"
        label-position="top"
        @submit.prevent
      >
        <el-form-item label="Mật khẩu hiện tại">
          <el-input
            type="password"
            size="large"
            placeholder="Nhập mật khẩu hiện tại"
            autocomplete="current-password"
            show-password
          />
        </el-form-item>

        <el-form-item label="Mật khẩu mới">
          <el-input
            type="password"
            size="large"
            placeholder="Nhập mật khẩu mới"
            autocomplete="new-password"
            show-password
          />
        </el-form-item>

        <el-form-item label="Xác nhận mật khẩu mới">
          <el-input
            type="password"
            size="large"
            placeholder="Nhập lại mật khẩu mới"
            autocomplete="new-password"
            show-password
          />
        </el-form-item>

        <div class="password-actions">
          <el-button type="primary" size="large">
            Cập nhật mật khẩu
          </el-button>
        </div>
      </el-form>
    </section>
  </main>
</template>

<style scoped>
.password-panel {
  min-width: 0;
}

.password-heading {
  padding-bottom: 24px;
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.password-heading h1 {
  font-size: 26px;
}

.password-heading p {
  margin-top: 8px;
  color: var(--el-text-color-secondary);
}

.password-form {
  width: 100%;
  max-width: 480px;
  padding-top: 28px;
}

.password-actions {
  margin-top: 28px;
}

@media (max-width: 540px) {
  .password-actions > .el-button {
    width: 100%;
  }
}
</style>