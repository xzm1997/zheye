<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue'
const emailReg = /^[\da-z]+([\\-\\.\\_]?[\da-z]+)*@[\da-z]+([\\-\\.]?[\da-z]+)*(\.[a-z]{2,})+$/i
interface RuleProp {
  type: 'required' | 'email';
  message: string;
}
export type RuleProp = RuleProp[]
export default defineComponent({
  setup () {
    props: {
      rules: Array as PropType<RuleProp></RuleProp>
    }
  }
})
</script>

<style>

</style>
