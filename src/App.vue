<template>
  <div id="app">
    <keep-alive>
      <router-view include=""/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
@import './style/index.scss';

</style>
