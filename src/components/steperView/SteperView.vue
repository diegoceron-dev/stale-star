<script setup lang="ts">
import Destinations from "@/components/destinations/Destinations.vue";
import Rooms from "@/components/rooms/Rooms.vue";
import Payment from "@/components/payment/Payment.vue";
import { store as bookingStore } from "@/store/bookingStore";
import { Toaster } from "@/components/ui/sonner";
</script>

<template>
  <container class="flex flex-col p-4">
    <div v-if="bookingStore.step === 'destinations'">
      <Destinations />
    </div>
    <div v-if="bookingStore.step === 'rooms'">
      <Rooms />
    </div>
    <div v-if="bookingStore.step === 'payment'">
      <Payment />
    </div>
  </container>
  <Toaster />
</template>
