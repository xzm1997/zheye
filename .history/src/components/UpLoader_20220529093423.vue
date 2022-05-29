<template>
  <div class="file-upload">
    <button class="btn btn-primary">点击上传</button>
    <input
      type="file"
      class="file-input d-none"
      ref="fileInput"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup () {
    const fileInput = ref<null | HTMLInputElement>(null)
    const triggerUpload = () => {
      if (fileInput.va)
    }
  }
})
</script>

<style>

</style>
