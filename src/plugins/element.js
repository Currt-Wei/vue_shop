import Vue from 'vue'
import { Button, TableColumn, Tooltip, Dialog } from 'element-ui'
import { Form, FormItem } from 'element-ui'
import { Input } from 'element-ui'
import {
  Message,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Select,
  Option,
  Row,
  Col,
  Table,
  Switch,
  Pagination,
  MessageBox,
  Tag,
  Tree,
  Cascader
} from 'element-ui'
// 注册为全局可用
Vue.use(Option)
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
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Select)
Vue.use(Option)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(MessageBox)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Cascader)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
