<template>
    <div class="mx-auto">
        <div class="view-tagline mx-auto mb-3 mt-push">USERS</div>
        <div class="container row mx-auto">
            <div>
                <select @change="e => filterHandler(e.target.value)" class="form-control" style="float: right;">
                    <option value="all" selected aria-selected="true">All Users</option>
                    <option value="student">Students Only</option>
                    <option value="investor">Investors Only</option>
                    <option value="vip">VIP Only</option>
                    <option value="reg">Completed Registration Only</option>
                </select>
            </div>
            <table class="table table-striped table-hover table-condensed">
                <thead>
                    <tr>
                        <th>SN</th>
                        <th></th>
                        <th>FULL NAME</th>
                        <th>EMAIL</th>
                        <th>MOBILE NUMBER</th>
                        <th>CITY</th>
                        <th>STATE</th>
                        <th>COUNTRY</th>
                        <th>SIGNED UP</th>
                        <th>CATEGORY</th>
                        <th>ACCOUNT STATUS</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in Data" :key="user.sn" style="cursor: context-menu;">
                        <td>
                            {{ Data.indexOf(user) + 1 }}
                        </td>
                        <td>
                            <img :src="user.profile_photo" alt="Optimus Pro user" />
                        </td>
                        <td>
                            {{ user.first_name + " " + user.last_name }}
                        </td>
                        <td style="text-transform: lowercase;">
                            {{ user.email }}
                        </td>
                        <td>
                            {{ user.phone_number }}
                        </td>
                        <td>
                            {{ user.city }}
                        </td>
                        <td>
                            {{ user.state }}
                        </td>
                        <td>
                            {{ user.country }}
                        </td>
                        <td>
                            {{ user.created_at }}
                        </td>
                        <td>
                            {{ (user.class == 1) ? 'Student' : (
                                (user.class == 2) ? 'Investor' : 'VIP'
                            )}}
                        </td>
                        <td v-if="user.status == 'active'" class="text-success" style="text-transform: capitalize;">
                            {{ user.status }}
                        </td>
                        <td v-else class="text-danger" style="text-transform: capitalize;">
                            {{ user.status }}
                        </td>
                        <td>
                            <div class="dropdown">
                                <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    . . .
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a @click="suspendAction(user.user_id)" class="dropdown-item" href="javascript:void()">Suspend</a>
                                    <a @click="activateAction(user.user_id)" class="dropdown-item" href="javascript:void()">Activate</a>
                                    <a @click="deleteAction(user.user_id)" class="dropdown-item" href="javascript:void()">Delete</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- -->
    </div>
</template>

<style lang="scss">

    table {
        overflow-x: scroll;

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
    }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { backendURI, listAllCourses } from '../utils/endpoints';
import axios from 'axios';

import { Users } from '../utils/interfaces/interfaces';

@Component
export default class UsersView extends Vue {
    users: any = '';

    User: any = new Users();

    Data: any = '';

    fetchedData: any = '';

    mounted() {
        setTimeout(() => {
            this.getAllUsers();
        }, 2000);
    }

    filterData(type: string | number) {
        if (type == 'reg') {
            this.Data = this.fetchedData.filter(user => user.city.length > 0);
            return;
        }

        this.Data = this.fetchedData.filter(user => user.class == type);
    }

    filterHandler(v: string) {
        switch (v) {
            case 'student':
                this.filterData('1');
                break;
            case 'investor':
                this.filterData('2');
                break;
            case 'vip':
                this.filterData('3');
                break;
            case 'reg':
                this.filterData('reg');
                break;
            case 'all':
                this.Data = this.fetchedData;
        
            default:
                break;
        }
    }

    activateAction(user_id: number) {
        if (window.confirm("Do you really want to activate this user?") == true) {
            this.User.activateUser(user_id);
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    }

    deleteAction(user_id: number) {
        if (window.confirm("Do you really want to delete this user?") == true) {
            this.User.deleteUser(user_id);
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    }

    suspendAction(user_id: number) {
        if (window.confirm("Do you really want to suspend this user?") == true) {
            this.User.suspendUser(user_id);
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    }

    getAllUsers() {
        this.User.getAll(2020);
        let result: any = [];
        setTimeout(() => {
            console.log("Users retrieved :>>", this.User.data);
            Object.keys(this.User.data).forEach(datum => result.push(this.User.data[datum]));
        }, 4000);
        this.fetchedData = result;
        this.Data = result;
    }

}
</script>