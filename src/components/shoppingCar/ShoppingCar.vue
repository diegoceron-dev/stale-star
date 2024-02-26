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
import { ScrollArea } from "@/components/ui/scroll-area";
import { computed } from "vue";
import { store as bookingStore } from "@/store/bookingStore";
import { store as shoppingCarStore } from "@/store/shoppingCarStore";
import type { Room as RoomType } from "@/components/rooms/room.type";

const total = computed(() => {
  let amount = 0;

  shoppingCarStore.rooms.forEach((room) => {
    amount += room.price;
  });

  return amount;
});

const removeItem = (item: RoomType) => {
  const findItem = shoppingCarStore.rooms.findIndex((c) => c.id == item.id);

  if (findItem !== undefined) shoppingCarStore.rooms.splice(findItem, 1);
};
</script>
<template>
  <SheetContent side="right" class="w-[90%]">
    <SheetHeader>
      <SheetTitle>Booking in Progress</SheetTitle>
      <SheetDescription>
        Elevate Your Travel Experience with Our Premium Selections!
      </SheetDescription>
    </SheetHeader>

    <div class="pt-2">
      <div v-if="shoppingCarStore.rooms.length === 0" class="text-gray-500">
        Your cart is empty.
      </div>
      <div v-else>
        <div>
          <div
            v-for="product in shoppingCarStore.rooms"
            :key="product.id"
            class="flex items-start justify-between py-2 space-x-4 border-b"
          >
            <div>
              <Cover
                :key="product.id"
                :item="{ id: product.id, cover: product.covers.findLast(()=> true)!}"
                class="w-[48px] md:w-[64px]"
                aspect-ratio="square"
                :width="250"
                :height="230"
              />
            </div>
            <div class="flex-grow flex flex-col">
              <div class="font-medium text-lg flex flex-row justify-between">
                <div>{{ product.title }}</div>
                <div class="text-slate-700 font-extralight text-lg">
                  $ {{ product.price }}
                </div>
              </div>
              <div class="italic font-extralight pt-2">
                <Button
                  size="sm"
                  variant="outline"
                  @click="removeItem(product)"
                >
                  Remove item</Button
                >
              </div>
            </div>
          </div>

          <div
            class="flex justify-end items-end mt-2 text-slate-700 font-extralight text-lg"
          >
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
