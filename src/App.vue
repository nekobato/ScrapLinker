<template>
  <div id="app">
    <input class="link-input" type="text" v-model="link" :ref="input" />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      link: ''
    }
  },
  methods: {
    getInfo () {
      chrome.tabs.getSelected(null, (tab) => {
          this.link = `[${tab.url} ${tab.title}]`
          this.$refs.input.focus()
      })
    }
  },
  created () {
    this.getInfo()
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
  padding: 8px;
}

.link-input {
  padding: 4px 8px;
  width: 100%;
  line-height: 24px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
}
</style>
