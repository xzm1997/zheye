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
    const fitUrl = computed(() => {
      addColumnAvatar(props.user, 50, 50)
      const { avatar } = props.user
      return avatar && avatar.fitUrl
    })
  }
})
</script>

<style>

</style>
