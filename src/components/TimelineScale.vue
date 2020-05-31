<!-- This is the component for the entire timeline scale, for all dates (every column) -->
<template>
    <g>
        <!-- change 11 to generate an amount suitable for the screen width -->
        <g v-for="n in 14" :key="n" :x="position(n)" :width="scale" :height="height" :fill="color(n)">
            <TimelineScaleUnit :sub-unit-count="TIME_SUB_SCALE[scaleUnit]" 
                               :width="scale" 
                               :height="height" 
                               :starting-pos="position(n)" 
                               :color="color(n)" 
                               :unit-value="getScaleHeader(n)"/>
        </g>
    </g>
</template>

<script>
import TimelineScaleUnit from '@/components/TimelineScaleUnit'
import { dateCoordinatesMixin } from '../mixins/dateCoordinatesMixin'

    export default {
        name: 'TimelineScale',
        components: {
            TimelineScaleUnit
        },
        props: {
            width: Number,
            height: Number,
            startDate: String,
            scaleUnit: String,
            scale: Number
        },
        mixins: [
            dateCoordinatesMixin
        ],
        methods: {
            color: function(n) {
                if (n % 2 == 0) {
                    return '#FFFFFF';
                }
                else {
                    return '#F6F6F6';
                }
            },
            position: function(n) {
                return (n-1) * this.scale;
            },
            /**
             * Evaluates the start date prop and scale to generate the unit headers
             */
            getScaleHeader: function(n) {
                let date = this.getMomentFromString(this.startDate);
                switch(this.scaleUnit) {
                    case 'week': {
                        return 'Week ' + date.week(date.week() + n - 1).week().toString();        
                    }  
                    case 'month': {
                        return date.month(n - 1).format('MMM');
                    }
                    case 'year': {
                        return date.year(date.year() + n - 1).year().toString();
                    }
                    case 'decade': {
                        return date.year(date.year() + n - 1).year().toString().substr(0,3) + '0s';
                    }
                    default:
                        return 'Error';
                }
            }
        } 
    }
</script>

<style scoped>

</style>