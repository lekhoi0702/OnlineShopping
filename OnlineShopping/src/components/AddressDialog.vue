<script setup lang="ts">
  import { reactive, watch } from 'vue'

  type AddressData = {
    id: number
    fullName: string
    phoneNumber: string
    provinceOrCity: string
    ward: string
    addressDetail: string
    addressType: string
    isDefault: boolean
  }

  const props = defineProps<{
    modelValue: boolean
    address: AddressData | null
  }>()

  const emit = defineEmits<{
    'update:modelValue': [value: boolean]
  }>()

  const addressForm = reactive({
    fullName: '',
    phoneNumber: '',
    provinceOrCity: '',
    ward: '',
    addressDetail: '',
    addressType: 'home',
    isDefault: false,
  })

  function fillAddressForm(address: AddressData | null) {
    if (address === null) {
      addressForm.fullName = ''
      addressForm.phoneNumber = ''
      addressForm.provinceOrCity = ''
      addressForm.ward = ''
      addressForm.addressDetail = ''
      addressForm.addressType = 'home'
      addressForm.isDefault = false
      return
    }

    addressForm.fullName = address.fullName
    addressForm.phoneNumber = address.phoneNumber
    addressForm.provinceOrCity = address.provinceOrCity
    addressForm.ward = address.ward
    addressForm.addressDetail = address.addressDetail
    addressForm.addressType = address.addressType
    addressForm.isDefault = address.isDefault
  }

  function updateVisibility(value: boolean) {
    emit('update:modelValue', value)
  }

  watch(
    () => props.modelValue,
    (isVisible) => {
      if (isVisible) {
        fillAddressForm(props.address)
      }
    },
  )
</script>

<template>
  <el-dialog
    :model-value="modelValue"
    :title="address === null ? 'Thêm địa chỉ mới' : 'Cập nhật địa chỉ'"
    width="min(680px, 90%)"
    @update:model-value="updateVisibility"
  >
    <el-form label-position="top" @submit.prevent>
      <div class="address-form-grid">
        <el-form-item label="Họ và tên">
          <el-input
            v-model="addressForm.fullName"
            size="large"
            placeholder="Nhập họ và tên người nhận"
            autocomplete="name"
          />
        </el-form-item>

        <el-form-item label="Số điện thoại">
          <el-input
            v-model="addressForm.phoneNumber"
            type="tel"
            size="large"
            placeholder="Nhập số điện thoại"
            autocomplete="tel"
          />
        </el-form-item>

        <el-form-item label="Tỉnh / Thành phố">
          <el-input
            v-model="addressForm.provinceOrCity"
            size="large"
            placeholder="Nhập tỉnh hoặc thành phố"
          />
        </el-form-item>

        <el-form-item label="Phường / Xã">
          <el-input v-model="addressForm.ward" size="large" placeholder="Nhập phường hoặc xã" />
        </el-form-item>

        <el-form-item class="address-form-full-width" label="Địa chỉ cụ thể">
          <el-input
            v-model="addressForm.addressDetail"
            type="textarea"
            :rows="3"
            placeholder="Số nhà, tên đường, tòa nhà…"
            autocomplete="street-address"
            resize="vertical"
          />
        </el-form-item>
      </div>

      <p class="address-type-title">Loại địa chỉ</p>

      <div class="address-type-options" role="group" aria-label="Loại địa chỉ">
        <el-button
          :type="addressForm.addressType === 'home' ? 'primary' : ''"
          :plain="addressForm.addressType === 'home'"
          :aria-pressed="addressForm.addressType === 'home'"
          @click="addressForm.addressType = 'home'"
        >
          Nhà riêng
        </el-button>

        <el-button
          :type="addressForm.addressType === 'office' ? 'primary' : ''"
          :plain="addressForm.addressType === 'office'"
          :aria-pressed="addressForm.addressType === 'office'"
          @click="addressForm.addressType = 'office'"
        >
          Văn phòng
        </el-button>
      </div>
      <el-checkbox v-model="addressForm.isDefault" class="default-address-checkbox">
        Đặt làm địa chỉ mặc định
      </el-checkbox>
    </el-form>

    <template #footer>
      <el-button @click="updateVisibility(false)"> Hủy </el-button>

      <el-button type="primary">
        {{ address === null ? 'Lưu địa chỉ' : 'Cập nhật' }}
      </el-button>
    </template>
  </el-dialog>
</template>

<style scoped>
  .address-form-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 24px;
  }

  .address-form-grid > .el-form-item {
    min-width: 0;
  }

  .address-form-full-width {
    grid-column: 1 / -1;
  }

  .address-type-title {
    margin-bottom: 12px;
    color: var(--el-text-color-regular);
  }

  .address-type-options {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .address-type-options > .el-button {
    margin-left: 0;
  }

  @media (max-width: 1000px) {
    .address-form-grid {
      grid-template-columns: 1fr;
    }
  }
  .default-address-checkbox {
    margin-top: 20px;
  }
</style>
