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
import { ref } from "vue";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/containter/Container.vue";
interface CardRoomProps {
  item: RoomType;
}

const props = withDefaults(defineProps<CardRoomProps>(), {});
</script>

<template>
  <div
    class="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-1 xl:col-span-1 xl:grid-cols-1"
  >
    <Container>
      <Card :class="cn('w-[380px]', $attrs.class ?? '')">
        <CardHeader class="bg-slate-400 text-white font-light">
          <CardTitle>{{ item.title }}</CardTitle>
        </CardHeader>
        <CardContent
          class="!pt-2 !pb-0 flex justify-center content-center align-bottom items-center space-x-4"
        >
          <Cover
            :key="item.title"
            :item="{ id: item.title, cover: item.cover }"
            class="!w-[180px] md:!w-[420px] !py-4"
            aspect-ratio="square"
          />
          <div class="flex flex-col space-y-4 pb-2">
            <div class="font-light">{{ item.description }}</div>
            <div class="flex flex-row space-x-4 items-center justify-end">
              <div>
                <span class="hidden line-through text-slate-700 font-light"
                  >$ {{ item.oldPrice }}</span
                >
                <span class="text-slate-700 font-light"
                  >Price: ${{ item.price }}</span
                >
              </div>

              <Button class="bg-sky-800/60 hover:bg-sky-700/80">Book it!</Button>
            </div>
          </div>
        </CardContent>
        <CardFooter
          class="bg-slate-400/20 text-dark font-extralight pt-4 flex flex-col justify-end items-end"
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
    </Container>
  </div>
</template>
