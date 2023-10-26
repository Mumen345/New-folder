<template>
    <div class="Not_container">
        <div class="notfound" style="height: 100vh">
            <img class="" src="../assets/404.svg" alt="">
            <a href="/" class="go_home">Home</a>
        </div>
    </div>
</template>

<script>

export default {
    name: "NotFound",
    components: {
    },
}
</script>

<style scoped>
.Not_container {
    height: 100vh !important;
    background: white;
}

.notfound {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin: 0 auto;
    gap: 50px;
}

.notfound img {
    width: 65%;
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

@media screen and (max-width: 912px) {
    .notfound {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin: 0 auto;
    }

    .notfound img {
        width: 85% !important;
    }
}
</style>