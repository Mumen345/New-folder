<template>
    <div class="resp-container">

        <iframe class="resp-iframe" src="https://www.youtube.com/embed/Rwxpmbkrh1c"
            title="10 Most Brilliant Kids In The Universe" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.resp-container {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
    width: 90%;
    margin: 60px auto;
    margin-bottom: -20px;
}

.resp-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 90%;
}

iframe {
    border-radius: 20px;
}
</style>