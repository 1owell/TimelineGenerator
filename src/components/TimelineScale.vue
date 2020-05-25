<template>
    <g>
        <!-- change 11 to generate an amount suitable for the screen width -->
        <g v-for="n in 14" :key="n" :x="position(n)" width="150" :height="height" :fill="color(n)">
            <TimelineScaleUnit :sub-unit-count="subUnitCount" :width="150" :height="height" :starting-pos="position(n)" 
                                :color="color(n)" :unit-value="getScaleHeader(n)"/>
        </g>
    </g>
</template>

<script>
import TimelineScaleUnit from '@/components/TimelineScaleUnit'

    export default {
        name: 'TimelineScale',
        components: {
            TimelineScaleUnit
        },
        props: {
            width: Number,
            height: Number,
            subUnitCount: Number,
            startDate: Number
        },
        // need to take the width and find a good subwidth to have ten divider rectangles
        methods: {
            color: function(n) {
                if (n % 2 == 0) {
                    return '#F6F6F6';
                }
                else {
                    return '#FFFFFF';
                }
            },
            position: function(n) {
                return (n-1) * 150;
            },
            getScaleHeader: function(n) {
                let date = this.startDate + n - 1;
                return date.toString();
            }
        } 
    }
</script>

<style scoped>

</style>