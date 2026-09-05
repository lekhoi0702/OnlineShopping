<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="container order-detail-page">
    <div class="detail-heading">
      <RouterLink to="/orders">← Đơn mua</RouterLink>
      <h1>Đơn hàng DH001</h1>
    </div>

    <section class="panel" aria-labelledby="status-title">
      <div class="status-heading">
        <h2 id="status-title">Trạng thái đơn hàng</h2>
        <el-tag>Đang giao</el-tag>
      </div>

      <ol class="order-progress">
        <li class="is-complete">
          <span class="step-number" aria-hidden="true">1</span>
          <span>Đã đặt hàng</span>
        </li>
        <li class="is-complete">
          <span class="step-number" aria-hidden="true">2</span>
          <span>Đã xác nhận</span>
        </li>
        <li class="is-current" aria-current="step">
          <span class="step-number" aria-hidden="true">3</span>
          <span>Đang giao</span>
        </li>
        <li>
          <span class="step-number" aria-hidden="true">4</span>
          <span>Đã nhận hàng</span>
        </li>
      </ol>
    </section>

    <div class="delivery-grid">
      <section class="panel">
        <h2>Địa chỉ nhận hàng</h2>
        <div class="info-content">
          <strong>Nguyễn Minh Anh</strong>
          <p>0900 000 000</p>
          <p>12 Đường Hoa Mai, Phường Minh An, Thành phố An Bình</p>
        </div>
      </section>

      <section class="panel">
        <h2>Thông tin vận chuyển</h2>
        <div class="info-content">
          <strong>Giao hàng tiêu chuẩn</strong>
          <p>Mã vận đơn: VC000123</p>
          <p>Đơn hàng đang được giao đến bạn.</p>
          <p class="muted">Dự kiến nhận: 08/09/2026</p>
        </div>
      </section>
    </div>

    <section class="panel">
      <h2>Lami Fashion</h2>

      <div class="ordered-product">
        <img src="/products/ao-thun.jpg" alt="Áo thun cotton tay ngắn" />
        <div>
          <h3>Áo thun cotton tay ngắn</h3>
          <p class="muted">Phân loại: Trắng, M</p>
          <p class="muted">Số lượng: 1</p>
        </div>
        <strong>159.000 ₫</strong>
      </div>

      <dl class="payment-details">
        <div>
          <dt>Tiền hàng</dt>
          <dd>159.000 ₫</dd>
        </div>
        <div>
          <dt>Phí vận chuyển</dt>
          <dd>30.000 ₫</dd>
        </div>
        <div>
          <dt>Phương thức thanh toán</dt>
          <dd>Thanh toán khi nhận hàng</dd>
        </div>
        <div class="payment-total">
          <dt>Tổng thanh toán</dt>
          <dd>189.000 ₫</dd>
        </div>
      </dl>
    </section>
  </main>
</template>

<style scoped>
.order-detail-page {
  display: grid;
  gap: 24px;
  padding-top: 32px;
  padding-bottom: 40px;
}

.detail-heading,
.status-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.detail-heading a {
  color: var(--el-color-primary-dark-2);
}

.detail-heading h1 {
  font-size: 26px;
}

.order-detail-page h2 {
  font-size: 20px;
}

.order-progress {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 32px 0 8px;
  padding: 0;
  list-style: none;
}

.order-progress li {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 0 8px;
  text-align: center;
  color: var(--el-text-color-secondary);
}

.order-progress li:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 19px;
  left: calc(50% + 24px);
  width: calc(100% - 48px);
  height: 2px;
  background: var(--el-border-color);
}

.step-number {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 2px solid var(--el-border-color);
  border-radius: 50%;
  background: white;
  font-weight: 700;
}

.is-complete .step-number {
  border-color: var(--el-color-primary);
  background: var(--el-color-primary);
  color: white;
}

.order-progress .is-complete::after {
  background: var(--el-color-primary);
}

.is-current .step-number {
  border-color: var(--el-color-primary);
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary-dark-2);
}

.order-progress .is-current {
  color: var(--el-color-primary-dark-2);
  font-weight: 600;
}

.delivery-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.info-content {
  display: grid;
  gap: 8px;
  margin-top: 20px;
  line-height: 1.8;
  overflow-wrap: anywhere;
}

.muted {
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

.ordered-product {
  display: grid;
  grid-template-columns: 80px minmax(0, 1fr) auto;
  align-items: center;
  gap: 20px;
  padding: 24px 0;
}

.ordered-product img {
  display: block;
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
}

.ordered-product h3 {
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 500;
  overflow-wrap: anywhere;
}

.ordered-product p + p {
  margin-top: 4px;
}

.payment-details {
  max-width: 480px;
  margin: 0 0 0 auto;
  padding-top: 20px;
  border-top: 1px solid var(--el-border-color-lighter);
}

.payment-details > div {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px 20px;
  padding: 10px 0;
}

.payment-details dd {
  margin: 0;
}

.payment-total dd {
  color: var(--el-color-primary-dark-2);
  font-size: 24px;
  font-weight: 700;
}

@media (max-width: 700px) {
  .delivery-grid {
    grid-template-columns: 1fr;
  }

  .order-progress {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .order-progress li {
    flex-direction: row;
    text-align: left;
  }

  .order-progress li:not(:last-child)::after {
    top: 44px;
    left: 27px;
    width: 2px;
    height: 12px;
  }
}

@media (max-width: 480px) {
  .ordered-product {
    grid-template-columns: 64px minmax(0, 1fr);
    gap: 12px;
  }

  .ordered-product > strong {
    grid-column: 2;
  }
}
</style>