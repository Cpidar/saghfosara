<template>
  <items-grid
    :title="title"
    :page-size="this.pageSize"
    :items="homes"
    :has-more="hasMore"
    @fetch="showMore"
  />
</template>

<script>
import ItemsGrid from "~/components/items-grid.vue";
import CategoryQuery from "~/apollo/queries/category/category.gql";
import homesStatQuery from "~/apollo/queries/home/homes-stat.gql";

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
  apollo: {
    category: {
      prefetch: false,
      query: CategoryQuery,
      variables() {
        return {
          key: this.id,
          start: 0,
          limit: this.pageSize
        };
      },
      fetchPolicy: "cache-and-network"
    },
    homesConnection: {
      prefetch: false,
      query: homesStatQuery
    }
  },
  methods: {
    showMore(page) {
      const start = page * this.pageSize;
      // Fetch more data and transform the original result
      this.$apollo.queries.category.fetchMore({
        // New variables
        variables: {
          start,
          limit: this.pageSize
        },
        // Transform the previous result with new data
        updateQuery: (previousResult, { fetchMoreResult }) => {
          console.log(previousResult, fetchMoreResult);
          const newHomes = fetchMoreResult.category.homes;
          const homeCount = this.homesConnection.groupBy.category[
            this.category.id - 1
          ].connection.aggregate.count;
          this.hasMore = homeCount > start + 1;

          return {
            category: {
              ...previousResult.category,  
              homes: [...previousResult.category.homes, ...newHomes]
            }
          };
        }
      });
    }
  }
};
</script>
