<template>
  <div class="px-2 sm:px-6 lg:px-8 max-w-2xl mx-auto relative gap-6 flex flex-col min-h-screen">
    <DefaultNavbar />

    <UContainer class="w-full">
      <!-- PROFILE AVATAR -->
      <HomeProfile />

      <!-- ABOUT -->
      <HomeAbout />

      <!-- PROJECTS -->
      <HomeProjects />

      <!-- TESTIMONIALS -->
      <HomeTestimonials />

      <!-- SKILLS -->
      <HomeSkills />

      <!-- WORK EXPERIENCE -->
      <HomeExperience />

      <!-- EDUCATION -->
      <HomeEducation />

      <!-- ARTICLES -->
      <HomeArticles />

      <!-- SUBSCRIBE -->
      <SubscribeForm />
    </UContainer>

    <DefaultFooter />
  </div>
</template>
