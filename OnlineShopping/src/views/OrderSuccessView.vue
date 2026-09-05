<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="container success-page">
    <section class="panel success-card">
      <div class="success-icon" aria-hidden="true">✓</div>

      <h1>Đặt hàng thành công</h1>
      <p class="success-description">
        Cảm ơn bạn đã mua sắm. Đơn hàng đang chờ cửa hàng xác nhận.
      </p>

      <dl class="success-details">
        <div>
          <dt>Mã đơn hàng</dt>
          <dd>DH001</dd>
        </div>

        <div>
          <dt>Tổng thanh toán</dt>
          <dd class="success-total">189.000 ₫</dd>
        </div>

        <div>
          <dt>Phương thức thanh toán</dt>
          <dd>Thanh toán khi nhận hàng</dd>
        </div>
      </dl>

      <p class="success-note">
        Bạn có thể theo dõi tiến trình giao hàng trong mục Đơn mua.
      </p>

      <div class="success-actions">
        <RouterLink class="success-link primary-link" to="/orders">
          Xem đơn mua
        </RouterLink>

        <RouterLink class="success-link secondary-link" to="/">
          Tiếp tục mua sắm
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.success-page {
  padding-top: 48px;
  padding-bottom: 48px;
}

.success-card {
  max-width: 640px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
}

.success-icon {
  display: grid;
  place-items: center;
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  border-radius: 50%;
  background: var(--el-color-success-light-9);
  color: var(--el-color-success-dark-2);
  font-size: 40px;
  font-weight: 700;
}

.success-card h1 {
  font-size: 28px;
}

.success-description {
  max-width: 440px;
  margin: 12px auto 0;
  color: var(--el-text-color-regular);
  line-height: 1.8;
}

.success-details {
  display: grid;
  gap: 16px;
  margin: 28px 0;
  padding: 24px;
  border-radius: 10px;
  background: var(--el-fill-color-light);
  text-align: left;
}

.success-details > div {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px 20px;
}

.success-details dt {
  color: var(--el-text-color-secondary);
}

.success-details dd {
  margin: 0;
  font-weight: 600;
}

.success-total {
  color: var(--el-color-primary-dark-2);
  font-size: 22px;
}

.success-note {
  color: var(--el-text-color-secondary);
  font-size: 13px;
  line-height: 1.8;
}

.success-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.success-link {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 160px;
  min-height: 44px;
  padding: 12px 16px;
  border: 1px solid var(--el-color-primary-dark-2);
  border-radius: 8px;
  font-weight: 600;
}

.primary-link {
  background: var(--el-color-primary-dark-2);
  color: white;
}

.secondary-link {
  background: white;
  color: var(--el-color-primary-dark-2);
}

.success-link:focus-visible {
  outline: 2px solid var(--el-color-primary);
  outline-offset: 4px;
}

@media (max-width: 540px) {
  .success-page {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .success-card {
    padding: 28px 20px;
  }

  .success-card h1 {
    font-size: 24px;
  }

  .success-details {
    padding: 16px;
  }

  .success-actions {
    flex-direction: column;
  }
}
</style>