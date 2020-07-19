<template>
    <!-- SVG timeline here -->
    <g>
        <path id="timeline_root" :d="drawTimeline" stroke="#D4D4D4" stroke-width="8"/>
    </g>
</template>

<script>
import { dateCoordinatesMixin } from '../mixins/dateCoordinatesMixin'

export default {
    name: 'TheTimelineBase',
    props: {
        scale: Number,
        scaleUnit: Number,
        startDate: String
    },
    mixins: [
        dateCoordinatesMixin
    ],
    data() {
        // eventually will read index db --
        // start date, end date
        return {
            width: window.innerWidth,
            height: 600
        }
    },
    computed: {
        drawTimeline: function () {
            let x = this.dateToCoordinates(this.startDate, '1999-05-26', this.scale, this.scaleUnit);
            return `M ${x} ${this.height} L ${this.width} ${this.height}`;
        }
    },
    methods: {
        halveValue: function (height) {
            return height / 2;
        },
        spreadAmount: function (idx) {
            return 100 * idx;
        },
        getXPos: function () {
            return ;
        }
    }
}
</script>

<style scoped>

</style>