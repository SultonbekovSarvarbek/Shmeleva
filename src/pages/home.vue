<template>
  <div>
    <!-- modal -->
    <modal v-if="activeModal" @clicked="closeModal" />
    <!-- page -->
    <div class="page">
      <!-- <div v-if="modalOpen" class="fixed-overlay fixed-overlay__modal">
        <div class="modal">
          <div class="modal_container">
            <p>Hello</p>
          </div>
        </div>
      </div> -->
      <div class="banner-main">
        <div class="container banner-main__content">
          <div class="banner-main__wrap">
            <p class="banner-main__text">
              Родилась в 1992 году в семье адвокатов. После окончания школы
              решила продолжить заниматься юридической династией и поставила
              себе цель- стать адвокатом. С 2010 по 2012гг.обучалась в
              юридическом колледже при Российской Академии Адвокатуры и
              Нотариата (далее РААН), окончив его с отличием, получила
              специализацию «юрист в сфере право социального обеспечения». Далее
              с 2012 по 2015 обучалась в РААН, окончила с отличием, получив
              квалификацию юрист-бакалавр, тот же год окончила 4.5 обучение на
              курсах английского языка при академии (РААН), получила
              квалификацию «юрист-переводчик в сфере массовой коммуникации». С
              2015-2017г. магистратура, с отличием, при РААН. На протяжении
              своего обучения, посещала и участвовала на международных научных
              конференциях,
            </p>
            <!-- <p class="banner-main__text"></p> -->
            <div class="button-modal">
              <button class="banner-main__button button" @click="openModal">
                ЗАЯВКА НА БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
              </button>
            </div>
            <!-- <span @click="$modal.show('application')">
              <Button href="#" class="banner-main__button" type="a"
                >ЗАЯВКА НА БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</Button
              >
            </span> -->
          </div>
        </div>
      </div>
      <section class="section section-info">
        <div class="container">
          <div class="bio-wrapper">
            <h2 class="section-info__name">Биография</h2>
            <p class="section-info__text">
              Родилась в 1992 году в семье адвокатов. После окончания школы
              решила продолжить заниматься юридической династией и поставила
              себе цель- стать адвокатом. С 2010 по 2012гг.обучалась в
              юридическом колледже при Российской Академии Адвокатуры и
              Нотариата (далее РААН), окончив его с отличием, получила
              специализацию «юрист в сфере право социального обеспечения». Далее
              с 2012 по 2015 обучалась в РААН, окончила с отличием, получив
              квалификацию юрист-бакалавр, тот же год окончила 4.5 обучение на
              курсах английского языка при академии (РААН), получила
              квалификацию «юрист-переводчик в сфере массовой коммуникации». С
              2015-2017г. магистратура, с отличием, при РААН. На протяжении
              своего обучения, посещала и участвовала на международных научных
              конференциях,
            </p>
            <a href="#" class="section-info__link">Подробнее</a>
          </div>
        </div>
      </section>
      <section class="section section-advantage">
        <div class="section-advantage__col">
          <div
            v-for="(item, index) in advantages"
            :key="item.id"
            class="section-advantage__item section-advantage__item-menu"
            @click="setActive(index)"
            :class="{ active: currItem == index }"
          >
            <div class="section-advantage__icon">
              <Icon name="advantage-1" />
            </div>
            <div class="section-advantage__name">
              {{ item.sidebartitle }}

              <div
                class="section-advantage__menu"
                v-for="item2 in item.sidebarsubtitle"
                :key="item2.id"
              >
                <div class="section-advantage__menu-name">
                  {{ item2.sidebarsubtext }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-advantage__col">
          <div
            v-for="(item, index) in advantages"
            :key="item.id"
            class="section-advantage__text"
            :class="{ 'active show': currItem == index }"
          >
            <div class="section-advantage__scroll">
              <p>
                {{ item.sidebartext }}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-news">
        <h2 class="section-news__name">Новости и статьи</h2>
        <swiper
          ref="mySwiper"
          class="swiper-container"
          :options="swiperOptions"
        >
          <swiper-slide class="card" v-for="card in news" :key="card.id">
            <router-link :to="`${card.link}`" class="card__image">
              <img :src="`${card.img}`" alt="" />
            </router-link>
            <div class="card__content">
              <router-link tag="div" class="card__name" :to="`${card.link}`">{{
                card.title
              }}</router-link>
              <div class="card__text">
                {{ card.text }}
              </div>
              <div class="card__link">
                <div class="card__link-icon">></div>
                <span>{{ card.more }}</span>
              </div>
            </div>
          </swiper-slide>
          <div class="slider-navigation container" slot="button-prev">
            <div class="slider__prev" slot="button-prev">
              <i class="arrow left"></i>
            </div>
            <div class="slider__next" slot="button-next">
              <i class="arrow right"></i>
            </div>
          </div>
        </swiper>
        <div class="section-news__btntop" @click="scrollTop">
          <span class="arrow up"></span>
        </div>
      </section>
      <!-- 
      <div class="footer__button-top" v-scroll-to="'#app'">
        <Icon name="Arrow" />
      </div>  -->
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon/Icon.vue";
// import Button from "@/components/Button.vue";
// import vueCustomScrollbar from "vue-custom-scrollbar";vueCustomScrollbar
import json from "../store/advantages.json";
import json2 from "../store/newscard.json";
import modal from "../components/modal";
export default {
  data() {
    return {
      thanks: false,
      modalactive: false,
      activeModal: false,
      modalOpen: false,
      advantages: json.advantages,
      news: json2.news,
      currItem: 0,
      activeItem: "item1",
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 20,
      },
      swiperOptions: {
        spaceBetween: 40,
        speed: 400,
        initialSlide: 1,
        watchOverflow: true,
        loop: true,
        loopFillGroupWithBlank: true,
        observer: true,
        observeParents: true,
        autoHeight: false,
        navigation: {
          nextEl: ".slider__next",
          prevEl: ".slider__prev",
        },
        breakpoints: {
          0: {
            slidesPerView: "auto",
            centeredSlides: false,
          },
          767: {
            slidesPerView: "auto",
            centeredSlides: false,
          },
          991: {
            slidesPerView: "auto",
            centeredSlides: true,
          },
        },
      },
    };
  },
  components: {
    // Button,
    // modal,
    Icon,
    modal,
    // vueCustomScrollbar,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollListener);
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },

    setActive(val) {
      this.currItem = val;
    },
    openModal() {
      this.activeModal = true;
    },
    closeModal(val) {
      this.activeModal = false;
      if (val == "message") {
        this.thanks = true;
        setTimeout(() => {
          this.thanks = false;
        }, 4000);
      }
    },
    scrollTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 8);
    },
  },
  beforeDestroy: function () {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style lang="scss" scoped>
.page {
  margin-bottom: 800px;
}
.banner {
  &-main {
    background-image: url("~assets/img/banner-main.png");
    background-size: cover;
    height: 600px;
  }
  &-main__content {
    height: 100%;
    display: flex;
    color: #fff;
    padding-bottom: 1rem;
    padding-top: 1rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  &-main__wrap {
    max-width: 540px;
  }
  &-main__text {
    line-height: 1.8rem;
  }
}
.button-modal {
  margin-top: 50px;

  .banner-main__button {
    font-weight: bold;
  }
}
.section {
  &-info {
    background-image: url("~assets/img/Clumn.png");
    background-size: 35%;
    background-repeat: no-repeat;
    background-color: #fff;
    background-position: bottom right;
  }
  &-info__name {
    color: #720c0c;
    margin-bottom: 3rem;
    text-transform: uppercase;
  }
  &-info__text {
    width: 50%;
    margin-bottom: 1.5rem;
  }
  &-info__link {
    color: #720c0c;
    font-size: 1.3rem;
  }

  .bio-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4rem 0;
    justify-content: center;
  }
}
// @import "~assets/scss/config";
// @import "~assets/scss/mixins";
// .banner-main__button {
//   display: inline-flex;
//   align-items: center;
//   box-sizing: border-box;
//   border: none;
//   text-align: center;
//   vertical-align: middle;
//   cursor: pointer;
//   outline: 0;
//   cursor: pointer;
//   border-radius: 5px;
//   text-decoration: none;
//   font-size: 12px;
//   line-height: 33px;
//   font-weight: 500;
//   text-align: center;
//   transition: all 0.3s;
//   padding: 0 20px;
//   height: 48px;
//   text-align: center;
//   white-space: nowrap;
//   background: #ffffff 0% 0% no-repeat padding-box;
//   box-shadow: 0px 3px 6px #00000040;
//   color: #720c0c;
//   justify-content: center;
// }
// .swiper-slide {
//   height: auto !important;
// }
// .section-advantage__scroll {
//   max-height: unset !important;
// }
// .banner-main {
//   height: calc(100vh - 72px);
//   max-height: 828px;
//   min-height: 700px;
//   background-image: url("~assets/img/banner-main.png");
//   background-size: cover;

//   @include respond-to(sm) {
//     background-position: 70% 50%;
//   }

//   &__wrap {
//     max-width: 50%;

//     @include respond-to(lg) {
//       max-width: 70%;
//     }

//     @include respond-to(md) {
//       max-width: 100%;
//     }
//   }

//   &__button {
//     margin-top: 50px;

//     @include respond-to(sm) {
//       margin-top: 0;
//     }
//   }

//   &__content {
//     display: flex;
//     align-items: center;
//     height: 100%;

//     @include respond-to(sm) {
//       align-items: flex-end;
//       padding-bottom: 40px;
//     }
//   }

//   &__name {
//     margin: 0;
//     text-align: left;
//     font-size: 24px;
//     line-height: 32px;
//     font-weight: 500;
//     color: #ffffff;
//     text-transform: uppercase;
//     margin-bottom: 37px;

//     @include respond-to(sm) {
//       font-size: 16px;
//       line-height: normal;
//     }
//   }

//   &__text {
//     text-align: left;
//     font-size: 14px;
//     line-height: 26px;
//     font-weight: 400;
//     letter-spacing: 0.34px;
//     color: #ffffff;

//     @include respond-to(sm) {
//       display: none;
//     }
//   }
// }

// .section-info {
//   padding: 100px 0;
//   background-image: url("~assets/img/Clumn.png");
//   background-size: 35%;
//   background-position: 100% 100%;
//   background-repeat: no-repeat;

//   @include respond-to(md) {
//     background-image: none;
//   }

//   @include respond-to(sm) {
//     padding: 50px 0;
//   }

//   &__name {
//     text-align: left;
//     font-size: 24px;
//     line-height: 28px;
//     font-weight: 500;
//     color: #720c0c;
//     text-transform: uppercase;
//     margin-bottom: 50px;

//     @include respond-to(sm) {
//       margin-bottom: 20px;
//     }
//   }

//   &__text {
//     text-align: left;
//     font-size: 14px;
//     line-height: 26px;
//     font-weight: 400;
//     color: #262626;
//     margin-bottom: 27px;
//     max-width: 600px;
//   }

//   &__link {
//     text-align: left;
//     text-decoration: underline;
//     font-size: 18px;
//     line-height: 22px;
//     font-weight: 500;
//     color: #720c0c;

//     &:hover {
//       text-decoration: none;
//     }
//   }
// }

// .page {
//   background: #fff;
//   position: relative;
// }

.section-advantage {
  display: flex;
  &__col {
    width: 50%;
    padding: 4rem 5rem;
    background: #262626;
  }
  &__col:last-child {
    background-color: #3e3e3e;
  }
  &__item {
    align-items: flex-start;
    display: flex;

    &-menu {
      .section-advantage__menu {
        display: none;
      }
      &.active {
        .section-advantage__menu {
          display: block;
        }
      }
    }
  }
  &__item:not(:last-child) {
    margin-bottom: 3rem;
  }
  &__icon {
    background: #720c0c 0 0 no-repeat padding-box;
    border-radius: 15px;
    min-width: 48px;
    height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  &__name {
    font-weight: 500;
    font-size: 1.3rem;
    color: #fff;
    opacity: 0.5;
    margin-left: 24px;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  &__menu-name {
    font-weight: normal;
    font-size: 0.9rem;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
  &__menu:not(:last-child) {
    margin: 1rem 0;
  }
  &__text {
    text-align: left;
    letter-spacing: 0px;
    color: #ffffff;
    text-align: left;
    font-size: 14px;
    font-weight: 40;
    line-height: 24px;

    display: none;

    &.show {
      display: block;
    }
  }
}
.section {
  &-news {
    padding: 7rem 0;
    background-color: #fff;
    position: relative;
    &__btntop {
      position: absolute;
      top: 100%;
      width: 48px;
      height: 48px;
      left: 50%;
      background-color: #fff;
      transform: translate(-50%, -50%);
      box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.42);
      border-radius: 50%;
      outline: none;
      z-index: 8;
      cursor: pointer;
      border: 1px solid transparent;
      transition: all 0.2s;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      > .arrow {
        border: solid rgb(114, 12, 12);
        border-width: 0 3px 3px 0;
        display: inline-block;
      }
    }

    .up {
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
    }
  }
  &-news__name {
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
    font-size: 1.5rem;
    color: #262626;
    margin-bottom: 3rem;
  }
}

// .section-advantage {
//   display: flex;

//   &__col {
//     width: 50%;
//     background: #262626;
//     padding: 100px 0;

//     @include respond-to(lg) {
//       padding: 60px 0;
//     }

//     @include respond-to(sm) {
//       width: auto;
//     }

//     &:last-child {
//       background: #3e3e3e;
//       padding: 0;
//     }
//   }

//   &__icon {
//     background: #720c0c 0% 0% no-repeat padding-box;
//     border-radius: 15px;
//     min-width: 48px;
//     height: 48px;
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;

//     @include respond-to(sm) {
//       margin-left: 24px;
//       margin-right: 24px;
//     }
//   }

//   &__name {
//     text-align: left;
//     font-size: 18px;
//     line-height: 21px;
//     font-weight: 500;
//     color: #ffffff;
//     opacity: 0.5;
//     margin-left: 24px;
//     cursor: pointer;

//     @include respond-to(sm) {
//       display: block;
//       margin: 0;
//       font-size: 8px;
//       font-weight: 400;
//       line-height: normal;
//       text-align: center;
//       margin: 10px 10px;
//     }
//   }

//   &__item {
//     display: flex;
//     align-items: center;
//     max-width: 360px;
//     margin: auto;
//     margin-bottom: 48px;

//     @include respond-to(lg) {
//       max-width: 100%;
//     }

//     @include respond-to(sm) {
//       width: 98px;
//       flex-wrap: wrap;
//       margin-bottom: 18px;
//     }

//     &-menu {
//       align-items: inherit;

//       .section-advantage__menu {
//         display: none;
//       }

//       &.active {
//         .section-advantage__menu {
//           display: block;
//         }
//       }
//     }

//     &:last-child {
//       margin-bottom: 0;
//     }

//     &:hover {
//       .section-advantage__name {
//         opacity: 1;
//       }
//     }
//   }

//   &__text {
//     text-align: left;
//     letter-spacing: 0px;
//     color: #ffffff;
//     text-align: left;
//     font-size: 14px;
//     font-weight: 40;
//     line-height: 24px;
//     display: none;

//     &.show {
//       display: block;
//     }
//   }

//   &__menu {
//     margin-top: 24px;

//     @include respond-to(sm) {
//       display: none;
//     }

//     &-name {
//       text-align: left;
//       font-size: 14px;
//       line-height: 21px;
//       font-weight: 400;
//       letter-spacing: 0px;
//       color: #ffffff;
//       opacity: 0.5;
//       margin-bottom: 20px;

//       &:last-child {
//         margin-bottom: 0;
//       }

//       &:hover {
//         opacity: 1;
//       }
//     }
//   }

//   &__scroll {
//     max-height: 840px;
//     padding: 60px;

//     @include respond-to(lg) {
//       padding: 60px 24px;
//     }

//     @include respond-to(sm) {
//       max-height: 600px;
//       padding-top: 0;
//       padding-bottom: 0;
//     }
//   }
// }

// .section-news {
//   padding: 70px 0;

//   @include respond-to(lg) {
//     padding: 60px 0;
//   }

//   @include respond-to(md) {
//     .swiper-container {
//       margin: 0 20px;
//       padding: 0 4px;
//     }
//   }

//   &__name {
//     text-align: center;
//     font-size: 24px;
//     font-weight: 500;
//     line-height: 28px;
//     color: #262626;
//     text-transform: uppercase;
//     margin-bottom: 60px;

//     @include respond-to(lg) {
//       margin-bottom: 24px;
//     }
//   }
// }
.swiper-container {
  padding: 2rem 0;
}
.card {
  max-width: 340px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
  &__content {
    padding: 1rem;
    min-height: 350px;
    display: flex;
    flex-direction: column;
  }
  &__name {
    color: #262626;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  &__text {
    opacity: 0.5;
  }
  &__link {
    color: #9f9f9f;
    font-weight: 700;
    font-size: 0.8rem;
    margin-top: auto;
    display: flex;
    align-items: center;
    &-icon {
      margin-right: 1rem;
      background: #720c0c 0 0 no-repeat padding-box;
      opacity: 0.6;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
  }
}

// .card {
//   max-width: 336px;
//   background: #ffffff 0% 0% no-repeat padding-box;
//   box-shadow: 0px 4px 6px #00000029;
//   border-radius: 0px 0px 6px 6px;
//   margin-bottom: 10px;
//   cursor: pointer;

//   @include respond-to(lg) {
//     max-width: 300px;
//   }

//   @include respond-to(md) {
//     max-width: 100%;
//   }

//   &:hover {
//     .card__link-icon {
//       opacity: 1;
//     }
//   }

//   &__image {
//     height: 276px;
//     opacity: 1;
//     background: #ccc;
//     backdrop-filter: blur(1px);
//     -webkit-backdrop-filter: blur(1px);
//     display: block;

//     img {
//       height: 100%;
//       width: 100%;
//       object-fit: cover;
//     }
//   }

//   &__content {
//     padding: 20px 30px;
//   }

//   &__name {
//     text-align: left;
//     font-size: 13px;
//     font-weight: bold;
//     line-height: 31px;
//     letter-spacing: 1.3px;
//     color: #262626;
//     text-decoration: none;
//     max-height: 100px;
//     display: block;
//     overflow: hidden;
//     line-height: 24px;
//   }

//   &__text {
//     text-align: left;
//     font-size: 12px;
//     line-height: 21px;
//     font-weight: 400;
//     color: #262626;
//     opacity: 0.65;
//     margin-bottom: 20px;
//   }

//   &__link {
//     display: flex;
//     align-items: center;
//     cursor: pointer;

//     span {
//       text-align: left;
//       font-size: 11px;
//       line-height: 31px;
//       font-weight: bold;
//       letter-spacing: 1.1px;
//       color: #9f9f9f;
//       margin-left: 20px;
//     }

//     &-icon {
//       background: #720c0c 0% 0% no-repeat padding-box;
//       opacity: 0.6;
//       width: 22px;
//       height: 22px;
//       border-radius: 50%;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       color: #fff;
//       transition: all 0.2s;
//     }
//   }
// }

// .card.swiper-slide {
//   opacity: 0.5;
// }

// .card.swiper-slide-prev {
//   opacity: 1;
// }

// .card.swiper-slide-active {
//   opacity: 1;
// }

// .card.swiper-slide-next {
//   opacity: 1;
// }

// .animate {
//   animation-duration: 1.5s;
//   -webkit-animation-fill-mode: both;
//   animation-fill-mode: both;
// }

// @keyframes fadeIn {
//   0% {
//     opacity: 0;
//   }

//   to {
//     opacity: 1;
//   }
// }

// .animate__fadeIn.animate-active {
//   -webkit-animation-name: fadeIn;
//   animation-name: fadeIn;
// }

.slider-navigation {
  position: absolute;
  top: 50%;
  height: 0;
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
}

.slider__prev,
.slider__next {
  width: 44px;
  height: 44px;
  border: 1px solid #720c0c;
  transform: translateY(-50%);
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 1px 1px 6px #0000006c;
  border-radius: 50%;
  outline: none;
  z-index: 10;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  margin-top: 2px;
  margin-right: 2px;
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  margin-top: 2px;
  margin-left: 2px;
}

// .slider__prev {
//   margin-left: -60px;
//   right: auto;
// }

// .slider__next {
//   margin-right: -60px;
//   left: auto;
// }
// .section-advantage__item {
//   align-items: flex-start;
// }
// @media (max-width: 1099px) {
//   .section-advantage__col {
//     padding: 60px 10px;
//     width: 100%;
//   }
//   .section-advantage__item {
//     align-items: flex-start;
//   }
//   .section-advantage {
//     flex-direction: column;
//   }
// }
// @media (max-width: 767px) {
//   .section-advantage__item {
//     display: block;
//     width: unset;
//     text-align: center;
//   }
//   .section-advantage__menu-name {
//     text-align: center;
//     font-size: 1rem;
//   }
//   .section-advantage__name {
//     font-size: 1.1rem;
//   }
// }
// media query

@media (max-width: 1000px) {
  .section-advantage {
    flex-direction: column;
    &__col {
      padding: 3rem 1rem;
      width: 100%;
    }
    &__name {
      font-size: 1.1rem;
    }
  }
  .banner {
    &-main__text {
      display: none;
    }
    &-main__content {
      justify-content: flex-end;
    }
    &-main {
      background-position: 70% 50%;
    }
  }
  .section {
    &-info__text {
      width: 100%;
    }
  }
  .banner-main__button {
    height: unset;
    line-height: unset;
    vertical-align: unset;
    padding: 0;
    width: 100%;
    padding: 0.5rem;
  }
}
@media (max-width: 320px) {
  .banner-main__content {
    align-items: unset;
  }
}
</style>