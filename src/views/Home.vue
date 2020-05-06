<template>
  <div class="home">
    <TheWorkspace/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheWorkspace from '@/components/TheWorkspace.vue'

export default {
  name: 'Home',
  components: {
    TheWorkspace
  }
}
</script>
