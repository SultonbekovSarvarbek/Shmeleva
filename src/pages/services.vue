<template>
  <div class="page page-content">
    <div class="container">
      <div class="row">
        <div
          class="col col-12 col-lg-3 col-xl-4"
          v-for="(item, idx) in 1"
          :key="'long-' + idx"
        >
          <div class="card">
            <div class="card__image">
              <img src="" alt="" />
            </div>
            <div class="card__content">
              <a class="card__name" href="/detail'">УГОЛОВНЫЙ КОДЕС</a>
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
      </div>
    </div>
    <div class="footer__button-top" v-scroll-to="'#app'">
      <Icon name="Arrow" />
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon/Icon.vue";

export default {
  components: {
    Icon,
  },
};
</script>

<style lang="scss">
.page-content {
  padding-top: 60px;
  padding-bottom: 60px;
}
.row {
  .card {
    margin-bottom: 24px;
  }
}
</style>