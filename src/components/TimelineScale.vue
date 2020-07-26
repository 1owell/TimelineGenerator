<!-- This is the component for the entire timeline scale, for all dates (every column) -->
<template>
    <g>
        <g v-for="n in getAmountOfUnits()" :key="n" :x="position(n)" :width="scale" :height="height" :fill="color(n)">
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
            endDate: String,
            scaleUnit: Number,
            scale: Number
        },
        mixins: [
            dateCoordinatesMixin
        ],
        methods: {
            color: function(n) {
                return (n % 2 == 0) ? '#FFFFFF' : '#F6F6F6';
            },
            position: function(n) {
                return (n-1) * this.scale;
            },
            getAmountOfUnits: function() {
                let start = this.getMomentFromString(this.startDate);
                let end;
                if (this.endDate == undefined) {
                    end = this.getCurrentMoment();
                }
                else {
                    end = this.getMomentFromString(this.endDate);
                }
                switch(this.scaleUnit) {
                    case 0: {
                        return end.diff(start, 'weeks');
                    }  
                    case 1: {
                        return end.diff(start, 'months');
                    }
                    case 2: {
                        return end.diff(start, 'years') + 1;
                    }
                    case 3: {
                        return end.diff(start, 'years') + 1 / 10 >> 0;
                    }
                    default:
                        return 5;
                }
            },
            /**
             * Evaluates the start date prop and scale to generate the unit headers
             */
            getScaleHeader: function(n) {
                let date = this.getMomentFromString(this.startDate);
                switch(this.scaleUnit) {
                    case 0: {
                        return 'Week ' + n;        
                    }  
                    case 1: {
                        return date.month(date.month() + n - 1).format('MMM');
                    }
                    case 2: {
                        return date.year(date.year() + n - 1).year().toString();
                    }
                    case 3: {
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