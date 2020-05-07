<template>
    <!-- SVG timeline here -->
    <g>
        <defs>
            <marker id="timelineStart" viewBox="0 0 10 10" refX="1" refY="5" markerUnits="strokeWidth">
                <circle></circle>
            </marker>
            <pattern id="ticks" width="50" height="1" patternUnits="userSpaceOnUse">
                <path stroke="black" d="M 0 0 L 0 360" />
            </pattern>
        </defs>
        <g>
            <rect :width="width" :height="height" fill="url(#ticks)"/>
            <path id="timeline_root" :d="drawTimeline" stroke="black" fill="url(#ticks)" marker-start="url(#timelineStart)" />
        </g>
    </g>
</template>

<script>
// import TimelineBaseTicks from '@/components/TimelineBaseTicks.vue'

export default {
    name: 'TheTimelineBase',
    components: {
        // TimelineBaseTicks
    },
    props: {
        id: Number,
        name: String,
        zoomLevel: Number,
        startDate: Number,
        endDate: Number
    },
    data() {
        return {
            width: window.innerWidth,
            height: 360
        }
    },
    computed: {
        drawTimeline: function () {
            let command = "M";
            command += ` 0 ${this.height / 2} L ${this.width} ${this.height / 2}`;
            return command;
        },
        // needs to provide both the index and the spread measurement
        amountOfTicks: function () {
            return 17
        }
    },
    methods: {
        halveValue: function (height) {
            return height / 2;
        },
        spreadAmount: function (idx) {
            return 100 * idx;
        }
    }
}
</script>

<style scoped>

</style>