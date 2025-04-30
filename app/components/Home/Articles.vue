<template>
  <section class="my-10 sm:my-14">
    <h2 class="mb-5 font-medium text-neutral-800 dark:text-neutral-200">
      Latest Articles
    </h2>

    <!-- List -->
    <ul class="space-y-10">
      <li
        v-for="article in articles"
        :key="article.title"
        class="group hover:ring-0"
      >
        <NuxtLink to="#">
          <h5 class="font-medium text-sm text-neutral-800 dark:text-neutral-200 hover:underline hover:underline-offset-4">
            {{ article.title }}
          </h5>
        </NuxtLink>
        <time class="mb-2 text-xs text-neutral-600 dark:text-neutral-600">
          {{ article.date }}
        </time>
        <p class="my-1 text-sm text-neutral-500 dark:text-neutral-500">
          {{ article.summary }}
        </p>

        <UButton
          size="xs"
          variant="link"
          class="px-0 gap-0"
          label="Continue reading"
          to="#"
        >
          <template #trailing>
            <UIcon
              name="i-lucide-arrow-right"
              class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
            />
          </template>
        </UButton>
      </li>
    </ul>
    <!-- End List -->
  </section>
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
