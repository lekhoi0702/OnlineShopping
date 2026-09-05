<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SellerLayout from '@/components/SellerLayout.vue'
</script>

<template>
  <SellerLayout>
    <header class="product-form-heading">
      <div>
        <h1>Thêm sản phẩm</h1>
        <p>Chuẩn bị thông tin sản phẩm trước khi đăng bán.</p>
      </div>

      <RouterLink to="/seller/products">← Danh sách sản phẩm</RouterLink>
    </header>

    <el-form label-position="top" @submit.prevent>
      <div class="product-form-layout">
        <div class="product-form-sections">
          <section class="panel">
            <h2 class="form-section-title">Thông tin cơ bản</h2>

            <el-form-item label="Tên sản phẩm">
              <el-input
                size="large"
                placeholder="Ví dụ: Áo thun cotton tay ngắn"
              />
            </el-form-item>

            <el-form-item label="Danh mục">
              <el-select
                model-value="fashion"
                size="large"
                aria-label="Danh mục sản phẩm"
              >
                <el-option label="Thời trang" value="fashion" />
                <el-option label="Phụ kiện" value="accessories" />
                <el-option label="Điện tử" value="electronics" />
              </el-select>
            </el-form-item>

            <el-form-item label="Mô tả sản phẩm">
              <el-input
                type="textarea"
                :rows="6"
                placeholder="Giới thiệu chất liệu, kiểu dáng và cách sử dụng…"
                resize="vertical"
              />
            </el-form-item>
          </section>

          <section class="panel">
            <h2 class="form-section-title">Hình ảnh sản phẩm</h2>

            <div class="image-upload-preview">
              <span class="upload-symbol" aria-hidden="true">+</span>
              <strong>Thêm ảnh sản phẩm</strong>
              <p>Chọn ảnh rõ nét, thể hiện đầy đủ sản phẩm.</p>
              <el-button type="primary" plain>Chọn ảnh</el-button>
            </div>

            <p class="field-note">
              Ảnh đầu tiên sẽ được dùng làm ảnh bìa sản phẩm.
            </p>
          </section>
        </div>

        <section class="panel product-pricing">
          <h2 class="form-section-title">Thông tin bán hàng</h2>

          <el-form-item label="Giá bán">
            <el-input
              size="large"
              placeholder="Nhập giá bán"
              inputmode="numeric"
            >
              <template #append>₫</template>
            </el-input>
          </el-form-item>

          <el-form-item label="Số lượng tồn kho">
            <el-input
              size="large"
              placeholder="Nhập số lượng"
              inputmode="numeric"
            />
          </el-form-item>

          <el-form-item label="Mã sản phẩm">
            <el-input size="large" placeholder="Ví dụ: AT001" />
          </el-form-item>

          <div class="product-form-actions">
            <el-button>Lưu nháp</el-button>
            <el-button type="primary">Đăng sản phẩm</el-button>
          </div>
        </section>
      </div>
    </el-form>
  </SellerLayout>
</template>

<style scoped>
.product-form-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
}

.product-form-heading h1 {
  font-size: 28px;
}

.product-form-heading p {
  margin-top: 8px;
  color: var(--el-text-color-secondary);
}

.product-form-heading a {
  color: var(--el-color-primary-dark-2);
}

.product-form-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 340px;
  align-items: start;
  gap: 24px;
}

.product-form-sections {
  display: grid;
  gap: 24px;
  min-width: 0;
}

.form-section-title {
  margin-bottom: 24px;
  font-size: 20px;
}

.image-upload-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 240px;
  padding: 24px;
  border: 2px dashed var(--el-color-primary-light-5);
  border-radius: 12px;
  background: var(--el-color-primary-light-9);
  text-align: center;
}

.upload-symbol {
  color: var(--el-color-primary-dark-2);
  font-size: 40px;
  line-height: 1;
}

.image-upload-preview p,
.field-note {
  color: var(--el-text-color-secondary);
  font-size: 13px;
  line-height: 1.8;
}

.field-note {
  margin-top: 12px;
}

.product-pricing {
  min-width: 0;
}

.product-form-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--el-border-color-lighter);
}

.product-form-actions > .el-button {
  flex: 1;
  min-width: 120px;
  margin-left: 0;
}

@media (max-width: 1100px) {
  .product-form-layout {
    grid-template-columns: 1fr;
  }
}
</style>