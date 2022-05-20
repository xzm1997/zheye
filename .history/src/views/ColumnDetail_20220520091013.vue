<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { testData, testPosts } from '../testData'
export default defineComponent({
  setup () {
    const route = useRoute()
    const currentId = route.params.id
  }
})
</script>

<style>

</style>
