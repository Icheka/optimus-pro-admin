<template>
    <div class="container">
        <custom-alert
            :message="alert_message"
            :header="alert_header"
            :urgency="alert_urgency"
            classes="mb-3"
            v-if="showAlert"
        />
        <div id="sidebar" class="sidebar">
            <ul>
                <li @click="loadNote(notes.indexOf(note))" v-for="note in notes" :key="notes.indexOf(note)">
                    {{ note }}
                </li>
            </ul>
        </div>

        <div id="editor-wrapper">
            <label for="#title" class="w-100">
                <input id="title" type="text" name="title" placeholder="My Title" v-model="title" />
            </label>
            <textarea name="editor" id="editor" v-model="note"></textarea>
            <div class="input-group mt-3 d-flex flex-row justify-content-end">
                <button @click="saveNote()" class="btn btn-success">Save Note</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

    .container {
        width: 98vw;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 70vh;

        .custom-alert {
            position: absolute;
            top: 6em;
            z-index: 5;
            width: 80vw;
            margin: auto;
        }

        #sidebar {
            width: 20%;
            margin: auto;
            background: skyblue;
            border-radius: 6px;
            height: 100%;
            padding: 0;
            overflow-y: scroll;
            overflow-x: hidden;
            text-overflow: ellipsis;

            scrollbar-color: cyan white;
            scrollbar-width: thin;

            &::-webkit-scrollbar {
                width: 8px;
                margin: 4em 0;
            }

            &::-webkit-scrollbar-track {
                background: white;
            }
    
            &::-webkit-scrollbar-thumb {
                background-color: cyan;
                border-radius: 26px;
                border: 3px solid cyan;
                margin: 6em 5px;
            }

            ul {
                margin-top: 2em;
                width: 100%;
                list-style-type: disc;
                padding: 10px;

                li {
                    font-size: 110%;
                    width: 100%;
                    margin-bottom: 10px;
                    color: white;
                    background: rgb(174, 222, 238);
                    border-radius: 3px;
                    padding: 3px 6px;

                    &:hover {
                        cursor: pointer;
                        color: #333;
                        background: cyan;
                    }
                }
            }
        }

        #editor-wrapper {
            width: 70%;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            
            #title {
                padding: 16px;
                border: 1px solid grey;
                width: 100%;
                border-radius: 6px;
            }

            #editor {
                width: 100%;
                height: 60vh;
                background: lightblue;
                border: 0;
                border-radius: 10px;
                padding: 12px;
            }
        }
    }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import CustomAlert from '../components/Alert.vue';

@Component({
    components: {
        "custom-alert": CustomAlert
    }
})
export default class Notes extends Vue {
    title: string = '';
    note: string = 'Click to type...';

    notes: any = [];

    showAlert: boolean = false;

    alert_header: string = '';
    alert_message: string = '';
    alert_urgency: number = 0;

    saveNote() {
        localStorage.setItem(this.title, this.note);
        this.alert_header = "Success!";
        this.alert_message = "Note saved!";
        this.alert_urgency = 1;
        
        this.showAlert = true;
        setTimeout(() => {
            this.showAlert = false;
            this.getNotes();
        }, 4000);

    }

    loadNote(indx: number) {
        let note:any = localStorage.key(indx);

        let tit_elm = document.getElementById("title") as HTMLInputElement;
        let elm = document.getElementById("editor") as HTMLTextAreaElement;
        tit_elm.value = note;
        elm.value = localStorage.getItem(note)!;
    }

    mounted() {
        this.getNotes();
    }

    getNotes() {
        let notes: any = [];

        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i)?.indexOf("loglevel") == -1) notes.push(localStorage.key(i));
        }

        this.notes = notes;
    }
}
</script>