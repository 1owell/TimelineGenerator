<template>
    <g :transform="vertical">
        <line id="Line_42" data-name="Line 42" :x1="startX" :x2="endX" :y1="y" :y2="y" fill="none" stroke="#ff7272" stroke-width="5"/>
        <g id="Ellipse_5" data-name="Ellipse 5" :transform="startPos" fill="#fff" stroke="#707070">
            <circle cx="8" cy="8" :r="scale/2" stroke="none"/>
            <circle cx="8" cy="8" :r="scale/2" fill="none"/>
        </g>
        <g id="Ellipse_6" data-name="Ellipse 6" :transform="endPos" fill="#fff" stroke="#707070">
            <circle cx="8" cy="8" :r="scale/2" stroke="none"/>
            <circle cx="8" cy="8" :r="scale/2" fill="none"/>
        </g>
    </g>
</template>

<script>
export default {
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
            return `translate(${this.startX} ${this.y})`;
        },
        endPos:   function () {
            return `translate(${this.endX} ${this.y})`;
        }
    }
}
</script>