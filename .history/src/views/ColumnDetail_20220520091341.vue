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
    const currentId = +route.params.id
    const column = testData.find(c => c.id === currentId)
    const list = testData.filter(post => post.columnId === currentId)
    return {
      column
    }
  }
})
</script>

<style>

</style>
