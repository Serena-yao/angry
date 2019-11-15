// 加载一级路由
import IndexPage from '../views/IndexPage'

// 加载二级路由
import GovList from '../views/main/gov/index'
import NewGov from '../views/main/gov/new'


export default {
  routes: [{
    component: IndexPage,
    path: '/main',
    children: [
      // 机构路由
    {
      path: '/main/govList',
      component: GovList,
    },
    {
      path: '/main/addGov',
      component: NewGov,
    },{
      path: '/main/editGov/:id?',
      component: ()=><p>编辑机构</p>,
    },{
      path: '/main/govDetail/:id?',
      component: ()=><p>机构详情</p>,
    },
    // 课程路由
    {
      path: '/main/addPro',
      component: ()=><p>新建课程</p>,
    },{
      path: '/main/editPro/:id?',
      component: ()=><p>编辑课程</p>,
    },{
      path: '/main/addGov',
      component: ()=><p>异常提示</p>,
    },
    // 班级路由
    {
      path: '/main/addClass',
      component: ()=><p>新建班级</p>,
    },{
      path: '/main/editClass/:id?',
      component: ()=><p>编辑班级</p>,
    }, {
      path: '/main/classDetail',
      component: ()=><p>班级详情</p>,
    }]
  },{
    path: '/',
    redirect: '/main/addGov'
  }],
  pages: [{
    title: '机构管理',
    icon: '',
    children: [{
      title: '机构列表',
      path: '/main/govList',
      show: true
    },{
      title: '新增机构',
      path: '/main/addGov',
      show: true
    },{
      title: '编辑机构',
      path: '/main/editGov/:id?',
      show: false
    },{
      title: '机构详情',
      path: '/main/govDetail/:id?',
      show: false
    }]
  },{
    title: '教务管理',
    icon: '',
    children: [{
      title: '课程管理',
      children: [{
        title: '新建课程',
        path: '/main/addPro',
        show: true
      },{
        title: '编辑课程',
        path: '/main/editPro/:id?',
        show: false
      },{
        title: '异常提示',
        path: '/main/proError',
        show: false
      }]
    },{
      title: '班级管理',
      children: [{
        title: '新建班级',
        path: '/main/addClass',
        show: true
      },{
        title: '编辑班级',
        path: '/main/editClass/:id?',
        show: false
      },{
        title: '班级详情',
        path: '/main/classDetail',
        show: false
      }]
    }]
  }]
}
