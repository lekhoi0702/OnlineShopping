<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ProductCard from '@/components/ProductCard.vue'
</script>

<template>
  <main class="container detail-page">
    <nav class="breadcrumb" aria-label="Đường dẫn">
      <RouterLink to="/">Trang chủ</RouterLink>
      <span aria-hidden="true">/</span>
      <span>Thời trang</span>
      <span aria-hidden="true">/</span>
      <span aria-current="page">Áo thun cotton</span>
    </nav>

    <section class="panel product-overview">
      <div class="product-gallery">
        <img
          class="detail-image"
          src="/products/ao-thun.jpg"
          alt="Áo thun cotton tay ngắn"
        />
      </div>

      <div class="product-details">
        <h1>Áo thun cotton tay ngắn phom rộng dành cho nam và nữ</h1>

        <div class="product-stats">
          <span class="rating">★ 4.8 / 5</span>
          <span>128 đánh giá</span>
          <span>Đã bán 560</span>
        </div>

        <div class="price-box">
          <strong class="sale-price">159.000 ₫</strong>
          <del class="original-price">199.000 ₫</del>
          <el-tag type="danger" size="small">Giảm 20%</el-tag>
        </div>

        <dl class="product-facts">
          <div>
            <dt>Vận chuyển</dt>
            <dd>Chọn địa chỉ để xem phí giao hàng</dd>
          </div>
          <div>
            <dt>Cửa hàng</dt>
            <dd>Lami Fashion</dd>
          </div>
        </dl>

        <div class="option-row">
          <span class="option-label">Màu sắc</span>
          <div class="option-buttons" role="group" aria-label="Màu sắc">
            <el-button type="primary" plain aria-pressed="true">
              Trắng
            </el-button>
            <el-button aria-pressed="false">Đen</el-button>
            <el-button aria-pressed="false">Xanh</el-button>
          </div>
        </div>

        <div class="option-row">
          <span class="option-label">Kích thước</span>
          <div class="option-buttons" role="group" aria-label="Kích thước">
            <el-button aria-pressed="false">S</el-button>
            <el-button type="primary" plain aria-pressed="true">
              M
            </el-button>
            <el-button aria-pressed="false">L</el-button>
            <el-button aria-pressed="false">XL</el-button>
          </div>
        </div>

        <div class="option-row">
          <span class="option-label">Số lượng</span>
          <div class="quantity-preview" role="group" aria-label="Số lượng">
            <el-button aria-label="Giảm số lượng">−</el-button>
            <span>1</span>
            <el-button aria-label="Tăng số lượng">+</el-button>
          </div>
        </div>

        <div class="purchase-actions">
          <el-button type="primary" plain size="large">
            Thêm vào giỏ hàng
          </el-button>
          <el-button type="primary" size="large">
            Mua ngay
          </el-button>
        </div>
      </div>
    </section>

    <section class="panel shop-section">
      <div class="shop-avatar" aria-hidden="true">LF</div>
      <div>
        <h2>Lami Fashion</h2>
        <p>Thời trang đơn giản cho mỗi ngày</p>
      </div>
      <el-button type="primary" plain>Xem cửa hàng</el-button>
    </section>

    <section class="panel description-section">
      <h2>Mô tả sản phẩm</h2>
      <p>
        Áo thun cotton với thiết kế phom rộng, dễ phối cùng quần jeans,
        quần short hoặc chân váy.
      </p>
      <ul>
        <li>Kiểu dáng: tay ngắn, cổ tròn.</li>
        <li>Màu sắc: trắng, đen, xanh.</li>
        <li>Kích thước: S, M, L, XL.</li>
      </ul>
    </section>
    <!-- Reviews section -->
    <section class="panel reviews-section" aria-labelledby="reviews-title">
  <h2 id="reviews-title">Đánh giá sản phẩm</h2>

  <div class="reviews-summary">
    <div class="review-score">
      <p><strong>4.8</strong> / 5</p>
      <span class="review-stars" aria-hidden="true">★★★★★</span>
      <p class="review-count">128 đánh giá</p>
    </div>

    <div class="review-filters" role="group" aria-label="Lọc đánh giá">
      <el-button type="primary" plain aria-pressed="true">
        Tất cả
      </el-button>
      <el-button aria-pressed="false">5 sao</el-button>
      <el-button aria-pressed="false">4 sao</el-button>
      <el-button aria-pressed="false">Có hình ảnh</el-button>
    </div>
  </div>

  <div class="review-list">
    <article class="review-item">
      <div class="review-avatar" aria-hidden="true">MA</div>

      <div class="review-content">
        <h3>Minh Anh</h3>

        <div class="review-meta">
          <span class="review-stars" aria-label="5 trên 5 sao">
            <span aria-hidden="true">★★★★★</span>
          </span>
          <span>Phân loại: Trắng, M</span>
        </div>

        <p>Áo mềm, đường may gọn. Màu sắc giống hình, mặc vừa người.</p>

        <time class="review-date" datetime="2026-09-01">
          01/09/2026
        </time>
      </div>
    </article>

    <article class="review-item">
      <div class="review-avatar" aria-hidden="true">HT</div>

      <div class="review-content">
        <h3>Hoàng Tú</h3>

        <div class="review-meta">
          <span class="review-stars" aria-label="4 trên 5 sao">
            <span aria-hidden="true">★★★★☆</span>
          </span>
          <span>Phân loại: Đen, L</span>
        </div>

        <p>Phom áo rộng, mặc thoải mái. Vải hơi mỏng hơn mình dự tính.</p>

        <time class="review-date" datetime="2026-08-28">
          28/08/2026
        </time>
      </div>
    </article>
  </div>
