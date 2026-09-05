<script setup lang="ts">
import SellerLayout from '@/components/SellerLayout.vue'

const orders = [
  {
    id: 'DH001',
    customer: 'Nguyễn Minh Anh',
    product: 'Áo thun cotton tay ngắn',
    total: '189.000 ₫',
    date: '05/09/2026',
    status: 'Chờ xác nhận',
    statusType: 'warning',
  },
  {
    id: 'DH002',
    customer: 'Trần Hoàng Tú',
    product: 'Áo khoác nhẹ',
    total: '359.000 ₫',
    date: '04/09/2026',
    status: 'Đang giao',
    statusType: 'primary',
  },
]
</script>

<template>
  <SellerLayout>
    <header class="seller-orders-heading">
      <h1>Quản lý đơn hàng</h1>
      <p>Theo dõi và xử lý đơn hàng của cửa hàng.</p>
    </header>

    <section class="panel">
      <div
        class="order-status-options"
        role="group"
        aria-label="Trạng thái đơn hàng"
      >
        <el-button type="primary" plain aria-pressed="true">
          Tất cả
        </el-button>
        <el-button aria-pressed="false">Chờ xác nhận</el-button>
        <el-button aria-pressed="false">Đang giao</el-button>
        <el-button aria-pressed="false">Hoàn thành</el-button>
        <el-button aria-pressed="false">Đã hủy</el-button>
      </div>

      <div class="order-search-row">
        <el-input
          class="order-search"
          size="large"
          placeholder="Nhập mã đơn hoặc tên khách hàng"
          aria-label="Tìm đơn hàng"
        />
        <span class="order-count">2 đơn hàng</span>
      </div>

      <el-table :data="orders" row-key="id" stripe>
        <el-table-column prop="id" label="Mã đơn" width="110" />

        <el-table-column label="Khách hàng / Sản phẩm" min-width="260">
          <template #default="scope">
            <div class="order-customer">
              <p>{{ scope.row.customer }}</p>
              <span>{{ scope.row.product }}</span>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="total" label="Thành tiền" width="150" />
        <el-table-column prop="date" label="Ngày đặt" width="130" />

        <el-table-column label="Trạng thái" width="160">
          <template #default="scope">
            <el-tag :type="scope.row.statusType">
              {{ scope.row.status }}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column label="Thao tác" width="140">
          <template #default>
            <el-button type="primary" text>Xem chi tiết</el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
  </SellerLayout>
</template>

<style scoped>
.seller-orders-heading {
  margin-bottom: 24px;
}

.seller-orders-heading h1 {
  font-size: 28px;
}

.seller-orders-heading p {
  margin-top: 8px;
  color: var(--el-text-color-secondary);
}

.order-status-options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.order-status-options > .el-button {
  margin-left: 0;
}

.order-search-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin: 24px 0;
}

.order-search {
  width: 100%;
  max-width: 380px;
}

.order-count {
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

.order-customer {
  padding: 8px 0;
}

.order-customer p {
  margin-bottom: 4px;
  font-weight: 600;
}

.order-customer span {
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

@media (max-width: 600px) {
  .order-search {
    max-width: none;
  }
}
</style>