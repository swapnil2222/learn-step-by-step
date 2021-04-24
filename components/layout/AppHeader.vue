<template>
  <nuxt-link :to="'/'">
    <header class="w-full py-2 bg-purple-500">
      <div class="container px-4 mx-auto">
        <div class="flex">
          <span class="text-2xl font-semibold text-white">Swapnil's Blog</span>
          <UiSearchBox
            class="flex-1 max-w-sm ml-12"
            :search="fetchSuggestions"
          />
        </div>
      </div>
    </header>
  </nuxt-link>
</template>
<script>
export default {
  methods: {
    async fetchSuggestions(searchInput) {
      const { data } = await this.$storyapi.get('cdn/stories/', {
        starts_with: 'articles/',
        resolve_relations: 'author',
        search_term: searchInput,
        per_page: 5,
      })
      return data.stories
    },
  },
}
</script>
