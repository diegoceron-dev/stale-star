<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
</script>

<template>
  <Card>
    <CardHeader class="rounded bg-slate-400 text-white font-light">
      <CardTitle>Guest Information</CardTitle>
      <CardDescription class="text-white">
        Fill in your information to complete your reservation.
      </CardDescription>
    </CardHeader>
    <CardContent class="pt-4 grid gap-6">
      <div class="grid grid-cols-2 gap-4">
        <div class="grid gap-2">
          <Label for="name">Full Name</Label>
          <Input id="name" placeholder="Your Name" />
        </div>
        <div class="grid gap-2">
          <Label for="number">Email</Label>
          <Input id="number" placeholder="" />
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div class="grid gap-2">
          <Label for="birthday">Birthday</Label>
          <Input id="birthday" />
        </div>
        <div class="grid gap-2">
          <Label for="phone">Phone</Label>
          <Input id="phone" />
        </div>
        <div class="grid gap-2">
          <Label for="address">Address</Label>
          <Input id="address" />
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div class="grid gap-2">
          <Label for="month">Country</Label>
          <Select>
            <SelectTrigger id="month">
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1"> USA </SelectItem>
              <SelectItem value="2"> UNITED KINGDOM </SelectItem>
              <SelectItem value="3"> MEXICO </SelectItem>
              <SelectItem value="4"> BRAZIL </SelectItem>
              <SelectItem value="5"> SPAIN </SelectItem>
              <SelectItem value="6"> ITALY </SelectItem>
              <SelectItem value="7"> CHINA </SelectItem>
              <SelectItem value="8"> GERMANY </SelectItem>
              <SelectItem value="9"> FRANCE </SelectItem>
              <SelectItem value="12"> OTHER </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div class="grid gap-2">
          <Label for="year">Zip Code</Label>
          <Input id="zip" />
        </div>
        <div class="grid gap-2">
          <Label for="address">Address</Label>
          <Input id="address" />
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <Button
        class="w-full bg-slate-400 hover:bg-slate-500 uppercase hover:text-white text-white"
      >
        Continue
      </Button>
    </CardFooter>
  </Card>
</template>
