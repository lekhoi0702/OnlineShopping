<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const isRegister = computed(() => route.name === 'register')

const title = computed(() => {
  return isRegister.value ? 'Tạo tài khoản' : 'Đăng nhập'
})

const form = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})
</script>

<template>
  <main class="auth-page">
    <div class="auth-layout">
      <section class="auth-intro">
        <RouterLink class="auth-brand" to="/">
          Online Shopping
        </RouterLink>

        <h1>Mua sắm theo phong cách của bạn</h1>
        <p>Khám phá sản phẩm yêu thích từ nhiều cửa hàng.</p>
      </section>

      <section class="auth-card" aria-labelledby="auth-title">
        <h2 id="auth-title">{{ title }}</h2>
        <p class="auth-description">
          {{
            isRegister
              ? 'Điền thông tin để bắt đầu cùng chúng tôi.'
              : 'Chào mừng bạn quay trở lại.'
          }}
        </p>

        <el-form :model="form" label-position="top" @submit.prevent>
          <el-form-item v-if="isRegister" label="Họ và tên">
            <el-input
              v-model="form.name"
              size="large"
              placeholder="Nhập họ và tên"
              autocomplete="name"
            />
          </el-form-item>

          <el-form-item label="Email">
            <el-input
              v-model="form.email"
              type="email"
              size="large"
              placeholder="ban@example.com"
              autocomplete="username"
            />
          </el-form-item>

          <el-form-item label="Mật khẩu">
            <el-input
              v-model="form.password"
              type="password"
              size="large"
              placeholder="Nhập mật khẩu"
              :autocomplete="isRegister ? 'new-password' : 'current-password'"
              show-password
            />
          </el-form-item>

          <el-form-item v-if="isRegister" label="Xác nhận mật khẩu">
            <el-input
              v-model="form.confirmPassword"
              type="password"
              size="large"
              placeholder="Nhập lại mật khẩu"
              autocomplete="new-password"
              show-password
            />
          </el-form-item>
<div v-if="!isRegister" class="forgot-password-link">
  <RouterLink to="/forgot-password">
    Quên mật khẩu?
  </RouterLink>
</div>
          <el-button
            class="auth-submit"
            type="primary"
            native-type="submit"
            size="large"
          >
            {{ title }}
          </el-button>
        </el-form>

        <p class="auth-switch">
          {{ isRegister ? 'Đã có tài khoản?' : 'Chưa có tài khoản?' }}
          <RouterLink :to="isRegister ? '/login' : '/register'">
            {{ isRegister ? 'Đăng nhập' : 'Đăng ký ngay' }}
          </RouterLink>
        </p>

        <RouterLink class="back-home" to="/">
          ← Về trang mua sắm
        </RouterLink>
      </section>
    </div>
  </main>
</template>


<style scoped>
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 48px 20px;
  background: linear-gradient(
    135deg,
    var(--el-color-primary-light-9),
    #f5f7fa
  );
}

.auth-layout {
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 440px);
  align-items: center;
  gap: 64px;
}

.auth-intro {
  min-width: 0;
}

.auth-brand {
  display: inline-block;
  margin-bottom: 28px;
  color: var(--el-color-primary);
  font-size: 26px;
  font-weight: 700;
}

.auth-intro h1 {
  margin-bottom: 20px;
  font-size: 40px;
  line-height: 1.25;
  color: var(--el-color-primary-dark-2);
}

.auth-intro p {
  color: var(--el-text-color-regular);
  font-size: 17px;
}

.auth-card {
  min-width: 0;
  padding: 36px;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 16px;
  background: white;
  box-shadow: 0 12px 40px rgb(0 0 0 / 6%);
}

.auth-card h2 {
  font-size: 28px;
}

.auth-description {
  margin-top: 8px;
  margin-bottom: 28px;
  color: var(--el-text-color-secondary);
}

.auth-submit {
  width: 100%;
  margin-top: 8px;
}

.auth-switch {
  margin-top: 24px;
  text-align: center;
}

.auth-switch a {
  margin-left: 4px;
  color: var(--el-color-primary-dark-2);
  font-weight: 600;
}

.back-home {
  display: block;
  margin-top: 20px;
  text-align: center;
  color: var(--el-text-color-regular);
}

.auth-page a:focus-visible {
  outline: 2px solid var(--el-color-primary);
  outline-offset: 4px;
}

@media (max-width: 768px) {
  .auth-page {
    padding: 32px 16px;
  }

  .auth-layout {
    max-width: 440px;
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .auth-intro {
    text-align: center;
  }

  .auth-brand {
    margin-bottom: 16px;
  }

  .auth-intro h1 {
    font-size: 28px;
  }

  .auth-card {
    padding: 24px;
  }
}

/* password css */
.forgot-password-link {
  margin-bottom: 16px;
  text-align: right;
}

.forgot-password-link a {
  color: var(--el-color-primary-dark-2);
  font-size: 13px;
}
</style>