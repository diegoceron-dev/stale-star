<script setup lang="ts">
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet";
import Button from "@/components/ui/button/Button.vue";
import { ref } from "vue";
import ShoppingCar from "@/components/shoppingCar/ShoppingCar.vue";
import { store as shoppingCarStore } from "@/store/shoppingCarStore";

const showProfileOptions = ref(false);

const clickProfile = () => {
  showProfileOptions.value = !showProfileOptions.value;
};

const shoppingCarHandle = (value: boolean) => {
  shoppingCarStore.showSheet = value
};
</script>

<template>
  <section>
    <div class="w-full">
      <nav class="bg-slate-500 h-22">
        <div class="mx-auto max-w-8xl py-4 px-8 sm:px-6 md:px-2 lg:px-12">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <!-- Mobile menu button-->
              <button
                type="button"
                class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
                <svg
                  class="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
                <svg
                  class="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div
              class="flex flex-1 items-start justify-center sm:items-stretch sm:justify-start"
            >
              <div class="flex flex-shrink-0 items-center">
                <img
                  class="h-6 md:h-8 lg:h-10"
                  src="https://www.palaceresorts.com/Palace_Company_Palace_Resorts_84b80cd70a.svg"
                  alt="The Palace Company"
                />
                <!--  <span class="pl-4 uppercase font-semibold"> The Palace Company</span> -->
              </div>
            </div>
            <div
              class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
            >
              <Sheet @update:open="shoppingCarHandle"  v-bind:open="shoppingCarStore.showSheet!">
                <SheetTrigger as-child>
                  <button
                    type="button"
                    class="relative rounded-full bg-slate-300 p-1 text-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span class="absolute -inset-1.5"></span>
                    <span class="sr-only">View Car</span>
                    <svg
                      class="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 510 510"
                      aria-hidden="true"
                    >
                      <path
                        d="M153,408c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S181.05,408,153,408z M0,0v51h51l91.8,193.8L107.1,306
  c-2.55,7.65-5.1,17.85-5.1,25.5c0,28.05,22.95,51,51,51h306v-51H163.2c-2.55,0-5.1-2.55-5.1-5.1v-2.551l22.95-43.35h188.7
  c20.4,0,35.7-10.2,43.35-25.5L504.9,89.25c5.1-5.1,5.1-7.65,5.1-12.75c0-15.3-10.2-25.5-25.5-25.5H107.1L84.15,0H0z M408,408
  c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S436.05,408,408,408z"
                      />
                    </svg>
                  </button>
                </SheetTrigger>
                  <ShoppingCar />
              </Sheet>

              <div class="pl-2">
                <button
                  type="button"
                  class="relative rounded-full bg-slate-300 p-1 text-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">View notifications</span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>
              </div>

              <!-- Profile dropdown -->
              <div class="relative ml-3">
                <div>
                  <button
                    @click="clickProfile"
                    type="button"
                    class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span class="absolute -inset-1.5"></span>
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                <div
                  v-if="showProfileOptions"
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <!-- Active: "bg-gray-100", Not Active: "" -->
                  <div class="h-full block text-sm text-gray-700">
                    <NavigationMenuItem>
                      <NuxtLink to="/docs" class="!h-full !min-h-full">
                        <NavigationMenuLink
                          :class="navigationMenuTriggerStyle()"
                          class="!h-full !min-h-full"
                        >
                          <span class="!text-sm">Your Profile</span>
                        </NavigationMenuLink>
                      </NuxtLink>
                    </NavigationMenuItem>
                  </div>
                  <div class="h-full block text-sm text-gray-700">
                    <NavigationMenuItem>
                      <NuxtLink to="/docs">
                        <NavigationMenuLink
                          :class="navigationMenuTriggerStyle()"
                        >
                          Settings
                        </NavigationMenuLink>
                      </NuxtLink>
                    </NavigationMenuItem>
                  </div>
                  <div class="h-full block text-sm text-gray-700">
                    <NavigationMenuItem>
                      <NuxtLink to="/docs">
                        <NavigationMenuLink
                          :class="navigationMenuTriggerStyle()"
                          class="h-full"
                        >
                          Sign out
                        </NavigationMenuLink>
                      </NuxtLink>
                    </NavigationMenuItem>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <!--             <a
              href="#"
              class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
              >Dashboard</a
            >
            <a
              href="#"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >Team</a
            > -->
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>
