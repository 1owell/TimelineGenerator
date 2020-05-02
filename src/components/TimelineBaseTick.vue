<template>
    <line :id="'line_' + id" :y1="height" :transform="translate" stroke="black" stroke-width="1"/>
</template>

<script>
export default {
    name: 'TimelineBaseTicks',
    props: {
        id: Number,
        height: Number,
        x: Number,
        y: Number
    },
    computed: {
        translate() {
            return `translate(${this.x} ${this.y})`;
        }
    }
}
</script>

<style scoped>

</style>