</section>
<!-- Related products section -->

<section
  class="panel related-products"
  aria-labelledby="related-products-title"
>
  <div class="related-heading">
    <h2 id="related-products-title">Sản phẩm tương tự</h2>
    <RouterLink to="/">Xem thêm →</RouterLink>
  </div>

  <div class="product-grid">
    <ProductCard
      name="Áo khoác nhẹ"
      :price="329000"
      shop="Lami Fashion"
      image="/products/ao-khoac.jpg"
    />

    <ProductCard
      name="Áo thun cotton cổ tròn"
      :price="149000"
      shop="Daily Wear"
      image="/products/ao-thun.jpg"
    />

    <ProductCard
      name="Áo khoác mặc hằng ngày"
      :price="299000"
      shop="Daily Wear"
      image="/products/ao-khoac.jpg"
    />

    <ProductCard
      name="Áo thun phom rộng"
      :price="179000"
      shop="Lami Fashion"
      image="/products/ao-thun.jpg"
    />
  </div>
</section>
  </main>
</template>

<style scoped>
.detail-page {
  padding-top: 24px;
  padding-bottom: 40px;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

.breadcrumb a {
  color: var(--el-color-primary-dark-2);
}

.product-overview {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
  align-items: start;
  gap: 40px;
}

.product-gallery,
.product-details {
  min-width: 0;
}

.detail-image {
  display: block;
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 12px;
  padding: 24px;
}

.product-details h1 {
  font-size: 26px;
  line-height: 1.4;
  overflow-wrap: anywhere;
}

.product-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  margin-top: 16px;
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

.rating {
  color: var(--el-color-primary-dark-2);
  font-weight: 600;
}

.price-box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
  padding: 20px;
  border-radius: 8px;
  background: var(--el-color-primary-light-9);
}

.sale-price {
  color: var(--el-color-primary-dark-2);
  font-size: 32px;
}

.original-price {
  color: var(--el-text-color-secondary);
}

.product-facts {
  display: grid;
  gap: 16px;
  margin: 24px 0;
}

.product-facts > div,
.option-row {
  display: grid;
  grid-template-columns: 100px minmax(0, 1fr);
  align-items: start;
  gap: 16px;
}

.product-facts dt,
.option-label {
  color: var(--el-text-color-secondary);
}

.product-facts dd {
  margin: 0;
}

.option-row {
  align-items: center;
  margin-top: 20px;
}

.option-buttons,
.purchase-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.option-buttons > .el-button,
.purchase-actions > .el-button,
.quantity-preview > .el-button {
  margin-left: 0;
}

.quantity-preview {
  display: flex;
  align-items: center;
  gap: 16px;
}

.purchase-actions {
  margin-top: 32px;
  gap: 12px;
}

.purchase-actions > .el-button {
  flex: 1;
  min-width: 160px;
}

.shop-section {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 24px;
}

.shop-avatar {
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary-dark-2);
  font-size: 22px;
  font-weight: 700;
}

.shop-section h2,
.description-section h2 {
  font-size: 20px;
}

.shop-section p {
  margin-top: 4px;
  color: var(--el-text-color-secondary);
}

.description-section {
  margin-top: 24px;
  line-height: 1.8;
}

.description-section h2 {
  margin-bottom: 16px;
}

.description-section ul {
  margin: 16px 0 0;
  padding-left: 20px;
}

@media (max-width: 900px) {
  .product-overview {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .product-gallery {
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
  }
}

@media (max-width: 540px) {
  .product-details h1 {
    font-size: 22px;
  }

  .sale-price {
    font-size: 28px;
  }

  .product-facts > div,
  .option-row {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}
/* Reviews section */

.reviews-section {
  margin-top: 24px;
}

.reviews-section h2 {
  margin-bottom: 24px;
  font-size: 20px;
}

.reviews-summary {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 24px;
  border: 1px solid var(--el-color-primary-light-7);
  border-radius: 10px;
  background: var(--el-color-primary-light-9);
}

.review-score {
  flex-shrink: 0;
  text-align: center;
  color: var(--el-color-primary-dark-2);
}

.review-score strong {
  font-size: 36px;
}

.review-stars {
  color: #a86600;
  letter-spacing: 2px;
}

.review-count {
  margin-top: 8px;
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

.review-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.review-filters > .el-button {
  margin-left: 0;
}

.review-item {
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  gap: 16px;
  padding: 24px 0;
}

.review-item + .review-item {
  border-top: 1px solid var(--el-border-color-lighter);
}

.review-avatar {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--el-fill-color);
  color: var(--el-text-color-regular);
  font-weight: 600;
}

.review-content {
  min-width: 0;
  overflow-wrap: anywhere;
}

.review-content h3 {
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 600;
}

.review-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 16px;
  margin-bottom: 12px;
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

.review-content > p {
  line-height: 1.8;
}

.review-date {
  display: block;
  margin-top: 12px;
  color: var(--el-text-color-secondary);
  font-size: 12px;
}

@media (max-width: 600px) {
  .reviews-summary {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
    padding: 20px;
  }

  .review-filters {
    justify-content: center;
  }

  .review-item {
    gap: 12px;
  }
}
/* Related products section */
.related-products {
  margin-top: 24px;
}

.related-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
}

.related-heading h2 {
  font-size: 20px;
}

.related-heading a {
  color: var(--el-color-primary-dark-2);
  font-size: 14px;
}
</style>