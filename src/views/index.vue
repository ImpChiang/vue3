<template>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <Suspense>
      <template #default>
        <div>显示这个组件</div>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
</template>

<script>
import { defineComponent } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
export default defineComponent({
  name: 'index',
  components: {
    HelloWorld
  }
})
</script>

<style scoped lang="less"></style>
