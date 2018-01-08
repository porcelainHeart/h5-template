<template lang="pug">
transition(name='fade')
  div.demo
    mt-button.btn(@click="pop(1)") 点击弹出Toast
    mt-button.btn(@click="pop(2)") 点击弹出自定义时长的Toast
    mt-button.btn(@click="pop(3)") 自定义Toast位置
</template>

<script>
// import request from '@/api/axios'
import { Toast } from 'mint-ui'
export default {
  name: 'Demo',
  data () {
    return {
      list: [],
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      // let res = await request.get('/demo_path')
      // this.list = res.data
    },
    pop (type) {
      if (type === 1) {
        Toast('demo1')
      }
      if (type === 2) {
        Toast({
          message: 'demo2',
          duration: 500,
        })
      }
      if (type === 3) {
        Toast({
          message: 'demo3',
          position: 'top',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.demo{
  padding: 200px 0;
  width: 80%;
  margin: 0 auto;
  >.btn{
    width: 100%;
    margin-bottom: 20px; 
  }
}
</style>
