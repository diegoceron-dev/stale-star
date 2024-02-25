<script setup lang="ts">
import { Button } from "@/components/ui/button";
import Cover from "@/components/cover/Cover.vue";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { showSheet, rooms } from "@/store/shoppingCar";
import ShoppingCar from "@/components/shoppingCar/ShoppingCar.vue";
import { useStore } from "@nanostores/vue";
import type { Room as RoomType } from "@/components/rooms/room.type";
import { ScrollArea } from "@/components/ui/scroll-area";
import { computed } from "vue";

const roomList = useStore(rooms);

const increment = (product: RoomType) => {
  console.log(product);
};

const decrement = (product: RoomType) => {
  console.log(product);
};

const total = computed(() => {
  let amount = 0;

  rooms.get().forEach((room) => {
    amount += room.price;
  });

  return amount;
});
</script>
<template>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>Booking in Progress</SheetTitle>
      <SheetDescription>
        Elevate Your Travel Experience with Our Premium Selections!
      </SheetDescription>
    </SheetHeader>

    <div class="pt-2">
      <div v-if="roomList.length === 0" class="text-gray-500">
        Your cart is empty.
      </div>
      <div v-else>
        <div class="p-4">
          <div
            v-for="product in roomList"
            :key="product.id"
            class="flex items-start justify-between py-2 space-x-4 border-b"
          >
            <div>
              <Cover
                :key="product.id"
                :item="{ id: product.id, cover: product.covers.findLast(()=> true)!}"
                class="w-[48px] md:w-[96px]"
                aspect-ratio="square"
                :width="250"
                :height="230"
              />
            </div>
            <div class="flex-grow flex flex-col">
              <div class="font-medium text-lg flex flex-row justify-between">
                <div>{{ product.title }}</div>
                <div class="text-slate-700 font-extralight text-lg">$ {{ product.price }}</div>
              </div>
              <div class="italic font-extralight pt-2">
                  <Button size="sm" variant="outline"> Remove item</Button>
                </div>
            </div>
          </div>

        <div class="flex justify-end items-end mt-2 text-slate-700 font-extralight text-lg">
          Total: ${{ total }}
        </div>

        </div>
      </div>
    </div>
    <SheetFooter class="pt-4">
      <SheetClose as-child>
        <Button class="bg-slate-400 hover:bg-slate-500" type="submit">
          Complete Reservation
        </Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</template>
