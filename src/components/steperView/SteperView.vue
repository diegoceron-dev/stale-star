<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { step } from "@/store/booking";
import Destinations from "@/components/destinations/Destinations.vue";
import Rooms from "@/components/rooms/Rooms.vue";
import Payment from "@/components/payment/Payment.vue";

const stepView = useStore(step);
</script>

<template>
  <container class="flex flex-col p-4">
    <div v-if="stepView === 'destinations'">
      <Destinations />
    </div>
    <div v-if="stepView === 'rooms'">
      <Rooms />
    </div>
    <div v-if="stepView === 'payment'">
      <Payment />
    </div>
  </container>
</template>
