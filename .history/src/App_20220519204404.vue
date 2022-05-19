<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">@ 2020 这也专栏</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'

const currentUser: UserProps = {
  isLogin: false,
  name: 'Poco'
}

export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader
    // ValidateInput,
    // ValidateForm
  },
  setup () {
    // const inputRef = ref<any>()
    // const emailVal = ref('123.com')
    // const emailRules: RulesProp = [
    //   { type: 'required', message: '电子邮箱地址不能为空' },
    //   { type: 'email', message: '请输入正确的电子邮箱格式' }
    // ]
    // const passwordVal = ref('123')
    // const passwordRules: RulesProp = [
    //   { type: 'required', message: '密码不能为空' }
    // ]
    // const emailRef = reactive({
    //   val: '',
    //   error: false,
    //   message: ''
    // })
    // const validateEmail = () => {
    //   if (emailRef.val.trim() === '') {
    //     emailRef.error = true
    //     emailRef.message = 'Cannot be empty'
    //   } else if (!emailReg.test(emailRef.val)) {
    //     emailRef.error = true
    //     emailRef.message = 'Should be valid email'
    //   }
    // }
    // const onFormSubmit = (result: boolean) => {
    //   console.log(result)
    // }
    return {
      // list: testData,
      currentUser
      // emailRef,
      // validateEmail
      // emailRules,
      // emailVal,
      // passwordVal,
      // passwordRules,
      // onFormSubmit,
      // inputRef
    }
  }
})
</script>

<style>

</style>
