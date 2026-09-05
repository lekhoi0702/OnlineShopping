<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'

const cartItems = ref([
  {
    id: 1,
    name: 'Áo thun cotton tay ngắn',
    shop: 'Lami Fashion',
    price: 159000,
    image: '/products/ao-thun.jpg',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Balo đi học',
    shop: 'Daily Bag',
    price: 289000,
    image: '/products/balo.jpg',
    quantity: 1,
  },
])

const subtotal = computed(() => {
  return cartItems.value.reduce((total, item) => {
    return total + item.price * (item.quantity ?? 0)
  }, 0)
})

function removeItem(id: number) {
  cartItems.value = cartItems.value.filter((item) => item.id !== id)
}
</script>

<template>
  <main class="container cart-page">
    <div class="cart-heading">
      <h1>Giỏ hàng</h1>
      <RouterLink to="/">Tiếp tục mua sắm →</RouterLink>
    </div>

    <div v-if="cartItems.length > 0" class="cart-layout">
      <section class="panel" aria-label="Sản phẩm trong giỏ">
        <article
          v-for="item in cartItems"
          :key="item.id"
          class="cart-item"
        >
          <img class="cart-image" :src="item.image" :alt="item.name" />

          <div class="cart-info">
            <p class="cart-shop">{{ item.shop }}</p>
            <h2>{{ item.name }}</h2>
            <p class="cart-price">
              {{ item.price.toLocaleString('vi-VN') }} ₫
            </p>
          </div>
          <div class="cart-quantity">
            <label :for="'quantity-' + item.id">Số lượng</label>
            <el-input-number
              :id="'quantity-' + item.id"
              v-model="item.quantity"
              :min="1"
              :precision="0"
              :value-on-clear="1"
              size="small"
            />
            <el-button
  class="remove-button"
  type="danger"
  text
  :aria-label="'Xóa ' + item.name + ' khỏi giỏ hàng'"
  @click="removeItem(item.id)"
>
  Xóa
</el-button>
          </div>
        </article>
      </section>
      <aside class="panel cart-summary">
        <h2>Tóm tắt đơn hàng</h2>

        <div class="summary-row">
          <span>Số loại sản phẩm</span>
          <span>{{ cartItems.length }}</span>
        </div>

        <div class="summary-row">
          <span>Phí vận chuyển</span>
          <span>Chưa tính</span>
        </div>

        <div class="summary-row summary-total">
          <span>Tạm tính</span>
          <strong>{{ subtotal.toLocaleString('vi-VN') }} ₫</strong>
        </div>

        <el-button
          class="checkout-button"
          type="primary"
          size="large"
          disabled
        >
          Tiến hành đặt hàng
        </el-button>
      </aside>
    </div>
    <section v-else class="panel empty-cart">
  <div class="empty-symbol" aria-hidden="true">🛒</div>

  <h2>Giỏ hàng của bạn đang trống</h2>
  <p>Khám phá sản phẩm và tìm món đồ bạn yêu thích.</p>

  <RouterLink class="continue-shopping" to="/">
    Khám phá sản phẩm
  </RouterLink>
</section>
  </main>
</template>


<style scoped>
.cart-page {
  padding-top: 32px;
  padding-bottom: 40px;
}

.cart-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
}

.cart-heading h1 {
  font-size: 28px;
}

.cart-heading a {
  color: var(--el-color-primary-dark-2);
}

.cart-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 340px;
  align-items: start;
  gap: 24px;
}

.cart-item {
  display: grid;
  grid-template-columns: 100px minmax(0, 1fr) 130px;
  align-items: center;
  gap: 20px;
  padding: 24px 0;
}

.cart-item + .cart-item {
  border-top: 1px solid var(--el-border-color-lighter);
}

.cart-image {
  display: block;
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
}

.cart-info {
  min-width: 0;
  overflow-wrap: anywhere;
}

.cart-shop {
  margin-bottom: 8px;
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

.cart-info h2 {
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
}

.cart-price {
  color: var(--el-color-primary-dark-2);
  font-size: 18px;
  font-weight: 700;
}

.cart-quantity {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 13px;
}

.cart-summary h2 {
  margin-bottom: 24px;
  font-size: 20px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px 16px;
  margin-bottom: 16px;
}

.summary-total {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--el-border-color-lighter);
}

.summary-total strong {
  color: var(--el-color-primary-dark-2);
  font-size: 22px;
}

.checkout-button {
  width: 100%;
  margin-top: 8px;
}

@media (max-width: 900px) {
  .cart-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .cart-item {
    grid-template-columns: 72px minmax(0, 1fr);
    gap: 16px;
  }

  .cart-quantity {
    grid-column: 2;
  }
}

/* Empty cart styles */
.remove-button {
  align-self: flex-start;
}

.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 56px 24px;
  text-align: center;
}

.empty-symbol {
  display: grid;
  place-items: center;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: var(--el-color-primary-light-9);
  font-size: 40px;
}

.empty-cart h2 {
  font-size: 24px;
}

.empty-cart p {
  max-width: 360px;
  color: var(--el-text-color-secondary);
}

.continue-shopping {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  margin-top: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  background: var(--el-color-primary-dark-2);
  color: white;
  font-weight: 600;
}

.continue-shopping:focus-visible {
  outline: 2px solid var(--el-color-primary);
  outline-offset: 4px;
}

@media (max-width: 600px) {
  .empty-cart {
    padding: 40px 20px;
  }

  .empty-cart h2 {
    font-size: 20px;
  }
}
</style>