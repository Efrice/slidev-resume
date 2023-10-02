<script setup lang="ts">
type Experience = {
  time: string[]
  company: string
  role: string
}

defineProps<{
  experiences: Experience[]
}>()
</script>

<template>
  <div class="mt-6">
    <h2 class="text-l mb-2 font-bold">Experience</h2>
    <div>
      <div class="w-full flex flex-col mb-1">
        <div v-for="item in experiences" class="py-1 my-0">
          <span v-if="/[0-9\.]/.test(item.time[1])" class="mr-5 hack">
            {{ item.time[0] }} ~ {{ item.time[1] }}
          </span>
          <span v-else class="mr-5 hack">
            {{ item.time[0] }} ~
            <span class="mr-10 song">{{ item.time[1] }}</span>
          </span>
          <span class="mr-15">{{ item.company }}</span>
          <span class="mr-15">{{ item.role }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
