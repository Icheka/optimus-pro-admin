<template>
    <div class="modal">
        <!-- <div> -->
            <!-- <slot name="header">HEADER</slot> -->
        <!-- </div>
        <div> -->
            <!-- <slot name="message"></slot> -->
            I AM THE MODAL
        <!-- </div> -->
    </div>
</template>

<style scoped lang="scss">
    .modal {
        width: 100%;
        max-width: 700px;
        height: 80%;
        border-radius: 20px;
        box-shadow: 1px 1px 3px 1px #eee;
        text-align: center;
        background-color: red;
        color: black;
        position: absolute;
        z-index: 8;
        top: 5%;
    }
    
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Modal extends Vue {
    title: string = '';
    body: string = '';

}

</script>
