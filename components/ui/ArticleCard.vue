<template>
  <div class="px-4 mx-auto transition duration-500 transform hover:scale-110">
    <nuxt-link
      class="block p-6 text-gray-800 rounded-lg shadow-lg hover:shadow-xl"
      :to="`/${slug}`"
    >
      <header class="text-2xl font-bold">{{ title }}</header>
      <p class="mt-4">{{ description }}</p>
      <footer class="flex items-center mt-6">
        <img
          class="w-20 border-4 rounded-full border-main hover:border-1 hover:border-purple-400"
          :src="author.content.Avatar.filename"
          :alt="author.name"
        />
        <div class="ml-6">
          <span class="text-xl font-bold">{{ author.name }}</span>
          <span class="mt-1 text-sm">{{ date }}</span>
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
