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
            height: 600
        }
    },
    computed: {
        drawTimeline: function () {
            return `M 15 ${this.height} L ${this.width} ${this.height}`;
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