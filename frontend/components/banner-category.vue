<template>
  <div
    class="uk-section-primary uk-preserve-color uk-section"
    uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom-small; delay: false;"
  >
    <div class="uk-container uk-container-large">
      <div class="tm-grid-expand uk-grid-column-large uk-grid-margin uk-grid" uk-grid>
        <div class="uk-light uk-width-1-3@m uk-first-column">
          <h2
            class="uk-position-relative"
            style="top: 15px; visibility: hidden;"
            uk-scrollspy-class
          >
           کاوش املاک
            <br class="uk-visible@m" />بر اساس نوع واگذاری
          </h2>
        </div>

        <div class="uk-width-2-3@m">
          <div
            class="uk-position-relative uk-margin uk-width-2xlarge uk-margin-auto"
            style="top: 15px;"
          >
            <div
              class="uk-child-width-1-2 uk-child-width-1-2@s uk-grid-medium uk-grid-match uk-grid"
              uk-grid="parallax: 50;"
              style="padding-bottom: 50px;"
            >
              <div v-for="item in items" :key="item.id">
                <a
                  class="el-item uk-card uk-card-default uk-card-hover uk-card-body uk-margin-remove-first-child uk-link-toggle uk-display-block"
                  :href="'/category/'+item.id"
                  uk-scrollspy-class
                  style="visibility: hidden;"
                >
                  <img
                    class="el-image uk-text-primary"
                    alt
                    uk-svg
                    uk-img="dataSrc:/themes/wordpress/2020/design-bites/wp-content/uploads/yootheme/resources-category-fonts-intro.svg"
                    src="https://demo.yootheme.com/themes/wordpress/2020/design-bites/wp-content/uploads/yootheme/resources-category-fonts-intro.svg"
                    hidden="true"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    class="el-image uk-text-primary uk-svg"
                    data-svg="https://demo.yootheme.com/themes/wordpress/2020/design-bites/wp-content/uploads/yootheme/resources-category-fonts-intro.svg"
                  >
                    <path
                      fill="none"
                      stroke="#E64577"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M37.8,20.34,36.67,12.2H29V38.7l6.85,1.42V45H14.33V40.12l7-1.42V12.2H13.69l-1.12,8.14H7.28V6.1H43V20.34Z"
                    />
                  </svg>

                  <h3 class="el-title uk-h4 uk-margin-medium-top uk-margin-remove-bottom">{{item.name}}</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"]
};
</script>
