import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Welcome from '../components/welcome.vue'
import Home from '../components/home.vue'
import User from '../components/user/Users.vue'
import Rights from '../components/power/Rights.vue'
import Roles from '../components/power/Roles.vue'
Vue.use(VueRouter)



const router = new VueRouter({
  routes:[
    {path:'/', redirect:'/login'},
    {path:'/login',component:Login},
    {
      path:'/home',
      component:Home,
      redirect:'/welcome',
      children:[
      {path:'/welcome',component:Welcome},
      {path:'/users',component:User},
      {path:'/rights',component:Rights},
      {path:'/roles',component:Roles}
    ]},

  ]
})

router.beforeEach((to,from,next)=>{
  // to要访问的路径
  // from表示从哪个路径来
  // next是一个函数  表示放行
  if(to.path==='/login') return next();
  const tokenStr = window.sessionStorage.getItem('token');
  if(!tokenStr) return next('/login');
  return next();
})

export default router
