<template>
    <footer class="footer_container">
        <div class="content_div">
            <img class="logo" src="../assets/teddyed-logo.svg" alt="footer_img" srcset="">
            <div>
                <p>An intuitive software that helps your school administration team manage its peripheral services and
                    operations
                </p>
                <p>COPYRIGHT (C) 2023</p>
            </div>
        </div>
        <div class="content_div">
            <h4>Menu</h4>
            <div class="links">
                <router-link role="link" to="/">Home</router-link>
                <router-link role="link" to="/modules">Modules</router-link>
                <router-link role="link" to="/faq">FAQ</router-link>
                <router-link role="link" to="/requestinfo">Request Information</router-link>
            </div>

        </div>
        <div class="content_div">
            <h4>Follow Us</h4>
            <div class="media_container">
                <MDBIcon iconStyle="fab" icon="linkedin"></MDBIcon>
                <MDBIcon iconStyle="fab" icon="github"></MDBIcon>
                <MDBIcon iconStyle="fab" icon="facebook-f"></MDBIcon>
            </div>
        </div>

    </footer>
</template>

<script setup lang="ts">
import {
    // MDBFooter,
    // MDBContainer,
    // MDBRow,
    // MDBCol,
    MDBIcon
} from 'mdb-vue-ui-kit';
</script>

<style scoped>
.logo {
    width: 138px;

}

.footer_container {
    background: #33357D;
    border-radius: 10px 10px 0px 0px;
    color: #ffffff;
    width: 80%;
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 50px;
    gap: 30px;
}

.footer_container p {
    width: 315px;
    font-size: 14px;
    line-height: 26px;
}


a {
    color: #ffffff;
    font-size: 14px;
    line-height: 26px;
}

.media_container {
    display: flex;
    gap: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.content_div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
}

.links {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

@media screen and (max-width: 1080px) {
    .footer_container {
        background: #33357D;
        border-radius: 0px 0px 0px 0px;
        color: #ffffff;
        width: 100%;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }
}

@media screen and (max-width: 365px) {
    .footer_container p {
        width: auto;
        font-size: 14px;
        line-height: 26px;
    }
}
</style>