<template>
  <div>
    <!-- BEGIN LOADER -->
    <!-- <div id="load_screen">
      <div class="loader">
        <div class="loader-content">
          <div class="spinner-grow align-self-center"></div>
        </div>
      </div>
    </div> -->
    <!--  END LOADER -->

    <!--  BEGIN NAVBAR  -->
    <div class="header-container fixed-top">
      <header class="header navbar navbar-expand-sm expand-header">
        <a
          href="javascript:void(0);"
          class="sidebarCollapse"
          data-placement="bottom"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line></svg
        ></a>

        <ul class="navbar-item flex-row ml-auto">
          <li>
              <span class="clock">
                  {{ clock }}
              </span>
          </li>
        </ul>
      </header>
    </div>
    <!--  END NAVBAR  -->

    <!--  BEGIN MAIN CONTAINER  -->
    <div class="main-container sidebar-closed sbar-open" id="container">
      <div class="overlay"></div>
      <div class="cs-overlay"></div>
      <div class="search-overlay"></div>

      <!--  BEGIN SIDEBAR  -->
      <div class="sidebar-wrapper sidebar-theme">
        <nav id="sidebar">
          <ul class="navbar-nav theme-brand flex-row text-center">
            <li class="nav-item theme-logo">
              <a href="index.html">
                <img :src="user.profile_photo" class="navbar-logo" alt="logo" />
              </a>
            </li>
            <li class="nav-item theme-text">
              <a href="index.html" class="nav-link set_name">{{
                `${user.first_name} ${user.last_name}`
              }}</a>
            </li>
          </ul>

          <ul class="list-unstyled menu-categories" id="accordionExample">
            <li class="menu active">
              <!-- CLOCK -->
              <a id="clock" href="#" class=""></a>
              <!-- CLOCK END -->
              <a
                href="#dashboard"
                data-toggle="collapse"
                aria-expanded="true"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-home"
                  >
                    <path
                      d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                    ></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <span>Dashboard</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </a>
              <ul
                class="collapse submenu recent-submenu mini-recent-submenu list-unstyled show"
                id="dashboard"
                data-parent="#accordionExample"
              >
                <li class="active">
                  <router-link to="/admin"> Home </router-link>
                </li>
                <!-- <li>
                  <a href="index2.html"> Investor </a>
                </li>
                <li>
                  <a href="index2.html"> Signals </a>
                </li>-->
              </ul>
            </li>

            <li class="menu menu-heading">
              <div class="heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle></svg
                ><span>Optimus Pro Admins</span>
              </div>
            </li>

            <li class="menu">
              <router-link
                to="/student/dashboard/complete-registration"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-message-square"
                  >
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path>
                  </svg>
                  <span>Create New Admin</span>
                </div>
              </router-link>
            </li>

            <!-- <li class="menu">
              <a
                href="apps_mailbox.html"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-mail"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    ></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>Referrals</span>
                </div>
              </a>
            </li> -->

            <li class="menu">
              <router-link
                to="/student/dashboard/complete-registration"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-edit"
                  >
                    <path
                      d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                    ></path>
                    <path
                      d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                    ></path>
                  </svg>
                  <span>Change Password</span>
                </div>
              </router-link>
            </li>
            <li class="menu menu-heading">
              <div class="heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle></svg
                ><span>Courses</span>
              </div>
            </li>
            <li class="menu">
              <router-link
                to="/admin/academy"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-message-square"
                  >
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path>
                  </svg>
                  <router-link to="/admin/academy">Academy</router-link>
                </div>
              </router-link>
            </li>
            <li class="menu">
              <a
                @click.prevent="this.$router.push('/admin/academy/create')"
                href="#"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-message-square"
                  >
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path>
                  </svg>
                  <router-link to="/admin/academy/create"
                    >Create Course</router-link
                  >
                </div>
              </a>
            </li>
            <li class="menu">
              <a
                @click.prevent="this.$router.push('/admin/academy')"
                href="#"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-message-square"
                  >
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path>
                  </svg>
                  <router-link to="/admin/academy">Edit Course</router-link>
                </div>
              </a>
            </li>
            <li class="menu">
              <a
                @click.prevent="this.$router.push('/admin/academy')"
                href="#"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-message-square"
                  >
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path>
                  </svg>
                  <router-link to="/admin/academy">Upload Videos</router-link>
                </div>
              </a>
            </li>

            <li class="menu menu-heading">
              <div class="heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle></svg
                ><span>Statistics</span>
              </div>
            </li>

            <li class="menu">
              <router-link
                to="/admin/users"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-layout"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                  <span>Users</span>
                </div>
              </router-link>
            </li>

            <!-- <li class="menu">
              <a
                href="table_basic.html"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-layout"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                  <span>All Reports</span>
                </div>
              </a>
            </li> -->
            <li class="menu menu-heading">
              <div class="heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle></svg
                ><span>Notes</span>
              </div>
            </li>

            <li class="menu">
              <router-link
                to="/admin/notes"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-layout"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                  <span>My Notes</span>
                </div>
              </router-link>
            </li>
            <li class="menu menu-heading">
              <div class="heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle></svg
                ><span> Notifications </span>
              </div>
            </li>
            <li class="menu">
              <a
                href="dragndrop_dragula.html"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-move"
                  >
                    <polyline points="5 9 2 12 5 15"></polyline>
                    <polyline points="9 5 12 2 15 5"></polyline>
                    <polyline points="15 19 12 22 9 19"></polyline>
                    <polyline points="19 9 22 12 19 15"></polyline>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <line x1="12" y1="2" x2="12" y2="22"></line>
                  </svg>
                  <router-link to="/admin/chats"
                    >Chats</router-link
                  >
                </div>
              </a>
            </li>

            <!-- <li class="menu menu-heading">
              <div class="heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle></svg
                ><span>Security</span>
              </div>
            </li> -->

            <li class="menu">
              <router-link
                to="/admin/reports/pending"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-layout"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                  <span>Pending Reports</span>
                </div>
              </router-link>
            </li>

            <!-- <li class="menu">
              <router-link
                to="/student/settings/password"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-layout"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                  <span>Change Password</span>
                </div>
              </router-link>
            </li> -->

            <!-- <li class="menu">
              <a
                href="table_basic.html"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-layout"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                  <span>Security Messages</span>
                </div>
              </a>
            </li> -->
          </ul>
          <!-- end of sidebar -->
        </nav>
      </div>
      <!--  END SIDEBAR  -->

      <!--  BEGIN CONTENT AREA  -->
      <router-view />
      <!--  END CONTENT AREA  -->
    </div>
    <!-- END MAIN CONTAINER -->
  </div>
