<template>
  <div>
    <div v-if="tricks">
      <div v-for="t in tricks">
        {{ t.name }}
        <div>
          <video width="400px" controls :src="`http://localhost:5000/api/videos/${t.video}`"></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex';

export default {
  computed: mapState('tricks', ["tricks"])
}
</script>
