<template>
  <div class="file-upload">
    <button class="btn btn-primary" @click.prevent="triggerUpload">点击上传</button>
    <input
      type="file"
      class="file-input d-none"
      ref="fileInput"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
type UploadStatus = 'ready' | 'loading' | 'success' | 'error'
export default defineComponent({
  props: {
    action: {
      type: String,
      required: true
    }
  },
  setup () {
    const fileInput = ref<null | HTMLInputElement>(null)
    const fileStatus = ref<UploadStatus>('ready')
    const triggerUpload = () => {
      if (fileInput.value) {
        fileInput.value.click()
      }
    }
    const handleFileChange = (e: Event) => {
      const currentTarget = e.target as HTMLInputElement
      if (currentTarget.file)
    }
    return {
      fileInput,
      triggerUpload
    }
  }
})
</script>

<style>

</style>
