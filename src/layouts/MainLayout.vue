<template>
  <q-layout view="hHh lpR lfr">
    <q-header
      elevated
      class="bg-primary text-white"
    >
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          :icon="mdiMenu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar Tutorial
        </q-toolbar-title>

        <q-btn
          round
          flat
          :icon="mdiLogout"
          :loading="store.loggingOut"
          @click="store.logout()"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      side="left"
      bordered
    >
      <q-list>
        <q-item
          exact
          :to="{name: 'home'}"
        >
          <q-item-section>
            Home
          </q-item-section>
        </q-item>
        <q-item
          exact
          :to="{name: 'friends'}"
        >
          <q-item-section>
            Friends
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { mdiMenu, mdiLogout } from '@quasar/extras/mdi-v7'
import { useMcell } from 'src/stores/useMcell'

const leftDrawerOpen = ref(false)
function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const store = useMcell()
</script>
