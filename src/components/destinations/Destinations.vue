<script setup lang="ts">
import { ref, onMounted } from "vue";
import { type Cover as CoverType } from "@/components/cover/cover.type";
import Cover from "@/components/cover/Cover.vue";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { allInclusive, europeanPlan } from "@/store/destinations";
import { useStore } from "@nanostores/vue";

const allInclusiveList = useStore(allInclusive);
const europeanPlanList = useStore(europeanPlan);

onMounted(() => {});
</script>

<template>
  <div>
    <div class="space-y-1">
      <h3
        class="flex items-center justify-between content-center py-12 px-16 text-1xl font-semibold tracking-tight"
      >
        All Inclusive Resorts
      </h3>
    </div>
    <div class="relative flex items-center justify-center content-center">
      <ScrollArea class="rounded-md w-[80%] whitespace-nowrap">
        <div class="flex space-x-10 pb-4">
          <Cover
            v-for="cover in allInclusiveList"
            :key="cover.title"
            :item="cover"
            class="w-[180px]"
            aspect-ratio="square"
            :width="250"
            :height="230"
          />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>

    <div class="space-y-1 pt-2">
      <h3
        class="flex items-center justify-between content-center py-12 px-16 text-1xl font-semibold tracking-tight"
      >
        European Plan Resorts and Hotels
      </h3>
    </div>

    <div class="relative flex items-center justify-center content-center">
      <ScrollArea class="rounded-md w-[80%] whitespace-nowrap">
        <div class="flex space-x-10 pb-4">
          <Cover
            v-for="cover in europeanPlanList"
            :key="cover.title"
            :item="cover"
            class="w-[180px]"
            aspect-ratio="square"
            :width="250"
            :height="230"
          />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  </div>
</template>
