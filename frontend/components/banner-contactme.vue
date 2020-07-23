<template>
  <div
    class="uk-section-muted"
    uk-scrollspy="target: [uk-scrollspy-class]; cls:; delay: false;"
  >
    <div
      src="/images/bottom-bg.svg"
      uk-img
      class="uk-background-norepeat uk-background-contain uk-background-bottom-right uk-section uk-section-xlarge"
      uk-parallax="bgx: -120,-120;bgy: 420,120;easing: 0.5"
    >
      <div class="uk-container uk-container-xlarge">
        <div class="uk-grid-margin uk-container uk-container-small">
          <div class="tm-grid-expand uk-grid uk-grid-stack" uk-grid>
            <div class="uk-grid-item-match uk-width-1-1@m">
              <div class="uk-tile-secondary uk-tile">
                <h2
                  class="uk-margin-medium uk-text-center uk-scrollspy-inview"
                  uk-scrollspy-class
                  style
                >
                  بروز باشید
                  <br class="uk-visible@s" />به صورت روزانه مطالب سایت را دریافت کنید
                </h2>
                <div
                  class="uk-width-2xlarge uk-margin-auto@s uk-margin-auto uk-text-center uk-scrollspy-inview"
                  uk-scrollspy-class
                  style
                >
                  <form
                    class="uk-form uk-panel js-form-newsletter"
                    method="post"
                    action="https://demo.yootheme.com/themes/wordpress/2020/design-bites/wp-admin/admin-ajax.php?action=kernel&amp;p=theme%2Fnewsletter%2Fsubscribe"
                  >
                    <div class="uk-grid-small uk-child-width-expand@s uk-grid" uk-grid>
                      <div class="uk-first-column">
                        <input
                          class="el-input uk-input"
                          type="email"
                          name="email"
                          placeholder="آدرس ایمیل"
                          required
                        />
                      </div>
                      <div class="uk-width-auto@s">
                        <button
                          class="el-button uk-button uk-button-default"
                          type="submit"
                        >ارسال</button>
                      </div>
                    </div>

                    <input
                      type="hidden"
                      name="settings"
                      value="2YSjWhRs0I4ZzwJUFVYzXg==.MWNSSjYvUEZnTFlRSG10VEhIVTJWLzZNUmRHU3hYMWlqbHRBUm1WMFkvUlR1YTIvemszUWUwMDV4eFlYQmxheFFDeklPWm0xTmFTZGJOcGtTMFBYNlp2cVRMdnBJamZlOE5OYWN1a1VUUXRxYkdHUWI5SzhwdG42VTZHK3E3ZmJ5c3ovZTdJUmZ5YmU2SERBeVVUTm1rTGNEQi9ncEhHdHdKZkZTQTFZeVo5eGNhZC8yR2hKTHdsUUFmaUhVRktpSjhMbnZZRGY4QnczUWp5YmNrQkdJd3RRZnhubkNKQTRhUkNSUk14Y1JyUFNjS3RPWVlpU1FUaEJzRWpncUU4a3lMUmdBajEyeTlBNHlwb3RwSDFVZWlxKzN4djUyY3h0ZjRLLzIrakNKT1k9.NjBkYWYwYzQ1ZDE3MDA2ZjAzMzA5NTY2YTU0MjUyNzJjYTE1YjZkMThiYjdlZTQ3MmY5NDdkNDAwZDBmN2VmNQ=="
                    />
                    <div class="message uk-margin uk-hidden"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>