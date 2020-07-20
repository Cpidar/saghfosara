<template>
  <div
    class="uk-section-primary uk-preserve-color uk-section"
    uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-bottom-small; delay: false;"
  >
    <div class="uk-container uk-container-large">
      <div class="tm-grid-expand uk-grid-column-large uk-grid-margin uk-grid" uk-grid>
        <div class="uk-light uk-width-1-3@m">
          <h2
            class="uk-position-relative"
            style="top: 15px; visibility: hidden;"
            uk-scrollspy-class
          >
            درباره
            <br class="uk-visible@m" />سقف و سرا
          </h2>
        </div>

        <div class="uk-width-2-3@m">
          <div
            class="uk-position-relative uk-margin uk-width-2xlarge uk-margin-auto"
            style="top: 15px;"
          >

            <div class="uk-text-emphasis">
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
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
