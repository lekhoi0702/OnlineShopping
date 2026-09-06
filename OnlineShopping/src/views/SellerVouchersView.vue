<script setup lang="ts">
  import SellerLayout from '@/components/SellerLayout.vue'
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'

  const router = useRouter()

  function openVoucherForm() {
    router.push('/seller/vouchers/new')
  }
  const vouchers = [
    {
      code: 'LAMI20',
      discount: '20.000 ₫',
      minimum: '200.000 ₫',
      usage: '12 / 100',
      expires: '30/09/2026',
      status: 'Đang diễn ra',
      statusType: 'success',
    },
    {
      code: 'WELCOME10',
      discount: '10%, tối đa 50.000 ₫',
      minimum: '300.000 ₫',
      usage: '0 / 50',
      expires: '31/10/2026',
      status: 'Sắp diễn ra',
      statusType: 'warning',
    },
    {
      code: 'SUMMER15',
      discount: '15.000 ₫',
      minimum: '150.000 ₫',
      usage: '80 / 80',
      expires: '31/08/2026',
      status: 'Đã kết thúc',
      statusType: 'info',
    },
  ]

  const isDetailDialogVisible = ref(false)

  const selectedVoucher = ref<(typeof vouchers)[number] | null>(null)

  function openVoucherDetail(voucher: (typeof vouchers)[number]) {
    selectedVoucher.value = voucher
    isDetailDialogVisible.value = true
  }
</script>

<template>
  <SellerLayout>
    <header class="vouchers-heading">
      <div>
        <h1>Mã giảm giá của shop</h1>
        <p>Quản lý ưu đãi dành cho khách mua hàng.</p>
      </div>
      <el-button type="primary" size="large" @click="openVoucherForm">
        + Tạo mã giảm giá
      </el-button>
    </header>

    <div class="voucher-stats">
      <section class="panel">
        <h2>Đang diễn ra</h2>
        <strong>1</strong>
      </section>

      <section class="panel">
        <h2>Sắp diễn ra</h2>
        <strong>1</strong>
      </section>

      <section class="panel">
        <h2>Lượt sử dụng</h2>
        <strong>92</strong>
      </section>
    </div>

    <section class="panel voucher-management">
      <div class="voucher-filters" role="group" aria-label="Trạng thái mã giảm giá">
        <el-button type="primary" plain aria-pressed="true"> Tất cả </el-button>
        <el-button aria-pressed="false">Đang diễn ra</el-button>
        <el-button aria-pressed="false">Sắp diễn ra</el-button>
        <el-button aria-pressed="false">Đã kết thúc</el-button>
      </div>
      <el-empty v-if="vouchers.length === 0" description="Shop chưa có mã giảm giá" />
      <el-table v-else :data="vouchers" row-key="code" stripe>
        <el-table-column label="Mã giảm giá" min-width="160">
          <template #default="scope">
            <span class="voucher-code">{{ scope.row.code }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="discount" label="Mức giảm" min-width="200" />
        <el-table-column prop="minimum" label="Đơn tối thiểu" width="150" />
        <el-table-column prop="usage" label="Đã dùng / Giới hạn" width="160" />
        <el-table-column prop="expires" label="Ngày hết hạn" width="140" />

        <el-table-column label="Trạng thái" width="160">
          <template #default="scope">
            <el-tag :type="scope.row.statusType">
              {{ scope.row.status }}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column label="Thao tác" width="130">
          <template #default="scope">
            <el-button type="primary" text @click="openVoucherDetail(scope.row)">
              Xem chi tiết
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>

    <el-dialog v-model="isDetailDialogVisible" title="Chi tiết mã giảm giá" width="min(520px, 90%)">
      <el-descriptions v-if="selectedVoucher" :column="1" border>
        <el-descriptions-item label="Mã giảm giá">
          <strong>{{ selectedVoucher.code }}</strong>
        </el-descriptions-item>

        <el-descriptions-item label="Mức giảm">
          {{ selectedVoucher.discount }}
        </el-descriptions-item>

        <el-descriptions-item label="Đơn tối thiểu">
          {{ selectedVoucher.minimum }}
        </el-descriptions-item>

        <el-descriptions-item label="Đã dùng / Giới hạn">
          {{ selectedVoucher.usage }}
        </el-descriptions-item>

        <el-descriptions-item label="Ngày hết hạn">
          {{ selectedVoucher.expires }}
        </el-descriptions-item>

        <el-descriptions-item label="Trạng thái">
          {{ selectedVoucher.status }}
        </el-descriptions-item>
      </el-descriptions>
      <template #footer>
        <el-button @click="isDetailDialogVisible = false"> Đóng </el-button>
      </template>
    </el-dialog>
  </SellerLayout>
</template>

<style scoped>
  .vouchers-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 24px;
  }

  .vouchers-heading h1 {
    font-size: 28px;
  }

  .vouchers-heading p {
    margin-top: 8px;
    color: var(--el-text-color-secondary);
  }

  .voucher-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    margin-bottom: 24px;
  }

  .voucher-stats h2 {
    font-size: 15px;
    font-weight: 500;
  }

  .voucher-stats strong {
    display: block;
    margin-top: 16px;
    color: var(--el-color-primary-dark-2);
    font-size: 32px;
  }

  .voucher-management {
    min-width: 0;
  }

  .voucher-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
  }

  .voucher-filters > .el-button {
    margin-left: 0;
  }

  .voucher-code {
    color: var(--el-color-primary-dark-2);
    font-weight: 700;
    letter-spacing: 1px;
  }

  @media (max-width: 900px) {
    .voucher-stats {
      grid-template-columns: 1fr;
    }
  }
</style>
