<script setup lang="ts">
import AccountSidebar from '@/components/AccountSidebar.vue'
</script>

<template>
  <main class="container account-page">
    <AccountSidebar />

    <section class="panel vouchers-panel">
      <header class="vouchers-heading">
        <h1>Mã giảm giá</h1>
        <p>Ưu đãi dành cho lần mua sắm tiếp theo.</p>
      </header>

      <div class="voucher-list">
        <article class="voucher-card">
          <div class="voucher-value">
            <span>GIẢM</span>
            <strong>20.000 ₫</strong>
          </div>

          <div class="voucher-content">
            <h2>Ưu đãi đơn hàng mới</h2>
            <p>Áp dụng cho đơn từ 200.000 ₫.</p>
            <p class="voucher-code">Mã: CHAO20</p>

            <div class="voucher-footer">
              <span>HSD: 30/09/2026</span>
              <el-button type="primary" plain>Sử dụng</el-button>
            </div>
          </div>
        </article>

        <article class="voucher-card">
          <div class="voucher-value">
            <span>GIẢM</span>
            <strong>10%</strong>
          </div>

          <div class="voucher-content">
            <h2>Ưu đãi thời trang</h2>
            <p>Đơn từ 300.000 ₫, giảm tối đa 50.000 ₫.</p>
            <p class="voucher-code">Mã: STYLE10</p>

            <div class="voucher-footer">
              <span>HSD: 30/09/2026</span>
              <el-button type="primary" plain>Sử dụng</el-button>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.vouchers-panel {
  min-width: 0;
}

.vouchers-heading {
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.vouchers-heading h1 {
  font-size: 26px;
}

.vouchers-heading p {
  margin-top: 8px;
  color: var(--el-text-color-secondary);
}

.voucher-list {
  display: grid;
  gap: 20px;
}

.voucher-card {
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr);
  overflow: hidden;
  border: 1px solid var(--el-border-color);
  border-radius: 12px;
}

.voucher-value {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 24px 16px;
  border-right: 2px dashed var(--el-color-primary-light-5);
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary-dark-2);
  text-align: center;
}

.voucher-value > span {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
}

.voucher-value strong {
  font-size: 24px;
}

.voucher-content {
  min-width: 0;
  padding: 20px;
  overflow-wrap: anywhere;
}

.voucher-content h2 {
  margin-bottom: 8px;
  font-size: 17px;
}

.voucher-content > p {
  color: var(--el-text-color-regular);
  line-height: 1.7;
}

.voucher-code {
  margin-top: 12px;
  font-weight: 600;
}

.voucher-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.voucher-footer > span {
  color: var(--el-text-color-secondary);
  font-size: 12px;
}

@media (max-width: 600px) {
  .voucher-card {
    grid-template-columns: 1fr;
  }

  .voucher-value {
    flex-direction: row;
    flex-wrap: wrap;
    border-right: 0;
    border-bottom: 2px dashed var(--el-color-primary-light-5);
  }
}
</style>