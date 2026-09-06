<script setup lang="ts">
  import { ref } from 'vue'

  defineProps<{
    modelValue: boolean
  }>()

  const emit = defineEmits<{
    'update:modelValue': [value: boolean]
  }>()

  const selectedAddressId = ref(1)

  function updateVisibility(value: boolean) {
    emit('update:modelValue', value)
  }
</script>

<template>
  <el-dialog
    :model-value="modelValue"
    title="Chọn địa chỉ nhận hàng"
    width="min(600px, 90%)"
    @update:model-value="updateVisibility"
  >
    <el-radio-group v-model="selectedAddressId" class="address-options">
      <el-radio :value="1" class="address-option">
        <div class="address-option-content">
          <div class="address-option-heading">
            <strong>Nguyễn Minh Anh</strong>
            <span>0900 000 000</span>
            <el-tag size="small">Mặc định</el-tag>
          </div>

          <p>12 Đường Hoa Mai, Phường Minh An, Thành phố An Bình</p>
        </div>
      </el-radio>

      <el-radio :value="2" class="address-option">
        <div class="address-option-content">
          <div class="address-option-heading">
            <strong>Nguyễn Minh Anh</strong>
            <span>0900 000 000</span>
          </div>

          <p>Tầng 3, 25 Đường Bình Minh, Phường An Phú, Thành phố An Bình</p>
        </div>
      </el-radio>
    </el-radio-group>

    <template #footer>
      <el-button @click="updateVisibility(false)"> Hủy </el-button>

      <el-button type="primary" @click="updateVisibility(false)"> Xác nhận </el-button>
    </template>
  </el-dialog>
</template>

<style scoped>
  .address-options {
    display: grid;
    gap: 12px;
    width: 100%;
  }

  .address-option {
    width: 100%;
    height: auto;
    margin-right: 0;
    padding: 16px;
    border: 1px solid var(--el-border-color);
    border-radius: 8px;
    align-items: flex-start;
  }

  .address-option.is-checked {
    border-color: var(--el-color-primary);
    background: var(--el-color-primary-light-9);
  }

  .address-option-content {
    white-space: normal;
    line-height: 1.7;
  }

  .address-option-heading {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px 16px;
  }

  .address-option-content p {
    margin-top: 8px;
    color: var(--el-text-color-regular);
  }
</style>
