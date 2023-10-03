<template>
    <div>
        <div class=" hero_section">
            <div class="left ">
                <h1>Automate School operations ¬ Keep the Focus on the Child</h1>
                <p>Empowering businesses with innovative strategies and actionable recommendations</p>
                <button class="primaryButton">Request Info</button>
            </div>
            <div class="right">
                <img src="../assets/Right.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 {
    color: #33357D;
    font-size: 55px;
    line-height: 75px;
    font-weight: 600;
}

.hero_section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;

}

.left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-direction: column;
    gap: 15.74px;
    width: 500px;
}

.right img {
    width: 100%;
}

.left p {
    font-size: 20.987px;
    font-style: normal;
    font-weight: 400;
    color: #33357D;
    line-height: 40px;
}

@media screen and (max-width: 1200px) {
    .left {
        /* text-align: center; */
        width: 80%;
        margin: 60px auto;
        /* justify-content: center; */
        /* align-items: center; */
        gap: 10px;
    }

    h1 {
        font-size: 45px;
        line-height: 60px;
    }

    .left p {
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 30px;
    }
}

@media screen and (max-width: 1200px) {
    .left {
        text-align: center;
        width: 100%;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .hero_section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }
}
</style>