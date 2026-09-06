<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import { ref } from 'vue'
  import AddressSelectionDialog from '@/components/AddressSelectionDialog.vue'

  const isAddressSelectionVisible = ref(false)
</script>

<template>
  <main class="container checkout-page">
    <div class="checkout-heading">
      <h1>Thanh toán</h1>
      <RouterLink to="/cart">← Quay lại giỏ hàng</RouterLink>
    </div>

    <div class="checkout-layout">
      <div class="checkout-sections">
        <section class="panel">
          <div class="section-heading">
            <h2>Địa chỉ nhận hàng</h2>
            <el-button type="primary" text @click="isAddressSelectionVisible = true">
              Thay đổi
            </el-button>
          </div>
          <div class="recipient">
            <strong>Nguyễn Minh Anh</strong>
            <span>0900 000 000</span>
            <el-tag size="small">Mặc định</el-tag>
          </div>

          <p class="delivery-address">12 Đường Hoa Mai, Phường Minh An, Thành phố An Bình</p>
        </section>

        <section class="panel">
          <h2 class="section-title">Sản phẩm đặt mua</h2>

          <p class="checkout-shop">Lami Fashion</p>

          <article class="checkout-product">
            <img src="/products/ao-thun.jpg" alt="Áo thun cotton tay ngắn" />

            <div class="checkout-product-info">
              <h3>Áo thun cotton tay ngắn</h3>
              <p>Phân loại: Trắng, M</p>
              <p>Số lượng: 1</p>
            </div>

            <strong class="item-total">159.000 ₫</strong>
          </article>

          <div class="shipping-row">
            <div>
              <strong>Giao hàng tiêu chuẩn</strong>
              <p>Dự kiến nhận sau 3–5 ngày</p>
            </div>
            <span>30.000 ₫</span>
          </div>

          <div class="order-note">
            <label for="order-note">Lời nhắn cho cửa hàng</label>
            <el-input
              id="order-note"
              type="textarea"
              :rows="2"
              placeholder="Ví dụ: vui lòng đóng gói cẩn thận"
              resize="vertical"
            />
          </div>
        </section>

        <section class="panel">
          <h2 class="section-title">Phương thức thanh toán</h2>

          <div class="payment-options" role="group" aria-label="Phương thức thanh toán">
            <el-button type="primary" plain aria-pressed="true">
              Thanh toán khi nhận hàng
            </el-button>

            <el-button aria-pressed="false"> Chuyển khoản </el-button>
          </div>

          <p class="payment-note">Thanh toán cho đơn vị vận chuyển khi nhận được hàng.</p>
        </section>
      </div>

      <aside class="panel checkout-summary">
        <h2 class="section-title">Chi tiết thanh toán</h2>

        <dl class="checkout-totals">
          <div>
            <dt>Tiền hàng</dt>
            <dd>159.000 ₫</dd>
          </div>

          <div>
            <dt>Phí vận chuyển</dt>
            <dd>30.000 ₫</dd>
          </div>

          <div class="grand-total">
            <dt>Tổng thanh toán</dt>
            <dd>189.000 ₫</dd>
          </div>
        </dl>

        <el-button class="place-order" type="primary" size="large"> Đặt hàng </el-button>

        <p class="checkout-note">Vui lòng kiểm tra sản phẩm và địa chỉ nhận hàng trước khi đặt.</p>
      </aside>
    </div>
    <AddressSelectionDialog v-model="isAddressSelectionVisible" />
  </main>
</template>

<style scoped>
  .checkout-page {
    padding-top: 32px;
    padding-bottom: 40px;
  }

  .checkout-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 24px;
  }

  .checkout-heading h1 {
    font-size: 28px;
  }

  .checkout-heading a {
    color: var(--el-color-primary-dark-2);
  }

  .checkout-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 340px;
    align-items: start;
    gap: 24px;
  }

  .checkout-sections {
    display: grid;
    gap: 20px;
    min-width: 0;
  }

  .section-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
  }

  .section-heading h2,
  .section-title {
    font-size: 20px;
  }

  .section-title {
    margin-bottom: 20px;
  }

  .recipient {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px 16px;
  }

  .delivery-address {
    margin-top: 12px;
    line-height: 1.8;
    color: var(--el-text-color-regular);
  }

  .checkout-shop {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--el-border-color-lighter);
    color: var(--el-color-primary-dark-2);
    font-weight: 600;
  }

  .checkout-product {
    display: grid;
    grid-template-columns: 80px minmax(0, 1fr) auto;
    align-items: center;
    gap: 20px;
    padding: 24px 0;
  }

  .checkout-product img {
    display: block;
    width: 100%;
    aspect-ratio: 1;
    object-fit: contain;
  }

  .checkout-product-info {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  .checkout-product-info h3 {
    margin: 0 0 8px;
    font-size: 16px;
    font-weight: 500;
  }

  .checkout-product-info p {
    margin-top: 4px;
    color: var(--el-text-color-secondary);
    font-size: 13px;
  }

  .item-total {
    color: var(--el-color-primary-dark-2);
  }

  .shipping-row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    padding: 16px;
    border-radius: 8px;
    background: var(--el-fill-color-light);
  }

  .shipping-row p {
    margin-top: 4px;
    color: var(--el-text-color-secondary);
    font-size: 13px;
  }

  .order-note {
    display: grid;
    gap: 8px;
    margin-top: 20px;
  }

  .payment-options {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .payment-options > .el-button {
    height: auto;
    min-height: 40px;
    margin-left: 0;
    white-space: normal;
    line-height: 1.5;
  }

  .payment-note,
  .checkout-note {
    margin-top: 16px;
    color: var(--el-text-color-secondary);
    font-size: 13px;
    line-height: 1.7;
  }

  .checkout-totals {
    margin: 0;
  }

  .checkout-totals > div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px 16px;
    margin-bottom: 16px;
  }

  .checkout-totals dd {
    margin: 0;
  }

  .grand-total {
    padding-top: 20px;
    border-top: 1px solid var(--el-border-color-lighter);
  }

  .grand-total dd {
    color: var(--el-color-primary-dark-2);
    font-size: 24px;
    font-weight: 700;
  }

  .place-order {
    width: 100%;
    margin-top: 8px;
  }

  @media (max-width: 900px) {
    .checkout-layout {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 540px) {
    .checkout-product {
      grid-template-columns: 64px minmax(0, 1fr);
      gap: 16px;
    }

    .item-total {
      grid-column: 2;
    }
  }
</style>
