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
import { resortSelected, step, title, subtitle } from "@/store/booking";
import { useStore } from "@nanostores/vue";
import { Loader2 } from "lucide-vue-next";
import { ChevronsUpDown } from "lucide-vue-next";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const allResortsList = useStore(allResorts);
const resortId = useStore(resortSelected);
const stepView = useStore(step);
const loading = ref(false);
const isOpen = ref(true);

const selectItem = (resortId: string) => {
  resortSelected.set(resortId);
};

const disableSearchRates = computed(() => {
  return String(resortId.value) === "";
});

const searchRates = () => {
  loading.value = !loading.value;
  step.set("rooms");

  setTimeout(() => {
    loading.value = !loading.value;
  }, 2000);

  console.log(step.value);
};
</script>

<template>
  <Collapsible v-model:open="isOpen" class="">
    <div class="flex items-center justify-between space-x-4 px-4 mt-2">
      <div class="w-full space-y-1">
        <h2 class="text-2xl font-semibold tracking-tight">
          {{ title.value }}
        </h2>
        <p class="text-sm text-muted-foreground">
         {{ subtitle .value}}
        </p>
      </div>
      <CollapsibleTrigger as-child>
        <Button variant="ghost" size="sm" class="w-9 p-0">
          <ChevronsUpDown class="h-4 w-4" />
          <span class="sr-only">Toggle</span>
        </Button>
      </CollapsibleTrigger>
    </div>
    <CollapsibleContent class="space-y-2">
      <div>
        <div
          class="flex flex-row space-x-4 items-end content-end justify-end pr-12 pt-4"
        >
          <div class="">
            <DateRange />
          </div>
          <div class="">
            <Select @update:modelValue="selectItem" :modelValue="resortId">
              <SelectTrigger>
                <SelectValue placeholder="Select a destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel
                    v-for="brands in allResortsList"
                    :key="brands.brand"
                  >
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
          <div class="">
            <Button
              class="content-center flex-auto h-full bg-slate-500"
              :disabled="disableSearchRates"
              @click="searchRates"
            >
              <div v-if="loading">
                <Loader2 class="w-4 h-4 mr-2 animate-spin" />
              </div>
              <div v-else>SEE RATES</div>
            </Button>
          </div>
        </div>
        <Separator class="my-4" />
      </div>
    </CollapsibleContent>
  </Collapsible>
</template>
