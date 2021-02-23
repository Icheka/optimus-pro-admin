<template>
    <div class="view-area">
        <div class="view-tagline">CHAT</div>
        <div class="view-wrapper row">
            <div class="persons-sidebar col-md-3 border py-2">
                <div @click="e => changeUserID(e, person.user_id)" v-for="person in persons" :key="person.user_id" class="persons-tab p-2">
                    {{ person.first_name }} {{ person.last_name }}
                </div>
            </div>
            <div class="messages-sidebar col-md-9">
                <div class="messages-area">
                    <div v-for="message in messages" :key="message.message_id">
                        <div v-if="message.sender == 'admin'" class="border-1 border-danger">
                            <div class="received chat-msg text-white">
                                <div class="small">OPTIMUS PRO:<span class="float-right">{{ message.sent_at }}</span></div>
                                <div class="mt-3">
                                    {{ message.body }}
                                </div>
                            </div>
                        </div>
                        <div v-else-if="message.sender == user_id" class="border-1 border-danger">
                            <div class="sent chat-msg text-black-50">
                                <div class="small">{{ user.first_name + ' ' + user.last_name }}:<span class="float-right">{{ message.sent_at }}</span></div>
                                <div class="mt-3">
                                    {{ message.body }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="input-area">
                    <textarea @keyup.enter="sendMessage()" v-model="message" class="form-control" placeholder="Enter to send..." aria-placeholder="Enter to send..."></textarea>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
    .persons-tab {
        cursor: pointer;
        border-radius: 4px;

        &:hover, &.active {
            background-color: white;
            transition: all linear 1000ms;
        }
    }

    .chat-msg {
        width: 100%;
        max-width: 400px;
        border-radius: 4px;
        background-color: red;
        margin: 14px;
        padding: 10px;
        clear: both;

        &.sent {
            background-color: cyan;
        }

        &.received {
            background-color: lightblue;
            float: right;
        }
    }

    .messages-area {
        height: 70vh;
        background-color: cadetblue;
        margin: 10px 0;
        padding: 8px 0;
        overflow-y: scroll;
    }

    .input-area textarea {
        resize: none;
        max-height: 50px;
        
    }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { sendMessage, getMessagesForUser, getInfoAboutUser, getAllMessages } from '../utils/endpoints';
import axios from 'axios';

@Component
export default class Chats extends Vue {
    message: string = '';
    messages: [] = [];
    // user_id: string = '31012021504849542204';
    user_id: string = '';

    user: [] = [];

    allmessages: [] = [];
    headers: any = [];

    persons: any = [];

    mounted() {
        this.getInfoAboutUser();
        // this.getMessages();
        this.getAllMessages();

        setInterval(() => {
            this.getMessages();
            this.getAllMessages();
        }, 6000);
    }

    changeUserID(e: Event, user_id: string) {
        let elements = document.getElementsByClassName('persons-tab');
        for (const element of elements) element.classList.remove('active');

        e.currentTarget!['classList']!.add('active');
        this.user_id = user_id;
        this.getMessages();
        this.getInfoAboutUser();
    }

    extractHeaders() {
        let headers = new Set();
        this.allmessages.forEach(msg => {
            headers.add(msg['sender']);
            headers.add(msg['receiver']);
        });
        this.headers = Array.from(headers).slice().reverse();
        this.headers = this.headers.filter(h => h !== 'admin');
        this.convertHeaderToFullName();
        // console.log(this.headers);
    }

    convertHeaderToFullName() {
        let new_persons: Array<object> = [];
        this.headers.forEach(h => {
            axios.get(`${getInfoAboutUser}/${h}`)
                .then(res => {
                    new_persons.push(res.data[0])
                })
                .catch(err => console.log(err));
        });

        new_persons = new_persons.slice().reverse();
        this.persons.length == 0 || this.persons.length !== new_persons.length ? (this.persons = new_persons) : (null);

        // this.persons.length != new_persons.length || this.persons == [] ? (this.persons = new_persons) : (null);
    }

    getAllMessages() {
        axios.get(getAllMessages)
            .then(res => {
                this.allmessages = res.data;
                this.extractHeaders();
            })
    }

    getInfoAboutUser() {
        axios.get(`${getInfoAboutUser}/${this.user_id}`)
            .then(res => this.user = res.data[0])
            // .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    getMessages() {
        axios.get(`${getMessagesForUser}/${this.user_id}`)
            .then(res => {
                this.messages = res.data;
            })
            .catch(err => console.log("Error retrieving chats"));
    }

    sendMessage() {
        console.log("Messages :", this.message);
        console.log(sendMessage);
        const X = new FormData();
        X.append('sender', 'admin');
        X.append('receiver', this.user_id);
        X.append('body', this.message);

        this.message = '';

        axios.post(sendMessage, X)
        .then(res => this.getMessages())
        .catch(err => console.log(err));
    }
}
</script>