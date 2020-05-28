<!--
    The root element for the timeline. Anything timeline related will be in this component or a child of this component.
    The SVG viewBox is very similar to the viewport, but it can also pan and zoom like a telescope
-->
<template>
    <figure>
        <svg  xmlns="http://www.w3.org/2000/svg" :width="width" :height="height">
            <TimelineScale :height="height" :width="width" :sub-unit-count="TIME_SUB_SCALE[scaleUnit]" :start-date="startYear"/>
            <TheTimelineBase/>
            <TimelineEvent :scale="150 / TIME_SUB_SCALE[scaleUnit]" :start-x="4" :end-x="200" :y="-360" /> <!-- need to have the width of a unit be computed in the timeline component (consider another wrapper component that will be part of the template) so that event size can be the same. -->
        </svg>
    </figure>
</template>

<script>
import TheTimelineBase from '@/components/TheTimelineBase'
import TimelineEvent from '@/components/TimelineEvent'
import TimelineScale from '@/components/TimelineScale'
    
export default {
    name: 'TheTimeline',
    props: {
        scaleUnit: String,
        startYear: Number
    },
    created () {
        this.TIME_SUB_SCALE = {
            'week': 7,
            'month': 30,
            'year': 12,
            'decade': 10
        } 
    },
    components: {
        TheTimelineBase,
        TimelineEvent,
        TimelineScale
    },
    data() {
        return {
            
            // where the data gets loaded and stored for this component instance
        }
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