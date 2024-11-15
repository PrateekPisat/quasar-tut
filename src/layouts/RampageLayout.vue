<template>
  <q-layout view="hHh lpR lfr">
    <q-header class="bg-primary text-white">
      <q-bar>
        My App
        <q-space />

        <div class="q-gutter-x-sm">
          <q-btn flat size="sm" :icon="mdiWindowMinimize" />
          <q-btn flat size="sm" :icon="mdiWindowMaximize" />
          <q-btn flat size="sm" :icon="mdiClose" />
        </div>
      </q-bar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import { mdiClose, mdiWindowMaximize, mdiWindowMinimize } from '@quasar/extras/mdi-v7'
</script>
