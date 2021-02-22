<template>
  <div id="content" class="main-content">
    <div class="layout-px-spacing">
      <div class="row layout-top-spacing">
        <div
          class="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing"
        >
          <div class="widget widget-one">
            <div class="widget-heading">
              <h6 class="">Statistics</h6>
            </div>
            <div class="w-chart">
              <div class="w-chart-section text-center" style="height: 85px">
                <div class="w-detail">
                  <p class="w-title">Users</p>
                  <p class="w-stats">{{ students.length }}</p>
                </div>
                <div class="w-chart-render-one">
                  <div id="total-users"></div>
                </div>
              </div>

              <div class="w-chart-section text-center">
                <div class="w-detail">
                  <p class="w-title">Courses</p>
                  <p class="w-stats">{{ courses.length }}</p>
                </div>
                <div class="w-chart-render-one">
                  <div id="paid-visits"></div>
                </div>
              </div>

              <div class="w-chart-section text-center">
                <div class="w-detail">
                  <p class="w-title">New Messages</p>
                  <p class="w-stats">{{ unreads.length }}</p>
                </div>
                <div class="w-chart-render-one">
                  <div id="paid-visits"></div>
                </div>
              </div>
              <div class="w-chart-section text-center">
                <div class="w-detail">
                  <p class="w-title">Unread Reports</p>
                  <p class="w-stats">0</p>
                </div>
                <div class="w-chart-render-one">
                  <div id="paid-visits"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
          <div class="widget widget-account-invoice-two" style="height: 220px">
            <div class="widget-content">
              <div class="account-box">
                <div class="info">
                  <h5 class="">
                    There are {{ courses.length }} courses on Optimus Pro Nation
                  </h5>
                  <p class="inv-balance"></p>
                </div>
                <div class="acc-action">
                  <div class="">
                    <a href="/admin/academy/create"
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
                        class="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line></svg
                    ></a>
                    <a href="/admin/academy"
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
                        class="feather feather-credit-card"
                      >
                        <rect
                          x="1"
                          y="4"
                          width="22"
                          height="16"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="1" y1="10" x2="23" y2="10"></line></svg
                    ></a>
                    &nbsp;
                  </div>
                  <a href="/admin/academy">View Courses</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
          <div class="widget widget-card-four">
            <div class="widget-content">
              <div class="w-content">
                <div class="w-info">
                  <h6 class="value">$ 0</h6>
                  <p class="">Investments</p>
                </div>
                <div class="">
                  <div class="w-icon">
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
                  </div>
                </div>
              </div>
              <div class="progress">
                <div
                  class="progress-bar bg-gradient-secondary"
                  role="progressbar"
                  style="width: 4%"
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing"
        >
          <div class="widget widget-chart-three">
            <div class="widget-heading">
              <div class="">
                <h5 class="">Signups</h5>
                &nbsp;Total: {{ students.length }}
              </div>
              <div class="w-100 d-none d-sm-block">
                <bar-chart
                  :data="[
                    last_two_weeks_students.length,
                    last_week_students.length,
                    this_week_students.length,
                    today_signups.length,
                  ]"
                  :labels="[
                    'Last Two Weeks',
                    'Last Week',
                    'This Week',
                    'Today',
                  ]"
                  :colors="['darkgrey', 'grey', 'lightgrey', 'blue']"
                ></bar-chart>
              </div>

              <div class="dropdown custom-dropdown">
                <a
                  class="dropdown-toggle"
                  href="#"
                  role="button"
                  id="uniqueVisitors"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
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
                    class="feather feather-more-horizontal"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </a>

                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="uniqueVisitors"
                >
                  <a class="dropdown-item" href="javascript:void(0);">View</a>
                  <a class="dropdown-item" href="javascript:void(0);">Update</a>
                  <a class="dropdown-item" href="javascript:void(0);"
                    >Download</a
                  >
                </div>
              </div>
            </div>

            <div class="widget-content">
              <div id="uniqueVisits"></div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
          <div class="widget widget-activity-three">
            <div class="widget-heading">
              <h5 class="">Notifications</h5>
            </div>

            <div v-if="notifications == ''" class="text-center">
              No notifications yet
            </div>

            <div v-else class="widget-content">
              <div class="mt-container mx-auto">
                <div class="timeline-line">
                  <div
                    v-for="N in notifications"
                    :key="N.sn"
                    class="item-timeline timeline-new"
                  >
                    <div class="t-dot">
                      <div
                        :class="
                          N.urgency == 1
                            ? 't-primary'
                            : N.urgency == 2
                            ? 't-success'
                            : 't-danger'
                        "
                      >
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
                          class="feather feather-check"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div class="t-content">
                      <div class="t-uppercontent">
                        <h5>{{ N.title }}</h5>
                        <span class="">{{ N.created_at }}</span>
                      </div>
                      <p v-if="N.urgency == 1">
                        <span>Urgency: </span>
                        <span class="text-primary">Low</span>
                      </p>
                      <p v-else-if="N.urgency == 2">
                        <span>Urgency: </span>
                        <span class="text-success">Medium</span>
                      </p>
                      <p v-else>
                        <span>Urgency: </span>
                        <span class="text-danger">High</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
          <div class="widget-four">
            <div class="widget-heading">
              <h5 class="">Pending Tasks</h5>
            </div>
            <div class="widget-content">
              <div class="vistorsBrowser d-none">
                <div class="browser-list">
                  <div class="w-icon">
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
                      class="feather feather-chrome"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="4"></circle>
                      <line x1="21.17" y1="8" x2="12" y2="8"></line>
                      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
                    </svg>
                  </div>
                  <div class="w-browser-details">
                    <div class="w-browser-info">
                      <h6>Chrome</h6>
                      <p class="browser-count">65%</p>
                    </div>
                    <div class="w-browser-stats">
                      <div class="progress">
                        <div
                          class="progress-bar bg-gradient-primary"
                          role="progressbar"
                          style="width: 65%"
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="browser-list">
                  <div class="w-icon">
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
                      class="feather feather-compass"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polygon
                        points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
                      ></polygon>
                    </svg>
                  </div>
                  <div class="w-browser-details">
                    <div class="w-browser-info">
                      <h6>Safari</h6>
                      <p class="browser-count">25%</p>
                    </div>

                    <div class="w-browser-stats">
                      <div class="progress">
                        <div
                          class="progress-bar bg-gradient-danger"
                          role="progressbar"
                          style="width: 35%"
                          aria-valuenow="65"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="browser-list">
                  <div class="w-icon">
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
                      class="feather feather-globe"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path
                        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                      ></path>
                    </svg>
                  </div>
                  <div class="w-browser-details">
                    <div class="w-browser-info">
                      <h6>Others</h6>
                      <p class="browser-count">15%</p>
                    </div>

                    <div class="w-browser-stats">
                      <div class="progress">
                        <div
                          class="progress-bar bg-gradient-warning"
                          role="progressbar"
                          style="width: 15%"
                          aria-valuenow="15"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <!-- <div
          class="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing"
        >
          <div class="row widget-statistic">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
              <div class="widget widget-one_hybrid widget-followers">
                <div class="widget-heading">
                  <div class="w-icon">
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
                      class="feather feather-users"
                    >
                      <path
                        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                      ></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <p class="w-value">31.6K</p>
                  <h5 class="">Followers</h5>
                </div>
                <div class="widget-content">
                  <div class="w-chart">
                    <div id="hybrid_followers"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
              <div class="widget widget-one_hybrid widget-referral">
                <div class="widget-heading">
                  <div class="w-icon">
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
                      class="feather feather-link"
                    >
                      <path
                        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                      ></path>
                      <path
                        d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                      ></path>
                    </svg>
                  </div>
                  <p class="w-value">1,900</p>
                  <h5 class="">Referral</h5>
                </div>
                <div class="widget-content">
                  <div class="w-chart">
                    <div id="hybrid_followers1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
              <div class="widget widget-one_hybrid widget-engagement">
                <div class="widget-heading">
                  <div class="w-icon">
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
                      class="feather feather-message-circle"
                    >
                      <path
                        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                      ></path>
                    </svg>
                  </div>
                  <p class="w-value">18.2%</p>
                  <h5 class="">Engagement</h5>
                </div>
                <div class="widget-content">
                  <div class="w-chart">
                    <div id="hybrid_followers3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
          <div class="widget widget-card-one chat-bg">
            <div class="widget-content">
                <div class="d-flex flex-row justify-content-end pr-3 pb-1">
                    <img style="cursor: pointer; width: 20px; height: auto;" src="@/assets/widget-icons/maximize.png" alt="maximize" />
                </div>
              <div class="media-body">
                <h6 class="pl-3 h6">Quick Broadcast Message</h6>
                <div class="h6 pl-3 pt-2 my-2 small">
                  Send a message to every user on Optimus Pro Nation
                </div>
              </div>
              <div class="body">
                <div
                  v-for="B in sent_broadcasts"
                  :key="sent_broadcasts.indexOf(B)"
                  class="chat-msg"
                >
                  {{ B }}
                </div>
              </div>

              <input
                v-on:keyup.enter="(e) => sendBroadcast(e)"
                style="position: absolute; bottom: 10px"
                class="form-control col-11 mx-3"
                type="text"
                placeholder="Press Enter to send"
              />

              <!-- <div class="media">
                <div class="w-img">
                  <img src="assets/img/90x90.jpg" alt="avatar" />
                </div>
                <div class="media-body">
                  <h6>Jimmy Turner</h6>
                  <p class="meta-date-time">Monday, Nov 18</p>
                </div>
              </div>

              <p>
                "Duis aute irure dolor" in reprehenderit in voluptate velit esse
                cillum "dolore eu fugiat" nulla pariatur. Excepteur sint
                occaecat cupidatat non proident.
              </p> -->

              <div class="w-action">
                <div class="card-like d-none">
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
                    class="feather feather-thumbs-up"
                  >
                    <path
                      d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                    ></path>
                  </svg>
                  <span>551 Likes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
          <div class="widget widget-five">
            <div class="widget-content">
              <div class="header">
                <div class="header-body">
                  <h6>7 Reports Pending</h6>
                  <p class="meta-date">Dec 2020</p>
                </div>
                <div class="task-action">
                  <div class="dropdown custom-dropdown">
                    <a
                      class="dropdown-toggle"
                      href="#"
                      role="button"
                      id="pendingTask"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
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
                        class="feather feather-more-horizontal"
                      >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </a>

                    <div
                      class="dropdown-menu dropdown-menu-right"
                      aria-labelledby="pendingTask"
                    >
                      <a class="dropdown-item" href="javascript:void(0);"
                        >Maximize Widget</a
                      >
                      <!-- <a class="dropdown-item" href="javascript:void(0);"
                        >View</a
                      >
                      <a class="dropdown-item" href="javascript:void(0);"
                        >Update</a
                      >
                      <a class="dropdown-item" href="javascript:void(0);"
                        >Clear All</a
                      > -->
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-content">
                <div class="">
                  <p class="task-left">7</p>
                  <p class="task-completed"><span>11 Done</span></p>
                  <p class="task-hight-priority">
                    <!-- <span>3 Task</span> with High priotity -->
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
          <div class="widget widget-card-two">
            <div class="widget-content">
              <div class="media">
                <div class="w-img">
                  <img src="assets/img/90x90.jpg" alt="avatar" />
                </div>
                <div class="media-body">
                  <h6>Dev Summit - New York</h6>
                  <p class="meta-date-time">Bronx, NY</p>
                </div>
              </div>

              <div class="card-bottom-section">
                <h5>4 Members Going</h5>
                <div class="img-group">
                  <img src="assets/img/90x90.jpg" alt="avatar" />
                  <img src="assets/img/90x90.jpg" alt="avatar" />
                  <img src="assets/img/90x90.jpg" alt="avatar" />
                  <img src="assets/img/90x90.jpg" alt="avatar" />
                </div>
                <a href="javascript:void(0);" class="btn">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.chat-bg {
  background-image: url("../assets/backgrounds/chat.jpeg");
  background-color: cyan;
  color: #333 !important;

  .h6 {
    background-color: white;
    border-radius: 3px;
    padding: 5px;
    width: 96%;
    margin: auto;
  }

  .body {
    height: 40%;
    max-height: 120px;
    overflow-y: scroll;
    scrollbar-color: goldenrod white;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      background: white;
      width: 11px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: goldenrod;
      margin: 6px;
      border-radius: 10px;
    }

    .chat-msg {
      text-align: right;
      background-color: cyan;
      width: 90%;
      border-radius: 6px;
      padding: 6px;
      float: right;
      margin: 4px 6px;
      color: blue;
      font-weight: 600;
      font-size: 110%;
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import {
  fetchStudents,
  listAllCourses,
  getUnreadMessages,
  signupsToday,
  signupsLastWeek,
  signupsTwoWeeks,
  signupsThisWeek,
  unreadNotifications,
  resolveNotifications,
} from "../utils/endpoints";

import { NewBroadcast, INewBroadcast } from "../utils/interfaces/interfaces";

import LineChart from "@/charts/Statistics.vue";
import BarChart from "@/charts/Bar.vue";

import axios from "axios";

@Component({
  components: {
    "line-chart": LineChart,
    "bar-chart": BarChart,
  },
})
export default class Dashboard extends Vue {
  user_id: string = localStorage.getItem("user_id")!;

  courses: [] = [];
  students: any = "";
  unreads: any = "";

  today_signups: any = "";
  last_week_students: any = "";
  last_two_weeks_students: any = "";
  this_week_students: any = "";

  notifications: any = "";

  sent_broadcasts: any = [];

  mounted() {
    this.getStudents();
    this.getCourses();
    this.getUnreads();

    this.todaySignups();
    this.thisWeekSignups();
    this.lastWeekSignups();
    this.lastTwoWeeksSignups();

    this.UnreadNotifications();
    // this.ResolveNotifications();
  }

  sendBroadcast(e) {
    if (window.confirm("Send this broadcast message?") == true) {
      this.sent_broadcasts.push(e.target!.value);

      let today = new Date().getTime();
      let year = new Date().getFullYear();
      let month = new Date().getMonth().toString().length == 1 ? `0${new Date().getMonth() + 1}` : `${new Date().getMonth() + 1}`;
      let day = new Date().getDate().toString().length == 1 ? `0${new Date().getDate()}` : `${new Date().getDate()}`;
      let expiry = parseInt(`${year}${month}${day}`);
      expiry += 7;

        const params: INewBroadcast = {
            'subject': 'Broadcast From Optimus Pro',
            'message': e.target!.value,
            'severity': 2,
            'expiry': expiry as unknown as string,
            'class': 'all'
        }

      const X = new NewBroadcast();
      X.send(params);
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

  ResolveNotifications() {
    axios
      .get(`${resolveNotifications}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log("Error resolving notifications :>>", err));
  }

  todaySignups() {
    axios
      .get(`${signupsToday}`)
      .then((res) => (this.today_signups = res.data))
      .catch((err) => console.log("Error fetching today signups :>>", err));
  }

  thisWeekSignups() {
    axios
      .get(`${signupsThisWeek}`)
      .then((res) => (this.this_week_students = res.data))
      .catch((err) => console.log("Error fetching today signups :>>", err));
  }

  lastTwoWeeksSignups() {
    axios
      .get(`${signupsTwoWeeks}`)
      .then((res) => (this.last_two_weeks_students = res.data))
      .catch((err) => console.log("Error fetching today signups :>>", err));
  }

  lastWeekSignups() {
    axios
      .get(`${signupsLastWeek}`)
      .then((res) => (this.last_week_students = res.data))
      .catch((err) => console.log("Error fetching today signups :>>", err));
  }

  getUnreads() {
    axios
      .get(`${getUnreadMessages}`)
      .then((res) => (this.unreads = res.data))
      .catch((err) => console.log("Error fetching unread messages :>>", err));
  }

  getCourses() {
    axios
      .get(`${listAllCourses}`)
      .then((res) => (this.courses = res.data))
      .catch((err) => console.log("Error fetching courses :>>", err));
  }

  getStudents() {
    axios
      .get(`${fetchStudents}/2020`)
      .then((res) => (this.students = res.data))
      .catch((err) => console.log("Error fetching students :>>", err));
  }
}
</script>