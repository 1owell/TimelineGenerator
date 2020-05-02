<template>
    <div>
        <TheTimelineBase />
    </div>
</template>

<script>
import TheTimelineBase from '@/components/TheTimelineBase'

export default {
    /**
     * zoom level
     * 0.5 - days
     * 1.0 - months
     * 1.5 - years
     */

    name: 'TheTimeline',
    components: {
        TheTimelineBase
    }
}
</script>

<style scoped>

</style>