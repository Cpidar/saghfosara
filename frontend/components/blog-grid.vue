<template>
  <div class="uk-section-muted uk-section uk-section-large uk-padding-remove-bottom">
    <div class="uk-container uk-container-large">
      <div class="tm-grid-expand uk-margin-large uk-grid uk-grid-stack" uk-grid>
        <div class="uk-width-1-1@m uk-first-column">
          <h2 class="uk-h1">تازه ترین مطالب بلاگ</h2>
        </div>
      </div>
      <div class="tm-grid-expand uk-grid-column-large uk-margin-large uk-grid" uk-grid>
        <div class="uk-width-1-4@l uk-first-column">
          <div class="uk-divider-small uk-margin-medium"></div>
          <div
            class="uk-margin uk-width-medium@m"
          >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،</div>
        </div>

<!-- icon grid -->
        <div class="uk-width-3-4@l">
          <div class="uk-margin">
            <div
              class="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-medium uk-grid-match uk-grid"
              uk-grid
            >
              <div uk-scrollspy-class v-for="post in posts" :key="post.id">
                <a
                  class="el-item uk-card uk-card-default uk-card-hover uk-link-toggle uk-display-block"
                  :href="'/blog/'+post.id"
                >
                  <div class="uk-card-media-top">
                    <img
                      class="el-image"
                      alt
                      width="610"
                      height="355"
                      uk-img
                      :data-src="post.image.path"
                      sizes="(min-width: 610px) 610px"
                    />
                  </div>
                  <div class="uk-card-body uk-margin-remove-first-child">
                    <h3
                      class="el-title uk-h4 uk-margin-top uk-margin-remove-bottom"
                    >{{post.title}}</h3>
                    <div class="el-meta uk-text-meta uk-margin-top">02 April 2020</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        <!-- see all -->
          <div class="uk-margin-large uk-text-right@m">
            <a
              class="el-content uk-button uk-button-text"
              href="/themes/wordpress/2020/creative-hub/index.php?post_type=post"
            >See All</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['posts']
};
</script>