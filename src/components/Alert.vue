<template>
    <div :class="bg()">
        <div class="header">
            {{ header }}
        </div>
        <div class="message">
            {{ message }}
        </div>
    </div>
</template>

<style scoped lang="scss">
    .custom-alert {
        border-radius: 6px;
        padding: 12px;
    }
    
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class CustomAlert extends Vue {
    @Prop() readonly message!: string;
    @Prop() readonly header!: string;
    @Prop() readonly urgency!: number;
    @Prop() readonly classes!: string;

    bg() {
        let classes = "custom-alert " + this.$props.classes;

        if (this.$props.urgency == 1) {
            classes += ' bg-primary';
        } else if (this.$props.urgency == 2) {
            classes += " bg-secondary";
        } else if (this.$props.urgency == 3) {
            classes += " bg-danger";
        } else {
            classes += " bg-light";
        }

        return classes;
    }
}
</script>