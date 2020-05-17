<template>
    <g transform="translate(0 -315)">
        <line id="Line_42" data-name="Line 42" x2="146" transform="translate(160.5 832.5)" fill="none" stroke="#ff7272" stroke-width="5"/>
        <g id="Ellipse_5" data-name="Ellipse 5" transform="translate(302 824)" fill="#fff" stroke="#707070" stroke-width="6">
            <circle cx="8" cy="8" r="8" stroke="none"/>
            <circle cx="8" cy="8" r="8" fill="none"/>
        </g>
        <g id="Ellipse_6" data-name="Ellipse 6" transform="translate(151 824)" fill="#fff" stroke="#707070" stroke-width="6">
            <circle cx="8" cy="8" r="8" stroke="none"/>
            <circle cx="8" cy="8" r="8" fill="none"/>
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

    }
}
</script>