<script setup lang="ts">
import SellerLayout from '@/components/SellerLayout.vue'
</script>

<template>
  <SellerLayout>
    <header class="dashboard-heading">
      <h1>Tổng quan cửa hàng</h1>
      <p>Theo dõi hoạt động và những việc cần xử lý.</p>
    </header>

    <div class="dashboard-stats">
      <section class="panel stat-card">
        <h2>Chờ xác nhận</h2>
        <strong>8</strong>
        <p>Đơn hàng cần xử lý</p>
      </section>

      <section class="panel stat-card">
        <h2>Đang giao</h2>
        <strong>12</strong>
        <p>Đơn hàng đang vận chuyển</p>
      </section>

      <section class="panel stat-card">
        <h2>Sản phẩm</h2>
        <strong>48</strong>
        <p>Sản phẩm đang hiển thị</p>
      </section>
    </div>

    <section class="panel dashboard-tasks">
      <h2>Công việc cần làm</h2>

      <div class="task-row">
        <div>
          <h3>Xác nhận đơn hàng mới</h3>
          <p>8 đơn hàng đang chờ cửa hàng xác nhận.</p>
        </div>
        <el-button type="primary" plain>Xem đơn hàng</el-button>
      </div>

      <div class="task-row">
        <div>
          <h3>Kiểm tra hàng tồn kho</h3>
          <p>3 sản phẩm có số lượng tồn thấp.</p>
        </div>
        <el-button> Xem sản phẩm </el-button>
      </div>
    </section>
  </SellerLayout>
</template>

<style scoped>
.dashboard-heading {
  margin-bottom: 24px;
}

.dashboard-heading h1 {
  font-size: 28px;
}

.dashboard-heading p {
  margin-top: 8px;
  color: var(--el-text-color-secondary);
}

.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.stat-card h2 {
  font-size: 15px;
  font-weight: 500;
}

.stat-card strong {
  display: block;
  margin: 16px 0 8px;
  color: var(--el-color-primary-dark-2);
  font-size: 36px;
}

.stat-card p {
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

.dashboard-tasks {
  margin-top: 24px;
}

.dashboard-tasks > h2 {
  margin-bottom: 8px;
  font-size: 20px;
}

.task-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px 0;
}

.task-row + .task-row {
  border-top: 1px solid var(--el-border-color-lighter);
}

.task-row h3 {
  margin: 0 0 8px;
  font-size: 15px;
  font-weight: 600;
}

.task-row p {
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

@media (max-width: 1000px) {
  .dashboard-stats {
    grid-template-columns: 1fr;
  }
}
</style>