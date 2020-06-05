<template>
    <div>
        <h3>{{ header }}</h3>
        <h5>{{ subHeader }}</h5>
        <p>{{ body }}<p>
    </div>
</template>

<script>
export default {
    name: 'DetailsPane',
    props: {
        header: String,
        subHeader: String,
        body: String
    }
}
</script>