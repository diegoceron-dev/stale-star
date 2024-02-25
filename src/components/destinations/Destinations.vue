<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from "vue";
import Cover from "@/components/cover/Cover.vue";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { allInclusive, europeanPlan } from "@/store/destinations";
import { useStore } from "@nanostores/vue";
import { resortSelected, title, subtitle } from "@/store/booking";

const allInclusiveList = useStore(allInclusive);
const europeanPlanList = useStore(europeanPlan);
const resortId = useStore(resortSelected)

onMounted(() => {
  title.set('Choose your destination')
  subtitle.set('Get to know all our destinations and be surprised.')
});

const handleIdUpdate = (newId: string) => {
  resortSelected.set(newId)
}
</script>

<template>  
  <div>
    <div class="space-y-1">
      <h3
        class="flex items-center justify-between content-center py-8 px-16 text-1xl font-semibold tracking-tight"
      >
        All Inclusive Resorts
      </h3>
    </div>
    <div class="relative flex items-center justify-center content-center">
      <ScrollArea class="rounded-md w-[100%] md:w-[90%] whitespace-nowrap">
        <div class="flex space-x-10 pb-4">
          <Cover
            v-for="cover in allInclusiveList"
            :key="cover.title"
            :item="cover"
            class="w-[130px] md:w-[260px]"
            aspect-ratio="square"
            :width="250"
            :height="230"
            :id="resortId"
            @update:id="handleIdUpdate"
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
      <ScrollArea class="rounded-md w-[100%] md:w-[90%] whitespace-nowrap">
        <div class="flex space-x-10 pb-4">
          <Cover
            v-for="cover in europeanPlanList"
            :key="cover.title"
            :item="cover"
            class="w-[130px] md:w-[260px]"
            aspect-ratio="square"
            :width="250"
            :height="230"
            :id="resortId"
            @update:id="handleIdUpdate"
          />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  </div>
</template>
