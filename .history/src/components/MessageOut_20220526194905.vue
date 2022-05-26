<template>
<teleport to="#message">
  <div class="alert" role="alert">
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</teleport>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

export default defineComponent({
  setup (props, context) {

  }
})
</script>

<style>

</style>
