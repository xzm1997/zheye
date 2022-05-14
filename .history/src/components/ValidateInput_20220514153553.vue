<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue'
const emailReg = /^[\da-z]+([\\-\\.\\_]?[\da-z]+)*@[\da-z]+([\\-\\.]?[\da-z]+)*(\.[a-z]{2,})+$/i
interface RuleProp {
  type: 'required' | 'email';
  message: string
}
export default defineComponent({
  setup () {

  }
})
</script>

<style>

</style>
