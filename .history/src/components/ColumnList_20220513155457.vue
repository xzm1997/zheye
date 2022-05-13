<template>
  <h1></h1>
</template>

<script>
import { defineComponent } from 'vue'
export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}
export default defineComponent{[
  name: 'ColumnList'
]}
</script>

<style>

</style>
