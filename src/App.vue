<template>
  <div id="app">
    <!-- <div class="preloader" :class="[{ show: loading }]">
      <div class="container-fluid">
        <div class="spinner">
          <span class="ball-1"></span>
          <span class="ball-2"></span>
          <span class="ball-3"></span>
          <span class="ball-4"></span>
        </div>
      </div>
    </div> -->
    <BaseHeader />
    <div style="margin-top: 86px">
      <router-view />
    </div>
    <BaseFooter />
  </div>
</template>

<script>
// import Button from "@/components/Button.vue";

import BaseHeader from "./components/BaseHeader.vue";
import BaseFooter from "./components/BaseFooter.vue";

export default {
  name: "App",
  data() {
    return {
      loading: false,
    };
  },
  components: {
    BaseHeader,
    BaseFooter,
    // Button,
  },

  methods: {
    get() {
      setTimeout(() => (this.loading = false), 1000);
    },
  },
  mounted() {
    this.get();
  },
};
</script>

<style lang="scss">
// @import "~assets/scss/config";
// @import "~assets/scss/mixins";
@import "~assets/scss/reset";
@import "~assets/scss/normalize";
// @import "~assets/libs/bootstrap/bootstrap-grid";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;1,300&display=swap");

html {
  min-height: 100%;
}

body,
html {
  font-family: "Montserrat", sans-serif;

  font-size: 16px;
  line-height: 24px;
  color: #000;
}

.banner-main__button {
  display: inline-block;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: bold;
  margin: 0;
  text-decoration: none;
  background: #fff;
  color: #720c0c;
  font-family: sans-serif;
  font-size: 0.9rem;
  cursor: pointer;
  text-align: center;
  &:focus {
    outline: none;
  }
}
.button {
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  border: none;
  vertical-align: middle;
  outline: 0;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  font-size: 12px;
  line-height: 33px;
  font-weight: 500;
  transition: all 0.3s;
  padding: 0 20px;
  height: 48px;
  text-align: center;
  white-space: nowrap;
  background: #fff 0 0 no-repeat padding-box;
  color: #720c0c;
  justify-content: center;
}
.footer__btn {
  background-color: #720c0c;
  color: #fff;
}
.preloader {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  opacity: 0;
  transition: all 0.2s;
  z-index: -1;
  visibility: hidden;

  &.show {
    opacity: 1;
    z-index: +2000;
    visibility: visible;
  }
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px 0 15px;
}
.preloader .container-fluid {
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1450px;
  max-height: 700px;
}

.spinner {
  top: 50%;
  left: 50%;
  z-index: 1;
  height: 30px;
  width: 30px;
  margin-left: -15px;
  margin-top: -40px;

  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  position: relative;
}

.spinner span {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  display: block;
  position: absolute;
  opacity: 0.7;
}

.spinner .ball-1 {
  z-index: 4;
  background-color: #845363;
  left: -20px;
  -webkit-transform: translate(50%, 50%) scale(0.5);
  -webkit-animation: animateSway 2s infinite ease-in-out,
    animateScale 2s infinite ease-in-out;
  animation: animateSway 2s infinite ease-in-out,
    animateScale 2s infinite ease-in-out;
}

.spinner .ball-2 {
  z-index: 3;
  background-color: #7d485b;
  left: -20px;
  -webkit-transform: translate(50%, 50%) scale(0.5);
  -webkit-animation: animateSway 2s infinite ease-in-out 500ms,
    animateScale 2s infinite ease-in-out 500ms;
  animation: animateSway 2s infinite ease-in-out 500ms,
    animateScale 2s infinite ease-in-out 500ms;
}

.spinner .ball-3 {
  z-index: 2;
  background-color: #6b2743;
  left: -20px;
  -webkit-transform: translate(50%, 50%) scale(0.5);
  -webkit-animation: animateSway 2s infinite ease-in-out 1s,
    animateScale 2s infinite ease-in-out 1s;
  animation: animateSway 2s infinite ease-in-out 1s,
    animateScale 2s infinite ease-in-out 1s;
}

.spinner .ball-4 {
  z-index: 1;
  background-color: #5d1030;
  left: -20px;
  -webkit-transform: translate(50%, 50%) scale(0.5);
  -webkit-animation: animateSway 2s infinite ease-in-out 1.5s,
    animateScale 2s infinite ease-in-out 1.5s;
  animation: animateSway 2s infinite ease-in-out 1.5s,
    animateScale 2s infinite ease-in-out 1.5s;
}

@-webkit-keyframes animateSway {
  0% {
    left: -20px;
  }

  50% {
    left: 20px;
  }

  100% {
    left: -20px;
  }
}

@keyframes animateSway {
  0% {
    left: -20px;
  }

  50% {
    left: 20px;
  }

  100% {
    left: -20px;
  }
}

@-webkit-keyframes animateScale {
  0% {
    -webkit-transform: translate(50%, 50%) scale(0.5);
    z-index: -1;
  }

  25% {
    -webkit-transform: translate(50%, 50%) scale(1);
    z-index: +1;
  }

  50% {
    -webkit-transform: translate(50%, 50%) scale(0.5);
    z-index: -1;
  }

  75% {
    -webkit-transform: translate(50%, 50%) scale(0.25);
    z-index: -2;
  }

  100% {
    -webkit-transform: translate(50%, 50%) scale(0.5);
    z-index: -1;
  }
}

@keyframes animateScale {
  0% {
    transform: translate(50%, 50%) scale(0.5);
    z-index: -1;
  }

  25% {
    transform: translate(50%, 50%) scale(1);
    z-index: +1;
  }

  50% {
    transform: translate(50%, 50%) scale(0.5);
    z-index: -1;
  }

  75% {
    transform: translate(50%, 50%) scale(0.25);
    z-index: -2;
  }

  100% {
    transform: translate(50%, 50%) scale(0.5);
    z-index: -1;
  }
}
</style>