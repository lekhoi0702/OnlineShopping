<script setup lang="ts">
  import { ref } from 'vue'
  import AccountSidebar from '@/components/AccountSidebar.vue'
  import AddressDialog from '@/components/AddressDialog.vue'

  const addresses = [
    {
      id: 1,
      fullName: 'Nguyễn Minh Anh',
      phoneNumber: '0900 000 000',
      provinceOrCity: 'Thành phố An Bình',
      ward: 'Phường Minh An',
      addressDetail: '12 Đường Hoa Mai',
      addressType: 'home',
      isDefault: true,
    },
    {
      id: 2,
      fullName: 'Nguyễn Minh Anh',
      phoneNumber: '0900 000 000',
      provinceOrCity: 'Thành phố An Bình',
      ward: 'Phường An Phú',
      addressDetail: 'Tầng 3, 25 Đường Bình Minh',
      addressType: 'office',
      isDefault: false,
    },
  ]

  const isAddressDialogVisible = ref(false)
  const selectedAddress = ref<(typeof addresses)[number] | null>(null)

  function openAddAddressDialog() {
    selectedAddress.value = null
    isAddressDialogVisible.value = true
  }

  function openUpdateAddressDialog(address: (typeof addresses)[number]) {
    selectedAddress.value = address
    isAddressDialogVisible.value = true
  }
</script>

<template>
  <main class="container account-page">
    <AccountSidebar />

    <section class="panel addresses-panel">
      <header class="addresses-heading">
        <div>
          <h1>Địa chỉ của tôi</h1>
          <p>Quản lý địa chỉ nhận hàng của bạn.</p>
        </div>

        <el-button type="primary" @click="openAddAddressDialog"> + Thêm địa chỉ mới </el-button>
      </header>
      <el-empty
        v-if="addresses.length === 0"
        class="address-empty"
        description="Bạn chưa có địa chỉ nhận hàng"
      >
        <el-button type="primary" @click="openAddAddressDialog"> + Thêm địa chỉ mới </el-button>
      </el-empty>
      <div v-else class="address-list">
        <article v-for="address in addresses" :key="address.id" class="address-card">
          <div class="address-content">
            <h2>{{ address.fullName }}</h2>

            <p class="address-phone">
              {{ address.phoneNumber }}
            </p>

            <p>
              {{ address.addressDetail }}, {{ address.ward }},
              {{ address.provinceOrCity }}
            </p>

            <div class="address-tags">
              <el-tag v-if="address.isDefault" size="small"> Mặc định </el-tag>

              <el-tag type="info" size="small">
                {{ address.addressType === 'home' ? 'Nhà riêng' : 'Văn phòng' }}
              </el-tag>
            </div>
          </div>

          <div class="address-actions">
            <el-button type="primary" text @click="openUpdateAddressDialog(address)">
              Cập nhật
            </el-button>

            <template v-if="!address.isDefault">
              <el-popconfirm
                title="Bạn có chắc muốn xóa địa chỉ này?"
                confirm-button-text="Xóa"
                cancel-button-text="Hủy"
                confirm-button-type="danger"
                :width="300"
              >
                <template #reference>
                  <el-button type="danger" text> Xóa </el-button>
                </template>
              </el-popconfirm>
              <el-button> Đặt làm mặc định </el-button>
            </template>
          </div>
        </article>
      </div>
    </section>
    <AddressDialog v-model="isAddressDialogVisible" :address="selectedAddress" />
  </main>
</template>

<style scoped>
  .addresses-panel {
    min-width: 0;
  }

  .addresses-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--el-border-color-lighter);
  }

  .addresses-heading h1 {
    font-size: 26px;
  }

  .addresses-heading p {
    margin-top: 8px;
    color: var(--el-text-color-secondary);
  }

  .address-card {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: start;
    gap: 24px;
    padding: 24px 0;
  }

  .address-card + .address-card {
    border-top: 1px solid var(--el-border-color-lighter);
  }

  .address-content {
    min-width: 0;
    overflow-wrap: anywhere;
    line-height: 1.8;
  }

  .address-content h2 {
    font-size: 17px;
  }

  .address-phone {
    margin: 4px 0 8px;
    color: var(--el-text-color-secondary);
  }

  .address-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
  }

  .address-actions {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
  }

  .address-actions > .el-button {
    margin-left: 0;
  }

  @media (max-width: 1000px) {
    .address-card {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .address-actions {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
    }
  }
  .address-empty {
    padding: 48px 0;
  }
</style>
