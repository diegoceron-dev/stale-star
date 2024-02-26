import { reactive } from "vue";

interface BookingStore {
  brandSelected: string;
  resortSelected: string;
  step: string;
  title: string;
  subtitle: string;
  isOpen: boolean
}

export const store = reactive<BookingStore>({
  brandSelected: "",
  resortSelected: "",
  step: "destinations",
  title: "",
  subtitle: "",
  isOpen: true
});
