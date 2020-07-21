<template>
  <div class="tm-header uk-visible@m tm-header-transparent tm-header-overlay" uk-header>
    <div
      uk-sticky
      media="@m"
      show-on-up
      animation="uk-animation-slide-top"
      cls-active="uk-navbar-sticky"
      sel-target=".uk-navbar-container"
      class="uk-sticky"
      style
    >
      <div class="uk-navbar-container uk-dark">
        <div class="uk-container uk-container-expand">
          <nav
            class="uk-navbar"
            uk-navbar='{"align": right, "boundary": !.uk-navbar-container}'
          >
            <div class="uk-navbar-right">
              <a
                href="/"
                class="uk-navbar-item uk-logo"
              >
                <img
                  alt="Design Bites"
                  width="220"
                  src="/logo.svg"
                />
                <img
                  class="uk-logo-inverse"
                  alt="Design Bites"
                  src="/logo-inverted.svg"
                />
              </a>
            </div>

            <div class="uk-navbar-left">
              <ul class="uk-navbar-nav">
                <li class="uk-parent" v-for="item in menu" :key="item">
                  <a
                    :href="item.href"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                    aria-expanded="false"
                    style="font-family: Iransans-bold !important"
                  >{{item.label}}</a>
                  <!-- <div class="uk-navbar-dropdown">
                    <div
                      class="uk-navbar-dropdown-grid uk-child-width-1-1 uk-grid uk-grid-stack"
                      uk-grid
                    >
                      <div>
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                          <li>
                            <a
                              href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?resource_cat=fonts"
                              class="menu-item menu-item-type-taxonomy menu-item-object-resource_cat"
                            >Fonts</a>
                          </li>
                          <li>
                            <a
                              href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?resource_cat=brushes"
                              class="menu-item menu-item-type-taxonomy menu-item-object-resource_cat"
                            >Brushes</a>
                          </li>
                          <li>
                            <a
                              href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?resource_cat=vectors"
                              class="menu-item menu-item-type-taxonomy menu-item-object-resource_cat"
                            >Vectors</a>
                          </li>
                          <li>
                            <a
                              href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?resource_cat=graphics"
                              class="menu-item menu-item-type-taxonomy menu-item-object-resource_cat"
                            >Graphics</a>
                          </li>
                          <li>
                            <a
                              href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?resource_cat=mockups"
                              class="menu-item menu-item-type-taxonomy menu-item-object-resource_cat"
                            >Mockups</a>
                          </li>
                          <li>
                            <a
                              href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?resource_cat=ui-kits"
                              class="menu-item menu-item-type-taxonomy menu-item-object-resource_cat"
                            >UI Kits</a>
                          </li>
                          <li>
                            <a
                              href="/themes/wordpress/2020/design-bites/index.php?post_type=resource"
                              class="menu-item menu-item-type-custom menu-item-object-custom"
                            >View All</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> -->
                </li>
              </ul>

              <div class="uk-navbar-item widget-text" id="widget-text-1">
                <div class="uk-panel textwidget">
                  <a
                    class="uk-button uk-button-primary"
                    href="#modal-full"
                    uk-toggle
                  >ثبت رایگان آگهی</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="uk-sticky-placeholder" style="height: 100px; margin: 0px;" hidden></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      menu: [
        { label: 'خانه', href: '/'}, 
        {label: 'مجله سقف و سرا', href: '/blog' }
        ]
    };
  }
};
</script>

<style scoped>
.tm-header-overlay {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 980;
}

.uk-navbar-sticky {
  background-color: white !important;
}
</style>
