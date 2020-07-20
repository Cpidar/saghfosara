<template>
  <div
    id="page#1"
    class="uk-section-muted"
    uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-top; delay: false;"
    tm-header-transparent="light"
    tm-header-transparent-placeholder
  >
    <div
      data-src="/home-header-8bf82203.png"
      data-sizes="(max-aspect-ratio: 1920/940) 204vh"
      uk-img
      class="uk-background-norepeat uk-background-cover uk-background-bottom-center uk-section uk-section-large uk-flex uk-flex-middle"
      uk-height-viewport="offset-top: true; offset-bottom: 20;"
      style="min-height: calc(80vh););"
    >
      <div class="uk-width-1-1">
        <div class="uk-container">
          <div class="tm-header-placeholder uk-margin-remove-adjacent" style="height: 80px;"></div>
          <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
            <div class="uk-flex-auto uk-width-1-1@m uk-first-column">
              <h1
                class="uk-h5 uk-margin-small uk-text-center"
                uk-scrollspy-class
                style
              >وبسایت جامع املاک اصفهان</h1>
              <!-- <div class="uk-text-center">
                <form class="uk-search uk-search-large uk-background-secondary uk-border-rounded">
                  <span uk-search-icon></span>
                  <input class="uk-search-input" type="search" placeholder="نام محله یا خیابان ..." />
                </form>
              </div>-->
              <h2
                class="uk-heading-large uk-margin-small uk-text-center uk-scrollspy-inview"
                uk-scrollspy-class
                style
              >سقف و سرا</h2>
              <div
                class="uk-text-lead uk-margin-small uk-text-center"
                uk-scrollspy-class="uk-animation-slide-bottom"
                style
              >خرید – فروش – رهن و اجاره</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from "~/components/search-box.vue";

export default {
  components: {
    SearchBox
  }
};
</script>

<style scoped>
#page\#1 .uk-grid {
  background: url("~assets/images/home-header-splash3.png") 50% 50% no-repeat;
  background-size: contain;
  padding: 135px 0;
}
</style>
