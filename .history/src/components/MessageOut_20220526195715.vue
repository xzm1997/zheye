<template>
  <teleport to="#message">
    <div class="alert message-info fixed-top" role="alert">
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
    const node = document.createElement('div')
    node.id = 'message'
    document.body.appendChild(node)
  }
})
</script>

<style>

</style>
