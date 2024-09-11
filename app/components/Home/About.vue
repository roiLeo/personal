<template>
  <div class="mt-8">
    <p class="text-sm text-gray-600 dark:text-neutral-400">
      I am a seasoned graphic designer with over 14 years of experience in creating visually appealing and user-centric designs. My expertise spans across UI design, design systems, and custom illustrations, helping clients bring their digital visions to life.
    </p>

    <p class="mt-3 text-sm text-gray-600 dark:text-neutral-400">
      Currently, I work remotely for Notion, where I design template UIs, convert them into HTML and CSS, and provide comprehensive support to our users. I am passionate about crafting elegant and functional designs that enhance user experiences.
    </p>

    <ul class="mt-5 flex flex-col gap-y-3">
      <li
        v-for="link in links"
        :key="link.label"
        class="flex items-center gap-x-2.5"
      >
        <UIcon :name="link.icon" />
        <a
          class="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
          :href="link.to"
        > {{ link.label }} </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const links = [
  { icon: 'i-heroicons-envelope', to: 'mailto:jeandoe@about.me', label: 'jeandoe@about.me' },
  { icon: 'i-simple-icons-linkedin', to: 'https://www.linkedin.com/', label: 'Jean Michel Doe' },
  { icon: 'i-simple-icons-github', to: 'https://github.com/roiLeo', label: 'roiLeo' },
]
</script>
