<template>
<div>
  <div id="template-oHp7Wns_#0-0-0-0" class="uk-position-absolute uk-width-1-1 uk-text-left" uk-parallax="y: 0,-9vh; easing: 0.5;" style="right: 33vw; top: 20vh; transform: translateY(0vh);">
        <img class="el-image" alt="" target="!*" src="/resources-hero-left.svg">    
    
</div>
<div id="template-oHp7Wns_#0-0-0-1" class="uk-position-absolute uk-width-1-1 uk-text-right" uk-parallax="y: 4vh,-10vh; easing: 0.5;" style="right: -30vw; transform: translateY(4vh);">
        <img class="el-image" alt="" target="!*" src="/resources-hero-right.svg">    
    
</div>
  <items-grid
    :title="title"
    :page-size="this.pageSize"
    :items="homes"
    :has-more="hasMore"
  />
</div>
</template>

<script>
import ItemsGrid from "~/components/items-grid.vue";
// import CategoryQuery from "~/apollo/queries/category/category.gql";
// import homesStatQuery from "~/apollo/queries/home/homes-stat.gql";

export default {
  components: {
    ItemsGrid
  },
  data() {
    return {
      id: this.$route.params.id,
      category: { name: "", homes: [] },
      pageSize: 1,
      hasMore: true
    };
  },
  computed: {
    title() {
      return this.category.name;
    },
    homes() {
      return this.category.homes;
    }
  },
  // apollo: {
  //   category: {
  //     prefetch: false,
  //     query: CategoryQuery,
  //     variables() {
  //       return {
  //         key: this.id,
  //         start: 0,
  //         limit: this.pageSize
  //       };
  //     },
  //     fetchPolicy: "cache-and-network"
  //   },
  //   homesConnection: {
  //     prefetch: false,
  //     query: homesStatQuery
  //   }
  // },
  methods: {
    // showMore(page) {
    //   const start = page * this.pageSize;
    //   // Fetch more data and transform the original result
    //   this.$apollo.queries.category.fetchMore({
    //     // New variables
    //     variables: {
    //       start,
    //       limit: this.pageSize
    //     },
    //     // Transform the previous result with new data
    //     updateQuery: (previousResult, { fetchMoreResult }) => {
    //       console.log(previousResult, fetchMoreResult);
    //       const newHomes = fetchMoreResult.category.homes;
    //       const homeCount = this.homesConnection.groupBy.category[
    //         this.category.id - 1
    //       ].connection.aggregate.count;
    //       this.hasMore = homeCount > start + 1;

    //       return {
    //         category: {
    //           ...previousResult.category,  
    //           homes: [...previousResult.category.homes, ...newHomes]
    //         }
    //       };
    //     }
    //   });
    // }
  }
};
</script>
