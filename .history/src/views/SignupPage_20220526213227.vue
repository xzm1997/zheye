<template>
  <div class="signup-page mx-auto p-3 w-330">
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input
          :rules="emailRules" v-model="formData.email"
          placeholder="请输入地址"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">昵称</label>
        <validate-input
          :rules="nameRules" v-model="formData.nickname"
          placeholder="请输入昵称"
          type="text"
        />
      </div>
    </validate-form>
  </div>
</template>

<script lang="ts">
import ValidateForm from '@/components/ValidateForm.vue'
import ValidateInput from '@/components/ValidateInput.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { ValidateForm, ValidateInput },

})
</script>

<style>

</style>
