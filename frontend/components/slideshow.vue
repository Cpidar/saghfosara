<template>
  <client-only>
    <div class="uk-width-2-3@m uk-visible">
      <div class="uk-visible uk-margin">
        <VueSlickCarousel
          class="slider-for"
          ref="main"
          :rtl="true"
          :focusOnSelect="false"
          :arrows="false"
          :asNavFor="$refs.main"
          v-if="images"
        >
          <div v-for="(image, index) in images" :key="index" class="img-wrapper">
            <img :src="api+image.url" />
          </div>
        </VueSlickCarousel>
        <VueSlickCarousel
          class="slider-nav"
          ref="nav"
          :rtl="true"
          :focusOnSelect="true"
          :slidesToShow="4"
          :arrows="false"
          :centerMode="true"
          :asNavFor="$refs.main"
          v-if="images"
          @beforeChange="onBeforeChangeNav"
        >
          <div v-for="(image, index) in images" :key="index" class="img-wrapper">
            <img :src="api+image.url" />
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </client-only>
</template>

<script>
import { API_SERVER } from "~/config/global-variables";

export default {
  props: ["images"],
  data() {
    return {
      api: API_SERVER,
      mainOptions: {
        arrows: false,
        rtl: true
      },
      navOptions: {
        slidesToShow: 4,
        rtl: true
      }
    };
  },
  methods: {
    onBeforeChangeNav(currentPosition, nextPosition) {
      console.log(nextPosition)
      this.$refs.nav.goTo(nextPosition);
      this.$refs.main.goTo(nextPosition);
    }
  },
  mounted() {
    console.log(this.$refs.main);
    this.$nextTick().then(() => {
      this.$refs["main"].asNavFor = this.$refs["nav"];
      this.$refs["nav"].asNavFor = this.$refs["main"];
      console.log(this.$refs["main"].asNavFor);
    });
  }
};
</script>

<style>
.carousel-wrapper {
  padding: 40px;
}
.img-wrapper img {
  margin: auto;
  width: 100%;
  /* height: 100px; */
}
</style>
