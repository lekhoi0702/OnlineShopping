<script setup lang="ts">
import AccountSidebar from '@/components/AccountSidebar.vue'
import ProductCard from '@/components/ProductCard.vue'
</script>

<template>
  <main class="container account-page">
    <AccountSidebar />

    <section class="panel favorites-panel">
      <header class="favorites-heading">
        <h1>Sản phẩm yêu thích</h1>
        <p>Những sản phẩm bạn muốn xem lại.</p>
      </header>

      <div class="product-grid favorites-grid">
        <ProductCard
          name="Áo thun cotton cổ tròn"
          :price="159000"
          shop="Lami Fashion"
          image="/products/ao-thun.jpg"
        />

        <ProductCard
          name="Balo đi học"
          :price="289000"
          shop="Daily Bag"
          image="/products/balo.jpg"
        />

        <ProductCard
          name="Áo khoác nhẹ"
          :price="329000"
          shop="Lami Fashion"
          image="/products/ao-khoac.jpg"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.favorites-panel {
  min-width: 0;
}

.favorites-heading {
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.favorites-heading h1 {
  font-size: 26px;
}

.favorites-heading p {
  margin-top: 8px;
  color: var(--el-text-color-secondary);
}

.favorites-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (max-width: 1100px) {
  .favorites-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 540px) {
  .favorites-grid {
    grid-template-columns: 1fr;
  }
}
</style>