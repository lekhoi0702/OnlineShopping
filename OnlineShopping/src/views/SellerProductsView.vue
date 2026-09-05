<script setup lang="ts">
import SellerLayout from '@/components/SellerLayout.vue'
import {RouterLink} from 'vue-router'

const products = [
  {
    id: 'SP001',
    name: 'Áo thun cotton tay ngắn',
    image: '/products/ao-thun.jpg',
    price: '159.000 ₫',
    stock: 48,
    status: 'Đang bán',
  },
  {
    id: 'SP002',
    name: 'Áo khoác nhẹ',
    image: '/products/ao-khoac.jpg',
    price: '329.000 ₫',
    stock: 0,
    status: 'Hết hàng',
  },
]
</script>

<template>
  <SellerLayout>
    <header class="products-heading">
      <div>
        <h1>Quản lý sản phẩm</h1>
        <p>Theo dõi sản phẩm đang có trong cửa hàng.</p>
      </div>

<RouterLink class="add-product-link" to="/seller/products/new">
  + Thêm sản phẩm
</RouterLink>
    </header>

    <section class="panel">
      <div class="products-toolbar">
        <el-input
          class="product-search"
          size="large"
          placeholder="Tìm theo tên hoặc mã sản phẩm"
          aria-label="Tìm sản phẩm trong cửa hàng"
        />

        <div class="product-status-filters" role="group" aria-label="Trạng thái sản phẩm">
          <el-button type="primary" plain aria-pressed="true">
            Tất cả
          </el-button>
          <el-button aria-pressed="false">Đang bán</el-button>
          <el-button aria-pressed="false">Hết hàng</el-button>
        </div>
      </div>

      <el-table :data="products" row-key="id" stripe>
        <el-table-column label="Sản phẩm" min-width="300">
          <template #default="scope">
            <div class="table-product">
              <img :src="scope.row.image" :alt="scope.row.name" />

              <div>
                <p class="table-product-name">{{ scope.row.name }}</p>
                <p class="table-product-code">{{ scope.row.id }}</p>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="price" label="Giá bán" width="150" />
        <el-table-column prop="stock" label="Tồn kho" width="100" />

        <el-table-column label="Trạng thái" width="140">
          <template #default="scope">
            <el-tag :type="scope.row.stock > 0 ? 'success' : 'info'">
              {{ scope.row.status }}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column label="Thao tác" width="150">
          <template #default>
            <div class="table-actions">
              <el-button type="primary" text>Sửa</el-button>
              <el-button type="danger" text>Xóa</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>

      <p class="products-count">Hiển thị 2 sản phẩm</p>
    </section>
  </SellerLayout>
</template>

<style scoped>
.products-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 24px;
}

.products-heading h1 {
  font-size: 28px;
}

.products-heading p {
  margin-top: 8px;
  color: var(--el-text-color-secondary);
}

.products-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
}

.product-search {
  width: 100%;
  max-width: 360px;
}

.product-status-filters,
.table-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.product-status-filters > .el-button,
.table-actions > .el-button {
  margin-left: 0;
}

.table-product {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
}

.table-product img {
  display: block;
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 6px;
  object-fit: contain;
  background: white;
}

.table-product-name {
  font-weight: 500;
  overflow-wrap: anywhere;
}

.table-product-code {
  margin-top: 4px;
  color: var(--el-text-color-secondary);
  font-size: 12px;
}

.products-count {
  margin-top: 20px;
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

@media (max-width: 600px) {
  .product-search {
    max-width: none;
  }
}


/* Styles for the "Add Product" link */
.add-product-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 10px 20px;
  border-radius: 6px;
  background: var(--el-color-primary-dark-2);
  color: white;
  font-weight: 600;
}

.add-product-link:focus-visible {
  outline: 2px solid var(--el-color-primary);
  outline-offset: 4px;
}
</style>