<template>
    <MDBContainer>
        <div class="headers">
            <h1>Why Choose TeddyEd</h1>
            <p>TeddyEd has a user-friendly interface with intuitive features making it easy for school administrators,
                teachers, and staff to manage student information from the time of admission, attendance, scheduling,
                newsletters, communication and school asset management.</p>
        </div>
        <MDBContainer class="">
            <div class="container service_info">
                <div class=" write_up">
                    <img src="../assets/icon_1.svg" alt="">
                    <div>
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Scelerisque lorem id nisl augue sem amet vestibulum.
                            Dignissim consequat nec mus a lectus. Imperdiet fusce nunc sapien gravida.</p>
                    </div>
                </div>
                <div class="service_img">
                    <img class="img_responsive" src="../assets/img1.svg" alt="">

                </div>
            </div>
        </MDBContainer>
        <MDBContainer class="">
            <div class="container service_info">
                <div class="service_img">
                    <img class="img_responsive" src="../assets/img2.svg" alt="">

                </div>

                <div class=" write_up">
                    <img src="../assets/icon_1.svg" alt="">
                    <div>
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Scelerisque lorem id nisl augue sem amet vestibulum.
                            Dignissim consequat nec mus a lectus. Imperdiet fusce nunc sapien gravida.</p>
                    </div>
                </div>

            </div>
        </MDBContainer>
        <MDBContainer class="">
            <div class="container service_info">
                <div class=" write_up">
                    <img src="../assets/icon_1.svg" alt="">
                    <div>
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Scelerisque lorem id nisl augue sem amet vestibulum.
                            Dignissim consequat nec mus a lectus. Imperdiet fusce nunc sapien gravida.</p>
                    </div>
                </div>
                <div class="service_img">
                    <img class="img_responsive" src="../assets/img3.svg" alt="">

                </div>
            </div>
        </MDBContainer>
        <MDBContainer class="">
            <div class="container service_info">
                <div class="service_img">
                    <img class="img_responsive" src="../assets/img4.svg" alt="">

                </div>

                <div class=" write_up">
                    <img src="../assets/icon_1.svg" alt="">
                    <div>
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Scelerisque lorem id nisl augue sem amet vestibulum.
                            Dignissim consequat nec mus a lectus. Imperdiet fusce nunc sapien gravida.</p>
                    </div>
                </div>
            </div>
        </MDBContainer>
        <MDBContainer class="">
            <div class="container service_info">
                <div class=" write_up">
                    <img src="../assets/icon_1.svg" alt="">
                    <div>
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Scelerisque lorem id nisl augue sem amet vestibulum.
                            Dignissim consequat nec mus a lectus. Imperdiet fusce nunc sapien gravida.</p>
                    </div>
                </div>
                <div class="service_img">
                    <img class="img_responsive" src="../assets/img5.svg" alt="">

                </div>
            </div>
        </MDBContainer>
    </MDBContainer>
</template>

<script setup lang="ts">
import { MDBContainer } from "mdb-vue-ui-kit";
</script>

<style scoped>
.headers {
    width: 60%;
    margin: 0 auto;
    text-align: center;
}

.headers p {
    line-height: 220%;
}

.write_up {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    width: 40%;
    margin: 0 auto;
}

.write_up p {
    line-height: 220%;
}

.service_info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.img_responsive {
    width: 100%;
}

@media screen and (max-width: 1200px) {
    .headers {
        width: 90%;
        margin: 0 auto;
        text-align: center;
        /* color: #33357D; */
    }

    .service_info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .write_up {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;
        width: 100% !important;
    }

    .service_img {
        width: 100%;
    }

    @media screen and (max-width: 1200px) {}
}
</style>