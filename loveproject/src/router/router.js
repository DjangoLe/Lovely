import VueRouter from 'vue-router'
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import ImageContainer from '../components/tabbar/ImageContainer.vue'
import ManageContainer from '../components/tabbar/ManageContainer.vue'
import TaskContainer from '../components/tabbar/TaskContainer.vue'
var router=new VueRouter({
    routes:[//配置路由规则
        {path:'/home',component:HomeContainer,},
        {path:'/image',component:ImageContainer,},
        {path:'/manage',component:ManageContainer,},
        {path:'/task',component:TaskContainer,},

    ],
    linkActiveClass:'mui-active'
})
export default router