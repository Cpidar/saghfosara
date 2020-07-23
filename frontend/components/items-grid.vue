<template>
  <div
    class="uk-section-muted uk-section uk-section-large"
    tm-header-transparent="dark"
    uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom-small; delay: false; hidden: true"
  >
    <div class="uk-container uk-container-xlarge">
      <div class="tm-header-placeholder uk-margin-remove-adjacent"></div>
      <div class="tm-grid-expand uk-margin uk-grid uk-grid-stack" uk-grid>
        <div class="uk-width-1-1@m uk-first-column">
          <h2 class="uk-h3 uk-heading-bullet uk-margin" uk-scrollspy-class>{{title}}</h2>
          <div class="uk-margin-medium">
            <div
              class="uk-child-width-1-1 uk-child-width-1-3@s uk-child-width-1-4@m uk-grid-match uk-grid"
              uk-grid
            >
              <div
                v-for="(home, index) of items"
                :key="index"
              >
                <a
                  class="uk-card uk-card-default uk-card-hover uk-link-toggle uk-display-block uk-border-rounded"
                  :href="'/homes/'+home.id"
                  uk-scrollspy-class
                >
                  <div class="uk-card-media-top">
                    <img
                      class="el-image"
                      alt
                      :data-src="home.pics[0] ? server+home.pics[0].url : '/default.jpg'"
                      :data-srcset="home.pics[0] ? server+home.pics[0].url : '/default.jpg'"
                      data-sizes="(min-width: 610px) 610px"
                      data-width="610"
                      data-height="407"
                      uk-img
                      sizes="(min-width: 610px) 610px"
                      :srcset="home.pics[0] ? server+home.pics[0].url : '/default.jpg'"
                      :src="home.pics[0] ? server+home.pics[0].url : '/default.jpg'"
                    />
                  </div>
                  <div class="uk-card-body uk-margin-remove-first-child">
                    <h3 class="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">{{home.title}}</h3>
                    <div
                      class="el-meta uk-text-meta uk-margin-small-top"
                    >{{new Intl.NumberFormat('fa-IR', { maximumSignificantDigits: 3 }).format(home.price)}}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class="uk-margin-xlarge uk-text-center" uk-scrollspy-class>
            <!-- <ul class="uk-pagination uk-margin-remove-bottom uk-flex-center">
              <li class="uk-active">
                <span>1</span>
              </li>
              <li>
                <a
                  href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?resource_cat=ui-kits&amp;paged=2"
                >2</a>
              </li>
              <li>
                <a
                  href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?resource_cat=ui-kits&amp;paged=2"
                  title="Next"
                >
                  <span uk-pagination-next class="uk-icon uk-pagination-next">
                    <svg
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      xmlns="http://www.w3.org/2000/svg"
                      data-svg="pagination-next"
                    >
                      <polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11" />
                    </svg>
                  </span>
                </a>
              </li>
            </ul>-->
            <button
              class="uk-button uk-button-danger"
              v-if="HasMore"
              @click="showMore"
            >نمایش موارد بیشتر</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { API_SERVER } from "~/config/global-variables";

export default {
  props: ["title", "items", "PageSize", "HasMore"],
  data() {
    return {
      server: API_SERVER,
      page: 0
    };
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat("fa-IR", {
        maximumSignificantDigits: 3
      }).format(price);
    },
    showMore() {
      this.page++;
      this.$emit("fetch", this.page);
    }
  }
};
</script>
