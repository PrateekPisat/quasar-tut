<template>
  <q-layout view="hHh lpR lfr">
    <q-header class="bg-primary text-white">
      <q-bar>
        My App
        <q-space />

        <q-btn flat size="small" :icon="mdiWindowMinimize">
          asd
        </q-btn>
      </q-bar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { mdiWindowMinimize } from '@quasar/extras/mdi-v7'

</script>
