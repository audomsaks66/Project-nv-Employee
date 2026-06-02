import { createRouter, createWebHistory } from 'vue-router'
import UserCreate from '../components/Users/CreateUser.vue'
import UserEdit from '../components/Users/EditUser.vue'
import UserShow from '../components/Users/ShowUser.vue'
import UserIndex from '../components/Users/Index.vue'
import Login from '../components/Login.vue'

import BlogIndex from '../components/Blogs/Index.vue'
import BlogCreate from '../components/Blogs/CreateBlog.vue'
import BlogEdit from '../components/Blogs/EditBlog.vue'
import BlogShow from '../components/Blogs/ShowBlog.vue'

import EmployeeIndex from '../components/Employee/Index.vue'
import EmployeeCreate from '../components/Employee/CreateEmployee.vue'
import EmployeeEdit from '../components/Employee/EditEmployee.vue'
import EmployeeShow from '../components/Employee/ShowEmployee.vue'

import BookingIndex from '../components/Bookingtrinticket/Index.vue'
import BookingCreate from '../components/Bookingtrinticket/Create.vue'
import BookingEdit from '../components/Bookingtrinticket/Edit.vue'
import BookingShow from '../components/Bookingtrinticket/Show.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogIndex
    },
    {
      path: '/blog/create',
      name: 'blogs-create',
      component: BlogCreate
    },
    {
      path: '/blog/edit/:blogId',
      name: 'blog-edit',
      component: BlogEdit
    },
    {
      path: '/blog/:blogId',
      name: 'blog',
      component: BlogShow
    },
    {
      path: '/employees',
      name: 'employees',
      component: EmployeeIndex
    },
    {
      path: '/employees/create',
      name: 'employee-create',
      component: EmployeeCreate
    },
    {
      path: '/employees/edit/:employeeId',
      name: 'employee-edit',
      component: EmployeeEdit
    },
    {
      path: '/employees/:employeeId',
      name: 'employee-show',
      component: EmployeeShow
    },
    {
      path: '/bookings',
      name: 'bookings',
      component: BookingIndex
    },
    {
      path: '/booking/create',
      name: 'booking-create',
      component: BookingCreate
    },
    {
      path: '/booking/:id',
      name: 'booking-show',
      component: BookingShow
    },
    {
      path: '/booking/edit/:id',
      name: 'booking-edit',
      component: BookingEdit
    }

  ]
})

export default router
