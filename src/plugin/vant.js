import Vue from 'vue';

import {
  CouponList,
  CouponCell,
  Notify,
  Dialog,
  Tag,
  SwipeCell,
  Cell,
  Popup,
  CellGroup,
  Field,
  Divider,
  Search,
  GridItem,
  Grid,

  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Icon,
  Toast ,
  List ,
  Image ,
  Swipe, 
  SwipeItem,
  Stepper 
} from 'vant';
Vue.use(CouponList);
Vue.use(CouponCell);
Vue.use(Dialog);
Vue.use(Notify);
Vue.use(Tag);
Vue.use(SwipeCell);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Popup);
Vue.use(Field);
Vue.use(Divider);
Vue.use(Search);
Vue.use(GridItem);
Vue.use(Grid);

Vue.use(Button);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(List);
Vue.use(Image);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Stepper);

Vue.prototype.$Toast=Toast