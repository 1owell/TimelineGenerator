<template>
    <g>
        <!-- put the date value here above the units -->
        <rect v-for="n in subUnitCount" :key="n" :x="position(n)" :width="computedWidth" :height="height" :fill="color" class="sub-section"/>
        <text :x="startingPos + width / 3" y="30" :textLength="width / 3" style="fill: black;">{{ unitValue }}</text>
    </g>
</template>

<script>
export default {
    name: 'TimelineScaleUnit',
    props: {
        width: Number,
        height: Number,
        startingPos: Number,
        subUnitCount: Number,
        color: String,
        unitValue: String
    },
    computed: {
        computedWidth: function() {
            return this.width / this.subUnitCount;
        }
    },
    methods: {
        position: function(n) {
            return this.startingPos + (n - 1) * (this.width / this.subUnitCount);
        }
    }
}
</script>

<style scoped>
    .sub-section:hover {
        fill: lightgray;
    }
</style>