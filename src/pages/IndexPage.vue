<template>
  <q-page class="row q-col-gutter-lg">
    <div class="col-xs-12 col-sm-8 col-md-8">
      <h1 class="text-3xl font-bold">
        Hello world!
      </h1>

      <q-table
        :title="$t('friends.tableTitle')"
        :rows="Object.values(friends)"
        :columns
        class="bg-brand"
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
    </div>

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
import { Dialog, Loading, Notify } from 'quasar'

// const local = ref('en-US')

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
  Dialog.create({
    title: 'Are you sure',
    message: `is ${form.value.name} you friend`,
    position: 'top',
    ok: {
      label: 'Yes',
      color: 'positive'
    },
    cancel: {
      label: 'No',
      color: 'negative',
      flat: true
    }
  }).onOk(() => {
    Loading.show()

    setTimeout(() => {
      const id = Object.keys(friends.value).length + 1
      friends.value[id] = { ...form.value, id: id.toString() }
      showCreateUserDialog.value = false
      Notify.create({
        message: 'User created successfully',
        color: 'positive',
        position: 'top-right',
        icon: mdiPlus
      })
      Loading.hide()
    }, 1000)
  }).onCancel(() => {
    showCreateUserDialog.value = false
  })
}

</script>
<style lang="scss">
.mobile .some-card{
  background-color: grey;
}
</style>