</template>

<style lang="scss">
.clock {
    color: goldenrod;
    font-size: 90%;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-self: center;
    margin-right: 2em;
}
    
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import axios from "axios";
import { getAdmin, unreadNotifications } from "../utils/endpoints";

@Component
export default class Overview extends Vue {
  // user_id: string = localStorage.getItem("user_id")!;
  user_id: string = "1";
  user: {} = {};

  notifications: any = "";

  clock: string = '';

  mounted() {
    // localStorage.setItem("user_id", "15122020318212551192");
    // alert(localStorage.getItem("user_id"));
    // localStorage.removeItem("user_id");

    this.fetchUserDetails(this.user_id);
    console.log("User :>>", this.user);
    this.UnreadNotifications();

    setInterval(() => {
        this.clock = new Date().toLocaleTimeString();
    }, 1000);
  }

  convertTimes(created) {
    let Today = new Date();
    let N = new Date(created);

    if (Today.getDate() - N.getDate() == 1) {
      return `${Today.getDate() - N.getDate()} day ago`;
    } else if (Today.getDate() - N.getDate() > 1) {
      return `${Today.getDate() - N.getDate()} days ago`;
    } else if (Today.getDate() - N.getDate() == 0) {
        let X = Today.getTime() - N.getTime();
        
        if (X/1000 < 60) {
            return `${X/1000} seconds ago`;
        } else if (X/1000 > 60 && X/1000 < 3600) {
            return `${Math.round(X/60000)} minutes ago`;
        } else if (X/1000 > 3600) {
            return `${Math.round(X/3600000)} hours ago`;
        }
    }
  }

  UnreadNotifications() {
    axios
      .get(`${unreadNotifications}`)
      .then((res) => (this.notifications = res.data))
      .catch((err) =>
        console.log("Error fetching unread notifications :>>", err)
      );
  }

  fetchUserDetails(user_id: string) {
    axios
      .get(`${getAdmin}/${user_id}`)
      .then((res) => (this.user = res.data))
      .catch((err) => console.log("Error fetching user details :>>", err));
  }

  logout() {
    localStorage.removeItem("user_id");
    this.$router.replace("/auth");
  }
}
</script>