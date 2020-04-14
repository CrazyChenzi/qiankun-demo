<template>
  <section>
    <header class="header">
      <nav>
        <ol>
          <li><a @click="goto('vueapp1', '/vueapp1')">vueapp1</a></li>
          <li><a @click="goto('vueapp2', '/vueapp2')">vueapp2</a></li>
        </ol>
      </nav>
    </header>
    <div v-if="loading">loading</div>
    <div class="appContainer" v-html="content">content</div>
  </section>
</template>

<script>
	export default {
		name: 'framework',
		props: {
			loading: Boolean,
			content: String,
		},
		methods: {
			goto(title, href) {
				window.history.pushState({}, title, href);
			},
		},
	};
</script>

<style scoped>
  .header {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  }
  .appContainer {
    margin-top: 50px;
  }
</style>