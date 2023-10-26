<template>
  <router-view />
</template>

<style>
html {
  max-width: 2000px;
  margin: 0 auto;
}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  /* background-image: url("./assets/bg_img.svg");
  background-color: #ffffff;
  height: 1071px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%; */

}

.primaryButton {
  width: 208px;
  height: 48px;
  background: #33357D;
  border-radius: 4.91281px;
  color: #ffffff !important;
  outline: none;
  border: none;
}

/* .primaryButton :hover {
  background: #4245a6 !important;
} */

.secondaryButton {
  background: #F4F7FF;
  color: #33357D;
  border: 1px dashed #33357D;
  border-radius: 4.91281px;
  width: 208px;
  height: 48px;
}

.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline !important;
}
</style>
