<template>
    <g>
        <g v-for="n in 11" :key="n" :x="position(n)" width="150" :height="height" :fill="color(n)">
            <TimelineScaleUnit :section-amount="12" :width="150" :height="height" :starting-pos="position(n)" :color="color(n)" unit-value="2012"/>
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
            subCount: Number
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
            }
        } 
    }
</script>

<style scoped>

</style>