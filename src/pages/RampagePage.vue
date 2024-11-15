<template>
  <q-page>
    <q-btn label="Show Dialog" @click="showDialog = !showDialog"></q-btn>
    <q-knob v-model="progress" size="200px" :min="20" :max="90" center-color="cyan-4" color="cyan-9"
      track-color="cyan-2" show-value :indeterminate="showDialog">
      <q-chip :label="progress" color="cyan-9" text-color="green">

      </q-chip>
    </q-knob>
  </q-page>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const showDialog = ref(false)
const progress = ref(50)
</script>
