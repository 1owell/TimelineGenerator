<template>
    <g>
        <rect v-for="n in sectionAmount" :key="n" :x="position(n)" :width="computedWidth" :height="height" :fill="color" class="sub-section"/>
    </g>
</template>

<script>
export default {
    name: 'TimelineScaleUnit',
    props: {
        width: Number,
        height: Number,
        startingPos: Number,
        sectionAmount: Number,
        color: String
    },
    computed: {
        computedWidth: function() {
            return this.width / this.sectionAmount;
        }
    },
    methods: {
        position: function(n) {
            return this.startingPos + (n - 1) * (this.width / this.sectionAmount);
        }
    }
}
</script>

<style scoped>
    .sub-section:hover {
        fill: lightgray;
    }
</style>