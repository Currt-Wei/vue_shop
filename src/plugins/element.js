import Vue from 'vue'
import { Button } from 'element-ui'
import { Form, FormItem} from 'element-ui'
import { Input } from 'element-ui'
import { Message,Container,Header,Aside,Main,Menu,Submenu,MenuItem } from 'element-ui'
// 注册为全局可用
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.prototype.$message=Message;
