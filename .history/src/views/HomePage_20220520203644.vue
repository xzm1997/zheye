<template>
  <div class="container">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList from '../components/ColumnList.vue'
import { testData } from '../testData'

export default defineComponent({
  name: 'HomePage',
  components: {
    ColumnList
  },
  setup () {
    const store = useStore<GlobalDataProps>()

    return {
      list: testData
    }
  }
})
</script>

<style>

</style>
