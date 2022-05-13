<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as
    }
  }
})
</script>

<style>

</style>
