import { reactive } from "vue";

interface BookingStore {
  brandSelected: string;
  resortSelected: string;
  step: string;
  title: string;
  subtitle: string;
}

export const store = reactive<BookingStore>({
  brandSelected: "",
  resortSelected: "",
  step: "destinations",
  title: "",
  subtitle: "",
});
