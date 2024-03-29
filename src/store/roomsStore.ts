import { reactive } from "vue";
import type { Room as RoomType } from "@/components/rooms/room.type";

interface RoomsStore {
  rooms: Array<RoomType>;
}

const rooms: RoomType[] = [
  {
    id: "1",
    title: "Luxurious Suite with Private Balcony",
    description:
      "With a private balcony offering breathtaking views of the surrounding landscape.",
    covers: [
      "https://s3.amazonaws.com/webfiles_palace/clever/booking_engine/2023-30-10-13-39-15-480090original_2023-30-10-13-39-15-4639042022-11-07-15-40-22-955750original-2022-11-07-15-40-22-932944Playacar-governor-02.webp",
      "https://s3.amazonaws.com/webfiles_palace/clever/booking_engine/2023-30-10-13-31-31-529510original_2023-30-10-13-31-31-5121882022-11-07-15-34-48-760144original-2022-11-07-15-34-48-733965plp-Room-SuperiorDeluxePartialOceanView.webp",
      "https://s3.amazonaws.com/webfiles_palace/clever/booking_engine/2023-30-10-13-31-31-529510original_2023-30-10-13-31-31-5121882022-11-07-15-34-48-760144original-2022-11-07-15-34-48-733965plp-Room-SuperiorDeluxePartialOceanView.webp",
    ],
    amenities:
      "Private balcony, flat-screen TV, minibar, luxury linens, and a marble bathroom with a rain showerhead.",
    avaibility: true,
    oldPrice: 5000,
    price: 4374,
    rank: 4,
  },
  {
    id: "2",
    title: "Cozy Mountain Cabin",
    description:
      "Escape to the mountains and unwind in this cozy cabin, surrounded by nature and tranquility.",
    covers: [
      "https://s3.amazonaws.com/webfiles_palace/clever/booking_engine/2023-30-10-13-31-31-529510original_2023-30-10-13-31-31-5121882022-11-07-15-34-48-760144original-2022-11-07-15-34-48-733965plp-Room-SuperiorDeluxePartialOceanView.webp",
      "https://s3.amazonaws.com/webfiles_palace/clever/booking_engine/2023-30-10-13-31-31-529510original_2023-30-10-13-31-31-5121882022-11-07-15-34-48-760144original-2022-11-07-15-34-48-733965plp-Room-SuperiorDeluxePartialOceanView.webp",
      "https://s3.amazonaws.com/webfiles_palace/clever/booking_engine/2023-30-10-13-31-31-529510original_2023-30-10-13-31-31-5121882022-11-07-15-34-48-760144original-2022-11-07-15-34-48-733965plp-Room-SuperiorDeluxePartialOceanView.webp",
    ],
    amenities:
      "Flat-screen TV, fireplace, fully equipped kitchen, and a private deck with mountain views.",
    avaibility: true,
    oldPrice: 6240,
    price: 4574,
    rank: 4.5,
  },
  {
    id: "3",
    title: "Beachfront Bungalow",
    description:
      "Wake up to the sound of the waves and enjoy stunning ocean views from your private beachfront bungalow.",
    covers: [
      "https://s3.amazonaws.com/webfiles_palace/clever/booking_engine/2023-30-10-13-33-29-667202original_2023-30-10-13-33-29-6514532022-11-07-15-39-44-661860original-2022-11-07-15-39-44-641035Playacar-deluxe-ocean-view-01.webp",
      "https://s3.amazonaws.com/webfiles_palace/clever/booking_engine/2023-30-10-13-31-31-529510original_2023-30-10-13-31-31-5121882022-11-07-15-34-48-760144original-2022-11-07-15-34-48-733965plp-Room-SuperiorDeluxePartialOceanView.webp",
      "https://s3.amazonaws.com/webfiles_palace/clever/booking_engine/2023-30-10-13-31-31-529510original_2023-30-10-13-31-31-5121882022-11-07-15-34-48-760144original-2022-11-07-15-34-48-733965plp-Room-SuperiorDeluxePartialOceanView.webp",
      "https://s3.amazonaws.com/webfiles_palace/clever/booking_engine/2023-30-10-13-31-31-529510original_2023-30-10-13-31-31-5121882022-11-07-15-34-48-760144original-2022-11-07-15-34-48-733965plp-Room-SuperiorDeluxePartialOceanView.webp",
    ],
    amenities:
      "Private beach access, flat-screen TV, fully equipped kitchen, and a private deck with ocean views.",
    avaibility: true,
    oldPrice: 5200,
    price: 5388,
    rank: 4.7,
  },
  {
    id: "4",
    title: "Cozy Mountain Cabin",
    description:
      "Escape to the mountains and unwind in this cozy cabin, surrounded by nature and tranquility.",
    covers: [
      "https://s3.amazonaws.com/webfiles_palace/clever/booking_engine/2023-30-10-13-33-29-667202original_2023-30-10-13-33-29-6514532022-11-07-15-39-44-661860original-2022-11-07-15-39-44-641035Playacar-deluxe-ocean-view-01.webp",
      "https://s3.amazonaws.com/webfiles_palace/clever/booking_engine/2023-30-10-13-31-31-529510original_2023-30-10-13-31-31-5121882022-11-07-15-34-48-760144original-2022-11-07-15-34-48-733965plp-Room-SuperiorDeluxePartialOceanView.webp",
    ],
    amenities:
      "Flat-screen TV, fireplace, fully equipped kitchen, and a private deck with mountain views.",
    avaibility: true,
    oldPrice: 6240,
    price: 4574,
    rank: 5,
  },
  {
    id: "5",
    title: "Beachfront Bungalow",
    description:
      "Wake up to the sound of the waves and enjoy stunning ocean views from your private beachfront bungalow.",
    covers: [
      "https://s3.amazonaws.com/webfiles_palace/clever/booking_engine/2023-30-10-13-33-29-667202original_2023-30-10-13-33-29-6514532022-11-07-15-39-44-661860original-2022-11-07-15-39-44-641035Playacar-deluxe-ocean-view-01.webp",

      "https://s3.amazonaws.com/webfiles_palace/clever/booking_engine/2023-30-10-13-33-29-667202original_2023-30-10-13-33-29-6514532022-11-07-15-39-44-661860original-2022-11-07-15-39-44-641035Playacar-deluxe-ocean-view-01.webp",
    ],
    amenities:
      "Private beach access, flat-screen TV, fully equipped kitchen, and a private deck with ocean views.",
    avaibility: true,
    oldPrice: 5200,
    price: 5388,
    rank: 3.5,
  },
  {
    id: "6",
    title: "Beachfront Bungalow",
    description:
      "Wake up to the sound of the waves and enjoy stunning ocean views from your private beachfront bungalow.",
    covers: [
      "https://s3.amazonaws.com/webfiles_palace/clever/booking_engine/2023-30-10-13-33-29-667202original_2023-30-10-13-33-29-6514532022-11-07-15-39-44-661860original-2022-11-07-15-39-44-641035Playacar-deluxe-ocean-view-01.webp",

      "https://s3.amazonaws.com/webfiles_palace/clever/booking_engine/2023-30-10-13-33-29-667202original_2023-30-10-13-33-29-6514532022-11-07-15-39-44-661860original-2022-11-07-15-39-44-641035Playacar-deluxe-ocean-view-01.webp",
    ],
    amenities:
      "Private beach access, flat-screen TV, fully equipped kitchen, and a private deck with ocean views.",
    avaibility: true,
    oldPrice: 5200,
    price: 5388,
    rank: 3.5,
  },
  {
    id: "7",
    title: "Beachfront Bungalow",
    description:
      "Wake up to the sound of the waves and enjoy stunning ocean views from your private beachfront bungalow.",
    covers: [
      "https://s3.amazonaws.com/webfiles_palace/clever/booking_engine/2023-30-10-13-33-29-667202original_2023-30-10-13-33-29-6514532022-11-07-15-39-44-661860original-2022-11-07-15-39-44-641035Playacar-deluxe-ocean-view-01.webp",

      "https://s3.amazonaws.com/webfiles_palace/clever/booking_engine/2023-30-10-13-33-29-667202original_2023-30-10-13-33-29-6514532022-11-07-15-39-44-661860original-2022-11-07-15-39-44-641035Playacar-deluxe-ocean-view-01.webp",
    ],
    amenities:
      "Private beach access, flat-screen TV, fully equipped kitchen, and a private deck with ocean views.",
    avaibility: true,
    oldPrice: 5200,
    price: 5388,
    rank: 3.5,
  },
  {
    id: "8",
    title: "Beachfront Bungalow",
    description:
      "Wake up to the sound of the waves and enjoy stunning ocean views from your private beachfront bungalow.",
    covers: [
      "https://s3.amazonaws.com/webfiles_palace/clever/booking_engine/2023-30-10-13-33-29-667202original_2023-30-10-13-33-29-6514532022-11-07-15-39-44-661860original-2022-11-07-15-39-44-641035Playacar-deluxe-ocean-view-01.webp",

      "https://s3.amazonaws.com/webfiles_palace/clever/booking_engine/2023-30-10-13-33-29-667202original_2023-30-10-13-33-29-6514532022-11-07-15-39-44-661860original-2022-11-07-15-39-44-641035Playacar-deluxe-ocean-view-01.webp",
    ],
    amenities:
      "Private beach access, flat-screen TV, fully equipped kitchen, and a private deck with ocean views.",
    avaibility: true,
    oldPrice: 5200,
    price: 5388,
    rank: 3.5,
  },
];

export const store = reactive<RoomsStore>({
  rooms,
});

