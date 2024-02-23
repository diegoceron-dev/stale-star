<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, defineEmits, computed } from "vue";
import type { Cover as CoverType } from "@/components/cover/cover.type";
import { cn } from "@/lib/utils";
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";

interface CoverProps {
  item: CoverType;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
  id?: string;
}

const props = withDefaults(defineProps<CoverProps>(), {
  aspectRatio: "portrait",
});

const emit = defineEmits();

const id = ref(props.id);

watch(id, (newValue, oldValue) => {
  emit("update:id", newValue);
});

const selectCover = () => {
  id.value = props.item.id;
  emit("update:id", props.item.id);
};

</script>

<template>
  <div :class="cn('space-y-3', $attrs.class ?? '')">
    <ContextMenu>
      <ContextMenuTrigger>
        <div class="overflow-hidden rounded-md">
          <img
            @click="selectCover"
            :id="item.id"
            :src="item.cover"
            :alt="item.title"
            :width="width"
            :height="height"
            :class="
              cn( 
                'h-auto w-auto object-cover transition-all hover:scale-104',
                aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square',
                props.id === item.id ? 'border-[6px] border-slate-500 hover:border-[8px] rounded-lg shadow-neon shadow-5xl shadow-cyan-700/90' : ''
              )
            "
          />
        </div>
      </ContextMenuTrigger>
    </ContextMenu>
    <div class="space-y-2 text-sm">
      <h3 class="text-base md:text-lg font-medium leading-none">
        {{ item.title }}
      </h3>
      <p class="text-sm md:text-base text-muted-foreground">
        {{ item.subtitle }}
      </p>
    </div>
  </div>
</template>

