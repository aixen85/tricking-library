<template>
  <v-app dark>
    <v-app-bar app dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Tricking Library</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn depressed @click="toggleActivity">
        Upload
      </v-btn>
    </v-app-bar>
    <VideoUpload />
    <v-main>
      <nuxt/>
    </v-main>
  </v-app>
</template>

<script>
import {mapMutations} from 'vuex'
import VideoUpload from "@/components/video-upload";

export default {
  components: {VideoUpload},
  methods: {
    ...mapMutations('videos', ["toggleActivity"])
  }
}
</script>
