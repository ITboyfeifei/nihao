import Vue from 'vue';
import {
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Icon,
  Toast ,
  List 
} from 'vant';
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(List);

Vue.prototype.$Toast=Toast