<template>
  <div class="mobilenav">
    <div class="mobilenav__wrapper">
      <nav class="mobilenav__list">
        <ul>
          <li @click="closeMobNav" v-for="item in menulinks" :key="item.id">
            <router-link :to="`${item.link}`">{{ item.navname }}</router-link>
          </li>
        </ul>
      </nav>
      <div class="mobilenav__info">
        <p class="mobilenav__info__info-phone">+7 (495) 000 00 00</p>
        <p class="mobilenav__text">г. Москва, наб. канала Грибоедова, д. 41</p>
        <p class="mobilenav__mail">info@lawer.com</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navmob: false,
      menulinks: [
        {
          navname: "Главная",
          link: "/",
        },
        {
          navname: "Биография",
          link: "/bio",
        },
        {
          navname: "Услуги адвокатов",
          link: "/services",
        },
        {
          navname: "Новости и статьи",
          link: "/",
        },
        {
          navname: "Контакты",
          link: "/contacts",
        },
      ],
    };
  },
  methods: {
    closeMobNav() {
      this.$emit("clicked", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.mobilenav.closemobnav {
  right: -320px;
  transition: all 0.4s;
}
.mobilenav {
  background-color: #3c3c3c;
  position: fixed;
  right: -320px;
  transition: all 0.4s;
  width: 320px;
  top: 87px;
  z-index: 19;
  padding: 1.5rem;
  bottom: 0;
  &__wrapper {
    text-align: left;
    color: #989898;

    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
}
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
  li:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  a {
    color: inherit;
    display: block;
    text-decoration: none;
  }
}
</style>