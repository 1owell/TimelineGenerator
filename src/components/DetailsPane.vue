<template>
    <div xmlns="http://www.w3.org/1999/xhtml">
        <h3>{{ nameHeader }}</h3>
        <h5>{{ subHeader }}</h5>
        <p>{{ bodyText }}</p>
    </div>
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

</style>