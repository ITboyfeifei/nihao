import Vue from "vue";
import { Swipe, SwipeItem, Image, Button, Row, Col, Icon ,Tabbar, TabbarItem} from "vant";

Vue.use(Swipe).use(SwipeItem); //轮播图
Vue.use(Image); // 图片
Vue.use(Button); //按钮
Vue.use(Row).use(Col); //layout 布局
Vue.use(Icon); //图标
Vue.use(Tabbar).use(TabbarItem); // tabbar 栏