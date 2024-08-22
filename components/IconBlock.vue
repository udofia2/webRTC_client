<template>
  <div
    class="max-w-[85rem] px-4 md:py-5 sm:px-6 lg:px-8 lg:py-7 mx-auto hidden sm:block"
  >
    <div class="grid sm:grid-cols-1 lg:grid-cols-3 items-center gap-12">
      <div v-for="block in IconBlocks" :key="block.title">
        <div
          class="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl"
        >
          <component
            :is="block.svgIcon"
            class="flex-shrink-0 w-6 h-6 text-blue-600 dark:text-blue-500"
          />
        </div>

        <div class="mt-5">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-black">
            {{ block.title }}
          </h3>
          <p class="mt-1 text-gray-700">
            {{ block.description }}
          </p>

          <a
            :href="block.linkUrl"
            v-if="block.external === 'true'"
            target="_blank"
          >
            <button class="mt-3 px-4 py-2 rounded bg-sky-500 text-white">
              {{ block.linkTitle }}
            </button>
          </a>
          <NuxtLink v-else :to="block.linkUrl">
            <button class="mt-3 px-4 py-2 rounded bg-sky-500 text-white">
              {{ block.linkTitle }}
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ToothVue from "./Icons/Tooth.vue";
import Videoplayer from "./Icons/Videoplayer.vue";

interface IconBlocks {
  svgIcon: any;
  title: string;
  description: string;
  linkTitle: string;
  linkUrl: string;
  external: string;
}

const IconBlocks: IconBlocks[] = [
  {
    svgIcon: Videoplayer,
    title: "VIDEOS",
    description:
      "Tune in for an engaging session where I provide direct and detailed answers, sharing insights, perspectives, and valuable information.",
    linkTitle: "Daily Guides",
    linkUrl: "https://instagram.com/toothtraffic9ja",
    external: "true",
  },
  {
    svgIcon: ToothVue,
    title: "FIND A DENTIST",
    description:
      "The search for the right dentist is simplified. Our platform allows you to browse through a diverse range of professionals. Whether you need a routine checkup, a cosmetic procedure, or a specialized care, we've got the perfect mach for you.",
    linkTitle: "Search Now",
    linkUrl: "/find-dentist",
    external: "false",
  },
  {
    svgIcon: "Podcast",
    title: "PODCAST",
    description:
      "Tune in for an engaging session where I provide direct and detailed answers, sharing insights, perspectives, and valuable information.",
    linkTitle: "Learn More",
    linkUrl: "/podcast",
    external: "false",
  },
];

</script>
