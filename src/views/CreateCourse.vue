<template>
    <div class="view-area">
        <div class="view-tagline">
            CREATE COURSE
        </div>
        <div class="row">
            <div class="col-12 col-sm-7">
                <form @submit.prevent="createCourse()" action="#" method="post">
                    <custom-alert
                        :message="alert_message"
                        :header="alert_header"
                        :urgency="alert_urgency"
                        classes="mb-3"
                        v-if="showAlert"
                    />

                    <div class="input-group">
                        <label class="small text-primary col-12">COURSE TITLE
                            <input class="form-control" type="text" v-model="course.title" />
                        </label>
                    </div>
                    <div class="input-group">
                        <label class="small text-primary col-12">COURSE BLURB
                            <textarea class="form-control blurb" v-model="course.blurb"></textarea>
                        </label>
                    </div>
                    <div class="row">
                        <div class="input-group col-5">
                            <label class="small col-12 text-primary">COURSE PLAN
                                <select v-model="course.plan" class="form-control">
                                    <option value="free">Free</option>
                                    <option value="paid">Paid</option>
                                </select>
                            </label>
                        </div>
                        <div class="input-group col-5 offset-2">
                            <label v-if="course.plan !== 'free'" class="small col-12 text-primary">COURSE PRICE
                                <input class="form-control" type="number" v-model="course.price" />
                            </label>
                        </div>
                    </div>
                    <div class="input-group col-12">
                        <label class="small w-100 text-primary">COURSE CATEGORY
                            <select v-model="course.category" class="form-control">
                                <option value="forex">Forex</option>
                                <option value="cryptocurrency">Cryptocurrency</option>
                                <option value="stocks">Stocks</option>
                                <option value="commodities">Commodities</option>
                            </select>
                        </label>
                    </div>
                    <div class="input-group">
                        <label class="small text-primary col-12">COURSE DESCRIPTION
                            <textarea class="form-control descr" v-model="course.description"></textarea>
                        </label>
                    </div>
                    <div class="input-group d-flex flex-row justify-content-center">
                        <button type="submit" class="btn btn-success">Create</button>
                    </div>
                </form>
            </div>
            <div class="col-12 offset-sm-1 col-sm-4">
                <div class="text-primary mt-3 small">
                    COVER IMAGE
                </div>
                <img :src="cover_image" :alt="course.title" />

                <label class="my-2">
                    <input @change="e => setImage(e)" type="file" />
                    <button @click="uploadImage()" v-if="returned !== ''" class="mt-3 btn btn-primary">
                        Upload Cover Image
                    </button>
                    <button v-else disabled class="mt-3 btn btn-primary">
                        Upload Cover Image
                    </button>
                </label>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss">
    .descr {
        height: 200px;
    }

    .input-group {
        margin-top: 10px;
    }
</style>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

import { INewCourse, ChangeCover, NewCourse } from '../utils/interfaces/interfaces';
import CustomAlert from '../components/Alert.vue';

@Component({
    components: {
        'custom-alert': CustomAlert
    }
})
export default class CreateCourse extends Vue {
    course: INewCourse = {
        title: '',
        blurb: '',
        plan: '',
        category: '',
        description: '',
        price: 0
    };

    returned: any = '';

    cover_image: any = '';

    showAlert: boolean = false;

    alert_header: string = '';
    alert_message: string = '';
    alert_urgency: number = 0;

    createCourse() {
        const X = new NewCourse();

        if (this.course.plan == 'free') delete this.course.price;

        let result = X.createCourse(this.course);
        setTimeout(() => {
            this.returned = X.data!;
            
            this.alert_header = "Success :)";
            this.alert_message = "Course was created successfully. You may upload a cover image now.";
            this.alert_urgency = 2;
            this.showAlert = true;
        }, 4000);
    }

    setImage(e) {
        let file = e.target.files[0];
        this.cover_image = file;
        console.log(this.cover_image);
    }

    uploadImage() {
        console.log("Uploading image... :>>", this.returned.course_id);
        const X = new ChangeCover();
        // return;
        X.upload(this.cover_image, this.returned.course_id);
        
        this.showAlert = true;
        
        setTimeout(() => {
            this.alert_header = "Success :)";
            this.alert_message = "Cover image uploaded successfully.";
            this.alert_urgency = 2;
            this.showAlert = true;
        }, 3000);

    }


}
</script>