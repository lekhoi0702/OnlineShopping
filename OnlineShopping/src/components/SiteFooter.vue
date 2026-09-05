<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <section class="footer-intro">
          <h2 class="footer-brand">Online Shopping</h2>
          <p>
            Khám phá sản phẩm phù hợp với bạn từ nhiều cửa hàng.
          </p>
        </section>

        <section>
          <h2 class="footer-title">Hỗ trợ mua sắm</h2>
          <ul class="footer-list">
            <li>Hướng dẫn mua hàng</li>
            <li>Giao hàng và vận chuyển</li>
            <li>Đổi trả sản phẩm</li>
            <li>Câu hỏi thường gặp</li>
          </ul>
        </section>

        <section>
          <h2 class="footer-title">Về chúng tôi</h2>
          <ul class="footer-list">
            <li>Giới thiệu</li>
            <li>Liên hệ</li>
            <li>Điều khoản sử dụng</li>
            <li>Chính sách bảo mật</li>
          </ul>
        </section>

        <section>
          <h2 class="footer-title">Thanh toán</h2>
          <div class="payment-list">
            <span class="payment-item">COD</span>
            <span class="payment-item">Chuyển khoản</span>
          </div>
          <p class="payment-description">
            COD: thanh toán khi nhận hàng.
          </p>
        </section>
      </div>

      <div class="footer-bottom">
        <p>© 2026 Online Shopping.</p>
        <p>Tiếng Việt · Việt Nam</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: 40px;
  padding: 48px 0 24px;
  border-top: 3px solid var(--el-color-primary);
  background: white;
  color: var(--el-text-color-regular);
}

.footer-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) repeat(3, minmax(0, 1fr));
  gap: 32px;
}

.footer-grid > section {
  min-width: 0;
}

.footer-brand {
  margin-bottom: 16px;
  color: var(--el-color-primary-dark-2);
  font-size: 24px;
}

.footer-intro p {
  max-width: 300px;
  line-height: 1.8;
}

.footer-title {
  margin-bottom: 16px;
  color: var(--el-text-color-primary);
  font-size: 15px;
  font-weight: 700;
}

.footer-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.payment-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.payment-item {
  padding: 8px 12px;
  border: 1px solid var(--el-border-color);
  border-radius: 6px;
  color: var(--el-color-primary-dark-2);
  font-size: 13px;
  font-weight: 600;
}

.payment-description {
  margin-top: 12px;
  font-size: 13px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid var(--el-border-color-lighter);
  font-size: 13px;
}

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 540px) {
  .site-footer {
    padding-top: 32px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .footer-bottom {
    flex-direction: column;
  }
}
</style>