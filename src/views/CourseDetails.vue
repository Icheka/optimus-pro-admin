<template>
    <div class="view-area">
        <div class="view-tagline">EDIT COURSE</div>
        <div class="pl-4 mt-1 mb-3 pl-md-0 text-danger small">Be careful while editing courses. Too many changes may confuse your students!</div>
        <div class="col-12">Actions</div>
        <div class="col-12 mb-5 pl-0">
            <button @click="deactivateCourse()" class="btn btn-muted border border-danger text-danger ml-3">
                <img style="width: 20px; height: 20px; margin-right: 10px;" src="@/assets/unsplash/close.png" alt=""> DEACTIVATE
            </button>

            <button @click="deleteCourse()" class="btn btn-muted border border-danger text-danger ml-3">
                <img style="width: 20px; height: 20px; margin-right: 10px;" src="@/assets/unsplash/bin.png" alt=""> DELETE
            </button>

            <button @click="activateCourse()" class="btn btn-muted border border-success text-success ml-3">
                <img style="width: 20px; height: 20px; margin-right: 10px;" src="@/assets/unsplash/tick.png" alt=""> ACTIVATE
            </button>
        </div>
        <div class="col-12">Edit Course</div>
        <div class="col-12 row">
            <div class="col-12 col-md-7 border">
                <div method="post" action="#">
                    <custom-alert
                        :message="alert_message"
                        :header="alert_header"
                        :urgency="alert_urgency"
                        classes="mb-3"
                        v-if="showAlert"
                    />

                    <div class="input-group">
                        <input class="form-control" type="text" name="course_title" v-model="course.title" />
                    </div>
                    <div class="input-group">
                        <input class="form-control" type="text" name="course_blurb" v-model="course.blurb" />
                    </div>
                    <div class="row">
                        <div class="col-5">
                                <select class="form-control" v-model="course.plan" name="plan" style="text-transform: capitalize;">
                                    <option :value="course.plan" disabled selected>{{ course.plan }}</option>
                                    <option value="free">Free</option>
                                    <option value="paid">Paid</option>
                                </select>
                        </div>
                        <div v-if="course.plan !== 'free'" class="col-5">
                            <input class="form-control" type="number" name="course_price" v-model="course.price" />
                        </div>
                    </div>
                    <div class="input-group">
                        <select class="form-control" v-model="course.category" name="course_category" style="text-transform: capitalize;">
                            <option :value="course.category" selected>{{ course.category }}</option>
                            <option value="cryptocurrency">Cryptocurrency</option>
                            <option value="forex">Forex</option>
                            <option value="stocks">Stocks</option>
                            <option value="commodities">Commodities</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <textarea v-model="course.description" class="form-control" name="course_description" cols="30" rows="10"></textarea>
                    </div>
                    <div class="d-flex flex-row justify-content-center">
                        <button @click="toEditCourse()" type="button" class="mx-auto btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 offset-md-1">
                <div>
                    <img :src="course.cover_image" :alt="course.title" />
                </div>
                <div class="mt-3">
                    <label style="visibility: show;">
                        <input @change="e => changeCover(e)" id="file-input" style="visibility: show;" type="file" name="image" />
                        <button id="upload-btn" class="btn btn-primary">Change Cover Picture</button>
                    </label>
                </div>
            </div>
        </div>
        <div class="border col-12 mt-3 p-3">
            <div class="d-flex flex-row justify-content-between"><div>Videos</div> <div class="bg-danger text-white px-3 py-2">Videos: {{ videos.length }}</div></div>
            <div class="col-12 mb-3 d-flex flex-row justify-content-start" style="whitespace: nowrap;">
                <div v-for="video in videos" :key="video.sn" class="card video">
                    <video controls :src="video.video_link"></video>
                </div>
            </div>
            <div class="text-center mb-5">
                <div class="border border-danger mb-2 p-2 d-flex flex-row justify-content-center">
                    <input :key="video_upload" class="overflow-ellipsis col-12 col-md-5 mb-3 form-control" @change="e => setVideoUpload(e)" type="file" />
                </div>
                <button v-if="video_upload_ready == false" disabled class="btn btn-danger">Upload Video</button>
                <button v-else @click="uploadVideo()" class="btn btn-success">Upload Video</button>
            </div>
        </div>
        
    </div>
