<template>
    <foreignObject x="20" y="20" width="160" height="160">
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
        bodyText: String
    }
}
</script>

<style scoped>
    div {
        border: 1px solid black;
    }
</style>