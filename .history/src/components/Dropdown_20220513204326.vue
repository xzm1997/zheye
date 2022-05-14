<template>
  <div>
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle">{{title}}</a>
    <ul class="dropdown-menu" :style="{display: 'block'}" v-if="true">
      <li class="dropdown-item">
        <a href="#">新建文章</a>
      </li>
      <li class="dropdown-item">
        <a href="#">编辑资料</a>
    </li>
  </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DropDown',
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>

<style>

</style>
