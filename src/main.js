// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

require('./assets/sass/main.scss');

Vue.config.productionTip = false;

// Components
import TypedText from './components/TypedText'

Vue.component('typed-text', TypedText);


/** Vue global mixin */
Vue.mixin({
  methods: {
    setTitle(title = null) {
      const baseTitle = 'JRTell';
      document.title = title ? baseTitle + ' | ' + title : 'JRTell';
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});