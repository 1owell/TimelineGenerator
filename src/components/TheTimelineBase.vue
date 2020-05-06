<template>
    <!-- SVG timeline here -->
    <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
            <marker id="timelineStart" viewBox="0 0 10 10" refX="1" refY="5" markerUnits="strokeWidth">
                <circle></circle>
            </marker>
            <pattern id="ticks">
                <path d="M 10 10 L 20 20"/>
            </pattern>
        </defs>
        <g>
            <path id="timeline_root" :d="drawTimeline" stroke="url(#ticks)" marker-start="url(#timelineStart)" />
        </g>
    </svg>
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