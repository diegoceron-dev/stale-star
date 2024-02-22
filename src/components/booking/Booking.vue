<script setup lang="ts">
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
} from '@/components/ui/select'
import Destinations from '@/components/destinations/Destinations.vue'
import Button from '@/components/ui/button/Button.vue'

</script>

<template>
  <div>
    <div class="flex flex-col md:flex-row items-center justify-between content-center py-12 px-16">
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
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a destination" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple"> Apple </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      
      <div class="w-full flex space md:pl-8">
        <Button class="h-full bg-slate-500  flex-auto content-center ">SEE RATES</Button>
      </div>
    </div>

    <Separator class="my-4" />

    <Destinations />

  </div>
</template>
