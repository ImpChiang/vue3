<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank">
      Vetur
    </a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <div ref="root">This is a root element</div>
  <div>{{year}}</div>
  <div>{{nickname}}</div>
  <div>{{age}}</div>
  <Dialog v-if="showDialog"></Dialog>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, reactive, toRefs, watch, watchEffect } from 'vue'
import Dialog from "./Dialog.vue";
export default defineComponent({
  name: 'HelloWorld',
  components: {Dialog},
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: (props) => {
    console.log(props,'props')
    const count = ref(0)
    const root = ref(null)
    const showDialog = ref(true)
    const year = ref(0)
    const user = reactive({nickname:'hahah', age: 18})
    // setInterval(() => {
    //   year.value++
    //   user.age++
    // }, 1000)
    // watch 只能监听
    // 1. 拥有getter/setter属性得值
    // 2.一个ref属性，即通过ref()声明得值
    // 3.一个reactive函数返回的对像
    // 4.一个数组
    // watch(year, (newVal,oldVal) =>{
    //   console.log('新',newVal,'旧',oldVal)
    // })
    // watch(() => user.age, (newVal,oldVal) =>{
    //   console.log('新',newVal,'旧',oldVal)
    // })
    watchEffect(() => { // watchEffect 不需要手动传入依赖
      // console.log(year.value,'year')
      // console.log(user,'user')
    })
    onMounted(() => {
      console.log(root.value)
    })
    return {
      count,
      root,
      year,
      ...toRefs(user),
      showDialog
    }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
