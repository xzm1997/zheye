<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
interface RuleProp {
  type: 'required' | 'email';
  message: string;
}
export type RuleProp = RuleProp[]
export default defineComponent({
  props: {
    rules: Array as PropType<RuleProp>
  },
  setup () {
    const inputRef = reactive({
      val: '',
      error: false,
      message: ''
    })
  }
})
</script>

<style>

</style>
