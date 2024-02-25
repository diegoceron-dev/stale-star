import { atom } from "nanostores";
import type { Room as RoomType } from "@/components/rooms/room.type";

export const showSheet = atom(false)
export const rooms = atom<Array<RoomType>>([])
