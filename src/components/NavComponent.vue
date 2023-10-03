<template>
    <MDBNavbar expand="lg" light bg="light" position="sticky" container class="mb-5">
        <MDBNavbarBrand href="/"><img src="../assets/blueLogo.svg" alt=""></MDBNavbarBrand>
        <MDBNavbarToggler target="#navbarText" @click="collapse3 = !collapse3"></MDBNavbarToggler>
        <MDBCollapse id="navbarText" v-model="collapse3">
            <MDBNavbarNav>
                <MDBNavbarItem href="#"> Home </MDBNavbarItem>
                <MDBNavbarItem href="#"> Features </MDBNavbarItem>
                <MDBNavbarItem href="#"> Pricing </MDBNavbarItem>
            </MDBNavbarNav>
            <span class="navbar-text">
                <Button class="primaryButton"> request Info</Button>
            </span>
        </MDBCollapse>
    </MDBNavbar>
</template>
<script>
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
} from 'mdb-vue-ui-kit';
import { ref } from 'vue';

export default {
    components: {
        MDBNavbar,
        MDBNavbarBrand,
        MDBNavbarToggler,
        MDBNavbarNav,
        MDBNavbarItem,
        MDBCollapse,
    },
    setup() {
        const collapse3 = ref(false);
        return { collapse3 };
    },
};
</script>