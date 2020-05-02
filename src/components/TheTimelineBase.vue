<template>
    <div>
        <!-- SVG timeline here -->
        <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height">
            <g id="Group_1" data-name="Group 1" transform="translate(-79.5 -521.5)">
                <line id="timeline_root" :y1="halveValue(height)" :y2="halveValue(height)" x2="1841" transform="translate(79.5 540.5)" stroke="black" stroke-width="2"/>
                <TimelineBaseTick :id="tick" :height="30" :x="spreadAmount(tick)" :y="706" v-for="tick in amountOfTicks" :key="tick" />
            </g>
        </svg>
    </div>
</template>

<script>
import TimelineBaseTick from '@/components/TimelineBaseTick.vue'

export default {
    name: 'TheTimelineBase',
    components: {
        TimelineBaseTick
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