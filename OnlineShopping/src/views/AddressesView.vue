<script setup lang="ts">
import AccountSidebar from '@/components/AccountSidebar.vue'
</script>

<template>
  <main class="container account-page">
    <AccountSidebar />

    <section class="panel addresses-panel">
      <header class="addresses-heading">
        <div>
          <h1>Địa chỉ của tôi</h1>
          <p>Quản lý địa chỉ nhận hàng của bạn.</p>
        </div>

        <el-button type="primary">+ Thêm địa chỉ mới</el-button>
      </header>

      <div class="address-list">
        <article class="address-card">
          <div class="address-content">
            <h2>Nguyễn Minh Anh</h2>
            <p class="address-phone">0900 000 000</p>
            <p>12 Đường Hoa Mai, Phường Minh An, Thành phố An Bình</p>

            <div class="address-tags">
              <el-tag size="small">Mặc định</el-tag>
              <el-tag type="info" size="small">Nhà riêng</el-tag>
            </div>
          </div>

          <div class="address-actions">
            <el-button type="primary" text>Cập nhật</el-button>
          </div>
        </article>

        <article class="address-card">
          <div class="address-content">
            <h2>Nguyễn Minh Anh</h2>
            <p class="address-phone">0900 000 000</p>
            <p>Tầng 3, 25 Đường Bình Minh, Phường An Phú, Thành phố An Bình</p>

            <div class="address-tags">
              <el-tag type="info" size="small">Văn phòng</el-tag>
            </div>
          </div>

          <div class="address-actions">
            <el-button type="primary" text>Cập nhật</el-button>
            <el-button type="danger" text>Xóa</el-button>
            <el-button>Đặt làm mặc định</el-button>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.addresses-panel {
  min-width: 0;
}

.addresses-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.addresses-heading h1 {
  font-size: 26px;
}

.addresses-heading p {
  margin-top: 8px;
  color: var(--el-text-color-secondary);
}

.address-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: start;
  gap: 24px;
  padding: 24px 0;
}

.address-card + .address-card {
  border-top: 1px solid var(--el-border-color-lighter);
}

.address-content {
  min-width: 0;
  overflow-wrap: anywhere;
  line-height: 1.8;
}

.address-content h2 {
  font-size: 17px;
}

.address-phone {
  margin: 4px 0 8px;
  color: var(--el-text-color-secondary);
}

.address-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.address-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.address-actions > .el-button {
  margin-left: 0;
}

@media (max-width: 1000px) {
  .address-card {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .address-actions {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
}
</style>