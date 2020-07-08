<template>
    <g :transform="vertical" @mouseover="hover = true" @mouseout="hover = false">
        <DetailsPane v-show="this.hover" :name-header="header" :sub-header="subHeader" :body-text="body" />
        
        <line :x1="startX" :x2="endX" stroke="#ff7272" stroke-width="5"/>

        <g :transform="startPos" fill="#fff" stroke="#707070">
            <circle :cx="scale/2" cy="0" :r="scale/2" stroke="none"/>
            <circle :cx="scale/2" cy="0" :r="scale/2" fill="none"/>
        </g>

        <g :transform="endPos" fill="#fff" stroke="#707070">
            <circle :cx="scale/2" cy="0" :r="scale/2" stroke="none"/>
            <circle :cx="scale/2" cy="0" :r="scale/2" fill="none"/>
        </g>
    </g>
</template>

<script>
import DetailsPane from '@/components/DetailsPane'
export default {
    // transform="translate(160.5 832.5)"
    name: 'TimelineEvent',
    components: {
        DetailsPane
    },
    props: {
        name: String,
        description: String,
        startDate: Number,
        endDate: Number,
        color: String,
        scale: Number,
        startX: Number,
        y: Number,
        endX: Number
    },
    computed: {
        vertical() { return `translate(0 ${this.y})`;      },
        startPos() { return `translate(${this.startX} 0)`; },
        endPos()   { return `translate(${this.endX} 0)`;   }
    },
    data: function () {
        return {
            header: 'Header',
            subHeader: 'Sub header',
            body: 'This is body text.',
            hover: false
        }
    }
}
</script>