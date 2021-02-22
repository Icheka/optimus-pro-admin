<template>
    <div class="view-area">
        <div class="view-tagline">Pending Reports</div>
        <div class="container" style="height: 90vh;">
            <div class="row">
                <div class="col-md-3 sidebar border">
                    <div v-if="pending_reports.length == 0" style="height: 90vh; padding-top: 40%; text-align: center;">
                        No Reports
                    </div>
                    <div @click="e => switchActiveReport(e, report.report_id)" v-for="report in pending_reports" :key="report.report_id" class="tab">
                        <div>{{ report.title }}</div>
                        <div
                            class="body-preview"
                        >
                            {{ report.body }}
                        </div>
                        <div class="small">{{ report.created_at }}</div>
                    </div>
                </div>
                <div class="col-md-9 main-area border">
                    <div class="row mb-2" style="position: sticky;">
                        <div class="active-report-title col-12">
                            <div class="bg-white py-2">
                                <span class="tag-object">
                                    REPORT TITLE
                                </span>
                                {{ active_report.title }}
                            </div>
                        </div>
                    </div>
                    <div class="active-report-body">
                        {{ active_report.body }}
                    </div>
                    <div class="active-report-remark border bg-light-info" style="height: 30vh;">
                        <div class="bg-success py-1 px-2 d-flex flex-row justify-content-between">
                            <div>Remark(s)</div>
                            <div class="d-flex flex-row justify-content-end">
                                <div class="d-flex flex-row justify-content-between col-10">
                                    <span class="tag pt-2 mr-2">GRADE</span>
                                    <input v-model="active_report.grade" type="text">
                                </div>
                                <div class="ml-2">
                                    <button @click="saveUpdate()" class="btn btn-link">Save</button>
                                </div>
                            </div>
                        </div>
                        <textarea class="form-control" v-model="active_report.remark"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .active-report-body {
        height: 50vh; 
        overflow-y: scroll;
        border: 1px solid #555;
        padding: 12px;
        color: black;
    }

    .sidebar {
        height: 90vh;
        overflow-y: scroll;
    }

    .tag-object {
        background-color: #fff;
        border: 1px solid #efefef;
        border-radius: 8px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        padding: 9px;
        margin-right: 12px;
        margin-left: -2px;
    }

    .active-report-title {
        padding-top: 13px;
        color: #666;
        font-size: 110%;
    }

    .tab {
        background-color: white;
        margin: 7px;
        border-radius: 4px;
        padding: 4px 10px;

        &:hover, &.active {
            background-color: lightblue;
            transition: all linear 1000ms;
            cursor: pointer;
            border: 1px solid #777;
        }

        .body-preview {
            text-overflow: ellipsis; 
            white-space: nowrap; 
            overflow: hidden;
            font-size: 90%;
            color: grey;
        }
    }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { pendingReports, updateReports } from '../utils/endpoints';
import axios from 'axios';

@Component
export default class PendingReports extends Vue {
    pending_reports: Array<object> = [];
    active_report: Object = {};

    mounted() {
        this.getUngradedReports();
    }

    saveUpdate() {
        if (Object.keys(this.active_report).length == 0) return false;
        if (this.active_report['grade'].length == 0) return alert("You must specify a grade for this report first.");

        if (window.confirm("Are you sure you want to submit this assessment?")) {
            let X = new FormData();
            Object.keys(this.active_report).forEach(k => X.append(k, this.active_report[k]))

            axios.post(updateReports, X)
                .then(res => res.data == "Successful"  ? alert("Report grade saved successfully") : alert("An error occurred"))
                .catch(err => console.log(err));

            this.getUngradedReports();
        }
    }

    switchActiveReport(e: Event, report_id: string) {
        let elements = document.getElementsByClassName('tab');
        for (const element of elements) element.classList.remove('active');

        e.currentTarget!['classList'].add('active');

        this.active_report = Object.values(this.pending_reports).filter(report => report['report_id']! == report_id)[0];
    }

    getUngradedReports() {
        axios.get(pendingReports)
            .then(res => this.pending_reports = res.data)
            .catch(err => console.log(err));
    }
}
</script>