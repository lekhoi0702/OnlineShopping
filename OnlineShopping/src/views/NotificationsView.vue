<script setup lang="ts">
import AccountSidebar from '@/components/AccountSidebar.vue'
</script>

<template>
  <main class="container account-page">
    <AccountSidebar />

    <section class="panel notifications-panel">
      <header class="notifications-heading">
        <h1>Thông báo</h1>
        <el-button type="primary" text>
          Đánh dấu tất cả đã đọc
        </el-button>
      </header>

      <div class="notification-list">
        <article class="notification-item is-unread">
          <div class="notification-icon" aria-hidden="true">ĐH</div>

          <div class="notification-content">
            <div class="notification-title">
              <h2>Đơn hàng đang được giao</h2>
              <span class="unread-label">Chưa đọc</span>
            </div>

            <p>Đơn hàng DH001 đang trên đường đến bạn.</p>
            <span class="notification-time">10 phút trước</span>
          </div>
        </article>

        <article class="notification-item">
          <div class="notification-icon" aria-hidden="true">ĐH</div>

          <div class="notification-content">
            <h2>Đặt hàng thành công</h2>
            <p>
              Cửa hàng Lami Fashion đã nhận đơn hàng DH001.
              Bạn có thể xem thông tin tại mục Đơn mua.
            </p>
            <span class="notification-time">Hôm qua</span>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.notifications-panel {
  min-width: 0;
}

.notifications-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.notifications-heading h1 {
  font-size: 26px;
}

.notification-list {
  display: grid;
  gap: 12px;
  margin-top: 24px;
}

.notification-item {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  align-items: start;
  gap: 16px;
  padding: 20px;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 10px;
}

.notification-item.is-unread {
  border-color: var(--el-color-primary-light-7);
  background: var(--el-color-primary-light-9);
}

.notification-icon {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--el-fill-color);
  color: var(--el-text-color-regular);
  font-size: 14px;
  font-weight: 700;
}

.is-unread .notification-icon {
  background: white;
  color: var(--el-color-primary-dark-2);
}

.notification-content {
  min-width: 0;
  overflow-wrap: anywhere;
}

.notification-title {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 12px;
}

.notification-content h2 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.notification-content p {
  margin-top: 8px;
  color: var(--el-text-color-regular);
  line-height: 1.8;
}

.unread-label {
  color: var(--el-color-primary-dark-2);
  font-size: 12px;
  font-weight: 600;
}

.notification-time {
  display: block;
  margin-top: 12px;
  color: var(--el-text-color-secondary);
  font-size: 12px;
}

@media (max-width: 540px) {
  .notification-item {
    grid-template-columns: 36px minmax(0, 1fr);
    gap: 12px;
    padding: 16px;
  }

  .notification-icon {
    width: 36px;
    height: 36px;
    font-size: 12px;
  }
}
</style>