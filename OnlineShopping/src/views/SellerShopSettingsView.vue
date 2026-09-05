<script setup lang="ts">
import SellerLayout from '@/components/SellerLayout.vue'
</script>

<template>
  <SellerLayout>
    <header class="settings-heading">
      <h1>Thiết lập cửa hàng</h1>
      <p>Thông tin hiển thị với khách hàng trên trang cửa hàng.</p>
    </header>

    <div class="settings-layout">
      <section class="panel">
        <h2 class="settings-title">Thông tin cửa hàng</h2>

        <el-form label-position="top" @submit.prevent>
          <el-form-item label="Tên cửa hàng">
            <el-input
              model-value="Lami Fashion"
              size="large"
              placeholder="Nhập tên cửa hàng"
            />
          </el-form-item>

          <el-form-item label="Giới thiệu">
            <el-input
              model-value="Thời trang đơn giản, thoải mái cho mỗi ngày."
              type="textarea"
              :rows="5"
              resize="vertical"
              placeholder="Giới thiệu ngắn về cửa hàng"
            />
          </el-form-item>

          <div class="settings-actions">
            <el-button type="primary" size="large">
              Lưu thay đổi
            </el-button>
          </div>
        </el-form>
      </section>

      <section class="panel">
        <h2 class="settings-title">Hình ảnh cửa hàng</h2>

        <div class="shop-media">
          <div class="avatar-preview" aria-hidden="true">LF</div>

          <div>
            <h3>Ảnh đại diện</h3>
            <p>Dùng logo hoặc hình ảnh nhận diện cửa hàng.</p>
            <el-button>Chọn ảnh</el-button>
          </div>
        </div>

        <div class="cover-settings">
          <h3>Ảnh bìa</h3>
          <p>Hình ảnh giới thiệu phong cách của cửa hàng.</p>

          <div class="cover-preview">
            <span>LAMI FASHION</span>
            <strong>Đơn giản, là chính bạn.</strong>
          </div>

          <el-button>Thay ảnh bìa</el-button>
        </div>
      </section>
    </div>
  </SellerLayout>
</template>

<style scoped>
.settings-heading {
  margin-bottom: 24px;
}

.settings-heading h1 {
  font-size: 28px;
}

.settings-heading p {
  margin-top: 8px;
  color: var(--el-text-color-secondary);
}

.settings-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  gap: 24px;
}

.settings-layout > section {
  min-width: 0;
}

.settings-title {
  margin-bottom: 24px;
  font-size: 20px;
}

.settings-actions {
  margin-top: 24px;
}

.shop-media {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.avatar-preview {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary-dark-2);
  font-size: 28px;
  font-weight: 700;
}

.shop-media h3,
.cover-settings h3 {
  margin: 0;
  font-size: 16px;
}

.shop-media p,
.cover-settings > p {
  margin: 8px 0 16px;
  color: var(--el-text-color-secondary);
  font-size: 13px;
  line-height: 1.8;
}

.cover-settings {
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid var(--el-border-color-lighter);
}

.cover-preview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  min-height: 180px;
  margin-bottom: 16px;
  padding: 24px;
  border-radius: 10px;
  background: linear-gradient(
    120deg,
    var(--el-color-primary-dark-2),
    var(--el-color-primary)
  );
  color: white;
  overflow-wrap: anywhere;
}

.cover-preview span {
  font-size: 12px;
  letter-spacing: 2px;
}

.cover-preview strong {
  font-size: 24px;
  line-height: 1.4;
}

@media (max-width: 1100px) {
  .settings-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 540px) {
  .settings-actions > .el-button {
    width: 100%;
  }
}
</style>