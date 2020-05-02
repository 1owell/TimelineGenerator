<template>
  <div class="home">
    <TheTimeline/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheTimeline from '@/components/TheTimeline.vue'

export default {
  name: 'Home',
  components: {
    TheTimeline
  }
}
</script>
