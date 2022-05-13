<template>
  <h1></h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}
export default defineComponent{[
  name: 'ColumnList',
  props: {
    list: {
      type: Array,
      required: true
    }
  }
]}
</script>

<style>

</style>
