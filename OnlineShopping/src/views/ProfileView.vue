<script setup lang="ts">
import AccountSidebar from '@/components/AccountSidebar.vue'
</script>

<template>
  <main class="container account-page">
    <AccountSidebar />

    <section class="panel profile-panel">
      <header class="profile-heading">
        <h1>Hồ sơ của tôi</h1>
        <p>Quản lý thông tin cá nhân của bạn.</p>
      </header>

      <div class="profile-content">
        <el-form
          class="profile-form"
          label-position="top"
          @submit.prevent
        >
          <el-form-item label="Họ và tên">
            <el-input
              model-value="Nguyễn Minh Anh"
              size="large"
              autocomplete="name"
            />
          </el-form-item>

          <el-form-item label="Email">
            <el-input
              model-value="minhanh@example.com"
              type="email"
              size="large"
              autocomplete="email"
            />
          </el-form-item>

          <el-form-item label="Số điện thoại">
            <el-input
              model-value="0900 000 000"
              type="tel"
              size="large"
              autocomplete="tel"
            />
          </el-form-item>

          <el-button type="primary" size="large">
            Lưu thay đổi
          </el-button>
        </el-form>

        <div class="profile-photo">
          <div class="photo-placeholder" aria-hidden="true">MA</div>
          <el-button>Chọn ảnh</el-button>
          <p>Ảnh đại diện của bạn</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>


.profile-panel {
  min-width: 0;
}

.profile-heading {
  padding-bottom: 24px;
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.profile-heading h1 {
  font-size: 26px;
}

.profile-heading p {
  margin-top: 8px;
  color: var(--el-text-color-secondary);
}

.profile-content {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 220px;
  gap: 40px;
  padding-top: 28px;
}

.profile-form {
  width: 100%;
  max-width: 520px;
  min-width: 0;
}

.profile-photo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-left: 24px;
  border-left: 1px solid var(--el-border-color-lighter);
}

.photo-placeholder {
  display: grid;
  place-items: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary-dark-2);
  font-size: 36px;
  font-weight: 600;
}

.profile-photo p {
  text-align: center;
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

@media (max-width: 1000px) {
  .profile-content {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .profile-photo {
    padding: 24px 0 0;
    border-left: 0;
    border-top: 1px solid var(--el-border-color-lighter);
  }
}

</style>