<!--
    The root element for the timeline. Anything timeline related will be in this component or a child of this component.
    The SVG viewBox is very similar to the viewport, but it can also pan and zoom like a telescope
-->
<template>
    <figure>
        <svg  xmlns="http://www.w3.org/2000/svg" :width="width" :height="height">
            <TimelineScale :height="height" :width="width" :sub-unit-count="TIME_SUB_SCALE[scaleUnit]" :start-date="1999"/>
            <TheTimelineBase/>
            <TimelineEvent :scale="150 / TIME_SUB_SCALE[scaleUnit]" 
                           :start-x="dateToCoordinates(this.startDate, '2002-07-01', 150, this.scaleUnit)"
                           :end-x="dateToCoordinates(this.startDate, '2004-01-20', 150, this.scaleUnit)" 
                           :y="200" />
        </svg>
    </figure>
</template>

<script>
import TheTimelineBase from '@/components/TheTimelineBase'
import TimelineEvent from '@/components/TimelineEvent'
import TimelineScale from '@/components/TimelineScale'
import { dateCoordinatesMixin } from '../mixins/dateCoordinatesMixin'

export default {
    name: 'TheTimeline',
    props: {
        scaleUnit: String,
        startDate: String
    },
    mixins: [
        dateCoordinatesMixin
    ],
    components: {
        TheTimelineBase,
        TimelineEvent,
        TimelineScale
    },
    data() { // data changing in here will be reactive to the component
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