import Vue from 'vue'
import { Button } from 'element-ui'
import { Form, FormItem} from 'element-ui'
import { Input } from 'element-ui'
import { Message } from 'element-ui'
// 注册为全局可用
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message=Message;
