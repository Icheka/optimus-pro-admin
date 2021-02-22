import axios from 'axios';
import 
{ 
    backendURI, changeCourseCover, createCourse, deleteCourse, postVideo, sendBroadcastMsg,
    fetchStudents, suspendUsers, deleteUsers, activateUsers

} from '../endpoints';


export class Users {
    data: any = '';


    getAll(floor: number) {
        axios.get(`${fetchStudents}/${floor}`)
            .then(res => this.data = res.data)
            .catch(err => console.log("Error fetching users :>>", err));
    }

    suspendUser(user_id: number) {
        axios.get(`${suspendUsers}/${user_id}`)
    }

    deleteUser(user_id: number) {
        axios.get(`${deleteUsers}/${user_id}`)
    }

    activateUser(user_id: number) {
        axios.post(`${activateUsers}/${user_id}`);
    }
}



export interface INewBroadcast {
    subject: string;
    message: string;
    severity: number;
    expiry: string;
    class: string;
}

export class NewBroadcast {
    msg: any = '';

    send(params: INewBroadcast) {
        const X = new FormData();
        Object.keys(params).forEach(param => {
            X.append(param, params[param]);
        });
        axios.post(`${sendBroadcastMsg}`, X)
            .then(res => this.msg = res.data)
            .catch(err => alert(`Error sending this broadcast message! ${err}`))
    }
}

export class UploadVideo {
    data: string = '';

    async upload(file: File | Blob, course_id: string) {
        const X = new FormData();
        X.append('video', file);

        try {
            let result = await axios.post(`${postVideo}/${course_id}`, X)
            alert("Video added successfully!");
            return result.data;
        } catch(err) {
            alert("Failed to upload video!");
            console.log("Error posting video :>>", err);
        }
    }
}

export const DeleteCourse = async (course_id: string) => {
    try {
        let result = await axios.get(`${deleteCourse}/${course_id}`);
        alert("Course delete successful!");
        return result.data;
    } catch (err) {
        console.log("Error deleting course :>>", course_id);
    }
}

export interface INewCourse {
    title: string;
    blurb: string;
    plan: string;
    price?: number;
    category: string;
    description: string;
    cover_image?: string;
}

export class NewCourse implements INewCourse {
    title: string = '';
    blurb: string = '';
    plan: string = '';
    price?: number;
    category: string = '';
    description: string = '';
    cover_image?: string = '';

    data?: {} = {};

    async createCourse(obj: object) {
        const X = new FormData();

        Object.keys(obj).forEach(param => {
            X.append(param, obj[param]);
        });

        try {
            const res = await axios.post(`${createCourse}`, X)
            this.data = res.data;
        } catch (err) {
            console.log("Error creating course :>>", err);
        }
        
    }

}


export class ChangeCover {
    upload(file: File | Blob, course_id: string) {
        const X = new FormData();
        X.append('image', file);

        axios.post(`${changeCourseCover}/${course_id}`, X)
            .then(res => console.log(res.data))
            .catch(err => console.log("Error changing cover image :>>", err));

    }
}