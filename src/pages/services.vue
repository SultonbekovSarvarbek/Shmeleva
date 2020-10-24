<template>
  <div class="page page-content">
    <div class="container">
      <div class="card">
        <div class="card__image">
          <img
            src="https://vseprorazvod.ru/wp-content/uploads/2017/06/brachnyj-dogovor-na-kvartiru-v-brake-1.jpg"
            alt=""
          />
        </div>
        <div class="card__content">
          <router-link class="card__name" to="/detail"
            >УГОЛОВНЫЙ КОДЕС</router-link
          >
          <div class="card__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna al
          </div>
          <div class="card__link">
            <div class="card__link-icon">></div>
            <span>ЧИТАТЬ ПОДРОБНЕЕ</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="footer__button-top" v-scroll-to="'#app'">
      <Icon name="Arrow" />
    </div> -->
  </div>
</template>

<script>
// import Icon from "@/components/Icon/Icon.vue";

export default {
  components: {
    // Icon,
  },
};
</script>

<style lang="scss" scoped>
.page {
  margin-bottom: 800px;
  background-color: #fff;
}
.page-content {
  padding-top: 60px;
  padding-bottom: 60px;
}
.card {
  max-width: 340px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
  &__content {
    padding: 1rem;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    font-style: italic;
  }
  &__name {
    color: #262626;
    font-weight: 700;
    margin-bottom: 1rem;
    text-decoration: none;
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
</style>