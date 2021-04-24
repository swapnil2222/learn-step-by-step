<template>
  <div class="container px-4 mx-auto">
    <h1 class="mt-4 ml-4 text-4xl font-bold">
      Found {{ topic.taggings_count }} on {{ topic.name }} articles
    </h1>
    <div class="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 lg:grid-cols-3">
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
import kebabCase from 'lodash.kebabcase'
export default {
  async asyncData({ app, params }) {
    const { data: tagsData } = await app.$storyapi.get('cdn/tags')
    console.log('tagsData', tagsData)
    const topic = tagsData.tags.find(
      (tag) => kebabCase(tag.name) === params.slug
    )
    // fetch articles
    const { data: articlesData } = await app.$storyapi.get('cdn/stories', {
      starts_with: 'articles/',
      with_tag: topic.name,
      resolve_relations: 'author',
    })
    const articles = articlesData.stories.map((story) => {
      story.content.data = new Date(story.content.data)
      return story
    })
    return { topic, articles }
  },
  head() {
    return `${this.topic.name} - Swapnils Blog`
  },
}
</script>
