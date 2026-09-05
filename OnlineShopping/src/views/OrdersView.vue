<template>
  <main class="container orders-page">
    <h1>Đơn mua</h1>

    <div class="panel order-filters" role="group" aria-label="Trạng thái đơn hàng">
      <el-button type="primary" aria-pressed="true">Tất cả</el-button>
      <el-button aria-pressed="false">Chờ xác nhận</el-button>
      <el-button aria-pressed="false">Đang giao</el-button>
      <el-button aria-pressed="false">Hoàn thành</el-button>
      <el-button aria-pressed="false">Đã hủy</el-button>
    </div>

    <div class="order-list">
      <article class="panel order-card">
        <header class="order-header">
          <div>
            <h2>Lami Fashion</h2>
            <p class="order-code">Mã đơn: DH001</p>
          </div>
          <el-tag>Đang giao</el-tag>
        </header>

        <div class="order-product">
          <img src="/products/ao-thun.jpg" alt="Áo thun cotton tay ngắn" />

          <div class="order-product-info">
            <h3>Áo thun cotton tay ngắn</h3>
            <p>Phân loại: Trắng, M</p>
            <p>Số lượng: 1</p>
          </div>

          <span class="order-price">159.000 ₫</span>
        </div>

        <footer class="order-footer">
          <p class="order-total">
            Thành tiền: <strong>189.000 ₫</strong>
          </p>
          <div class="order-actions">
            <el-button>Liên hệ shop</el-button>
            <el-button type="primary">Xem chi tiết</el-button>
          </div>
        </footer>
      </article>

      <article class="panel order-card">
        <header class="order-header">
          <div>
            <h2>Daily Bag</h2>
            <p class="order-code">Mã đơn: DH002</p>
          </div>
          <el-tag type="success">Hoàn thành</el-tag>
        </header>

        <div class="order-product">
          <img src="/products/balo.jpg" alt="Balo đi học" />

          <div class="order-product-info">
            <h3>Balo đi học</h3>
            <p>Phân loại: Đen</p>
            <p>Số lượng: 1</p>
          </div>

          <span class="order-price">289.000 ₫</span>
        </div>

        <footer class="order-footer">
          <p class="order-total">
            Thành tiền: <strong>319.000 ₫</strong>
          </p>
          <div class="order-actions">
            <el-button>Đánh giá</el-button>
            <el-button type="primary">Mua lại</el-button>
          </div>
        </footer>
      </article>
    </div>
  </main>
</template>

<style scoped>
.orders-page {
  padding-top: 32px;
  padding-bottom: 40px;
}

.orders-page > h1 {
  margin-bottom: 24px;
  font-size: 28px;
}

.order-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
}

.order-filters > .el-button,
.order-actions > .el-button {
  margin-left: 0;
}

.order-list {
  display: grid;
  gap: 20px;
}

.order-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.order-header h2 {
  font-size: 17px;
}

.order-code {
  margin-top: 4px;
  color: var(--el-text-color-secondary);
  font-size: 12px;
}

.order-product {
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr) auto;
  align-items: center;
  gap: 20px;
  padding: 24px 0;
}

.order-product img {
  display: block;
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
}

.order-product-info {
  min-width: 0;
  overflow-wrap: anywhere;
}

.order-product-info h3 {
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 500;
}

.order-product-info p {
  margin-top: 4px;
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

.order-price {
  color: var(--el-text-color-primary);
  font-weight: 600;
}

.order-footer {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  padding-top: 20px;
  border-top: 1px solid var(--el-border-color-lighter);
}

.order-total {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
}

.order-total strong {
  color: var(--el-color-primary-dark-2);
  font-size: 24px;
}

.order-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

@media (max-width: 540px) {
  .order-product {
    grid-template-columns: 64px minmax(0, 1fr);
    gap: 16px;
  }

  .order-price {
    grid-column: 2;
  }

  .order-footer {
    align-items: stretch;
  }

  .order-actions > .el-button {
    flex: 1;
    min-width: 120px;
  }
}
</style>