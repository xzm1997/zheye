<template>
  <div class="signup-page mx-auto p-3 w-330">
    <validate-form @form-submit="onFormSubmit"></validate-form>
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
