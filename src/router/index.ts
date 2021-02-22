import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Overview from '../views/Overview.vue';
import MyCourses from '../views/AllCourses.vue';
import CourseDetails from '../views/CourseDetails.vue';
import CreateCourse from '../views/CreateCourse.vue';
import Notes from '../views/Notes.vue';
import Dashboard from '../views/Dashboard.vue';
import UsersView from '../views/Users.vue';

import Chats from '../views/Chats.vue';
import PendingReports from '../views/PendingReports.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/admin'
    },
    {
        path: '/admin',
        name: 'Admin',
        redirect: '/admin/home',
        component: Overview,
        children: [
            {
                path: '/admin/academy',
                name: 'Academy Courses',
                component: MyCourses
            },
            {
                path: '/admin/chats',
                name: 'Chats',
                component: Chats
            },
            {
                path: '/admin/reports/pending',
                name: 'Pending Reports',
                component: PendingReports
            },
            {
                path: '/admin/academy/:course_title/:course_id',
                name: 'Edit Course',
                component: CourseDetails
            },
            {
                path: '/admin/academy/create',
                name: 'Create Course',
                component: CreateCourse
            },
            {
                path: '/admin/notes',
                name: 'Notes',
                component: Notes
            },
            {
                path: '/',
                component: Dashboard
            },
            {
                path: '/admin/home',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: '/admin/users',
                name: 'Users',
                component: UsersView
            }
        ]
    },
]

const router = new VueRouter({
  routes
})

export default router
