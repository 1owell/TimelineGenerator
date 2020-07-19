<template>
    <button type="button">{{ buttonText }}</button>
</template>

<script>
export default {
    name: 'ControlButton',
    props: {
        buttonText: String
    }
}
</script>

<style scoped>
    button {
        outline: none;
        border: none;
        background-color: white;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin: 1em;
    }

    button:active {
        background-color: whitesmoke;
        box-shadow: 0 1px #666;
        transform: translateY(1px);
    }
    
</style>