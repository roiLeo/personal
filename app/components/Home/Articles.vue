<template>
  <div class="my-10 sm:my-14">
    <h2 class="mb-5 font-medium text-gray-800 dark:text-neutral-200">
      Articles
    </h2>

    <!-- List -->
    <ul class="space-y-10">
      <li
        v-for="article in articles"
        :key="article.title"
      >
        <NuxtLink to="#">
          <h5 class="font-medium text-sm text-gray-800 dark:text-neutral-200 hover:underline hover:underline-offset-4">
            {{ article.title }}
          </h5>
        </NuxtLink>
        <time class="mb-2 text-xs text-gray-600 dark:text-neutral-600">
          {{ article.date }}
        </time>
        <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
          {{ article.summary }}
        </p>
        <p class="mt-1">
          <a
            class="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
            href="#"
          >
            Continue reading
          </a>
        </p>
      </li>
    </ul>
    <!-- End List -->
  </div>
</template>

<script lang="ts" setup>
const articles = [
  {
    date: '2024',
    title: 'The complete guide to OKRs',
    summary: 'How to make objectives and key results work for your company.',
  },
  {
    date: '2024',
    title: 'Enhancement in Customer Engagement',
    summary: 'With the aim of optimizing customer interactions and boosting brand loyalty, the team at Preline leveraged Mailchimp\'s powerful tools and expertise to deliver exceptional results.',
  },
  {
    date: '2024',
    title: 'How Google Assistant now helps you record stories for kids',
    summary: 'Google is constantly updating its consumer AI, Google Assistant, with new features.',
  },
]
</script>
