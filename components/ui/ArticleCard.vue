<template>
  <div class="container mx-auto px-4">
    <nuxt-link
      class="block text-gray-800 rounded-lg shadow-lg p-6"
      :to="`/${slug}`"
    >
      <header class="text-2xl font-bold">{{ title }}</header>
      <p class="mt-4">{{ description }}</p>
      <footer class="flex items-center mt-6">
        <img
          class="w-20 rounded-full border-4 border-main"
          :src="author.content.Avatar.filename"
          :alt="author.name"
        />
        <div class="ml-6">
          <span class="text-xl font-bold">{{ author.name }}</span>
          <span class="text-sm mt-1">{{ date }}</span>
        </div>
      </footer>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    slug: String,
    description: String,
    author: Object,
    date: String,
  },
}
</script>

<style></style>