</template>

<style scoped lang="scss">
    .card.video {
        width: 250px;
        height: 250px;
        margin-right: 10px;

    }

    .input-group {
        margin: 1em auto;

        textarea {
            width: 100%;
            resize: none;

        }
    }

    #upload-btn {
        position: relative;
        top: -2.4em;
        z-index: 1;
        margin: auto;
    }
    #file-input {
        position: relative;
        z-index: 3;
        opacity: 0;
    }

    img {
        width: 100%;
        max-width: 400px;
        height: auto;
        border-radius: 3px;
        border: 6px solid lightblue;
    }
    
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import axios from 'axios';
import { fetchCourse, editCourse, getVideosForCourse } from '../utils/endpoints';
import { ChangeCover, DeleteCourse, UploadVideo } from '../utils/interfaces/interfaces';
import CustomAlert from '../components/Alert.vue';

@Component({
    components: {
        "custom-alert": CustomAlert
    }
})
export default class CourseDetails extends Vue {
    course_id: string = this.$route.params.course_id;
    course: any = {};

    showAlert: boolean = false;

    alert_header: string = '';
    alert_message: string = '';
    alert_urgency: number = 0;

    videos: [] = [];

    video_upload: any = '';
    video_upload_ready: boolean = false;

    mounted() {
        this.fetchCourse();
        this.getVideos();
    }

    setVideoUpload(e) {
        let file = e.target.files[0];
        this.video_upload_ready = true;
        this.video_upload = file;
        console.log("Video Upload :>>", this.video_upload);
        console.log("Video Upload Ready Status :>>", this.video_upload_ready);
        this.$forceUpdate();
    }

    uploadVideo() {
        const X = new UploadVideo();
        X.upload(this.video_upload, this.course_id);
    }

    getVideos() {
        axios.get(`${getVideosForCourse}/${this.course_id}`)
            .then(res => {
                this.videos = res.data !== null ? res.data : [];
                console.log("Videos :>>", this.videos);
                })
            .catch(err => console.log("Error getting videos :>>", err));
    }

    toEditCourse() {
        if (window.confirm(`Are you sure you want to edit ${this.course.title!}?`)) this.editCourse();
    }

    activateCourse() {
        if (window.confirm("Do you really want to activate this course? This action can be undone.") == true) {
            this.course.status! = 'activated';
            this.editCourse();
        }
    }

    deactivateCourse() {
        if (window.confirm("Do you really want to deactivate this course? This action can be undone.") == true) {
            this.course.status! = 'deactivated';
            this.editCourse();
        }
    }

    editCourse() {
        const X = new FormData();
        let req_obj = {
            ...this.course
        };
        delete req_obj.course_id;

        Object.keys(req_obj).forEach(key => {
            X.append(key, this.course[key]);
        });

        axios.post(`${editCourse}/${this.course_id}`, X)
            .then(res => {
                this.alert_header = "Success :)";
                this.alert_message = "Course was updated successfully.";
                this.alert_urgency = 1;

                setTimeout(() => {
                    window.location.reload();
                }, 5000);
            })
            .catch(err => {
                this.alert_header = "Failed ;(";
                this.alert_message = "A network error occurred while attempting to update this course.";
                this.alert_urgency = 3;
            });
        this.showAlert = true;
    }

    changeCover(e) {
        const X = new ChangeCover();
        // console.log(e);
        X.upload(e.target.files[0], this.course_id);
    }
    
    fetchCourse() {
        axios.get(`${fetchCourse}/${this.course_id}`)
            .then(res => {
                this.course = res.data;
                console.log("Fetched course :>>", this.course);
            })
            .catch(err => console.log("Error fetching course :>>", err));
    }

    deleteCourse() {
        if (window.confirm(`Do you really want to delete ${this.course.title!}? This action cannot be undone!`) == true) DeleteCourse(this.course_id);
    }

}
</script>