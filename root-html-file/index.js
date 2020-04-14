import Vue from 'vue';
import { registerMicroApps, runDefaultMountEffects, start } from 'qiankun';
// import Framework from './Framework';
import Framework from './Framework.vue';

let app = null;

function render({ appContent, loading }) {

  /*
  examples for vue
   */
  if (!app) {
    app = new Vue({
      el: '#container',
      data() {
        return {
          content: appContent,
          loading,
        };
      },
      render(h) {
        return h(Framework, {
          props: {
            content: this.content,
            loading: this.loading,
          },
        });
      },
    });
  } else {
    app.content = appContent;
    app.loading = loading;
  }

  // const container = document.getElementById('container');
  // ReactDOM.render(<Framework loading={loading} content={appContent}/>, container);
}

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

render({ loading: true });

registerMicroApps(
  [
    { name: 'vueapp1', entry: 'http://localhost:7000', render, activeRule: genActiveRule('/vueapp1') },
    { name: 'vueapp2', entry: 'http://localhost:7001', render, activeRule: genActiveRule('/vueapp2') },
  ],
  {
    beforeLoad: [app => {
      console.log('before load', app);
    }],
    beforeMount: [app => {
      console.log('before mount', app);
    }],
    afterUnmount: [app => {
      console.log('after unload', app);
    }],
  },
);

runDefaultMountEffects('/vueapp1');

start();
