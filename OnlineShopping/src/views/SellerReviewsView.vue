<script setup lang="ts">
import SellerLayout from '@/components/SellerLayout.vue'
</script>

<template>
  <SellerLayout>
    <header class="reviews-heading">
      <h1>Đánh giá của khách hàng</h1>
      <p>Xem nhận xét và chuẩn bị phản hồi cho khách hàng.</p>
    </header>

    <section class="panel seller-reviews">
      <div class="review-toolbar">
        <div class="shop-rating">
          <strong>4.8</strong>
          <span>/ 5 · 128 đánh giá</span>
        </div>

        <div class="review-filters" role="group" aria-label="Trạng thái phản hồi">
          <el-button type="primary" plain aria-pressed="true">
            Tất cả
          </el-button>
          <el-button aria-pressed="false">Chưa phản hồi</el-button>
          <el-button aria-pressed="false">Đã phản hồi</el-button>
        </div>
      </div>

      <article class="seller-review">
        <header class="review-customer">
          <div>
            <h2>Nguyễn Minh Anh</h2>
            <p>Áo thun cotton tay ngắn · Trắng, M</p>
          </div>
          <el-tag type="warning">Chưa phản hồi</el-tag>
        </header>

        <p class="review-stars">
          <span aria-hidden="true">★★★★★</span>
          <span class="rating-text">5 / 5</span>
        </p>

        <p class="review-comment">
          Áo mềm, đường may gọn. Shop đóng gói cẩn thận.
        </p>

        <time class="review-date" datetime="2026-09-05">
          05/09/2026
        </time>

        <div class="reply-editor">
          <label for="review-reply">Phản hồi của cửa hàng</label>

          <el-input
            id="review-reply"
            type="textarea"
            :rows="3"
            placeholder="Viết lời cảm ơn hoặc giải đáp nhận xét của khách…"
            resize="vertical"
          />

          <div class="reply-actions">
            <el-button type="primary">Gửi phản hồi</el-button>
          </div>
        </div>
      </article>

      <article class="seller-review">
        <header class="review-customer">
          <div>
            <h2>Trần Hoàng Tú</h2>
            <p>Áo khoác nhẹ · Xanh, L</p>
          </div>
          <el-tag type="success">Đã phản hồi</el-tag>
        </header>

        <p class="review-stars">
          <span aria-hidden="true">★★★★☆</span>
          <span class="rating-text">4 / 5</span>
        </p>

        <p class="review-comment">
          Áo mặc thoải mái, màu thực tế hơi đậm hơn ảnh.
        </p>

        <time class="review-date" datetime="2026-09-04">
          04/09/2026
        </time>

        <div class="shop-reply">
          <h3>Phản hồi từ Lami Fashion</h3>
          <p>
            Cảm ơn bạn đã góp ý. Shop sẽ kiểm tra lại hình ảnh
            để thể hiện màu sản phẩm rõ hơn.
          </p>
        </div>
      </article>
    </section>
  </SellerLayout>
</template>

<style scoped>
.reviews-heading {
  margin-bottom: 24px;
}

.reviews-heading h1 {
  font-size: 28px;
}

.reviews-heading p {
  margin-top: 8px;
  color: var(--el-text-color-secondary);
}

.seller-reviews {
  min-width: 0;
}

.review-toolbar,
.review-customer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.review-toolbar {
  padding-bottom: 24px;
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.shop-rating {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
}

.shop-rating strong {
  color: var(--el-color-primary-dark-2);
  font-size: 32px;
}

.shop-rating span {
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

.seller-review {
  padding: 24px 0;
  overflow-wrap: anywhere;
}

.seller-review + .seller-review {
  border-top: 1px solid var(--el-border-color-lighter);
}

.review-customer h2 {
  font-size: 16px;
}

.review-customer p {
  margin-top: 6px;
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

.review-stars {
  margin-top: 16px;
  color: #a86600;
}

.rating-text {
  margin-left: 8px;
  font-size: 13px;
}

.review-comment {
  margin-top: 12px;
  line-height: 1.8;
}

.review-date {
  display: block;
  margin-top: 12px;
  color: var(--el-text-color-secondary);
  font-size: 12px;
}

.reply-editor,
.shop-reply {
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
  background: var(--el-fill-color-light);
}

.reply-editor {
  display: grid;
  gap: 12px;
}

.reply-editor label,
.shop-reply h3 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
}

.reply-actions {
  display: flex;
  justify-content: flex-end;
}

.shop-reply p {
  margin-top: 8px;
  color: var(--el-text-color-regular);
  line-height: 1.8;
}

@media (max-width: 540px) {
  .reply-editor,
  .shop-reply {
    padding: 16px;
  }

  .reply-actions > .el-button {
    width: 100%;
  }
}
</style>