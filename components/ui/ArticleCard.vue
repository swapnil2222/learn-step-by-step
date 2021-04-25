<template>
  <div class="px-4 mx-auto transition duration-500 transform hover:scale-110">
    <nuxt-link
      class="block p-6 text-gray-800 border-2 border-transparent shadow-lg rounded-2xl hover:shadow-xxl hover:border-purple-500"
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
        <div class="ml-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 hover:text-purple-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
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
