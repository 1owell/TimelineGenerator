<template>
    <TheTimeline scale-unit="year" start-date="1999-01-01" :scale="130"/>
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