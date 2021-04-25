<template>
  <div class="container px-4 mx-auto mt-4">
    <header>
      <h2 class="text-4xl">{{ article.content.title }}</h2>
      <div class="flex items-center mt-6">
        <img
          class="w-20 border-4 rounded-full border-main hover:border-purple-400"
          :src="author.content.Avatar.filename"
          :alt="author.content.name"
        />
        <div class="ml-6">
          <p class="text-xl font-bold">{{ author.name }}</p>
          <p class="mt-1 text-sm">
            {{ article.content.date.toLocaleDateString() }}
          </p>
        </div>
      </div>
    </header>
    <div class="mt-4">
      <nuxt-link
        v-for="tag in article.tag_list"
        :key="tag"
        :to="`/topics/${tagSlug(tag)}`"
        class="px-2 py-1 text-sm text-white bg-purple-500 rounded-full text-uppercase"
        >{{ tag }}</nuxt-link
      >
    </div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="mt-8 prose" v-html="$md.render(article.content.content)" />
    <!-- <div class="mt-8 prose">{{ article.content.content }}</div> -->
  </div>
</template>
<script>
import kebabCase from 'lodash.kebabcase'
import { createSEOMeta } from '../utils/seo'
export default {
  async asyncData({ app, route, error }) {
    const slug = route.params.slug
    const res = await app.$storyapi.get('cdn/stories', {
      starts_with: 'articles/',
      by_slugs: `*/${slug}`,
      resolve_relations: 'author',
    })
    const [article] = res.data.stories
    if (!article) return error(`Article with slug ${slug} not found`)
    article.content.date = new Date(article.content.date)
    return { article, author: article.content.author }
  },
  head() {
    const url = this.article.slug
    const { title, description, asset } = this.article.content
    return {
      title,
      meta: createSEOMeta({ description, image: asset.filename, url }),
    }
  },
  methods: {
    tagSlug(tag) {
      return kebabCase(tag)
    },
  },
}
</script>
