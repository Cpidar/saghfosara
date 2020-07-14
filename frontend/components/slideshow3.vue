<template>
  <div class="uk-width-2-3@m uk-visible@m">
    <div class="uk-visible@m uk-margin">
      <div class="uk-child-width-1-1 uk-grid-match uk-grid uk-grid-stack" uk-grid>
        <div :class="{'uk-grid-margin': index > 0, 'uk-first-column': true}" v-for="(image, index) of images" :key="index">
          <div class="el-item uk-panel uk-margin-remove-first-child">
            <img
              class="el-image uk-border-rounded"
              alt
              :data-src="api + image.url"
              :data-srcset="api + image.url"
              data-sizes="(min-width: 1600px) 1600px"
              data-width="1600"
              data-height="1067"
              uk-img
              :src="api + image.url"
              sizes="(min-width: 1600px) 1600px"
              :srcset="api + image.url"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- for mobiles -->
    <div uk-slideshow="ratio: 3:2;" class="uk-hidden@m uk-margin">
      <div class="uk-position-relative">
        <ul class="uk-slideshow-items" style="min-height: 74.6667px;">
          <li tabindex="-1" style v-for="(image, index) of images" :key="index">
            <img
              alt
              uk-img="target: !.uk-slideshow-items"
              uk-cover
              data-sizes="(max-aspect-ratio: 900/600) 150vh"
              data-width="900"
              data-height="600"
              style="height: 256px; width: 382px;"
            />
          </li>
        </ul>
      </div>

      <ul class="el-nav uk-thumbnav uk-flex-left uk-margin-top" uk-margin>
        <li uk-slideshow-item="0" class="uk-first-column uk-active">
          <a href="#">
            <img
              alt
              data-src="https://demo.yootheme.com/themes/wordpress/2020/design-bites/wp-admin/admin-ajax.php?action=kernel&amp;p=theme%2Fimage&amp;src=WyJ3cC1jb250ZW50XC91cGxvYWRzXC95b290aGVtZVwvcmVzb3VyY2VzLXBvc3QtbWF4LXVpLWtpdC5qcGciLFtbImRvUmVzaXplIixbMTEyLDc1LDExMiw3NV1dLFsiZG9Dcm9wIixbMTAwLDc1LDYsMF1dLFsidHlwZSIsWyJ3ZWJwIiwiODUiXV1dXQ%3D%3D&amp;hash=c933f5c9fa9d0473252a8f28de073f12"
              data-srcset="https://demo.yootheme.com/themes/wordpress/2020/design-bites/wp-admin/admin-ajax.php?action=kernel&amp;p=theme%2Fimage&amp;src=WyJ3cC1jb250ZW50XC91cGxvYWRzXC95b290aGVtZVwvcmVzb3VyY2VzLXBvc3QtbWF4LXVpLWtpdC5qcGciLFtbImRvUmVzaXplIixbMTEyLDc1LDExMiw3NV1dLFsiZG9Dcm9wIixbMTAwLDc1LDYsMF1dLFsidHlwZSIsWyJ3ZWJwIiwiODUiXV1dXQ%3D%3D&amp;hash=c933f5c9fa9d0473252a8f28de073f12 100w, https://demo.yootheme.com/themes/wordpress/2020/design-bites/wp-admin/admin-ajax.php?action=kernel&amp;p=theme%2Fimage&amp;src=WyJ3cC1jb250ZW50XC91cGxvYWRzXC95b290aGVtZVwvcmVzb3VyY2VzLXBvc3QtbWF4LXVpLWtpdC5qcGciLFtbImRvUmVzaXplIixbMjI1LDE1MCwyMjUsMTUwXV0sWyJkb0Nyb3AiLFsyMDAsMTUwLDEyLDBdXSxbInR5cGUiLFsid2VicCIsIjg1Il1dXV0%3D&amp;hash=0a4d4315b11947f70151a0f59965028e 200w"
              data-sizes="(min-width: 100px) 100px"
              data-width="100"
              data-height="75"
              uk-img
              src="https://demo.yootheme.com/themes/wordpress/2020/design-bites/wp-admin/admin-ajax.php?action=kernel&amp;p=theme%2Fimage&amp;src=WyJ3cC1jb250ZW50XC91cGxvYWRzXC95b290aGVtZVwvcmVzb3VyY2VzLXBvc3QtbWF4LXVpLWtpdC5qcGciLFtbImRvUmVzaXplIixbMjI1LDE1MCwyMjUsMTUwXV0sWyJkb0Nyb3AiLFsyMDAsMTUwLDEyLDBdXSxbInR5cGUiLFsid2VicCIsIjg1Il1dXV0%3D&amp;hash=0a4d4315b11947f70151a0f59965028e"
              sizes="(min-width: 100px) 100px"
              srcset="https://demo.yootheme.com/themes/wordpress/2020/design-bites/wp-admin/admin-ajax.php?action=kernel&amp;p=theme%2Fimage&amp;src=WyJ3cC1jb250ZW50XC91cGxvYWRzXC95b290aGVtZVwvcmVzb3VyY2VzLXBvc3QtbWF4LXVpLWtpdC5qcGciLFtbImRvUmVzaXplIixbMTEyLDc1LDExMiw3NV1dLFsiZG9Dcm9wIixbMTAwLDc1LDYsMF1dLFsidHlwZSIsWyJ3ZWJwIiwiODUiXV1dXQ%3D%3D&amp;hash=c933f5c9fa9d0473252a8f28de073f12 100w, https://demo.yootheme.com/themes/wordpress/2020/design-bites/wp-admin/admin-ajax.php?action=kernel&amp;p=theme%2Fimage&amp;src=WyJ3cC1jb250ZW50XC91cGxvYWRzXC95b290aGVtZVwvcmVzb3VyY2VzLXBvc3QtbWF4LXVpLWtpdC5qcGciLFtbImRvUmVzaXplIixbMjI1LDE1MCwyMjUsMTUwXV0sWyJkb0Nyb3AiLFsyMDAsMTUwLDEyLDBdXSxbInR5cGUiLFsid2VicCIsIjg1Il1dXV0%3D&amp;hash=0a4d4315b11947f70151a0f59965028e 200w"
            />
          </a>
        </li>
        <li uk-slideshow-item="1" class="uk-margin-small-top uk-first-column">
          <a href="#">
            <img
              alt
              data-src="https://demo.yootheme.com/themes/wordpress/2020/design-bites/wp-admin/admin-ajax.php?action=kernel&amp;p=theme%2Fimage&amp;src=WyJ3cC1jb250ZW50XC91cGxvYWRzXC95b290aGVtZVwvcmVzb3VyY2VzLXBvc3QtbWF4LXVpLWtpdC1pbWFnZS0wMS5qcGciLFtbImRvUmVzaXplIixbMTEyLDc1LDExMiw3NV1dLFsiZG9Dcm9wIixbMTAwLDc1LDYsMF1dLFsidHlwZSIsWyJ3ZWJwIiwiODUiXV1dXQ%3D%3D&amp;hash=8cba9c166db37a884893a08e12177929"
              data-srcset="https://demo.yootheme.com/themes/wordpress/2020/design-bites/wp-admin/admin-ajax.php?action=kernel&amp;p=theme%2Fimage&amp;src=WyJ3cC1jb250ZW50XC91cGxvYWRzXC95b290aGVtZVwvcmVzb3VyY2VzLXBvc3QtbWF4LXVpLWtpdC1pbWFnZS0wMS5qcGciLFtbImRvUmVzaXplIixbMTEyLDc1LDExMiw3NV1dLFsiZG9Dcm9wIixbMTAwLDc1LDYsMF1dLFsidHlwZSIsWyJ3ZWJwIiwiODUiXV1dXQ%3D%3D&amp;hash=8cba9c166db37a884893a08e12177929 100w, https://demo.yootheme.com/themes/wordpress/2020/design-bites/wp-admin/admin-ajax.php?action=kernel&amp;p=theme%2Fimage&amp;src=WyJ3cC1jb250ZW50XC91cGxvYWRzXC95b290aGVtZVwvcmVzb3VyY2VzLXBvc3QtbWF4LXVpLWtpdC1pbWFnZS0wMS5qcGciLFtbImRvUmVzaXplIixbMjI1LDE1MCwyMjUsMTUwXV0sWyJkb0Nyb3AiLFsyMDAsMTUwLDEyLDBdXSxbInR5cGUiLFsid2VicCIsIjg1Il1dXV0%3D&amp;hash=677e56fc57c180febd811fc7a75e5496 200w"
              data-sizes="(min-width: 100px) 100px"
              data-width="100"
              data-height="75"
              uk-img
              src="https://demo.yootheme.com/themes/wordpress/2020/design-bites/wp-admin/admin-ajax.php?action=kernel&amp;p=theme%2Fimage&amp;src=WyJ3cC1jb250ZW50XC91cGxvYWRzXC95b290aGVtZVwvcmVzb3VyY2VzLXBvc3QtbWF4LXVpLWtpdC1pbWFnZS0wMS5qcGciLFtbImRvUmVzaXplIixbMjI1LDE1MCwyMjUsMTUwXV0sWyJkb0Nyb3AiLFsyMDAsMTUwLDEyLDBdXSxbInR5cGUiLFsid2VicCIsIjg1Il1dXV0%3D&amp;hash=677e56fc57c180febd811fc7a75e5496"
              sizes="(min-width: 100px) 100px"
              srcset="https://demo.yootheme.com/themes/wordpress/2020/design-bites/wp-admin/admin-ajax.php?action=kernel&amp;p=theme%2Fimage&amp;src=WyJ3cC1jb250ZW50XC91cGxvYWRzXC95b290aGVtZVwvcmVzb3VyY2VzLXBvc3QtbWF4LXVpLWtpdC1pbWFnZS0wMS5qcGciLFtbImRvUmVzaXplIixbMTEyLDc1LDExMiw3NV1dLFsiZG9Dcm9wIixbMTAwLDc1LDYsMF1dLFsidHlwZSIsWyJ3ZWJwIiwiODUiXV1dXQ%3D%3D&amp;hash=8cba9c166db37a884893a08e12177929 100w, https://demo.yootheme.com/themes/wordpress/2020/design-bites/wp-admin/admin-ajax.php?action=kernel&amp;p=theme%2Fimage&amp;src=WyJ3cC1jb250ZW50XC91cGxvYWRzXC95b290aGVtZVwvcmVzb3VyY2VzLXBvc3QtbWF4LXVpLWtpdC1pbWFnZS0wMS5qcGciLFtbImRvUmVzaXplIixbMjI1LDE1MCwyMjUsMTUwXV0sWyJkb0Nyb3AiLFsyMDAsMTUwLDEyLDBdXSxbInR5cGUiLFsid2VicCIsIjg1Il1dXV0%3D&amp;hash=677e56fc57c180febd811fc7a75e5496 200w"
            />
          </a>
        </li>
        <li uk-slideshow-item="2" class="uk-margin-small-top uk-first-column">
          <a href="#">
            <img
              alt
              data-src="https://demo.yootheme.com/themes/wordpress/2020/design-bites/wp-admin/admin-ajax.php?action=kernel&amp;p=theme%2Fimage&amp;src=WyJ3cC1jb250ZW50XC91cGxvYWRzXC95b290aGVtZVwvcmVzb3VyY2VzLXBvc3QtbWF4LXVpLWtpdC1pbWFnZS0wMi5qcGciLFtbImRvUmVzaXplIixbMTEyLDc1LDExMiw3NV1dLFsiZG9Dcm9wIixbMTAwLDc1LDYsMF1dLFsidHlwZSIsWyJ3ZWJwIiwiODUiXV1dXQ%3D%3D&amp;hash=3c5503ac91385c41d1e9c1dd3344e173"
              data-srcset="https://demo.yootheme.com/themes/wordpress/2020/design-bites/wp-admin/admin-ajax.php?action=kernel&amp;p=theme%2Fimage&amp;src=WyJ3cC1jb250ZW50XC91cGxvYWRzXC95b290aGVtZVwvcmVzb3VyY2VzLXBvc3QtbWF4LXVpLWtpdC1pbWFnZS0wMi5qcGciLFtbImRvUmVzaXplIixbMTEyLDc1LDExMiw3NV1dLFsiZG9Dcm9wIixbMTAwLDc1LDYsMF1dLFsidHlwZSIsWyJ3ZWJwIiwiODUiXV1dXQ%3D%3D&amp;hash=3c5503ac91385c41d1e9c1dd3344e173 100w, https://demo.yootheme.com/themes/wordpress/2020/design-bites/wp-admin/admin-ajax.php?action=kernel&amp;p=theme%2Fimage&amp;src=WyJ3cC1jb250ZW50XC91cGxvYWRzXC95b290aGVtZVwvcmVzb3VyY2VzLXBvc3QtbWF4LXVpLWtpdC1pbWFnZS0wMi5qcGciLFtbImRvUmVzaXplIixbMjI1LDE1MCwyMjUsMTUwXV0sWyJkb0Nyb3AiLFsyMDAsMTUwLDEyLDBdXSxbInR5cGUiLFsid2VicCIsIjg1Il1dXV0%3D&amp;hash=ef7fa0aea39c9244c0d448dd799f5316 200w"
              data-sizes="(min-width: 100px) 100px"
              data-width="100"
              data-height="75"
              uk-img
              src="https://demo.yootheme.com/themes/wordpress/2020/design-bites/wp-admin/admin-ajax.php?action=kernel&amp;p=theme%2Fimage&amp;src=WyJ3cC1jb250ZW50XC91cGxvYWRzXC95b290aGVtZVwvcmVzb3VyY2VzLXBvc3QtbWF4LXVpLWtpdC1pbWFnZS0wMi5qcGciLFtbImRvUmVzaXplIixbMjI1LDE1MCwyMjUsMTUwXV0sWyJkb0Nyb3AiLFsyMDAsMTUwLDEyLDBdXSxbInR5cGUiLFsid2VicCIsIjg1Il1dXV0%3D&amp;hash=ef7fa0aea39c9244c0d448dd799f5316"
              sizes="(min-width: 100px) 100px"
              srcset="https://demo.yootheme.com/themes/wordpress/2020/design-bites/wp-admin/admin-ajax.php?action=kernel&amp;p=theme%2Fimage&amp;src=WyJ3cC1jb250ZW50XC91cGxvYWRzXC95b290aGVtZVwvcmVzb3VyY2VzLXBvc3QtbWF4LXVpLWtpdC1pbWFnZS0wMi5qcGciLFtbImRvUmVzaXplIixbMTEyLDc1LDExMiw3NV1dLFsiZG9Dcm9wIixbMTAwLDc1LDYsMF1dLFsidHlwZSIsWyJ3ZWJwIiwiODUiXV1dXQ%3D%3D&amp;hash=3c5503ac91385c41d1e9c1dd3344e173 100w, https://demo.yootheme.com/themes/wordpress/2020/design-bites/wp-admin/admin-ajax.php?action=kernel&amp;p=theme%2Fimage&amp;src=WyJ3cC1jb250ZW50XC91cGxvYWRzXC95b290aGVtZVwvcmVzb3VyY2VzLXBvc3QtbWF4LXVpLWtpdC1pbWFnZS0wMi5qcGciLFtbImRvUmVzaXplIixbMjI1LDE1MCwyMjUsMTUwXV0sWyJkb0Nyb3AiLFsyMDAsMTUwLDEyLDBdXSxbInR5cGUiLFsid2VicCIsIjg1Il1dXV0%3D&amp;hash=ef7fa0aea39c9244c0d448dd799f5316 200w"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {API_SERVER} from '~/config/global-variables'
export default {
  props: ['images'],
  data() {
    return {
      api: API_SERVER
    }
  }
};
</script>
