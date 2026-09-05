<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
</script>

<template>
  <main class="container shop-page">
    <section class="shop-cover" aria-label="Giới thiệu cửa hàng">
      <p>LAMI FASHION</p>
      <h1>Đơn giản, thoải mái, là chính bạn.</h1>
    </section>

    <section class="panel shop-profile">
      <div class="shop-identity">
        <div class="shop-logo" aria-hidden="true">LF</div>

        <div>
          <h2>Lami Fashion</h2>
          <p>Thời trang cho mỗi ngày</p>
        </div>
      </div>

      <div class="shop-actions">
        <el-button type="primary">Theo dõi</el-button>
        <el-button type="primary" plain>Chat với shop</el-button>
      </div>

      <dl class="shop-stats">
        <div>
          <dt>Đánh giá</dt>
          <dd>4.8 / 5</dd>
        </div>
        <div>
          <dt>Sản phẩm</dt>
          <dd>48</dd>
        </div>
        <div>
          <dt>Người theo dõi</dt>
          <dd>1.200</dd>
        </div>
        <div>
          <dt>Tham gia</dt>
          <dd>2 năm trước</dd>
        </div>
      </dl>
    </section>

    <section class="panel shop-products">
      <div class="shop-products-heading">
        <h2>Sản phẩm của cửa hàng</h2>

        <div class="shop-categories" role="group" aria-label="Danh mục cửa hàng">
          <el-button type="primary" plain aria-pressed="true">
            Tất cả
          </el-button>
          <el-button aria-pressed="false">Áo thun</el-button>
          <el-button aria-pressed="false">Áo khoác</el-button>
        </div>
      </div>

      <div class="product-grid">
        <ProductCard
          name="Áo thun cotton cổ tròn"
          :price="159000"
          shop="Lami Fashion"
          image="/products/ao-thun.jpg"
        />

        <ProductCard
          name="Áo khoác nhẹ"
          :price="329000"
          shop="Lami Fashion"
          image="/products/ao-khoac.jpg"
        />

        <ProductCard
          name="Áo thun phom rộng"
          :price="179000"
          shop="Lami Fashion"
          image="/products/ao-thun.jpg"
        />

        <ProductCard
          name="Áo khoác mặc hằng ngày"
          :price="299000"
          shop="Lami Fashion"
          image="/products/ao-khoac.jpg"
        />
      </div>
    </section>
  </main>
</template>


<style scoped>
.shop-page {
  padding-top: 24px;
  padding-bottom: 40px;
}

.shop-cover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  min-height: 240px;
  padding: 40px;
  border-radius: 12px;
  background: linear-gradient(
    120deg,
    var(--el-color-primary-dark-2),
    var(--el-color-primary)
  );
  color: white;
}

.shop-cover > p {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
}

.shop-cover h1 {
  max-width: 600px;
  font-size: 36px;
  line-height: 1.3;
}

.shop-profile {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 24px;
  margin-top: 20px;
}

.shop-identity {
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 0;
}

.shop-logo {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary-dark-2);
  font-size: 28px;
  font-weight: 700;
}

.shop-identity h2 {
  font-size: 24px;
}

.shop-identity p {
  margin-top: 6px;
  color: var(--el-text-color-secondary);
}

.shop-actions,
.shop-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.shop-actions > .el-button,
.shop-categories > .el-button {
  margin-left: 0;
}

.shop-stats {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  margin: 0;
  padding-top: 24px;
  border-top: 1px solid var(--el-border-color-lighter);
}

.shop-stats dt {
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

.shop-stats dd {
  margin: 8px 0 0;
  color: var(--el-color-primary-dark-2);
  font-size: 18px;
  font-weight: 600;
}

.shop-products {
  margin-top: 24px;
}

.shop-products-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
}

.shop-products-heading h2 {
  font-size: 20px;
}

@media (max-width: 768px) {
  .shop-cover {
    min-height: 200px;
    padding: 28px;
  }

  .shop-cover h1 {
    font-size: 28px;
  }

  .shop-profile {
    grid-template-columns: 1fr;
  }

  .shop-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .shop-identity {
    align-items: flex-start;
    gap: 12px;
  }

  .shop-logo {
    width: 56px;
    height: 56px;
    font-size: 22px;
  }

  .shop-identity h2 {
    font-size: 20px;
  }
}
</style>