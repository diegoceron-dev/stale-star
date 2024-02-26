import { reactive } from "vue";
import type { Room as RoomType } from "@/components/rooms/room.type";

interface DestinationsStore {
    showSheet: boolean
    rooms: Array<RoomType>
}

export const store = reactive<DestinationsStore>({
    showSheet: false,
    rooms: []
});
