<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SellerLayout from '@/components/SellerLayout.vue'
</script>

<template>
  <SellerLayout>
    <header class="voucher-form-heading">
      <div>
        <h1>Tạo mã giảm giá</h1>
        <p>Thiết kế ưu đãi cho khách hàng của cửa hàng.</p>
      </div>

      <RouterLink to="/seller/vouchers">
        ← Danh sách mã giảm giá
      </RouterLink>
    </header>

    <el-form
      class="voucher-form"
      label-position="top"
      @submit.prevent
    >
      <section class="panel">
        <h2>Thông tin mã</h2>

        <div class="voucher-fields">
          <el-form-item label="Tên chương trình">
            <el-input
              size="large"
              placeholder="Ví dụ: Ưu đãi khách hàng mới"
            />
          </el-form-item>

          <el-form-item label="Mã giảm giá">
            <el-input size="large" placeholder="Ví dụ: LAMI20" />
          </el-form-item>
        </div>
      </section>

      <section class="panel">
        <h2>Mức giảm và điều kiện</h2>

        <el-form-item label="Loại giảm giá">
          <div class="discount-options" role="group" aria-label="Loại giảm giá">
            <el-button type="primary" plain aria-pressed="true">
              Giảm số tiền
            </el-button>
            <el-button aria-pressed="false">
              Giảm phần trăm
            </el-button>
          </div>
        </el-form-item>

        <div class="voucher-fields">
          <el-form-item label="Số tiền giảm">
            <el-input
              size="large"
              placeholder="20.000"
              inputmode="numeric"
            >
              <template #append>₫</template>
            </el-input>
          </el-form-item>

          <el-form-item label="Giá trị đơn tối thiểu">
            <el-input
              size="large"
              placeholder="200.000"
              inputmode="numeric"
            >
              <template #append>₫</template>
            </el-input>
          </el-form-item>

          <el-form-item label="Tổng lượt sử dụng">
            <el-input
              size="large"
              placeholder="Ví dụ: 100"
              inputmode="numeric"
            />
          </el-form-item>

          <el-form-item label="Lượt sử dụng mỗi người">
            <el-input
              size="large"
              placeholder="Ví dụ: 1"
              inputmode="numeric"
            />
          </el-form-item>
        </div>
      </section>

      <section class="panel">
        <h2>Thời gian áp dụng</h2>

        <div class="voucher-fields">
          <el-form-item label="Bắt đầu">
            <el-input type="datetime-local" size="large" />
          </el-form-item>

          <el-form-item label="Kết thúc">
            <el-input type="datetime-local" size="large" />
          </el-form-item>
        </div>

        <p class="voucher-form-note">
          Mã được áp dụng trong khoảng thời gian đã chọn.
        </p>
      </section>

      <div class="panel voucher-form-actions">
        <RouterLink to="/seller/vouchers">Quay lại</RouterLink>
        <el-button type="primary" size="large">
          Tạo mã giảm giá
        </el-button>
      </div>
    </el-form>
  </SellerLayout>
</template>

<style scoped>
.voucher-form-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
}

.voucher-form-heading h1 {
  font-size: 28px;
}

.voucher-form-heading p {
  margin-top: 8px;
  color: var(--el-text-color-secondary);
}

.voucher-form-heading a,
.voucher-form-actions a {
  color: var(--el-color-primary-dark-2);
}

.voucher-form {
  display: grid;
  gap: 24px;
  max-width: 1000px;
}

.voucher-form h2 {
  margin-bottom: 24px;
  font-size: 20px;
}

.voucher-fields {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 24px;
}

.voucher-fields > .el-form-item {
  min-width: 0;
}

.discount-options {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.discount-options > .el-button {
  margin-left: 0;
}

.voucher-form-note {
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

.voucher-form-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 24px;
}

@media (max-width: 900px) {
  .voucher-fields {
    grid-template-columns: 1fr;
  }
}
</style>