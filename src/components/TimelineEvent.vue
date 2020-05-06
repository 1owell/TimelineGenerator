<template>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="47" viewBox="0 0 100 47">
        <defs>
            <filter id="Rectangle_8" x="0" y="0" width="958" height="47" filterUnits="userSpaceOnUse">
                <feOffset dy="3" input="SourceAlpha"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity="0.388"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
            </filter>
        </defs>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Rectangle_8)">
            <rect id="Rectangle_8-2" data-name="Rectangle 8" width="50" height="29" rx="3" transform="translate(9 6)" fill="black"/>
        </g>
    </svg>
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