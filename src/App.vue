<template>
  <router-view v-if="store.loggedIn" />
  <div
    v-else
    class="flex flex-center"
  >
    <q-btn
      :icon="mdiMicrosoft"
      color="blue"
      :loading="store.loggingIn"
      @click="store.login()"
    >
      Login In
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { mdiMicrosoft } from '@quasar/extras/mdi-v7'
import { useMcell } from './stores/useMcell'

defineOptions({
  name: 'App'
})

const store = useMcell()

</script>
