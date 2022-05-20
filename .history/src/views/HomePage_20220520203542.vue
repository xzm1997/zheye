<template>
  <div class="container">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import {} from''
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList from '../components/ColumnList.vue'
import { testData } from '../testData'

export default defineComponent({
  name: 'HomePage',
  components: {
    ColumnList
  },
  setup () {
    const store = useStore()
    return {
      list: testData
    }
  }
})
</script>

<style>

</style>
