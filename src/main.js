import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import{Swipe,SwipeItem, Tab, Tabs,ActionBar, ActionBarIcon, ActionBarButton} from 'vant'
import 'vant/lib/index.css';

createApp(App).use(store).use(Swipe).use(SwipeItem).use(Tab).use(Tabs).use(ActionBar).use(ActionBarIcon).use(ActionBarButton).use(router).mount('#app')
