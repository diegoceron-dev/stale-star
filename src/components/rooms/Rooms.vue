<script setup lang="ts">
import CardRoom from "@/components/rooms/CardRoom.vue";
import type { Room as RoomType } from "@/components/rooms/room.type";
import { computed, onMounted } from "vue";
import Container from "@/components/ui/containter/Container.vue";
import { store as roomStore } from "@/store/roomsStore";
import { store as bookingStore } from "@/store/bookingStore";

onMounted(() => {
  bookingStore.title = "Choose your rooms"
  bookingStore.subtitle = "Check and compare the amenities, you will surely enjoy your stay."
});

const rooms = computed(() => {
  const sortedItems = [...roomStore.rooms];

  sortedItems.sort((a, b) => a.rank - b.rank);

  return sortedItems;
});
</script>

<template>
  <div
    class="items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-3"
  >
    <div
      class="col-span-2 grid items-start gap-6 lg:col-span-1"
      v-for="room in rooms"
      :key="room.title">
      <Container>
        <CardRoom :item="room" />
      </Container>
    </div>
  </div>
</template>
