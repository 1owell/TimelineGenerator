<template>
    <foreignObject :x="x" :y="y" width="300" height="160">
        <div xmlns="http://www.w3.org/1999/xhtml">
            <h3>{{ nameHeader }}</h3>
            <h5>{{ subHeader }}</h5>
            <p>{{ bodyText }}</p>
        </div>
    </foreignObject>
</template>

<script>
export default {
    name: 'DetailsPane',
    props: {
        nameHeader: String,
        subHeader: String,
        bodyText: String,
        x: Number,
        y: Number
    }
}
</script>

<style scoped>
    foreignObject {
        border-radius: 20px;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    div {
        padding-left: 1em;
        text-align: left;

    }
</style>