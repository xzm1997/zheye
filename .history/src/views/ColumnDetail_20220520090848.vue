<template>
  <div>
    <pre>{{route}}</pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  setup () {
    const route = useRoute()
    const currentID
    return {
      route
    }
  }
})
</script>

<style>

</style>
