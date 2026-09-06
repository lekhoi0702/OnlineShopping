<script setup lang="ts">
  import { reactive } from 'vue'
  import { RouterLink } from 'vue-router'

  const sellerLoginForm = reactive({
    login: '',
    password: '',
    remember: false,
  })
</script>

<template>
  <main class="seller-login-page">
    <section class="seller-login-layout">
      <div class="seller-login-intro">
        <RouterLink class="seller-login-brand" to="/"> Online Shopping </RouterLink>

        <p class="seller-channel">Kênh người bán</p>

        <h1>Quản lý cửa hàng dễ dàng hơn</h1>

        <p class="seller-login-summary">
          Theo dõi sản phẩm, đơn hàng và hoạt động kinh doanh của cửa hàng tại một nơi.
        </p>

        <ul class="seller-benefits">
          <li>Quản lý sản phẩm và tồn kho</li>
          <li>Theo dõi trạng thái đơn hàng</li>
          <li>Xem doanh thu của cửa hàng</li>
        </ul>
      </div>

      <div class="seller-login-form-area">
        <section class="seller-login-card" aria-labelledby="seller-login-title">
          <h2 id="seller-login-title">Đăng nhập người bán</h2>

          <p class="seller-login-description">Đăng nhập để tiếp tục quản lý cửa hàng của bạn.</p>

          <el-form :model="sellerLoginForm" label-position="top" @submit.prevent>
            <el-form-item label="Email hoặc số điện thoại">
              <el-input
                v-model="sellerLoginForm.login"
                size="large"
                placeholder="Nhập email hoặc số điện thoại"
                autocomplete="username"
              />
            </el-form-item>

            <el-form-item label="Mật khẩu">
              <el-input
                v-model="sellerLoginForm.password"
                type="password"
                size="large"
                placeholder="Nhập mật khẩu"
                autocomplete="current-password"
                show-password
              />
            </el-form-item>

            <div class="seller-login-options">
              <el-checkbox v-model="sellerLoginForm.remember"> Ghi nhớ đăng nhập </el-checkbox>

              <RouterLink to="/forgot-password"> Quên mật khẩu? </RouterLink>
            </div>

            <el-button class="seller-login-submit" type="primary" size="large" native-type="submit">
              Đăng nhập
            </el-button>
          </el-form>

          <p class="buyer-login-link">
            Bạn muốn mua hàng?
            <RouterLink to="/login"> Đăng nhập tài khoản người mua </RouterLink>
          </p>

          <RouterLink class="back-shopping" to="/"> ← Trở về trang mua sắm </RouterLink>
        </section>
      </div>
    </section>
  </main>
</template>

<style scoped>
  .seller-login-page {
    min-height: 100vh;
    padding: 32px;
    background: var(--el-fill-color-light);
  }

  .seller-login-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(360px, 480px);
    width: 100%;
    max-width: 1180px;
    min-height: calc(100vh - 64px);
    margin: 0 auto;
    overflow: hidden;
    border-radius: 20px;
    background: white;
    box-shadow: 0 16px 48px rgb(0 0 0 / 8%);
  }

  .seller-login-intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 64px;
    background: linear-gradient(145deg, var(--el-color-primary-dark-2), var(--el-color-primary));
    color: white;
  }

  .seller-login-brand {
    align-self: flex-start;
    margin-bottom: 48px;
    color: white;
    font-size: 25px;
    font-weight: 700;
  }

  .seller-channel {
    margin-bottom: 16px;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .seller-login-intro h1 {
    max-width: 520px;
    font-size: 42px;
    line-height: 1.2;
  }

  .seller-login-summary {
    max-width: 540px;
    margin-top: 20px;
    font-size: 17px;
    line-height: 1.8;
    opacity: 0.9;
  }

  .seller-benefits {
    display: grid;
    gap: 14px;
    margin-top: 32px;
    padding-left: 20px;
    line-height: 1.6;
  }

  .seller-login-form-area {
    display: grid;
    place-items: center;
    padding: 48px;
  }

  .seller-login-card {
    width: 100%;
  }

  .seller-login-card h2 {
    font-size: 30px;
  }

  .seller-login-description {
    margin-top: 8px;
    margin-bottom: 32px;
    color: var(--el-text-color-secondary);
    line-height: 1.6;
  }

  .seller-login-options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
  }

  .seller-login-options a {
    color: var(--el-color-primary-dark-2);
    font-size: 14px;
  }

  .seller-login-submit {
    width: 100%;
  }

  .buyer-login-link {
    margin-top: 28px;
    text-align: center;
    color: var(--el-text-color-regular);
  }

  .buyer-login-link a {
    color: var(--el-color-primary-dark-2);
    font-weight: 600;
  }

  .back-shopping {
    display: block;
    margin-top: 20px;
    text-align: center;
    color: var(--el-text-color-secondary);
  }

  .seller-login-card a:focus-visible,
  .seller-login-brand:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
  }

  @media (max-width: 820px) {
    .seller-login-page {
      padding: 16px;
    }

    .seller-login-layout {
      grid-template-columns: 1fr;
      min-height: auto;
    }

    .seller-login-intro {
      padding: 36px 24px;
    }

    .seller-login-brand {
      margin-bottom: 24px;
    }

    .seller-login-intro h1 {
      font-size: 30px;
    }

    .seller-benefits {
      display: none;
    }

    .seller-login-form-area {
      padding: 36px 24px;
    }
  }
</style>
