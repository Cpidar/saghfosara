<template>
  <div class="uk-width-1-3@m uk-first-column">
    <!-- <div>
      <ul class="uk-breadcrumb uk-margin-remove-bottom">
        <li>
          <a
            href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?post_type=resource"
          >Resources</a>
        </li>

        <li>
          <a
            href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?resource_cat=personal"
          >Personal</a>
        </li>

        <li>
          <span>Max UI Kit</span>
        </li>
      </ul>
    </div> -->

    <h1 class="uk-text-lead uk-text-large uk-heading-divider">{{title}}</h1>

    <div class="uk-margin-medium">
      <p>{{desc}}</p>
    </div>
    <ul class="uk-list uk-margin-large uk-margin-remove-bottom">
      <li class="el-item">
        <div class="uk-child-width-expand uk-grid-column-medium uk-grid-row-small uk-grid" uk-grid>
          <div class="uk-width-small uk-text-break uk-first-column">
            <span class="el-title uk-display-block uk-font-primary">Category</span>
          </div>
          <div class>
            <div class="el-content uk-panel">
              <a
                class="uk-link-reset uk-margin-remove-last-child"
                href="https://demo.yootheme.com/themes/wordpress/2020/design-bites/?resource_cat=personal"
              >Personal</a>
            </div>
          </div>
        </div>
      </li>
      <li class="el-item">
        <div class="uk-child-width-expand uk-grid-column-medium uk-grid-row-small uk-grid" uk-grid>
          <div class="uk-width-small uk-text-break uk-first-column">
            <span class="el-title uk-display-block uk-font-primary">Format</span>
          </div>
          <div class>
            <div class="el-content uk-panel">sketch</div>
          </div>
        </div>
      </li>
      <li class="el-item">
        <div class="uk-child-width-expand uk-grid-column-medium uk-grid-row-small uk-grid" uk-grid>
          <div class="uk-width-small uk-text-break uk-first-column">
            <span class="el-title uk-display-block uk-font-primary">License</span>
          </div>
          <div class>
            <div class="el-content uk-panel">CC0</div>
          </div>
        </div>
      </li>
      <li class="el-item">
        <div class="uk-child-width-expand uk-grid-column-medium uk-grid-row-small uk-grid" uk-grid>
          <div class="uk-width-small uk-text-break uk-first-column">
            <span class="el-title uk-display-block uk-font-primary">Date</span>
          </div>
          <div class>
            <div class="el-content uk-panel">23 Nov, 2019</div>
          </div>
        </div>
      </li>
    </ul>
    <hr class="uk-margin-medium" />
    <div class="uk-panel uk-margin-remove-first-child uk-margin">
      <div class="uk-child-width-expand uk-grid-column-medium uk-flex-middle uk-grid" uk-grid>
        <div class="uk-width-auto uk-first-column">
          <img
            class="el-image uk-border-circle"
            alt
            data-src="/themes/wordpress/2020/design-bites/wp-content/themes/yootheme/cache/resources-creator-ryder-moore-20ffdfb3.webp"
            data-srcset="/themes/wordpress/2020/design-bites/wp-content/themes/yootheme/cache/resources-creator-ryder-moore-20ffdfb3.webp 80w, /themes/wordpress/2020/design-bites/wp-content/themes/yootheme/cache/resources-creator-ryder-moore-7a1bfde6.webp 160w"
            data-sizes="(min-width: 80px) 80px"
            data-width="80"
            data-height="80"
            uk-img
            src="https://demo.yootheme.com/themes/wordpress/2020/design-bites/wp-content/themes/yootheme/cache/resources-creator-ryder-moore-20ffdfb3.webp"
            sizes="(min-width: 80px) 80px"
            srcset="/themes/wordpress/2020/design-bites/wp-content/themes/yootheme/cache/resources-creator-ryder-moore-20ffdfb3.webp 80w, /themes/wordpress/2020/design-bites/wp-content/themes/yootheme/cache/resources-creator-ryder-moore-7a1bfde6.webp 160w"
          />
        </div>
        <div class="uk-margin-remove-first-child">
          <div class="el-title uk-h5 uk-font-primary uk-margin-top uk-margin-remove-bottom">Creator</div>

          <div class="el-content uk-panel">Ryder Moore</div>
        </div>
      </div>
    </div>
    <div class="uk-margin-large">
      <a
        class="el-content uk-width-1-1 uk-button uk-button-primary uk-button-large"
        href="/themes/wordpress/2020/design-bites/wp-content/uploads/yootheme/resources-download.zip"
      >اطلاعات تماس</a>
    </div>
  </div>
</template>

<script>

export default {
  props:['title', 'desc']
};
</script>