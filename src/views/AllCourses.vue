<template>
    <div class="mx-auto">
        <div class="view-tagline mx-auto mb-3 mt-push">ACADEMY COURSES</div>
        <div class="container row mx-auto">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>SN</th>
                        <th></th>
                        <th>TITLE</th>
                        <th>CATEGORY</th>
                        <th>PRICE</th>
                        <th>CREATED</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr @click="$router.push(`/admin/academy/${course.title}/${course.course_id}`)" v-for="course in courses" :key="course.sn" style="cursor: context-menu;">
                        <td>
                            {{ courses.indexOf(course) }}
                        </td>
                        <td>
                            <img :src="course.cover_image" :alt="course.title" />
                        </td>
                        <td>
                            {{ course.title }}
                        </td>
                        <td style="text-transform: capitalize;">
                            {{ course.category }}
                        </td>
                        <td>
                            ₦ {{ (course.price !== '') ? course.price : 'Free' }}
                        </td>
                        <td>
                            {{ course.created_at }}
                        </td>
                        <td style="color: green; text-transform: uppercase;">
                            {{ course.status }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- -->
    </div>
</template>

<style lang="scss">
    table img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        transition: all linear 400ms;

        &:hover {
            width: 320px;
            height: 320px;
            border-radius: 4px;
            position: absolute;
            z-index: 5;
        }
    }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { backendURI, listAllCourses } from '../utils/endpoints';
import axios from 'axios';

@Component
export default class MyCourses extends Vue {
    user_id: string = localStorage.getItem("user_id")!;
    courses: [] = [];

    mounted() {
        this.fetchCourses();
        console.log("All courses :>>", this.courses);
    }

    fetchCourses() {
        axios.get(`${listAllCourses}`)
            .then(res => this.courses = res.data)
            .catch(err => console.log("Error fetching subscriptions :>>", err));
    }

}
</script>