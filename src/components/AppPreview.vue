<template>
    <MDBContainer class="preview_container mt-5 mb-5">
        <div>
            <img src="../assets/mockup.svg" alt="">
        </div>
        <div>
            <h1>Download our Mobile App.</h1>
            <p>Control of all your banking needs needs anywhere, anytime</p>
            <ul>
                <li>Compare different insurance Item</li>
                <li>Buy, store and share all your policies online</li>
                <li>Email & Live chat</li>
            </ul>
            <div class="button_div">
                <a href="http://"><img src="../assets/app_store_btn.svg" alt=""></a>
                <a href="http://"><img src="../assets/play_store_btn.svg" alt=""></a>
            </div>
        </div>

    </MDBContainer>
</template>

<script setup lang="ts">
import { MDBContainer } from "mdb-vue-ui-kit";

</script>

<style scoped>
.preview_container {
    background-image: url("../assets/app_preview_bg.svg");
    /* background-color: #ffffff; */
    height: 630px;
    width: 100%;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
    list-style-type: circle;
    line-height: 35px;
    color: #ffffff;
}

.button_div {
    gap: 20px;
    display: flex;
    flex-direction: row;
}

@media screen and (max-width: 1200px) {
    .preview_container {
        flex-direction: column-reverse;
        height: 1000px;
        background-image: none;
        background: #33357D;
        /* padding: 30px; */

    }

    .preview_container img {
        width: 100%;
    }
}
</style>