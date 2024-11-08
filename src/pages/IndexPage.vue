<template>
  <q-page class="row flex-center q-gutter-x-lg">
    <q-table
      title="Friends"
      :rows="Object.values(friends)"
      :columns
    >
      <template #top-right>
        <q-btn
          :icon="mdiPlus"
          round
          color="primary"
          @click="showCreateUserDialog = true"
        />
      </template>
    </q-table>

    <CreateUserDialog
      v-model="showCreateUserDialog"
      v-model:form="form"
      @create="createUser()"
    />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { mdiPlus } from '@quasar/extras/mdi-v7'
import CreateUserDialog from 'src/components/CreateUserDialog.vue'

defineOptions({
  name: 'IndexPage'
})

const form = ref({
  name: '',
  email: '',
  age: 0,
  isHuman: false,
  operating_system: null
})

export interface Friend {
  name: string
  email: string
  id: string
}
const friends = useLocalStorage<{ [key: number]: Friend }>('friends', {
  1: { name: 'John Doe', email: 'prateekp@known.is', id: '1' },
  2: { name: 'John Doe', email: 'prateekp@known.is', id: '2' },
  3: { name: 'John Doe', email: 'prateekp@known.is', id: '3' },
  4: { name: 'John Doe', email: 'prateekp@known.is', id: '4' },
  5: { name: 'John Doe', email: 'prateekp@known.is', id: '5' }
})

const alignment: 'left' | 'right' | 'center' | undefined = 'left'
const showCreateUserDialog = ref(false)

const columns = [
  {
    name: 'id',
    label: 'ID',
    align: alignment,
    field: 'id'
  },
  {
    name: 'name',
    label: 'Name',
    align: alignment,
    field: 'name'
  },
  {
    name: 'email',
    label: 'Email',
    align: alignment,
    field: 'email'
  }
]

function createUser () {
  console.log('form', form.value)
  const id = Object.keys(friends.value).length + 1
  friends.value[id] = { ...form.value, id: id.toString() }
  showCreateUserDialog.value = false
}

</script>
