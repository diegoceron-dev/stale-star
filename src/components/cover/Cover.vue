<script setup lang="ts">
import type { Cover as CoverType } from '@/components/cover/cover.type'
import { cn } from '@/lib/utils'
import {
  ContextMenu,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

interface CoverProps {
  item: CoverType
  aspectRatio?: 'portrait' | 'square'
  width?: number
  height?: number
}

withDefaults(defineProps<CoverProps>(), {
  aspectRatio: 'portrait',
})
</script>

<template>
  <div :class="cn('space-y-3', $attrs.class ?? '')">
    <ContextMenu>
      <ContextMenuTrigger>
        <div class="overflow-hidden rounded-md">
          <img
            :src="item.cover"
            :alt="item.title"
            :width="width"
            :height="height"
            :class="cn(
              'h-auto w-auto object-cover transition-all hover:scale-105',
              aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square',
            )"
          >
        </div>
      </ContextMenuTrigger>
    </ContextMenu>
    <div class="space-y-1 text-sm">
      <h3 class="font-medium leading-none">
        {{ item.title }}
      </h3>
      <p class="text-xs text-muted-foreground">
        {{ item.subtitle }}
      </p>
    </div>
  </div>
</template>