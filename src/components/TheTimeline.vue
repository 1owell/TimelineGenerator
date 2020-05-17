<!--
    The root element for the timeline. Anything timeline related will be in this component or a child of this component.
    The SVG viewBox is very similar to the viewport, but it can also pan and zoom like a telescope
-->
<template>
    <figure>
        <svg  xmlns="http://www.w3.org/2000/svg" :width="width" :height="height">
            <TimelineScale :height="height" :width="width"/>
            <TheTimelineBase/>
            <TimelineEvent/>
        </svg>
    </figure>
</template>

<script>
import TheTimelineBase from '@/components/TheTimelineBase'
import TimelineEvent from '@/components/TimelineEvent'
import TimelineScale from '@/components/TimelineScale'

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
        TimelineEvent,
        TimelineScale
    },
    // need to scale the view when the window size changes (keeping aspect ratio)
    computed: {
        width: function() {
            return window.innerWidth;
        },
        height: function() {
            return window.innerHeight * .89
        }
    }
}
</script>

<style scoped>
    
    figure {
        margin: 0;
    }
</style>