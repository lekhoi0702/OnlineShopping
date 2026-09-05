<script setup lang="ts">
defineProps<{
  name: string
  price: number
  shop: string
  image: string
}>()
</script>

<template>
  <article class="product-card">
        <img
    class="product-image"
    :src="image"
    :alt="name"
    loading="lazy"
    />

    <div class="product-info">
      <h3 class="product-name" :title="name">{{ name }}</h3>
      <p class="product-price">{{ price.toLocaleString('vi-VN') }} ₫</p>
      <p class="product-shop">{{ shop }}</p>
    </div>
  </article>
</template>

<style scoped>
.product-card {
  min-width: 0;
  height: 100%;
  overflow: hidden;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 10px;
  background: white;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.product-image {
  display: block;
  width: 100%;
  aspect-ratio: 1;
  padding: 16px;
  object-fit: contain;
  background: white;
}

.product-info {
  padding: 16px;
  border-top: 1px solid var(--el-border-color-lighter);
}

.product-name {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  overflow-wrap: anywhere;
  min-height: 3em;
  margin: 0 0 12px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
}

.product-price {
  color: var(--el-color-primary-dark-2);
  font-size: 22px;
  font-weight: 700;
}

.product-shop {
  margin-top: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

@media (hover: hover) {
  .product-card:hover {
    border-color: var(--el-color-primary);
    box-shadow: 0 4px 16px rgb(0 0 0 / 8%);
  }
}
</style>