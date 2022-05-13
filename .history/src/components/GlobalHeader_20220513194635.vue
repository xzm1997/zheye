n<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4>

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
