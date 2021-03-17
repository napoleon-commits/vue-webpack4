import Vue from 'vue';
// import vuetify from './plugins/vuetify' // path to vuetify export

Vue.component('hello-component', require('./components/HelloComponent').default);

new Vue({
    // vuetify,
    data: {
        message: 'Hello from Webpack'
    }
  }).$mount('#app');