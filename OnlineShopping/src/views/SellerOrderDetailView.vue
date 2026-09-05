<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SellerLayout from '@/components/SellerLayout.vue'
</script>

<template>
  <SellerLayout>
    <header class="order-detail-heading">
      <div>
        <RouterLink to="/seller/orders">← Danh sách đơn hàng</RouterLink>
        <h1>Đơn hàng DH001</h1>
        <p>Đặt lúc 09:30, ngày 05/09/2026</p>
      </div>

      <el-tag type="warning" size="large">Chờ xác nhận</el-tag>
    </header>

    <div class="seller-order-layout">
      <div class="order-sections">
        <section class="panel">
          <h2 class="section-title">Sản phẩm trong đơn</h2>
          <div class="ordered-item">
            <img src="/products/ao-thun.jpg" alt="Áo thun cotton tay ngắn" />

            <div>
              <h3>Áo thun cotton tay ngắn</h3>
              <p>Phân loại: Trắng, M</p>
              <p>Số lượng: 1</p>
            </div>

            <strong>159.000 ₫</strong>
          </div>
        </section>

        <section class="panel">
          <h2 class="section-title">Thông tin giao hàng</h2>

          <dl class="detail-list">
            <div>
              <dt>Người nhận</dt>
              <dd>Nguyễn Minh Anh</dd>
            </div>
            <div>
              <dt>Số điện thoại</dt>
              <dd>0900 000 000</dd>
            </div>
            <div>
              <dt>Địa chỉ</dt>
              <dd>
                12 Đường Hoa Mai, Phường Minh An, Thành phố An Bình
              </dd>
            </div>
            <div>
              <dt>Vận chuyển</dt>
              <dd>Giao hàng tiêu chuẩn</dd>
            </div>
          </dl>
        </section>

        <section class="panel">
          <h2 class="section-title">Lời nhắn của khách</h2>
          <p class="customer-note">
            Vui lòng kiểm tra sản phẩm và đóng gói cẩn thận.
          </p>
        </section>
      </div>

      <aside class="panel order-summary">
        <h2 class="section-title">Thanh toán</h2>

        <dl class="payment-list">
          <div>
            <dt>Tiền hàng</dt>
            <dd>159.000 ₫</dd>
          </div>
          <div>
            <dt>Phí vận chuyển</dt>
            <dd>30.000 ₫</dd>
          </div>
          <div class="payment-total">
            <dt>Tổng thanh toán</dt>
            <dd>189.000 ₫</dd>
          </div>
        </dl>

        <p class="payment-method">Thanh toán khi nhận hàng</p>

        <div class="seller-order-actions">
          <el-button type="primary" size="large">
            Xác nhận đơn hàng
          </el-button>
          <el-button type="danger" plain size="large">
            Hủy đơn hàng
          </el-button>
        </div>
      </aside>
    </div>
  </SellerLayout>
</template>

<style scoped>
.order-detail-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
}

.order-detail-heading a {
  color: var(--el-color-primary-dark-2);
}

.order-detail-heading h1 {
  margin-top: 12px;
  font-size: 28px;
}

.order-detail-heading p {
  margin-top: 8px;
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

.seller-order-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 340px;
  align-items: start;
  gap: 24px;
}

.order-sections {
  display: grid;
  gap: 24px;
  min-width: 0;
}

.section-title {
  margin-bottom: 20px;
  font-size: 20px;
}

.ordered-item {
  display: grid;
  grid-template-columns: 80px minmax(0, 1fr) auto;
  align-items: center;
  gap: 16px;
}

.ordered-item img {
  display: block;
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
}

.ordered-item h3 {
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 500;
  overflow-wrap: anywhere;
}

.ordered-item p {
  margin-top: 4px;
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

.detail-list {
  display: grid;
  gap: 16px;
  margin: 0;
}

.detail-list > div {
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr);
  gap: 16px;
}

.detail-list dt {
  color: var(--el-text-color-secondary);
}

.detail-list dd {
  margin: 0;
  line-height: 1.8;
  overflow-wrap: anywhere;
}

.customer-note {
  padding: 16px;
  border-radius: 8px;
  background: var(--el-fill-color-light);
  line-height: 1.8;
}

.order-summary {
  min-width: 0;
}

.payment-list {
  display: grid;
  gap: 16px;
  margin: 0;
}

.payment-list > div {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px 16px;
}

.payment-list dd {
  margin: 0;
}

.payment-total {
  padding-top: 20px;
  border-top: 1px solid var(--el-border-color-lighter);
}

.payment-total dd {
  color: var(--el-color-primary-dark-2);
  font-size: 24px;
  font-weight: 700;
}

.payment-method {
  margin-top: 16px;
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

.seller-order-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 28px;
}

.seller-order-actions > .el-button {
  width: 100%;
  margin-left: 0;
}

@media (max-width: 1100px) {
  .seller-order-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 540px) {
  .ordered-item {
    grid-template-columns: 64px minmax(0, 1fr);
  }

  .ordered-item > strong {
    grid-column: 2;
  }

  .detail-list > div {
    grid-template-columns: 1fr;
    gap: 4px;
  }
}
</style>