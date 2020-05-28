<template>
    <g :transform="vertical">
        <line id="Line_42" data-name="Line 42" :x1="startX + 1" :x2="endX" fill="none" stroke="#ff7272" stroke-width="5"/>
        <g id="Ellipse_5" data-name="Ellipse 5" :transform="startPos" fill="#fff" stroke="#707070">
            <circle :cx="scale/2" cy="0" :r="scale/2" stroke="none"/>
            <circle :cx="scale/2" cy="0" :r="scale/2" fill="none"/>
        </g>
        <g id="Ellipse_6" data-name="Ellipse 6" :transform="endPos" fill="#fff" stroke="#707070">
            <circle :cx="scale/2" cy="0" :r="scale/2" stroke="none"/>
            <circle :cx="scale/2" cy="0" :r="scale/2" fill="none"/>
        </g>
    </g>
</template>

<script>
export default {
    // transform="translate(160.5 832.5)"
    name: 'TimelineEvent',
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
        vertical: function () {
            return `translate(0 ${this.y})`;
        },
        startPos: function () {
            return `translate(${this.startX} 0)`;
        },
        endPos:   function () {
            return `translate(${this.endX} 0)`;
        }
    }
}
</script>