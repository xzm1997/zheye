<template>
  <div class="signup-page mx-auto p-3 w-330">
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label"></label>
      </div>
    </validate-form>
  </div>
</template>

<script lang="ts">
import ValidateForm from '@/components/ValidateForm.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { ValidateForm },

})
</script>

<style>

</style>
