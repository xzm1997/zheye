<template>
  <teleport to="#message">
    <div class="alert message-info" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
export type MessageType = 'success' | 'error' | 'default'
export default defineComponent({
  props: {
    message: String,
    type: {
      type: String as PropType<MessageType>,
      default: 'default'
    }
  },
  setup (props, context) {

  }
})
</script>

<style>

</style>
