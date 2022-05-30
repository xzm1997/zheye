<template>
  <div></div>
</template>

<script>
import { defineComponent } from 'vue'
import { UserProps } from '../store'
export default defineComponent({
  name: 'UserProfile',
  props: {
      user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})
</script>

<style>

</style>
