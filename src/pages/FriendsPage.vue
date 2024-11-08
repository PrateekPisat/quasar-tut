<template>
  <div>
    <pre>
      {{ friends }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { Friend } from './IndexPage.vue'

const friends = useLocalStorage<{ [key: number]: Friend }>('friends', {})
</script>
