<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { UserProps } from '../store'
import { addColumnAvatar } from '../helper'

export default defineComponent({
  name: 'UserProfile',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  setup (props) {

  }
})
</script>

<style>

</style>
