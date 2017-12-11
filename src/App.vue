<template>
  <div id="app">
    <a @click="getInfo">getPageInfo</a>
    <span>{{ info }}</span>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      info: 'hoge'
    }
  },
  methods: {
    getInfo () {
      chrome.tabs.getSelected(null, (tab) => {
          this.$data.info = `[${tab.url} ${tab.title}]`
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 16px;
  width: 200px;
  height: 32px;
}

a {
  color: #42b983;
}
</style>
