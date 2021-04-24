<template>
  <div class="container mx-auto px-4">
    <h1 class="mt-4 ml-4 text-4xl font-bold">Articles</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
      <ui-article-card
        v-for="article in articles"
        :key="article.content.name"
        :title="article.content.title"
        :description="article.content.description"
        :author="article.content.author"
        :slug="`/articles/${article.slug}`"
        :date="article.content.date.toLocaleString()"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, route, error }) {
    const res = await app.$storyapi.get('cdn/stories', {
      starts_with: 'articles/',
      resolve_relations: 'author',
    })

    const articles = res.data.stories.map((story) => {
      story.content.date = new Date(story.content.date)
      return story
    })
    return { articles }
  },
}
</script>
