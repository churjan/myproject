import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueQriously from 'vue-qriously';
import '@/apis';
import 'animate.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueQriously);
Vue.mixin({
  computed: {
    publicPath() {
      return this.$store.state.publicPath;
    },
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
