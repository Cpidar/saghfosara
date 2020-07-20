<template>
  <div id="modal-full" uk-modal="bg-close: false">
    <div class="uk-modal-dialog">
      <button class="uk-modal-close-full uk-close-medim" type="button" uk-close></button>

      <div class="uk-modal-body">
        <form
          class="uk-grid-small uk-grid uk-grid-stack"
          ref="adForm"
          @submit.prevent="createHome"
          uk-grid
        >
          <div class="uk-width-1-1">
            <label class="uk-form-label" for="form-stacked-text">عنوان</label>
            <div class="uk-form-controls">
              <input
                v-model.lazy="formData.title"
                name="title"
                class="uk-input"
                id="form-stacked-text"
                type="text"
                placeholder="عنوان ...."
                required
              />
            </div>
          </div>

          <div class="uk-width-1-2@s">
            <label class="uk-form-label" for="form-stacked-text">محله</label>
            <div class="uk-form-controls">
              <input
                v-model="formData.neighborhood"
                name="neighborhood"
                class="uk-input"
                id="form-stacked-text"
                type="text"
                placeholder="محله مورد نظر را تایپ کنید"
              />
            </div>
          </div>

          <div class="uk-width-1-2@s">
            <label class="uk-form-label" for="form-stacked-select">نوع واگذاری</label>
            <div class="uk-form-controls">
              <select v-model="formData.category" name="category" class="uk-select" id="form-stacked-select">
                <option>1</option>
              </select>
            </div>
          </div>
          <div class="uk-width-1-2@s">
            <label class="uk-form-label" for="form-stacked-select">نوع ملک</label>
            <div class="uk-form-controls">
              <select v-model="formData.propertyType" name="propertyType" class="uk-select" id="form-stacked-select">
                <option>Option 01</option>
              </select>
            </div>
          </div>
          <div class="uk-width-1-2@s">
            <label class="uk-form-label" for="form-stacked-text">سن بنا</label>
            <div class="uk-form-controls">
              <input
                v-model.number="formData.builtDate"
                name="builtDate"
                class="uk-input"
                id="form-stacked-text"
                type="number"
                placeholder="سن"
              />
            </div>
          </div>
          <div class="uk-width-1-2@s">
            <label class="uk-form-label" for="form-stacked-text">متراژ</label>
            <div class="uk-form-controls">
              <input
                v-model.number="formData.size"
                name="size"
                class="uk-input uk-form-width-medium"
                id="form-stacked-text"
                type="number"
                placeholder="متراژ"
              />
            </div>
          </div>
          <div class="uk-width-1-2@s">
            <label class="uk-form-label" for="form-stacked-text">قیمت</label>
            <div class="uk-form-controls">
              <input
                v-model.number="formData.price"
                name="price"
                class="uk-input"
                id="form-stacked-text"
                type="number"
                placeholder="قیمت به تومان"
              />
            </div>
          </div>

          <div class="uk-width-1-1">
            <label class="uk-form-label" for="form-stacked-text">توضیحات</label>
            <div class="uk-form-controls">
              <textarea v-model="formData.description" name="description" class="uk-textarea"></textarea>
            </div>
          </div>
          <div class="uk-width-1-1">
            <div class="uk-grid uk-child-width-1-4@s uk-grid-small" uk-grid>
              <div class="uk-text-center" v-for="(pic, index) in thumbnails" :key="index">
                <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
                  <img :src="pic" width="200" height="200" />
                  <div class="uk-transition-fade uk-overlay-primary uk-position-cover">
                    <div class="uk-position-center">
                      <button class="uk-button uk-button-link" @click="removeImage(index)">
                        <span class uk-icon="icon: trash; ratio: 1"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="uk-text-center">
                <div class="uk-placeholder uk-text-center">
                  <div uk-form-custom>
                    <input type="file" name="pics" accept="image/jpeg" @change="uploadImage" multiple />
                    <span class="uk-icon-button" uk-icon="icon: cloud-upload; ratio: 1"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="uk-modal-footer uk-text-left">
        <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
        <button class="uk-button uk-button-primary" type="button" @click="createHome">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
// import HomeMutation from "~/apollo/mutations/home/create-home.gql";

export default {
  data() {
    return {
      formData: {
        title: "",
        description: "",
        price: 0,
        status: "draft",
        pics: [],
        category: 1,
        address: "",
        size: 0,
        propertyType: "",
        phone: 3424,
        neighborhood: "",
        builtDate: "",
        publish: false
      },
      thumbnails: []
    };
  },
  methods: {
    // createHome() {
    //   const data = this.formData
    //   console.log(this.formData);
    //   try {
    //     this.$apollo.mutate({
    //       mutation: HomeMutation,
    //       variables: {
    //           newHome: {
    //             data
    //           }
    //       },
    //       context: {
    //         hasUpload: true
    //       }
    //     }).then(console.log);
    //   } catch (e) {
    //     console.error(e);
    //   }
    // },
    createHome() {
      let form = this.$refs["adForm"];
      let formData = new FormData();
      let formElements = form.elements;
      let data = {};
      console.log(formElements);
      for (let i = 0; i < formElements.length; i++) {
        const currentElement = formElements[i];
        if (!["submit", "file"].includes(currentElement.type)) {
          data[currentElement.name] = currentElement.value;
          console.log(data)
        } else if (currentElement.type === "file") {
          if (currentElement.files.length === 1) {
            const file = currentElement.files[0];
            formData.append(`files.${currentElement.name}`, file, file.name);
          } else {
            for (let i = 0; i < currentElement.files.length; i++) {
              const file = currentElement.files[i];

              formData.append(`files.${currentElement.name}`, file, file.name);
            }
          }
        }
      }
      console.log(data);
      formData.append("data", JSON.stringify(data));
      this.$axios
        .post("http://localhost/api/homes", formData)
        .then(res => console.log(res));
    },
    uploadImage(e) {
      const files = e.target.files || e.dataTransfer.files;
      console.log(files);
      // if(!files.length)
      //   return
      this.createImage(files);
    },
    createImage(files) {
      const vm = this;
      for (var index = 0; index < files.length; index++) {
        vm.formData.pics.push(files[index]);
        var reader = new FileReader();
        reader.onload = function(event) {
          const imageUrl = event.target.result;
          vm.thumbnails.push(imageUrl);
        };
        reader.readAsDataURL(files[index]);
      }
    },
    removeImage(index) {
      this.pics.splice(index, 1);
    }
  }
};
</script>
