<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Button from "@/components/ui/button/Button.vue";
import Cover from "@/components/cover/Cover.vue";
import type { Room as RoomType } from "@/components/rooms/room.type";
import Autoplay from "embla-carousel-autoplay";
import { store as shoppingCarStore } from "@/store/shoppingCarStore";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface CardRoomProps {
  item: RoomType;
}
const props = withDefaults(defineProps<CardRoomProps>(), {});

const bookIt = (room: RoomType) => {
  if (shoppingCarStore.rooms.length! <= 2) {
    shoppingCarStore.rooms.push(room);
    shoppingCarStore.showSheet = true;
  }
};
</script>

<template>
  <Card>
    <CardHeader class="rounded bg-slate-400 text-white font-light">
      <CardTitle>{{ item.title }}</CardTitle>
    </CardHeader>
    <CardContent class="grid gap-6 !pt-2 pb-4">
      <div class="flex items-center justify-center space-x-2">
        <Carousel
          class="w-full max-w-xs"
          :plugins="[
            Autoplay({
              delay: 5000,
            }),
          ]"
        >
          <CarouselContent>
            <CarouselItem v-for="cover in item.covers" :key="item.id">
              <Cover
                :key="item.title"
                :item="{ id: item.title, cover: cover }"
                aspect-ratio="square"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div class="flex items-center justify-between space-x-2">
        <div>
          <span class="font-light"> {{ item.description }} </span>
          <span
            class="font-light flex justify-end p-2 italic underline text-lg text-slate-600"
            >Rates from ${{ item.price }}</span
          >
        </div>
      </div>
      <div class="flex items-center justify-between space-x-2">
        <Button
          variant="outline"
          class="w-full bg-slate-400 hover:bg-slate-500 uppercase hover:text-white text-white"
          @click="bookIt(item)"
        >
          Book it!
        </Button>
      </div>
    </CardContent>
    <CardFooter
      class="bg-slate-400/20 text-dark font-extralight pt-4 flex flex-col justify-end items-end text-sm"
    >
      <div class="flex flex-col">Amenities: {{ item.amenities }}</div>
      <div class="flex flex-row justify-end pt-2">
        <div class="flex items-center space-x-1">
          <template v-for="starIndex in 5" :key="starIndex">
            <svg
              v-if="starIndex <= item.rank"
              class="w-5 h-5 text-yellow-500 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10 1l2.938 6.612H19l-5.932 4.74L15.346 19 10 15.325 4.654 19l1.278-6.648L1 7.612h5.063L10 1z"
              />
            </svg>
          </template>
        </div>
      </div>
    </CardFooter>
  </Card>
</template>
