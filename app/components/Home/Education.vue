<template>
  <div class="mt-10 sm:mt-14">
    <h2 class="mb-3 font-medium text-gray-800 dark:text-neutral-200">
      Education
    </h2>

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div
        v-for="university in education"
        :key="university.name"
        class="p-4 border border-gray-200 rounded-lg dark:border-neutral-700"
      >
        <img
          class="shrink-0 size-10 mb-3"
          :src="university.logo"
        >

        <h3 class="mb-1 text-xs text-gray-600 dark:text-neutral-400">
          {{ university.from }} - {{ university.to }}
        </h3>

        <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
          {{ university.degree }}
        </p>

        <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
          {{ university.name }}
        </p>
      </div>
    </div>
    <!-- End Grid -->
  </div>
</template>

<script setup lang="ts">
const education = [
  {
    logo: '/img/education/HongKong.jpg',
    from: '2015',
    to: '2020',
    degree: 'Master\'s degree in Computer Software Engineering',
    name: 'The University of Hong Kong',
  },
  {
    logo: '/img/education/Harvard.png',
    from: '2012',
    to: '2015',
    degree: 'Bachelor\'s degree in Computer Software Engineering',
    name: 'Harvard University',
  },
]
</script>
