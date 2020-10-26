<template>
  <div>
    <modal v-if="activeModal" @clicked="closeModal" />

    <footer class="footer footer-parallax">
      <div class="footer__wrapper">
        <div class="footer__info">
          <div class="footer__item-wrapper">
            <div class="footer__item">
              <!-- <Icon name="advantage-1" /> -->

              <div class="footer__phone">+7 (495) 128 88 82</div>
              <div class="footer__phone">+7 (967) 139 14 45</div>
            </div>
            <div class="footer__item">
              <!-- <Icon name="advantage-1" /> -->

              <div class="footer__text">
                г. Москва, наб. канала Грибоедова, д. 41
              </div>
            </div>
            <div class="footer__item">
              <!-- <Icon name="advantage-1" /> -->

              <div class="footer__text">ShmelevyLaw@gmail.com</div>
            </div>
            <div class="footer__item">
              <button
                class="banner-main__button footer__btn"
                @click="openModal"
              >
                ЗАЯВКА НА БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
              </button>
            </div>

            <!-- <div class="footer__button" @click="$modal.show('application')">
              <Button variation="primary" width="full" type="a"
                >ЗАЯВКА НА БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</Button
              >
            </div> -->

            <div class="footer__copyright">
              Copyright © ООО «Company» 2018г. Не является публичной офертой
            </div>
          </div>
        </div>
        <div class="footer__map">
          <yandex-map
            class="footer__map-map"
            :controls="[]"
            :dragable="false"
            :scrollZoom="false"
            :zoom="10"
            :coords="coords"
            :settings="settings"
          ></yandex-map>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import Button from "@/components/Button.vue";
// import Icon from "@/components/Icon/Icon.vue";
import { yandexMap } from "vue-yandex-maps";
import modal from "../components/modal";

export default {
  data() {
    return {
      activeModal: false,
      coords: [55.753215, 37.622504],
      settings: {
        apiKey: "",
        lang: "ru_RU",
        coordorder: "latlong",
        version: "2.1",
      },
    };
  },
  mounted() {
    // var div = document.querySelector("footer");
    // let body = document.querySelector("body");
    // body.style.marginBottom = "" + div.offsetHeight + "px";
  },
  methods: {
    openModal() {
      this.activeModal = true;
    },
    closeModal(val) {
      this.activeModal = val;
    },
    // onClickChild(val) {
    //   this.activeModal = val;
    // },
  },
  components: {
    modal,
    // Button,
    yandexMap,
    // Icon,
  },
};
</script>

<style lang="scss" >
.footer {
  height: 800px;
  &-parallax {
    position: fixed;
    bottom: 0;
    top: 0;
    height: 100%;
    width: 100%;

    z-index: -1;
  }
  &__item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
  }
  &__wrapper {
    display: flex;
    height: 100%;
  }
  &__info {
    color: #fff;
    width: 40%;
    background: #212121;
    padding: 2rem;
  }
  &__map {
    width: 60%;
  }
  &__button {
    &-top {
      cursor: pointer;
      width: 48px;
      height: 48px;
      background: #fff 0 0 no-repeat padding-box;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      opacity: 1;
      display: block;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      z-index: 1;
      transform: translateX(-50%);
      bottom: -24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid transparent;
      transition: all 0.2s;

      &:hover {
        border: 1px solid #720c0c;
      }
    }
  }
  &__map {
    height: 100%;
    &-map {
      height: 100%;
      opacity: 0.9;
      filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
    }
  }
  &__item:not(:last-child) {
    margin-bottom: 1.2rem;
  }
  &__phone {
    font-weight: 500;
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
  }
  &__copyright {
    font-weight: 400;
    color: #474747;
    font-size: 0.8rem;
  }
}
@media (max-width: 1000px) {
  .footer {
    &__info {
      width: 100%;
    }
    &__map {
      display: none;
    }
  }
}
</style>