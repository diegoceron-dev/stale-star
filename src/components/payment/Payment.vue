<script setup lang="ts">
import { onMounted } from "vue";
import { store as bookingStore } from "@/store/bookingStore";
import PaymentForm from "@/components/payment/PaymentForm.vue";
import GuestForm from "@/components/payment/GuestForm.vue";

onMounted(() => {
  bookingStore.title = "Information and payments";
  bookingStore.subtitle = "Complete your reservation and payment information";
  bookingStore.isOpen = false;
});
</script>
<template>
  <div
    class="items-start justify-center m-8"
  >
  <PaymentForm />
  </div>
</template>
