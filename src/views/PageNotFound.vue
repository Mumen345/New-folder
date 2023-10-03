<template>
    <div class="Not_container">
        <div class="d-flex justify-content-center align-items-center" style="height: 100vh">
            <div class="text-center">
                <img class="mb-4" src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.png"
                    style="width: 250px; height: 90px" />
                <h5 class="mb-3">{{ msg }}</h5>
                <p class="mb-3">MDB Team</p>
                <a class="btn btn-primary btn-lg" href="https://mdbootstrap.com/docs/vue/" target="_blank" role="button">MDB
                    VUE
                    DOCS</a>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
export default {
    name: "NotFound",
    components: {
        NavBar,
    },
}
</script>

<style scoped>
.Not_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
}

.notfound {
    width: 100%;
}

.go_home {
    background: #33357D;
    border: 1.01887px solid #33357D;
    border-radius: 5.09434px;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 25px;
    gap: 7.13px;
    height: 41px;
    border: none;

}
</style>