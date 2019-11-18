import Vue from 'vue';
import {
    Swipe,
    SwipeItem,
    Tabbar,
    TabbarItem,
    Icon,
    Button,
    NavBar,
    Grid,
    GridItem,
    Image,
    Search,
    Divider,
    List,
    Field,
    CellGroup,
    Popup,
    Cell,
    SwipeCell,
    Tag,
    Dialog,
    Notify,
    Toast
} from 'vant';

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Button)
Vue.use(Icon)
Vue.use(NavBar)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Image)
Vue.use(Search)
Vue.use(Divider)
Vue.use(List)
Vue.use(Field)
Vue.use(CellGroup)
Vue.use(Popup)
Vue.use(Cell)
Vue.use(SwipeCell)
Vue.use(Tag)
Vue.use(Dialog)
Vue.use(Notify)
Vue.use(Toast)
Vue.prototype.$Dialog = Dialog.confirm