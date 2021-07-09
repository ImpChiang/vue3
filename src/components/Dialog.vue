<template>
  <teleport to="#dialog">
      <div class="dialog-wrap"></div>
  </teleport>
</template>

<script>
export default {
name: "Dialog"
}
</script>

<style lang="less" scoped>
.dialog-wrap{
  width: 100px;
  height: 100px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #42b983;
}
</style>
