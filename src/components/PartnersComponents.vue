<template>
    <div class="coontainer">
        <marquee width="100%" direction="left" behavior="">

            <div class="horizontal-scrolling-items__item">
                <img src="../assets/Text.svg" alt="">
            </div>
        </marquee>

    </div>
</template>

<script>
export default {
    name: 'PartnersComponent',
}
</script>

<style scoped>
@keyframes infiniteScroll {
    from {
        transform: translateX(0)
    }

    to {
        transform: translateX(-50%)
    }
}

.coontainer {
    width: 100%;
    overflow-x: hidden;
    background-image: url("../assets/Bg.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50px;
    color: #ffffff;
    overflow: hidden;
    vertical-align: center;
}
</style>