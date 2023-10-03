<template>
    <MDBContainer>
        <div class="faq_headers mb-5">
            <h1>FAQ</h1>
            <p>Don’t find the answer? We can help</p>
        </div>
        <div>
            <h2>What is TeddyEd, and how does it work?</h2>
            <p>TeddyEd is a comprehensive school management system that helps schools streamline their day-to-day
                operations, improve communication, and provide a better experience for students, parents, and staff. The
                system includes modules for attendance tracking, admissions and enrollment management, transportation
                management, newsletter creation, event planning, finance management and much more. TeddyEd works by
                providing an intuitive, user-friendly platform that allows schools to manage all aspects of their operations
                in one place.</p>
        </div>
    </MDBContainer>
</template>

<script setup lang="ts">
import { MDBContainer } from "mdb-vue-ui-kit";

</script>

<style scoped>
.faq_headers {
    text-align: center;
}

.faq_headers h1 {
    font-size: 64px;
}

.faq_headers p {
    font-size: 24px;
}
</style>