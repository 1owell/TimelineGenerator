<template>
    <div>
        <ControlButton buttonText="-" @click.native="zoomOut"/>
        <ControlButton buttonText="+" @click.native="zoomIn"/>

        <TheTimeline :scale-unit="scale" start-date="1999-01-01" :scale="130"/>
    </div>
</template>

<script>
import TheTimeline from '@/components/TheTimeline.vue'
import ControlButton from '@/components/ControlButton.vue'
import { dateCoordinatesMixin } from '../mixins/dateCoordinatesMixin'

export default {
    name: 'TheWorkspace',
    components: {
        TheTimeline,
        ControlButton
    },
    mixins: [
        dateCoordinatesMixin
    ],
    methods: {
        zoomOut: function () {
            if (this.zoomLevels.includes(this.scale - 1)) { this.scale--; }
        },
        zoomIn: function () {
            if (this.zoomLevels.includes(this.scale + 1)) { this.scale++; }
        }
    },
    data: () => {
        return {
            scale: 2
        }
    }
}
</script>

<style scoped>

</style>