<!--
    The root element for the timeline. Anything timeline related will be in this component or a child of this component.
    The SVG viewBox is very similar to the viewport, but it can also pan and zoom like a telescope
-->
<template>
    <figure>
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 360">
            <TheTimelineBase/>
        </svg>
    </figure>

</template>

<script>
import TheTimelineBase from '@/components/TheTimelineBase'
//import TimelineEvent from '@/components/TimelineEvent'

export default {
    /**
     * zoom level
     * 0.5 - days
     * 1.0 - months
     * 1.5 - years
     */

    name: 'TheTimeline',
    components: {
        TheTimelineBase,
        //TimelineEvent
    }
}
</script>

<style scoped>
    
    figure {
        margin: 0;
    }
</style>