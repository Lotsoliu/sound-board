<template>
    <div class="sound-board" :style="{height:this.windowHeight+'px', width:this.windowWidth+'px'}">
        <audio id="myAudio" src="/audio/sayram.mp3" autoplay controls playsinline preload="auto" style="margin-top: 250px;"></audio>
    </div>
</template>

<script>
export default {
    data() {
        return {
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth
        }
    },
    computed: {
        
    },
    methods: {
        
    },
    mounted() {
        let audio = document.getElementById("myAudio");
        audio.click();
        audio.play();
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        handleResize() {
            this.windowHeight = window.innerHeight
            this.windowWidth = window.innerWidth
        }
    }
}
</script>

<style>
.sound-board {
    background-image: url('../assets/img/soundboard.png');
    background-size: 100%;
    /* background-size:contain; */
    /* background-position: center; */
    background-repeat: no-repeat;
}
</style>
