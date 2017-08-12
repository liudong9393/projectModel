import Vue from 'vue';
import Router from 'vue-router';
// 一级路由
import Footer from '@/components/footer';
import Home from '@/components/home';
import Voice from '@/components/voice';
import Campus from '@/components/campus';
import Spare from '@/components/spare';
import Mine from '@/components/mine';
import Login from "@/components/login";
import Register from "@/components/register";

// 二级路由
import SingleProduct from "@/page/home/single-product";
import Search from "@/page/home/search";
import Tell from "@/page/voice/tell";
import Talkheart from "@/page/voice/talkHeart";
import Telling from "@/page/voice/telling";
import Exam from "@/page/campus/exam";
import Study from "@/page/campus/study";
import Job from "@/page/campus/job";
import Entertainment from "@/page/spareTime/entertainment";

import Aboutus from "@/page/mine/aboutus";
import Account from "@/page/mine/account";
import AfterSale from "@/page/mine/afterSale";
import Balance from "@/page/mine/balance";
import BrowsHistory from "@/page/mine/browsHistory";
import Buying from "@/page/mine/buying";
import Coupon from "@/page/mine/coupon";
import Customer from "@/page/mine/customer";
import FocusGoods from "@/page/mine/focusGoods";
import FocusShops from "@/page/mine/focusShops";
import Gold from "@/page/mine/gold";
import Member from "@/page/mine/member";
import Person from "@/page/mine/person";
import PrePurchase from "@/page/mine/prePurchase";
import Setting from "@/page/mine/setting";
import Feedback from "@/page/mine/feedback";

// 三级路由
import Product from "@/page/home/product";
import Local from "@/page/home/local";
import Detail from "@/page/home/detail";
import NewFriend from "@/page/voice/newFriend";
import Stranger from "@/page/voice/stranger";
import MyFriend from "@/page/voice/myFriend";
import Group from "@/page/voice/group";
import Blacklist from "@/page/voice/blacklist";
import Discuss from "@/page/spareTime/discuss";
import Fitness from "@/page/spareTime/fitness";
import Orgin from "@/page/spareTime/orgin";
import Play from "@/page/spareTime/play";
import Plan from "@/page/spareTime/plan";
import Book from "@/page/campus/book";
import Course from "@/page/campus/course";
import PartTime from "@/page/campus/partTime";
import Graduation from "@/page/campus/graduation";

// 四级路由
import Norm from "@/page/home/norm";
import Param from "@/page/home/param";
import Chat from "@/page/voice/chat";

//五级路由
import DetailsInfo from "@/page/voice/detailsInfo";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',//登录
      component: Login
    },
    {
      path: '/Login',//登录
      component: Login
    },
    {
      path: '/Register',//登录
      component: Register
    },
    {
      path: '/Footer',//默认进入首页
      component: Footer,
      children:[
    	   {//首页
          path: '/',
          component: Home,
          },
         {//首页
          path: '/Home',
          component: Home,
     	    children:[]
         },
    	   {//心声
          path: '/Voice',
          component: Voice,
          children:[
              {
                path: '/',
                component: Tell,
              },
              {
                path: '/Tell',
                component: Tell,
              },
              {
                path: '/Talkheart',
                component: Talkheart,
              }
          ]
          },
          {//校园
            path: '/Campus',
            component: Campus,
            children:[
                {
                  path: '/',
                  component: Study,
                },
                {
                  path: '/Exam',
                  component: Exam,
                },
                {
                  path: '/Study',
                  component: Study,
                }, {
                  path:'/Job',
                  component:Job
                },
            ]
          },
      	 {//工作
            path: '/Spare',
            component: Spare,
            children:[
                {
                  path:'/',
                  component:Entertainment
                },
               
                {
                  path:'/Entertainment',
                  component:Entertainment
                }
            ]
          },
          {
            path: '/Mine',
            component: Mine
          }
        ]
    },
    //二级页面
    {
      path: '/SingleProduct',
      component: SingleProduct,
      children:[
          {
            path: '/',
            component: Product,
          },
          {
            path: '/Product',
            component: Product,
          },
          {
            path: '/Detail',
            component: Detail,
            children:[
              {
                path: '/',
                component: Norm,
              },
              {
                path: '/Norm',
                component: Norm,
              },
              {
                path: '/Param',
                component: Param,
              }
            ]
          }
      ]
    },
    {//账号下页面
      path: '/Local',
      component: Local
    },
    {//账号下页面
      path: '/Customer',
      component: Customer,
    },
    {
      path: '/FocusGoods',
      component: FocusGoods,
    },
    {
      path: '/Account',
      component: Account,
    },
    {
      path: '/AfterSale',
      component: AfterSale,
    },
    {
      path: '/Balance',
      component: Balance,
    },
    {
      path: '/BrowsHistory',
      component: BrowsHistory,
    },
    {
      path: '/Buying',
      component: Buying,
    },
    {
      path: '/Coupon',
      component: Coupon,
    },
    {
      path: '/Aboutus',
      component: Aboutus,
    },
    {
      path: '/Feedback',
      component: Feedback,
    },
    {
      path: '/Setting',
      component: Setting,
    },
    {
      path: '/PrePurchase',
      component: PrePurchase,
    },
    {
      path: '/Person',
      component: Person,
    },
    {
      path: '/Member',
      component: Member,
    },
    {
      path: '/Gold',
      component: Gold,
    },
    {
      path: '/FocusShops',
      component: FocusShops,
    },

    {// 搜索
      path: '/Search',
      component: Search
    },
    {// 写心情
      path: '/Telling',
      component: Telling,
    },

    // 三级路由
    {
      path: '/NewFriend',
      component: NewFriend,
    },
    {
      path: '/Stranger',
      component: Stranger,
    },
    {
      path: '/MyFriend',
      component: MyFriend,
    },
    {
      path: '/Group',
      component: Group,
    },
    {
      path: '/Blacklist',
      component: Blacklist,
    },
    //四级路由
    {
      path:"/Chat",
      component:Chat
    },
    {
      path:"/DetailsInfo",
      component:DetailsInfo
    }
  ]
})