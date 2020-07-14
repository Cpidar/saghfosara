<template>
  <div class="uk-padding-small">

  </div>
</template>

<script>
import HomeMutation from "~/apollo/mutations/home/create-home.gql";

export default {
  data() {
    return {
      formData: {
        title: "",
        description: "",
        price: "",
        status: "draft",
        pics: [],
        category: 1,
        address: "",
        size: 0,
        propertyType: "",
        phone: "",
        neighborhood: "",
        builtDate: 12,
        publish: false
      },
      thumbnails: []
    };
  },
  methods: {
    createHome() {
      this.$apollo.mutate({
        mutation: HomeMutation,
        variable: {
          data: this.formData
        }
      });
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
        vm.formData.pics.push(files[index])
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

<style scoped>
</style>
