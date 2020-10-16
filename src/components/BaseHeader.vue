<template>
  <header class="header">
    <div class="container header__wrap">
      <a class="header__logo" href='/'>
        <div class="icon">
          <img :src="require('@/assets/img/logo.jpg')" alt="">
        </div>
        <div class="header__logo-text">
          <span class="header__logo-name">Адвокаты Шмелевы</span>
          <span class="header__logo-desc">Семейная династия защитников в сфере права</span>
        </div>
      </a>
      <ul class="header__menu">
        <li class="header__menu-item">
          <a href="#" class="header__menu-link">Главная</a>
        </li>
        <li class="header__menu-item">
          <a href="/bio" class="header__menu-link">Биография</a>
        </li>
        <li class="header__menu-item">
          <a href="/services" class="header__menu-link">Услуги адваоката</a>
        </li>
        <li class="header__menu-item">
          <a href="#" class="header__menu-link">Новости и статьи</a>
        </li>
        <li class="header__menu-item">
          <a href="/contacts" class="header__menu-link">Контакты</a>
        </li>
        <li class="header__info-menu" v-if="windowWidth < 992">
        <a href="" class="header__info-phone">+7 (495) 000 00 00</a>
          <div class="footer__text">г. Москва, наб. канала Грибоедова, д. 41</div>
          <div class="footer__text">info@lawer.com</div>
        </li>
      </ul>
      <div class="header__info">
        <a href="" class="header__info-phone">+7 (495) 000 00 00</a>
        <Icon name="telephone" />
        <template v-if="windowWidth < 992">
          <div class="header__burger" @click="openMenu">
              <Icon name="menu" />
          </div>
        </template>
      </div>

    </div>
  </header>
</template>

<script>
  import Icon from '@/components/Icon/Icon.vue'
  export default {
    name: 'baseHeader',
    components: {
      Icon,
    },
     data() {
      return {
      isVisibleMobMenu: false
      }
    },
    methods: {
      // Открытие/зактытие моб меню
      openMenu() {
        let body = document.querySelector('body');
        body.classList.toggle('open-modal-menu');
        this.isVisibleMobMenu = !this.isVisibleMobMenu;
      },
    }

  }
</script>

<style lang="scss" >
  @import "~assets/scss/config";
  @import "~assets/scss/mixins";

  .header {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    padding: 20px 0;
    box-shadow: 0px 4px 6px #00000029;

    &__logo {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #262626;


      .icon {
        width: 35px;
        img{
          max-width: 100%;
        }
      }

      &-text {
        margin-left: 15px;
      }

      &-name {
        font-size: 18px;
        line-height: 23px;
        font-weight: 500;
        letter-spacing: 0px;
        color: #262626;
        display: block;
        margin-bottom: 2px;

        @include respond-to(lg) {
          font-size: 16px;
        }
      }

      &-desc {
        text-align: left;
        font-weight: 400;
        font-size: 6px;
        line-height: 7px;
        color: #262626;
        display: block;
      }
    }

    &__wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__burger {
      margin-left: 20px;
    }

    &__menu {
      margin: 0;
      padding: 0;
      display: flex;
      list-style: none;



      &-item {
        padding-right: 32px;

        &:last-child {
          padding-right: 0;
        }
      }
      .header__info-menu{
  margin-top: auto;
          position: absolute;
          bottom: 50px;
           .header__info-phone , .footer__text{
                display: block;
    color: #fff;
    font-size: 18px;
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 10px;
    opacity: 0.6;
          }
      }

      &-link {
        text-align: left;
        font-size: 13px;
        line-height: 15px;
        font-weight: 500;
        color: #262626;
        opacity: 0.6;
        text-decoration: none;
        transition: all .2s;

        &:hover {
          opacity: 1;
        }
      }
    }

    &__info {
      display: flex;
      align-items: center;

      &-phone {
        text-decoration: none;
        text-align: right;
        font-size: 13px;
        font-weight: 500;
        line-height: 15px;
        letter-spacing: 1.3px;
        color: #262626;
        margin-right: 10px;
        transition: all .2s;
  @include respond-to(sm) {
    display: none;
  }

        &:hover {
          color: #720C0C;
        }
      }
    }
  }

  @include respond-to(md) {
    .header__menu {
      position: fixed;
      top: 80px;
      background: #3c3c3c;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 24px;
      transition: all .3s;
      transform: translateX(100%);
          flex-wrap: wrap;
          display: block;
          .header__menu-item{
            width: 100%;
            margin-bottom: 20px;
          }
          .header__menu-link{
            font-size: 16px;
            font-weight: normal;
    color: #fff;
          }
    }
  }

  .open-modal-menu {
    overflow: hidden;
    .header__menu {
      transform: translate(0);
    }
  }

</style>