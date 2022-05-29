<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/callout.svg" alt="callout" class="w-50"/>
          <h2 class="font-weight-light">随心所欲，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
          <up-loader action="/upload" :beforeUpload="beforeUpload" @file-uploaded="onFileUploaded">
            <template #uploaded="dataProps">
              <img :src="dataProps.uploadedData.data.url" width="500">
            </template>
          </up-loader>
        </div>
      </div>
    </section>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps, ResponseType, ImageProps } from '../store'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList from '../components/ColumnList.vue'
import UpLoader from '../components/UpLoader.vue'
import createMessage from '../components/createMessage'

export default defineComponent({
  name: 'HomePage',
  components: {
    ColumnList,
    UpLoader
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    onMounted(() => {
      store.dispatch('fetchColumns')
    })
    const list = computed(() => store.state.columns)
    const beforeUpload = (file: File) => {
      const isJPG = file.type === 'image/jpeg'
      if (!isJPG) {
        createMessage('上传图片只能是JPG格式', 'error')
      }
      return isJPG
    }
    const onFileUploaded = (rawData: ResponseType<ImageProps>) => {
      createMessage(`上传图片ID ${rawData.data._id}`, 'success')
    }
    const biggerColumnLen = computed(() => store.getters.biggerColumnsLen)
    return {
      list,
      biggerColumnLen,
      beforeUpload,
      onFileUploaded
    }
  }
})
</script>

<style>

</style>
