<template>
    <!-- SVG timeline here -->
    <g>
        <path id="timeline_root" :d="drawTimeline" stroke="#D4D4D4" stroke-width="8"/>
    </g>
</template>

<script>

export default {
    name: 'TheTimelineBase',
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
            height: 700
        }
    },
    computed: {
        drawTimeline: function () {
            let command = "M";
            command += ` 0 ${this.height - 50} L ${this.width} ${this.height - 50}`;
            return command;
        },
        // needs to provide both the index and the spread measurement
        drawTicks: function () {
            return `M 0 0 L 0 ${this.height}`;
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