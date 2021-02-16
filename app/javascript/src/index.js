import Vue from 'vue';

import store from './store';
import router from './router';
import App from './App';
import vuetify from './plugins/vuetify.js';
import vueDebounce from 'vue-debounce';

Vue.use(vueDebounce, {
  listenTo: ['input', 'keyup', 'change'],
  defaultTime: '500ms'
})

Vue.config.productionTip = false;

export default () => {
  new Vue({
    components: { App },
    vuetify,
    router,
    store,
    render: (h) => h(App)
  }).$mount('#app')
};
