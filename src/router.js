import Vue from 'vue'
import Home from './views/Home.vue'
// import Router from 'vue-router'
import KRouter from './kkb-router'
// 实际执行的是install方法
Vue.use(KRouter)

// 路由基本的配置

export default new KRouter({
  routes:[
    {
      path:'/',
      component:Home,
      // 进入路由之前的生命周期
      beforeEnter(from,to, next){
        // next执行才跳转
        console.log(`beforeEnter from ${from} to ${to}`)
        // 模拟异步
        setTimeout(()=>{
          // 2秒之后再跳转
          // 做任何权限认证的事情
          next()
        },1000)
      }
    },
    {
      path:"/about",
      component:() => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home,
//       beforeEnter(from,to,next){
//           console.log(`beforEnterHome from ${from} to ${to}`)
//           setTimeout(()=>{
//             next()
//           },1000)
//           // next()
//       },
      
//       beforeLeave(to,from,next){
//         console.log('leavehome')
//       }
      
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })
