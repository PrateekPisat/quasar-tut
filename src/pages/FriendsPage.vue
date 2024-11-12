<template>
  <q-page>
    <q-list separator>
      <q-item
        v-for="friend in Object.values(friendsWithColors)"
        :key="friend.id"
        :style="{ borderLeft: `5px solid ${friend.color}` }"
      >
        <q-item-section avatar>
          <q-avatar>
            <q-img
              :src="friend.avatar"
              spinner-color="white"
              style="height: 140px; max-width: 150px"
            />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>
            {{ friend.name }}
          </q-item-label>
          <q-item-label caption>
            {{ friend.email }}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-chip
            :label="friend.operatingSystem.label"
            :icon="friend.operatingSystem.icon"
            :color="friend.operatingSystem.color"
            text-color="white"
          />
        </q-item-section>
        <q-item-section side>
          <q-icon
            :name="friend.isHuman ? mdiHuman: mdiDog"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { Friend } from './IndexPage.vue'
import { faker } from '@faker-js/faker'
import { computed } from 'vue'
import { mdiApple, mdiDog, mdiHuman, mdiLinux } from '@quasar/extras/mdi-v7'
import { mdiWindows } from '@quasar/extras/mdi-v4'

const friends = useLocalStorage<{ [key: number]: Friend }>('friends', {})

const friendsWithColors = computed(() => {
  return Object.values(friends.value).map(friend => {
    return {
      ...friend,
      color: faker.color.rgb(),
      avatar: faker.image.urlPicsumPhotos(),
      isHuman: faker.datatype.boolean(),
      operatingSystem: faker.helpers.arrayElement([
        {
          label: 'Windows',
          icon: mdiWindows,
          color: 'blue'
        },
        {
          label: 'Linux',
          icon: mdiLinux,
          color: 'green'
        },
        {
          label: 'Apple',
          icon: mdiApple,
          color: 'gray'
        }]
      )
    }
  })
})

</script>
