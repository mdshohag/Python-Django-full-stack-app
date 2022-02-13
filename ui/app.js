const routes=[
    {path:'/home',component:home},
    {path:'/employee',component:employee},
    {path:'/department',component:department},
    {path:'/designation',component:designation}
]

const router=new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')