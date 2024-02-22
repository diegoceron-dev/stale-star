<script setup lang="ts">
import { ref } from "vue";
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
import Destinations from "@/components/destinations/Destinations.vue";
import Button from "@/components/ui/button/Button.vue";
import { allResorts } from "@/store/destinations";
import { brandSelected, resortSelected } from "@/store/booking";
import { useStore } from "@nanostores/vue";

const allResortsList = useStore(allResorts);

const selectItem = (brandId: string, resortId: string) => {
  brandSelected.set(brandId);
  resortSelected.set(resortId);
};
</script>

<template>
  <div>
    <div
      class="flex flex-col md:flex-row items-center justify-between content-center p-4 space-y-4"
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
        <Select :value="resortSelected.value">
          <SelectTrigger>
            <SelectValue placeholder="Select a destination" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel v-for="brands in allResortsList" :key="brands.brand">
                {{ brands.brand }}
                <SelectItem
                  @click="selectItem(brands.brandId, resort.id)"
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

        value {{ resortSelected.value }}
      </div>

      <div class="w-full flex space md:pl-8">
        <Button class="h-full bg-slate-500 flex-auto content-center"
          >SEE RATES</Button
        >
      </div>
    </div>

    <Separator class="my-4" />

    <Destinations />
  </div>
</template>
