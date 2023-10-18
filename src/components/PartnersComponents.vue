<template>
    <div class="coontainer">
        <div class="horizontal-scrolling-items">

            <div class="horizontal-scrolling-items__item">
                <img src="../assets/Text.svg" alt="">
            </div>
            <div class="horizontal-scrolling-items__item">
                <img src="../assets/text2.svg" alt="">
            </div>


        </div>

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
    height: 70px;
    color: #ffffff;
    overflow: hidden;
}

.horizontal-scrolling-items {
    display: flex;
    font-size: 40px;
    animation-name: infiniteScroll;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.horizontal-scrolling-items__item {
    white-space: nowrap;
}
</style>