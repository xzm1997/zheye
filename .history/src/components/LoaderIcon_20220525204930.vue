<template>
  <div class="d-flex justify-content-center align-items-center h-100 loading-container">
    <div class="loading-content">
      <div class="spinner-grow text-info" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    text: {
      type: String
    },
    background: {
      type: String
    }
  }
})
</script>

<style>
.loading-content {
  background: rgba(255, 255, 255, .5);
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
