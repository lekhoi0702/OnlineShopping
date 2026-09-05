<script setup lang="ts">
import { computed,ref,watch } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
const props = defineProps<{
  keyword: string
}>()
const selectedCategory = ref('')
const currentPage = ref(1)
const pageSize = 2

const sortBy = ref('default')

const sortOptions = [
  { label: 'Mặc định', value: 'default' },
  { label: 'Giá thấp → cao', value: 'price-asc' },
  { label: 'Giá cao → thấp', value: 'price-desc' },
]

const categories = ['Thời trang', 'Phụ kiện', 'Điện tử']

const products = [
  {
    id: 1,
    name: 'Áo thun cotton tay ngắn phom rộng dành cho nam và nữ',
    price: 159000,
    shop: 'Lami Fashion',
    category: 'Thời trang',
    image: '/products/ao-thun.jpg',
  },
  {
    id: 2,
    name: 'Balo đi học',
    price: 289000,
    shop: 'Daily Bag',
    category: 'Phụ kiện',
    image: '/products/balo.jpg',
  },
  {
    id: 3,
    name: 'Tai nghe không dây',
    price: 450000,
    shop: 'Tech House',
    category: 'Điện tử',
    image: '/products/tai-nghe.jpg',
  },
  {
    id: 4,
    name: 'Áo khoác nhẹ',
    price: 329000,
    shop: 'Lami Fashion',
    category: 'Thời trang',
    image: '/products/ao-khoac.jpg',
  },
]


const filteredProducts = computed(() => {
 const searchText = props.keyword.trim().toLowerCase()

  return products.filter((product) => {
    const matchesName = product.name.toLowerCase().includes(searchText)

    const matchesCategory =
      selectedCategory.value === '' ||
      product.category === selectedCategory.value

    return matchesName && matchesCategory
  })
})

const sortedProducts = computed(() => {
  const result = [...filteredProducts.value]

  if (sortBy.value === 'price-asc') {
    result.sort((a, b) => a.price - b.price)
  } else if (sortBy.value === 'price-desc') {
    result.sort((a, b) => b.price - a.price)
  }

  return result
})

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * pageSize

  return sortedProducts.value.slice(start, start + pageSize)
})

watch([() => props.keyword, selectedCategory, sortBy], () => {
  currentPage.value = 1
})
</script>

<template>
  <main class="container home-page">
    <section class="banner-grid" aria-label="Giới thiệu mua sắm">
  <div class="banner banner-main">
    <p class="banner-label">ONLINE SHOPPING</p>
    <h1>Khám phá phong cách của bạn</h1>
    <p>Thời trang, phụ kiện và đồ dùng từ nhiều cửa hàng.</p>
  </div>

  <div class="banner banner-fashion">
    <p class="banner-label">THỜI TRANG</p>
    <h2>Diện đẹp mỗi ngày</h2>
    <p>Những lựa chọn cho phong cách riêng.</p>
  </div>

  <div class="banner banner-tech">
    <p class="banner-label">ĐIỆN TỬ</p>
    <h2>Tiện ích trong tầm tay</h2>
    <p>Khám phá phụ kiện cho cuộc sống hằng ngày.</p>
  </div>
</section>
    <section class="panel">
      <h2 class="section-title">Danh mục</h2>

      <div class="category-grid">
      <button
        type="button"
        class="category-item"
        :class="{ 'is-active': selectedCategory === '' }"
        :aria-pressed="selectedCategory === ''"
        @click="selectedCategory = ''"
      >
        Tất cả
      </button>

      <button
        v-for="category in categories"
        :key="category"
        type="button"
        class="category-item"
        :class="{ 'is-active': selectedCategory === category }"
        :aria-pressed="selectedCategory === category"
        @click="selectedCategory = category"
      >
        {{ category }}
      </button>
</div>
    </section>
    <section class="panel">
      <h2 class="section-title">
        Sản phẩm ({{ filteredProducts.length }})
      </h2>
      <div class="sort-toolbar">
  <span class="sort-label">Sắp xếp theo</span>

  <div class="sort-options" role="group" aria-label="Sắp xếp sản phẩm">
    <el-button
      v-for="option in sortOptions"
      :key="option.value"
      :type="sortBy === option.value ? 'primary' : 'default'"
      :aria-pressed="sortBy === option.value"
      @click="sortBy = option.value"
    >
      {{ option.label }}
    </el-button>
  </div>
</div>
      <div v-if="filteredProducts.length > 0" class="product-grid">
        <ProductCard
          v-for="product in paginatedProducts"
          :key="product.id"
          :name="product.name"
          :price="product.price"
          :shop="product.shop"
          :image="product.image"
        />
      </div>

      <p v-else class="muted">
        Không tìm thấy sản phẩm phù hợp. Hãy thử từ khóa hoặc danh mục khác.
      </p>
      <nav
  v-if="filteredProducts.length > pageSize"
  class="pagination"
  aria-label="Phân trang sản phẩm"
>
  <el-pagination
    v-model:current-page="currentPage"
    :page-size="pageSize"
    :total="filteredProducts.length"
    :pager-count="5"
    layout="prev, pager, next"
    background
  />
</nav>
    </section>
  </main>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 24px;
  padding-bottom: 40px;
}

.banner-grid {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  gap: 16px;
}

.banner {
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  padding: 24px;
  border-radius: 12px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary-dark-2);
  overflow-wrap: anywhere;
}

.banner-main {
  grid-row: span 2;
  min-height: 320px;
  padding: 40px;
  background: linear-gradient(
    120deg,
    var(--el-color-primary-dark-2),
    var(--el-color-primary)
  );
  color: white;
}

.banner-label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
}

.banner h1 {
  max-width: 480px;
  font-size: 36px;
  line-height: 1.2;
}

.banner h2 {
  font-size: 22px;
  line-height: 1.3;
}

.banner-tech {
  background: #eaf5f7;
  color: #245968;
}

@media (max-width: 768px) {
  .banner-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .banner-main {
    grid-column: 1 / -1;
    grid-row: auto;
    min-height: 260px;
    padding: 28px;
  }

  .banner h1 {
    font-size: 28px;
  }
}


.section-title {
  margin-bottom: 16px;
  font-size: 20px;
}

.muted {
  color: #666;
}

@media (max-width: 480px) {
  .banner-grid {
    grid-template-columns: 1fr;
  }
}


/* Category Grid */
.category-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.category-item {
  min-width: 0;
  min-height: 30px;
  padding: 16px;
  border: 1px solid var(--el-border-color);
  border-radius: 10px;
  background: white;
  color: var(--el-text-color-primary);
  font: inherit;
  font-weight: 600;
  overflow-wrap: anywhere;
  cursor: pointer;
  transition:
    border-color 0.2s,
    background-color 0.2s,
    color 0.2s;
}

@media (hover: hover) {
  .category-item:hover {
    border-color: var(--el-color-primary);
    color: var(--el-color-primary);
  }
}

.category-item.is-active {
  border-color: var(--el-color-primary);
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary-dark-2);
}

.category-item:focus-visible {
  outline: 2px solid var(--el-color-primary);
  outline-offset: 3px;
}

@media (max-width: 600px) {
  .category-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid var(--el-border-color-lighter);
}

/* Sort Toolbar */
.sort-toolbar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px 20px;
  margin-bottom: 20px;
  padding: 16px;
  border-radius: 8px;
  background: var(--el-fill-color-light);
}

.sort-label {
  color: var(--el-text-color-regular);
  font-weight: 500;
}

.sort-options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.sort-options > .el-button {
  margin-left: 0;
}
</style>