n<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4">
    <a clss="navbar-brand" herf="#">者也专栏</a>
    <ul v-if="!user.isLogin">
      
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      require: true
    }
  }
})
</script>

<style>

</style>
