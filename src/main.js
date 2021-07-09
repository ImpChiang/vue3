import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import vueApollo from 'vue-apollo';
import Apolloclient from './utils/request';
const apolloProvider = new vueApollo({
    defaultClient: Apolloclient
});
createApp(App).use(router).mount('#app');
//# sourceMappingURL=main.js.map