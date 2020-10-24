<template>
  <div>
    <!-- mobilenav -->
    <mobilenav @clicked="closeNav" :class="{ mobnavactive: isBurgerActive }" />

    <header class="header">
      <div class="container header__wrap">
        <router-link class="header__logo" to="/">
          <div class="icon">
            <img :src="require('@/assets/img/logo.jpg')" alt="" />
          </div>
          <div class="header__logo-text">
            <span class="header__logo-name">Адвокаты Шмелевы</span>
            <span class="header__logo-desc"
              >Семейная династия защитников в сфере права</span
            >
          </div>
        </router-link>
        <ul class="header__menu">
          <li
            class="header__menu-item"
            @click="scrollToTop"
            v-for="itemlink in headerslink"
            :key="itemlink.id"
          >
            <router-link :to="`${itemlink.link}`" class="header__menu-link">
              {{ itemlink.name }}
            </router-link>
          </li>

          <!-- <li class="header__info-menu" v-if="windowWidth < 992">
          <p class="header__info-phone">+7 (495) 000 00 00</p>
          <div class="footer__text">
            г. Москва, наб. канала Грибоедова, д. 41
          </div>
          <div class="footer__text">info@lawer.com</div>
        </li> -->
        </ul>
        <div class="header__info">
          <p>84 951 288 882</p>
          <span>
            <Icon name="telephone" />
          </span>
        </div>
        <!-- menuicon -->
        <div class="burger-menu">
          <div
            id="burger"
            :class="{ active: isBurgerActive }"
            @click.prevent="toggle"
          >
            <slot>
              <button type="button" class="burger-button" title="Menu">
                <span class="burger-bar burger-bar--1"></span>
                <span class="burger-bar burger-bar--2"></span>
                <span class="burger-bar burger-bar--3"></span>
              </button>
            </slot>
          </div>
        </div>
        <!-- <div class="header__info">
        <p class="header__info-phone">+7 (495) 000 00 00</p>
        <Icon name="telephone" />
        <template v-if="windowWidth < 992">
          <div class="header__burger" @click="openMenu">
            <Icon name="menu" />
          </div>
        </template>
      </div> -->
      </div>
    </header>
  </div>
</template>

<script>
import Icon from "@/components/Icon/Icon.vue";
import mobilenav from "./menumobile";
export default {
  name: "baseHeader",
  data() {
    return {
      isBurgerActive: false,

      isVisibleMobMenu: false,
      headerslink: [
        {
          name: "Главная",
          link: "/",
        },
        {
          name: "Биография",
          link: "/bio",
        },
        {
          name: "Услуги адвокатов",
          link: "/services",
        },
        {
          name: "Новости и статьи",
          link: "/",
        },
        {
          name: "Контакты",
          link: "/contacts",
        },
      ],
    };
  },
  components: {
    Icon,
    mobilenav,
  },
  methods: {
    // Открытие/зактытие моб меню
    openMenu() {
      let body = document.querySelector("body");
      body.classList.toggle("open-modal-menu");
      this.isVisibleMobMenu = !this.isVisibleMobMenu;
    },
    toggle() {
      this.isBurgerActive = !this.isBurgerActive;
    },
    closeNav(val) {
      this.isBurgerActive = val;
    },
  },
};
</script>

<style lang="scss" >
@import "~assets/scss/config";
@import "~assets/scss/mixins";
@import "~assets/scss/headerstyle";
@import "~assets/scss/mobilestyle";

.mobilenav.mobnavactive {
  right: 0;
  transition: all 0.4s;
}
.hidden {
  visibility: hidden;
}

/* remove blue outline */
button:focus {
  outline: 0;
}

.burger-button {
  position: relative;
  height: 30px;
  width: 32px;
  display: block;
  z-index: 999;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
  background-color: #130f40;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 2px;
  width: auto;
  margin-top: -1px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar--1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar--2 {
  transform-origin: 100% 50%;
  transform: scaleX(0.8);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}

.burger-bar--3 {
  transform: translateY(6px);
}

#burger.active .burger-button {
  transform: rotate(-180deg);
}

#burger.active .burger-bar {
  background-color: rgb(0, 0, 0);
}

#burger.active .burger-bar--1 {
  transform: rotate(45deg);
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg);
}
</style>