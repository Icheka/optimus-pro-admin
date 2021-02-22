<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Overview from '@/views/Overview.vue';

import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    "overview": Overview,
  }
})

export default class App extends Vue {}
</script>