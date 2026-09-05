<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AccountSidebar from '@/components/AccountSidebar.vue'
</script>

<template>
  <main class="container account-page">
    <AccountSidebar />

    <section class="panel address-form-panel">
      <header class="address-form-heading">
        <h1>Thêm địa chỉ mới</h1>
        <p>Nhập thông tin người nhận và địa chỉ giao hàng.</p>
      </header>

      <el-form
        class="address-form"
        label-position="top"
        @submit.prevent
      >
        <div class="form-grid">
          <el-form-item label="Họ và tên">
            <el-input
              size="large"
              placeholder="Nhập họ và tên người nhận"
              autocomplete="name"
            />
          </el-form-item>

          <el-form-item label="Số điện thoại">
            <el-input
              type="tel"
              size="large"
              placeholder="Nhập số điện thoại"
              autocomplete="tel"
            />
          </el-form-item>

          <el-form-item label="Tỉnh / Thành phố">
            <el-input
              size="large"
              placeholder="Nhập tỉnh hoặc thành phố"
            />
          </el-form-item>

          <el-form-item label="Phường / Xã">
            <el-input
              size="large"
              placeholder="Nhập phường hoặc xã"
            />
          </el-form-item>

          <el-form-item class="full-width" label="Địa chỉ cụ thể">
            <el-input
              type="textarea"
              :rows="3"
              placeholder="Số nhà, tên đường, tòa nhà…"
              autocomplete="street-address"
              resize="vertical"
            />
          </el-form-item>
        </div>

        <div class="address-type">
          <p>Loại địa chỉ</p>

          <div class="address-type-options" role="group" aria-label="Loại địa chỉ">
            <el-button type="primary" plain aria-pressed="true">
              Nhà riêng
            </el-button>
            <el-button aria-pressed="false">Văn phòng</el-button>
          </div>
        </div>

        <div class="address-form-actions">
          <RouterLink class="back-link" to="/addresses">
            Quay lại
          </RouterLink>
          <el-button type="primary" size="large">
            Lưu địa chỉ
          </el-button>
        </div>
      </el-form>
    </section>
  </main>
</template>

<style scoped>
.address-form-panel {
  min-width: 0;
}

.address-form-heading {
  padding-bottom: 24px;
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.address-form-heading h1 {
  font-size: 26px;
}

.address-form-heading p {
  margin-top: 8px;
  color: var(--el-text-color-secondary);
}

.address-form {
  padding-top: 28px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 24px;
}

.form-grid > .el-form-item {
  min-width: 0;
}

.full-width {
  grid-column: 1 / -1;
}

.address-type > p {
  margin-bottom: 12px;
  color: var(--el-text-color-regular);
}

.address-type-options {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.address-type-options > .el-button {
  margin-left: 0;
}

.address-form-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--el-border-color-lighter);
}

.back-link {
  padding: 10px 0;
  color: var(--el-text-color-regular);
}

.back-link:focus-visible {
  outline: 2px solid var(--el-color-primary);
  outline-offset: 4px;
}

@media (max-width: 1000px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>