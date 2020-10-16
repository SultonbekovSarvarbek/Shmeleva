<template>

  <footer class="footer footer-parallax" >

    <div class="row no-gutters ">
      <div class="col col-4 col-md-4 col-lg-4 col-xl-4">
        <div class="footer__wrap">
          <div class="footer__info">
            <div class="footer__item">
              <Icon name="advantage-1" />

              <div class="footer__phone">8 (800) 000-00-00</div>
            </div>
            <div class="footer__item">
              <Icon name="advantage-1" />

              <div class="footer__text">г. Москва, наб. канала Грибоедова, д. 41</div>
            </div>
            <div class="footer__item">
              <Icon name="advantage-1" />

              <div class="footer__text">info@lawer.com</div>
            </div>

            <div class="footer__button"  @click="$modal.show('application');">
              <Button variation="primary" width="full" type="a">ЗАЯВКА НА БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</Button>
            </div>

            <div class="footer__copyright">Copyright © ООО «Company» 2018г. Не является публичной офертой</div>
          </div>
        </div>


      </div>
      <div class="col col-8 col-md-8 col-lg-8 col-xl-8" v-if="windowWidth > 992">
        <div class="footer__map">
          <yandex-map class="footer__map-map" :controls="[]" :dragable="false" :scrollZoom="false" :zoom="10"
            :coords="coords" :settings="settings"></yandex-map>
        </div>
      </div>
    </div>
  </footer>
  
</template>

<script>
  import Button from '@/components/Button.vue'
  import Icon from '@/components/Icon/Icon.vue'
  import {
    yandexMap
  } from 'vue-yandex-maps'


  export default {
    data() {
      return {
        coords: [55.753215, 37.622504],
        settings: {
          apiKey: '',
          lang: 'ru_RU',
          coordorder: 'latlong',
          version: '2.1',
        },
      }
    },
    mounted() {
      var div = document.querySelector('footer');
      console.log('Высота блока ' + div.offsetHeight);
      let body = document.querySelector('body');
      body.style.marginBottom = '' + div.offsetHeight + 'px';
    },

    components: {
      Button,
      yandexMap,
      Icon
    },
  }
</script>

<style lang="scss">
  @import "~assets/scss/config";
  @import "~assets/scss/mixins";
    @include respond-to(sm) {
      body{
        margin-bottom: 0 !important;
      }
    }

  .footer {
    height: 100vh;
    background: #212121 0% 0% no-repeat padding-box;
    position: relative;


    @include respond-to(lg) {
      height: 500px;
    }

    @include respond-to(sm) {
      height: auto;
    }

    @include respond-to(md) {
      .col {
        max-width: 100%;
        width: 100%;
        flex: 100%
      }
    }



    &__button {
      &-top {
        cursor: pointer;
        width: 48px;
        height: 48px;
        background: #fff 0 0 no-repeat padding-box;
        box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
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
        transition: all .2s;

        &:hover {
          border: 1px solid #720C0C;

        }
      }
    }

    .row {
      height: 100%;
    }

    &__map {
      height: 100%;

      @include respond-to(md) {}


      &-map {
        height: 100%;
        opacity: 0.9;
        filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);

        @include respond-to(md) {
          height: 350px;

        }
      }
    }

    &__info {
      width: 360px;
      margin: auto;
      padding-top: 35px;
      margin-bottom: 0;

      @include respond-to(lg) {
        padding: 0 24px;
      }

      @include respond-to(sm) {
        padding: 0;
            width: 100%;
      }


    }

    &__item {
      margin-bottom: 15px;
      display: flex;
      align-items: center;

      .icon {
        margin-right: 12px;
      }
    }

    &__text {
      text-align: left;
      font-size: 12px;
      line-height: 21px;
      font-weight: 400;
      color: #FFFFFF;
    }

    &__button {
      margin-top: 35px;
      @include respond-to(sm) {
        overflow: hidden;
      }

    }

    &__phone {
      font-size: 18px;
      line-height: 32px;
      font-weight: 500;
      letter-spacing: 0px;
      color: #FFFFFF;
    }

    &__wrap {
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;

      @include respond-to(md) {
        padding: 40px;
      }
    @include respond-to(sm) {
      padding: 40px;
    }


    }

    &__copyright {
      font-size: 10px;
      line-height: 12px;
      font-weight: 400;
      letter-spacing: 0px;
      color: #FFFFFF;
      opacity: 0.7;
      margin-top: 35px;
      margin-bottom: 41px;

      @include respond-to(md) {
        margin-bottom: 0;
      }

    }
  }

  .footer-parallax {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }

  @media screen and (max-width:767px) {
    .footer-parallax {
      position: static;
    }
  }
</style>