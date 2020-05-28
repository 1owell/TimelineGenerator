<template>
    <TheTimeline scale-unit="year" :start-year="1998"/>
</template>

<script>
import TheTimeline from '@/components/TheTimeline.vue'

export default {
    name: 'TheWorkspace',
    components: {
        TheTimeline
    }
}
</script>

<style scoped>

</style>