<template>
  <div class="uk-width-2-3@m uk-visible@m">
    <div class="uk-position-relative"  uk-slideshow="animation: slide">
      <ul class="uk-slideshow-items">
        <li v-for="(image, index) in images" :key="index">
          <img :src="api+image.url" alt uk-cover />
        </li>
      </ul>

      <div class="uk-position-bottom-center uk-position-small">
        <ul class="uk-thumbnav">
          <li v-for="(image, index) in images" :key="index" :uk-slideshow-item="index">
            <a href="#">
              <img :src="api+image.url" width="100" alt />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { API_SERVER } from "~/config/global-variables";
export default {
  props: ["images"],
  data() {
    return {
      api: API_SERVER
    };
  }
};
</script>
