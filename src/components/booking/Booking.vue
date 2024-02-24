<script setup lang="ts">
import { computed, ref } from "vue";
import { Separator } from "@/components/ui/separator";
import DateRange from "@/components/dateRage/DateRange.vue";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Button from "@/components/ui/button/Button.vue";
import { allResorts } from "@/store/destinations";
import { brandSelected, resortSelected, step } from "@/store/booking";
import { useStore } from "@nanostores/vue";
import { Loader2 } from "lucide-vue-next";

const allResortsList = useStore(allResorts);
const resortId = useStore(resortSelected);
const stepView = useStore(step);
const loading = ref(false);

const selectItem = (resortId: string) => {
  resortSelected.set(resortId);
};

const disableSearchRates = computed(() => {
  return String(resortId.value) === "";
});

const searchRates = () => {
  loading.value = !loading.value;
  step.set('rooms')

  setTimeout(() => {
    loading.value = !loading.value;
  }, 2000);

  console.log(step.value)
};
</script>

<template>
  <div>
    <div
      class="flex flex-col items-center content-center justify-between p-4 space-y-4 md:flex-row"
    >
      <div class="w-full space-y-1">
        <h2 class="text-2xl font-semibold tracking-tight">
          Choose your destination
        </h2>
        <p class="text-sm text-muted-foreground">
          Get to know all our destinations and be surprised.
        </p>
      </div>

      <div class="w-full">
        <DateRange />
      </div>

      <div class="w-full">
        <Select @update:modelValue="selectItem" :modelValue="resortId">
          <SelectTrigger>
            <SelectValue placeholder="Select a destination" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel v-for="brands in allResortsList" :key="brands.brand">
                {{ brands.brand }}
                <SelectItem
                  class="font-extralight"
                  v-for="resort in brands.items"
                  :key="resort.id"
                  :value="resort.id"
                >
                  {{ resort.title }} {{ resort.subtitle }}
                </SelectItem>
              </SelectLabel>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div class="flex w-full space md:pl-8 md:pr-8">
        <Button
          class="content-center flex-auto h-full bg-slate-500"
          :disabled="disableSearchRates"
          @click="searchRates"
        >
          <div v-if="loading">
            <Loader2 class="w-4 h-4 mr-2 animate-spin" /> 
          </div>
          <div v-else> SEE RATES</div>
        </Button>
      </div>
    </div>

    <Separator class="my-4" />
  </div>
</template>
