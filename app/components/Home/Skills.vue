<template>
  <div class="my-10 sm:my-14">
    <h2 class="mb-5 font-medium text-gray-800 dark:text-neutral-200">
      Skills
    </h2>

    <!-- List -->
    <div class="space-y-3">
      <dl
        v-for="skill in skills"
        :key="skill.title"
        class="flex flex-col sm:flex-row gap-1"
      >
        <dt class="min-w-40">
          <span class="block text-sm text-gray-500 dark:text-neutral-500">
            {{ skill.title }}
          </span>
        </dt>
        <dd>
          <ul>
            <li
              v-for="content in skill.content"
              :key="content.label"
              class="me-1 [&:not(:last-child)]:after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200"
            >
              <UIcon
                v-if="content.icon"
                :name="content.icon"
                class="mr-1"
              />
              {{ content.label }}
            </li>
          </ul>
        </dd>
      </dl>
    </div>
    <!-- End List -->
  </div>
</template>

<script setup lang="ts">
const skills = [
  {
    title: 'Design Tools',
    content: [
      { icon: 'i-simple-icons-figma', label: 'Figma' },
      { icon: 'i-simple-icons-sketch', label: 'Sketch' },
      { icon: 'i-simple-icons-adobe', label: 'Adobe CC' },
    ],
  },
  {
    title: 'Development',
    content: [
      { icon: 'i-simple-icons-nuxtdotjs', label: 'Nuxt' },
      { icon: 'i-simple-icons-vuedotjs', label: 'Vue' },
      { icon: 'i-simple-icons-html5', label: 'HTML' },
      { icon: 'i-simple-icons-css3', label: 'CSS' },
      { icon: 'i-simple-icons-tailwindcss', label: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Collaboration',
    content: [
      { icon: 'i-simple-icons-notion', label: 'Notion' },
      { icon: 'i-simple-icons-jira', label: 'Jira' },
      { icon: 'i-simple-icons-slack', label: 'Slack' },
    ],
  },
  {
    title: 'Design Expertise',
    content: [
      { label: 'UI/UX Design' },
      { label: 'Design Systems' },
      { label: 'Custom Illustrations' },
      { label: 'Responsive Design' },
    ],
  },
  {
    title: 'Soft Skills',
    content: [
      { label: 'Strong communication' },
      { label: 'Problem-solving' },
      { label: 'Attention to detail' },
      { label: 'Time management' },
    ],
  },
]
</script>
