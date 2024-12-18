// django 의 urls.py 역할
// 사용자가 특정 경로로 들어오면, 
// 해당하는 컴포넌트(페이지)를 출력해줄 수 있도록 설정해주는 파일
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import LogoutView from '@/views/LogoutView.vue'
import SignupView from '@/views/SignupView.vue'
import BoardCreateView from '@/views/BoardCreateView.vue'
import NewsView from '@/views/NewsViewer.vue'
import DashBoardView from '@/views/DashBoardView.vue'
import BoardDetail from '@/views/BoardDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/board/:id',  // 동적 라우트로 게시글 ID를 전달
      name: 'board-detail',
      component: BoardDetail,
      props: true  // 라우트 파라미터를 컴포넌트의 props로 전달
    },

    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogoutView,
    },
    {
      path: '/create-board',
      name: 'createBorad',
      component: BoardCreateView,
    },

    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoardView,
    },
  ],
})

export default router
