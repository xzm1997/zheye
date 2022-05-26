<template>
  <teleport to="#message">
    <div class="alert message-info fixed-top w-50 mx-auto d-flex justify-content-between mt-2" role="alert">
      <strong>Holy guacamole!</strong>
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
  emits: ['close'],
  setup (props, context) {
    const node = document.createElement('div')
    node.id = 'message'
    document.body.appendChild(node)
    const isVisible = ref(true)
    const classObject = {
      'alert-success': props.type === 'success',
      'alert-danger': props.type === 'error',
      'alert-primary': props.type === 'default'
    }
    const hide = () => {
      isVisible.value = false
    }
  }
})
</script>

<style>

</style>
